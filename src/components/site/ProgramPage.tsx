import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import type { Program } from "@/content/programs";
import { site } from "@/content/site";

export function ProgramPage({ program, image }: { program: Program; image?: string }) {
  return (
    <>
      <PageHero
        eyebrow={program.eyebrow}
        title={program.title}
        lede={program.short}
        image={image}
        logo={program.logo}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <Prose paragraphs={[program.intro]} className="text-xl md:text-2xl md:leading-relaxed" />
          {program.mascot && (
            <div className="relative flex justify-center">
              <div
                aria-hidden
                className="animate-drift absolute top-1/2 left-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/20 blur-[90px]"
              />
              <Image
                src={program.mascot}
                alt=""
                width={420}
                height={840}
                className="h-64 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] lg:h-80"
              />
            </div>
          )}
        </div>
      </Section>

      {program.sections.map((section, index) => (
        <Section
          key={section.heading}
          heading={section.heading}
          tone={index % 2 === 0 ? "surface" : "default"}
        >
          <Prose paragraphs={section.paragraphs} className="max-w-3xl" />
          {program.slug === "ftc" && index === 0 && (
            <ButtonLink href={site.interestForm} className="mt-8" withArrow>
              Interest form
            </ButtonLink>
          )}
        </Section>
      ))}

      {program.teams && (
        <Section heading="Our FTC teams">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.teams.map((team) => (
              <Card
                key={team.number}
                interactive
                className="group flex flex-col items-center gap-4 text-center"
              >
                <div className="flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5 transition duration-500 group-hover:border-ember-500/40">
                  <Image
                    src={team.image}
                    alt=""
                    width={80}
                    height={80}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-ember-300 tabular-nums">
                    {team.number}
                  </p>
                  <p className="mt-1 font-semibold tracking-tight">{team.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section
        heading={program.subteamsHeading}
        tone={program.sections.length % 2 === 0 ? "surface" : "default"}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {program.subteams.map((subteam, index) => (
            <Card
              key={subteam.name}
              interactive
              className="group flex flex-col gap-4 sm:flex-row sm:items-start"
            >
              {subteam.image ? (
                <Image
                  src={subteam.image}
                  alt=""
                  width={96}
                  height={96}
                  className="size-20 shrink-0 object-contain transition duration-500 group-hover:scale-105"
                />
              ) : (
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm font-semibold text-ember-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <div>
                <h3 className="font-semibold tracking-tight">{subteam.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{subteam.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
