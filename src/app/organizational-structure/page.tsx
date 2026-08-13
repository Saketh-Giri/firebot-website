import type { Metadata } from "next";
import Image from "next/image";
import { Card, LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import {
  aboutFirst,
  bamDivisions,
  competitionTeams,
  coreValues,
  orgIntro,
  technicalSubteams,
} from "@/content/organization";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Structure & Values",
  description: "How Firebots organizes five competition teams and BaM.",
};

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="Student-led."
        lede={orgIntro}
        brandMark
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Competition teams
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {competitionTeams.map((team) => (
                <li
                  key={team.number}
                  className="rounded-xl border border-white/8 bg-ink/50 px-5 py-4"
                >
                  <p className="font-mono text-lg font-semibold text-ember-300 tabular-nums">
                    {team.number}
                  </p>
                  <p className="mt-1.5 font-semibold tracking-tight">{team.name}</p>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-[0.16em] text-dim uppercase">
                    {team.program}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-2">
            <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Technical
            </h3>
            <ul className="mt-6 space-y-3">
              {technicalSubteams.map((subteam) => (
                <li
                  key={subteam.name}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/6 pb-3 last:border-0"
                >
                  <span className="font-medium">{subteam.name}</span>
                  <span className="text-sm text-muted">{subteam.note}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              BaM
            </h3>
            <ul className="mt-6 space-y-3">
              {bamDivisions.map((division) => (
                <li key={division.name} className="border-b border-white/6 pb-3 last:border-0">
                  <p className="font-medium">{division.name}</p>
                  <p className="mt-1 text-sm text-muted">{division.note}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Values" heading="What we hold each other to." tone="surface">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <Card key={value.name} interactive className="flex flex-col">
              <span
                aria-hidden
                className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-500/70"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{value.name}</h3>
              {value.points.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {value.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-ember-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FIRST" heading="What FIRST is.">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <Prose paragraphs={aboutFirst.paragraphs} />
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
          <div className="rounded-2xl border border-white/10 bg-white/95 p-10 shadow-lift">
            <Image
              src="/images/organizational-structure/03-first-vertical-rgb.png"
              alt="FIRST logo"
              width={320}
              height={320}
              className="mx-auto h-auto w-full max-w-56 object-contain"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Programs" heading="Go deeper." tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <LinkCard
              key={program.slug}
              href={`/${program.slug}`}
              eyebrow={program.slug === "business-and-marketing" ? "BaM" : program.slug.toUpperCase()}
              title={program.title}
              description={program.short}
              className="h-full"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
