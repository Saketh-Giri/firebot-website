import { site } from "@/content/site";

export function contactMailto(fields: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  const name = `${fields.firstName.trim()} ${fields.lastName.trim()}`.trim();
  const subject = `Website message from ${name || fields.email}`;
  const body = [
    fields.message.trim(),
    "",
    "—",
    `${name} <${fields.email.trim()}>`,
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
