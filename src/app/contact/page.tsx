import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SocialIcon } from "@/components/site/SocialIcon";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Firebots — tryouts, sponsorship, or demos.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact us"
        lede="Questions about tryouts, sponsorship, or a demonstration? We will connect you with the right person."
        brandMark
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-5">
            <Card interactive>
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
            </Card>

            <Card>
              <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                Address
              </h2>
              <p className="mt-4 flex items-start gap-3 leading-relaxed">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-muted" />
                {site.address}
              </p>
            </Card>

            <Card>
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
            </Card>
          </div>

          <Card className="p-8 md:p-10">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              Send opens a draft to {site.email} unless the team has connected an email service.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
