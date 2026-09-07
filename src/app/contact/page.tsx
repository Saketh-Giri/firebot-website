import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SocialIcon } from "@/components/site/SocialIcon";
import { Glow } from "@/components/fx/Glow";
import { MagnetLines } from "@/components/fx/MagnetLines";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Firebots — tryouts, sponsorship, or demos.",
};

export default function ContactPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
        <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 -z-30 opacity-40" />
        <div
          aria-hidden
          className="animate-drift absolute -top-52 -right-32 -z-30 size-[38rem] rounded-full bg-ember-600/18 blur-[120px]"
        />
        <div className="container-page relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
                Contact us
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Questions about tryouts, sponsorship, or a demonstration? We will connect you with the
                right person.
              </p>
            </div>
            {/* A field of strokes that all point at the cursor. Decorative. */}
            <div className="hidden lg:block">
              <MagnetLines rows={8} columns={14} className="h-56 w-[26rem]" />
            </div>
          </div>
        </div>
      </header>

      <Section className="!pt-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-5">
            <Reveal>
              <Glow className="rounded-2xl border border-white/8 bg-surface p-7 shadow-card">
                <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                  Email
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 flex items-center gap-3 text-lg font-medium transition-colors hover:text-ember-300"
                >
                  <Mail aria-hidden className="size-5 shrink-0 text-muted" />
                  {site.email}
                </a>
              </Glow>
            </Reveal>

            <Reveal delay={0.06}>
              <Glow className="rounded-2xl border border-white/8 bg-surface p-7 shadow-card">
                <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                  Address
                </h2>
                <p className="mt-4 flex items-start gap-3 leading-relaxed">
                  <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-muted" />
                  {site.address}
                </p>
              </Glow>
            </Reveal>

            <Reveal delay={0.12}>
              <Glow className="rounded-2xl border border-white/8 bg-surface p-7 shadow-card">
                <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                  Social
                </h2>
                <ul className="mt-5 space-y-1.5">
                  {site.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-white/5"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted group-hover:border-ember-500/40 group-hover:text-ember-200">
                          <SocialIcon name={social.label} className="size-3.5" />
                        </span>
                        <span className="font-medium">{social.label}</span>
                        <span className="truncate text-dim">{social.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Glow>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Glow className="rounded-3xl border border-white/8 bg-surface p-8 shadow-card md:p-10">
              <h2 className="text-xl font-semibold">Send a message</h2>
              <p className="mt-2 text-sm text-muted">
                Send opens a draft to {site.email} unless the team has connected an email service.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Glow>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
