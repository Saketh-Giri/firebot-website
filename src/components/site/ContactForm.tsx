"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const empty: Fields = { firstName: "", lastName: "", email: "", message: "" };

const labels: Record<keyof Fields, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  message: "Message",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.firstName.trim()) next.firstName = "Please enter your first name.";
    if (!fields.lastName.trim()) next.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Please enter a valid email.";
    if (fields.message.trim().length < 10) next.message = "Please tell us a little more.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  };

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const fieldClass =
    "mt-2.5 w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-base outline-none transition duration-300 placeholder:text-dim hover:border-white/20 focus:border-ember-500/70 focus:bg-ink/80 focus:shadow-[0_0_0_4px_rgba(224,31,38,0.12)] aria-invalid:border-ember-500/60";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {(["firstName", "lastName"] as const).map((key) => (
          <div key={key}>
            <label htmlFor={key} className="text-sm font-medium">
              {labels[key]}
            </label>
            <input
              id={key}
              name={key}
              value={fields[key]}
              onChange={update(key)}
              aria-invalid={Boolean(errors[key])}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
              className={fieldClass}
            />
            {errors[key] && (
              <p id={`${key}-error`} className="mt-2 text-sm text-ember-300">
                {errors[key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-ember-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-ember-300">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </Button>
        <p aria-live="polite" className="text-sm text-muted">
          {status === "sent" && "Thanks for submitting!"}
          {status === "error" && "Something went wrong. Please email us instead."}
        </p>
      </div>
    </form>
  );
}
