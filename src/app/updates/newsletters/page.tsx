import type { Metadata } from "next";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
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
        lede="Season updates for sponsors, families, and the FIRST community."
      />

      {newsletterYears.map((group, index) => (
        <Section
          key={group.year}
          eyebrow={group.year}
          tone={index % 2 === 1 ? "surface" : "default"}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.issues.map((issue) => (
              <li key={issue.file}>
                <a
                  href={issue.file}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block overflow-hidden rounded-2xl border border-white/8 bg-surface shadow-card transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow"
                >
                  <span className="relative block aspect-3/4 overflow-hidden bg-surface-2">
                    <Image
                      src={issue.cover}
                      alt={`${issue.volume} cover`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-top transition duration-700 ease-out-expo group-hover:scale-[1.04]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
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
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
