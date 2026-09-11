import type { Metadata } from "next";
import Image from "next/image";
import { Glow } from "@/components/fx/Glow";
import { TiltCard } from "@/components/fx/TiltCard";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { previousEvents } from "@/content/outreach/events";
import { fll, fllTeams } from "@/content/outreach/fll";
import { imageSize } from "@/lib/image-size";

export const metadata: Metadata = {
  title: "FLL Mentorship",
  description:
    "Since 2015 the Firebots have founded 10 FLL Challenge teams and mentored more than 12 FLL teams in the Sunnyvale area.",
};

export default function FllPage() {
  const events = previousEvents.map((item) => ({ ...item, ...(imageSize(item.image) ?? {}) }));

  return (
    <>
      <PageHero
        eyebrow="FLL Mentorship"
        title="FIRST Lego League"
        lede={fll.lede}
        image={fll.images.photo}
      />

      <Section className="!py-12 md:!py-16">
        <div className="grid grid-cols-3 gap-6 border-y border-white/8 py-10">
          <Stat value="10" label="teams founded" bare />
          <Stat value="12+" label="teams mentored" bare />
          <Stat value="3" label="qualifiers hosted" bare />
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {fll.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Glow as="article" className="h-full rounded-2xl border border-white/8 bg-surface p-6 shadow-card">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-500/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-lg font-semibold tracking-tight">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
              </Glow>
            </Reveal>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {fll.divisions.map((division, i) => (
            <li key={division.name}>
              <Reveal
                delay={0.16 + i * 0.08}
                className="flex h-full items-center gap-5 rounded-2xl border border-white/8 bg-surface/60 p-4 pr-6 transition-colors duration-500 hover:border-white/15 sm:gap-6"
              >

                <span className="grid size-20 shrink-0 place-items-center rounded-xl bg-white p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                  <Image
                    src={division.image}
                    alt={division.name}
                    width={72}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-semibold tracking-tight text-bright">{division.name}</span>
                    <span className="font-mono text-[0.68rem] tracking-[0.18em] text-ember-300 uppercase">
                      {division.ages}
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted">{division.body}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={fll.historyHeading} heading="Mentorship in Sunnyvale" tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="max-w-md text-xl leading-relaxed text-bright/90">{fll.history}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard maxTilt={4} scale={1.01}>
              <Photo
                src={fll.images.history}
                alt="An FLL team the Firebots mentored"
                className="aspect-4/3 min-h-72 w-full"
              />
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Awards" heading="What our teams won">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fllTeams.map((team, i) => (
            <Reveal key={team.name} delay={Math.min(i * 0.05, 0.3)}>
              <Glow className="flex h-full flex-col rounded-2xl border border-white/8 bg-surface p-6 shadow-card">
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
              </Glow>
            </Reveal>
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
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-ink/50 px-4 py-3 text-sm font-medium transition duration-300 hover:border-ember-500/40"
                >
                  <span className="font-mono text-ember-300">{String(index + 1).padStart(2, "0")}</span>
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <TiltCard maxTilt={6} scale={1.015}>
              <div className="relative isolate flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-ink shadow-lift">
                <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
                <div
                  aria-hidden
                  className="animate-drift pointer-events-none absolute top-1/2 left-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/30 blur-[70px]"
                />
                <Image
                  src={fll.images.support}
                  alt="FLL Challenge Support badge designed by FHS Robotics"
                  width={280}
                  height={336}
                  className="h-auto w-[52%] max-w-56 drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                />
                <p className="absolute bottom-4 left-5 font-mono text-[0.62rem] tracking-[0.22em] text-dim uppercase">
                  Series badge · 2020
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      <Section id="previous-events" eyebrow="Archive" heading="Previous events">
        <Gallery items={events} columns={2} />
      </Section>
    </>
  );
}
