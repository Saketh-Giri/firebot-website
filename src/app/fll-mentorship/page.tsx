import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import { fll, fllTeams } from "@/content/outreach";

export const metadata: Metadata = {
  title: "FLL Mentorship",
  description: "Ten FLL teams founded, twelve mentored since 2015.",
};

export default function FllPage() {
  return (
    <>
      <PageHero
        eyebrow="FLL Mentorship"
        title="Coach the next builders."
        lede="Ten teams founded. Twelve mentored. Three qualifiers hosted."
        image={fll.images.photo}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <Prose paragraphs={[fll.intro]} />
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/95 p-8 shadow-lift">
            <Image
              src={fll.images.challenge}
              alt="FLL Challenge"
              width={160}
              height={160}
              className="h-28 w-auto object-contain"
            />
            <Image
              src={fll.images.explore}
              alt="FLL Explore"
              width={160}
              height={160}
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow={fll.historyHeading} heading="Since 2015." tone="surface">
        <Prose paragraphs={fll.history} className="max-w-3xl" />
      </Section>

      <Section eyebrow="Awards" heading="What our teams won.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fllTeams.map((team) => (
            <Card key={team.name} interactive className="flex flex-col">
              <h3 className="text-base font-semibold tracking-tight">{team.name}</h3>
              {team.awards.length > 0 ? (
                <ul className="mt-5 space-y-3 border-t border-white/8 pt-5">
                  {team.awards.map((award) => (
                    <li key={`${award.event}-${award.result}`}>
                      <p className="text-sm font-medium">{award.event}</p>
                      <p className="mt-1 text-sm text-muted">{award.result}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 border-t border-white/8 pt-5 text-sm text-dim">Mentored.</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Video series" heading="Built for the pandemic." tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Prose paragraphs={[fll.videoSeries]} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fll.videoSections.map((section, index) => (
                <li
                  key={section}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-ink/50 px-5 py-4"
                >
                  <span className="font-mono text-sm font-semibold text-ember-300 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{section}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/95 p-8 shadow-lift">
            <Image
              src={fll.images.support}
              alt="FLL Support"
              width={320}
              height={320}
              className="mx-auto h-auto w-full max-w-48 object-contain"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
