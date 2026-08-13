import { NextResponse } from "next/server";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

/**
 * Accepts the contact form. There is no mail provider wired up yet, so
 * submissions are validated and acknowledged; connect an email service here.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { firstName, lastName, email, message } = payload;
  const emailLooksValid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!firstName?.trim() || !lastName?.trim() || !emailLooksValid || !message?.trim()) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
