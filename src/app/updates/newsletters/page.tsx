import type { Metadata } from "next";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { TiltCard } from "@/components/fx/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { newsletterYears } from "@/content/updates/media";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "FHS Robotics Rewind, our season newsletter for sponsors, families, and the wider FIRST community.",
};

export default function NewslettersPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="FHS Robotics Rewind"
        lede="Season updates for sponsors, families, and the FIRST community. Issues on this site run through March 2022 — follow Instagram for newer recaps."
      >
        <ButtonLink
          href={site.socials.find((social) => social.label === "Instagram")?.href ?? "https://instagram.com/fremonthighrobotics"}
          variant="secondary"
          withArrow
        >
          Instagram
        </ButtonLink>
      </PageHero>

      {newsletterYears.map((group, index) => (
        <Section key={group.year} eyebrow={group.year} tone={index % 2 === 1 ? "surface" : "default"}>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {group.issues.map((issue, i) => (
              <li key={issue.file}>
                <Reveal delay={i * 0.08}>
                  <TiltCard maxTilt={10} scale={1.03}>
                    <a
                      href={issue.file}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block overflow-hidden rounded-2xl border border-white/8 bg-surface shadow-card transition duration-500 ease-out-expo hover:border-ember-500/40 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none"
                    >
                      <span className="relative block aspect-3/4 overflow-hidden bg-surface-2">
                        <Image
                          src={issue.cover}
                          alt={`${issue.volume} cover`}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                          className="object-cover object-top transition duration-700 ease-out-expo group-hover:scale-[1.03]"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <span
                          aria-hidden
                          className="absolute right-4 bottom-4 translate-y-2 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white uppercase opacity-0 backdrop-blur transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          Open PDF
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-4 border-t border-white/8 px-6 py-5">
                        <span className="min-w-0">
                          <span className="block font-semibold tracking-tight">{issue.volume}</span>
                          <span className="mt-1 block text-sm text-muted">{issue.date}</span>
                        </span>
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition duration-500 ease-out-expo group-hover:border-ember-500/50 group-hover:bg-ember-500 group-hover:text-white">
                          <FileDown aria-hidden className="size-4" />
                        </span>
                        <span className="sr-only">Read the PDF</span>
                      </span>
                    </a>
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
