import { NextResponse } from "next/server";
import { contactMailto } from "@/lib/mailto";
import { site } from "@/content/site";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  website?: string;
}

const emailLooksValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Validates the contact form. If RESEND_API_KEY is set, emails the team.
 * Otherwise the client opens a mailto: draft so the message still goes through.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; succeed silently.
  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!firstName || !lastName || !emailLooksValid(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  const mailto = contactMailto({ firstName, lastName, email, message });
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const from = process.env.RESEND_FROM ?? "Firebots Website <beth.t@example.com>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: email,
        subject: `Website message from ${firstName} ${lastName}`,
        text: `${message}\n\n—\n${firstName} ${lastName} <${email}>`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, mailto }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  }

  return NextResponse.json({ ok: true, delivered: false, mailto });
}
