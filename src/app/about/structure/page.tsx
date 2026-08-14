import type { Metadata } from "next";
import Image from "next/image";
import { Card, LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  aboutFirst,
  competitionTeams,
  coreValues,
  nonTechnicalSubteams,
  orgIntro,
  structurePhotos,
  technicalSubteams,
} from "@/content/about/structure";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Structure & Values",
  description:
    "How Fremont High Robotics organizes five competition teams plus Business and Marketing.",
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

      <Section>
        <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
          Competition teams
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {competitionTeams.map((team) => (
            <li key={team.number} className="rounded-2xl border border-white/8 surface-panel px-5 py-4">
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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
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
              Business & Marketing
            </h3>
            <ul className="mt-6 space-y-3">
              {nonTechnicalSubteams.map((subteam) => (
                <li key={subteam.name} className="border-b border-white/6 pb-3 last:border-0">
                  <p className="font-medium">{subteam.name}</p>
                  <p className="mt-1 text-sm text-muted">{subteam.note}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Values" heading="What we hold each other to" tone="surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, index) => (
            <Card key={value.name} interactive className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-500/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{value.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.points[0]}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FIRST" heading="What FIRST is">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">{aboutFirst.summary}</p>
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
              src={structurePhotos.first}
              alt="FIRST logo"
              width={280}
              height={280}
              className="mx-auto h-auto w-full max-w-44 object-contain"
            />
          </div>
        </div>
      </Section>

      <Section heading="Go deeper" tone="surface">
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
