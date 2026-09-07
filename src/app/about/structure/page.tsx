import type { Metadata } from "next";
import Image from "next/image";
import { Glow } from "@/components/fx/Glow";
import { OrgChart } from "@/components/fx/OrgChart";
import { ScrollStack } from "@/components/fx/ScrollStack";
import { TiltCard } from "@/components/fx/TiltCard";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  aboutFirst,
  competitionTeams,
  coreValues,
  nonTechnicalSubteams,
  orgChart,
  orgIntro,
  structurePhotos,
  technicalSubteams,
} from "@/content/about/structure";
import { programs } from "@/content/programs";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Structure & Values",
  description:
    "How Fremont High Robotics organizes five competition teams plus Business and Marketing.",
};

const mascots: Record<string, string> = {
  "3501": "/images/shared/firebot-mark.png",
  "16532": "/images/ftc/02-sparkbot-head.png",
  "16533": "/images/ftc/03-infernobot-head.png",
  "26106": "/images/ftc/04-emberbots-head.png",
  "30541": "/images/home/05-7ebe-mv2.png",
};

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="How we organize"
        lede={orgIntro}
        image={structurePhotos.shop}
      />

      <Section
        eyebrow="Org chart"
        heading="One organization, four branches"
        lede={
          <p>
            Every branch is run by a student lead. Hover or tap a branch to trace it from the
            top; the heads link to their pages.
          </p>
        }
      >
        <OrgChart root={orgChart.root} branches={orgChart.branches} className="mt-2" />
        <dl className="mt-10 grid gap-x-10 gap-y-4 border-t border-white/8 pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Technical subteams
            </dt>
            <dd className="mt-2 text-muted">
              {technicalSubteams.map((s, i) => (
                <span key={s.name}>
                  <span className="text-bright/90">{s.name}</span>
                  <span className="text-dim"> ({s.note.toLowerCase()})</span>
                  {i < technicalSubteams.length - 1 ? ", " : "."}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Business &amp; Marketing
            </dt>
            <dd className="mt-2 text-muted">
              {nonTechnicalSubteams.map((s, i) => (
                <span key={s.name}>
                  <span className="text-bright/90">{s.name}</span>: {s.note.toLowerCase()}
                  {i < nonTechnicalSubteams.length - 1 ? "; " : "."}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Section>

      <Section tone="surface">
        <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
          Competition teams
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {competitionTeams.map((team, i) => (
            <Reveal key={team.number} delay={i * 0.06}>
              <TiltCard className="h-full" maxTilt={7}>
                <Glow
                  as="article"
                  className="flex h-full flex-col rounded-2xl border border-white/8 bg-surface p-4 shadow-card sm:p-5"
                >
                  <div className="relative mb-5 flex aspect-square w-full items-center justify-center rounded-xl border border-white/6 bg-gradient-to-b from-surface-2 to-surface sm:mb-6">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl bg-[radial-gradient(60%_60%_at_50%_45%,rgba(224,31,38,0.18),transparent_70%)]"
                    />
                    <Image
                      src={mascots[team.number]}
                      alt={`${team.name} mascot`}
                      width={160}
                      height={160}
                      className="relative size-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <p className="font-mono text-lg font-semibold text-ember-300 tabular-nums">
                    {team.number}
                  </p>
                  <p className="mt-1.5 font-semibold tracking-tight text-bright">
                    {team.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-[0.16em] text-dim uppercase">
                    {team.program}
                  </p>
                </Glow>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Values"
        heading="What we hold each other to"
        lede={
          <p>
            Five commitments, written by students. They come up in tryouts, in
            design reviews, and in how we treat other teams in the pits.
          </p>
        }
      >
        <ScrollStack className="mx-auto max-w-4xl">
          {coreValues.map((value, index) => (
            <article
              key={value.name}
              className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] sm:p-12"
            >
              {/* Opaque base + tinted wash, so stacked cards never show through. */}
              <span
                aria-hidden
                className={clsx(
                  "pointer-events-none absolute inset-0 -z-10",
                  index % 2 === 0
                    ? "bg-gradient-to-br from-surface-2 via-surface to-ink-2"
                    : "bg-gradient-to-br from-ember-900/70 via-surface to-ink-2",
                )}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-6 font-mono text-[10rem] leading-none font-bold text-white/[0.035] select-none sm:text-[14rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden
                className="bg-grid mask-fade-b absolute inset-0 -z-10 opacity-30"
              />
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                Value {String(index + 1).padStart(2, "0")} of{" "}
                {String(coreValues.length).padStart(2, "0")}
              </p>
              <h3 className="text-gradient-bright mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                {value.name}
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {value.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl border border-white/8 bg-ink/40 p-5 text-base leading-relaxed text-white/80 backdrop-blur-sm"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ember-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </ScrollStack>
      </Section>

      <Section eyebrow="FIRST" heading="What FIRST is" tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {aboutFirst.summary}
            </p>
            <ul className="mt-8 space-y-3">
              {aboutFirst.programs.map((program) => (
                <li
                  key={program.abbr}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/6 pb-3"
                >
                  <span className="font-mono text-sm font-semibold text-ember-300">
                    {program.abbr}
                  </span>
                  <span className="font-medium">{program.name}</span>
                  <span className="text-sm text-dim">{program.grades}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <TiltCard maxTilt={5} scale={1.01}>
              <div className="relative isolate flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-ink shadow-lift">
                <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
                <div
                  aria-hidden
                  className="animate-drift pointer-events-none absolute top-1/2 left-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/25 blur-[70px]"
                />
                {/* FIRST's wordmark is black; it needs a white field to read. */}
                <div className="rounded-2xl bg-white px-8 py-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                  <Image
                    src={structurePhotos.first}
                    alt="FIRST logo"
                    width={240}
                    height={180}
                    className="h-auto w-36 object-contain sm:w-44"
                  />
                </div>
                <p className="absolute bottom-4 left-5 font-mono text-[0.62rem] tracking-[0.22em] text-dim uppercase">
                  Founded 1990 · Manchester, NH
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      <Section heading="Go deeper">
        <div className="grid gap-5 sm:grid-cols-2">
          {programs.map((program) => (
            <LinkCard
              key={program.slug}
              href={program.href}
              image={program.cover}
              eyebrow={program.eyebrow}
              title={program.title}
              description={program.short}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
