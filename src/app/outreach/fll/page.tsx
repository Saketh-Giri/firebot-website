import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { previousEvents } from "@/content/outreach/events";
import { fll, fllTeams } from "@/content/outreach/fll";

export const metadata: Metadata = {
  title: "FLL Mentorship",
  description:
    "Since 2015 the Firebots have founded 10 FLL Challenge teams and mentored more than 12 FLL teams in the Sunnyvale area.",
};

export default function FllPage() {
  return (
    <>
      <PageHero
        eyebrow="FLL Mentorship"
        title="FIRST Lego League"
        lede={fll.lede}
        image={fll.images.photo}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {fll.pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-white/8 surface-panel p-6">
              <h2 className="text-lg font-semibold tracking-tight">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center rounded-2xl border border-white/10 bg-white/95 p-6 shadow-lift">
          <Image
            src={fll.images.challenge}
            alt="FLL Challenge"
            width={120}
            height={120}
            className="h-24 w-auto object-contain"
          />
          <Image
            src={fll.images.explore}
            alt="FLL Explore"
            width={120}
            height={120}
            className="h-24 w-auto object-contain"
          />
        </div>
      </Section>

      <Section eyebrow={fll.historyHeading} heading="Mentorship in Sunnyvale" tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-md text-xl leading-relaxed text-bright/90">{fll.history}</p>
          <Photo
            src={fll.images.history}
            alt="An FLL team the Firebots mentored"
            className="aspect-4/3 min-h-72 w-full"
          />
        </div>
      </Section>

      <Section eyebrow="Awards" heading="What our teams won">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fllTeams.map((team) => (
            <Card key={team.name} className="flex flex-col">
              <h3 className="text-sm font-semibold tracking-tight">{team.name}</h3>
              {team.awards.length > 0 ? (
                <ul className="mt-4 space-y-2 border-t border-white/8 pt-4">
                  {team.awards.map((award) => (
                    <li key={`${award.event}-${award.result}`} className="text-sm text-muted">
                      <span className="text-bright/80">{award.result}</span>
                      <span className="mt-0.5 block text-xs text-dim">{award.event}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 border-t border-white/8 pt-4 text-sm text-dim">Mentored</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Video series" heading="FLL support" tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">{fll.videoSeries}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fll.videoSections.map((section, index) => (
                <li
                  key={section}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-ink/50 px-4 py-3 text-sm font-medium"
                >
                  <span className="font-mono text-ember-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/95 p-8 shadow-lift">
            <Image
              src={fll.images.support}
              alt="FLL Support"
              width={280}
              height={280}
              className="mx-auto h-auto w-full max-w-40 object-contain"
            />
          </div>
        </div>
      </Section>

      <Section id="previous-events" eyebrow="Archive" heading="Previous events">
        <Gallery items={previousEvents} columns={2} />
      </Section>
    </>
  );
}
