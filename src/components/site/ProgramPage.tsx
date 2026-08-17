import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import type { Program } from "@/content/programs";
import { site } from "@/content/site";
import { paths } from "@/content/paths";
import { clsx } from "@/lib/clsx";

export function ProgramPage({ program }: { program: Program }) {
  return (
    <>
      <PageHero
        eyebrow={program.eyebrow}
        title={program.title}
        lede={program.short}
        image={program.cover}
        logo={program.logo}
      />

      {program.highlights && (
        <Section className="!py-12 md:!py-16">
          <dl className="grid grid-cols-3 gap-6 border-y border-white/8 py-10">
            {program.highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-gradient-bright text-3xl font-semibold tracking-tight md:text-4xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-sm text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {program.mascot && (
        <Section className="!pt-0">
          <div className="flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="animate-drift absolute top-1/2 left-1/2 -z-10 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/20 blur-[80px]"
              />
              <Image
                src={program.mascot}
                alt=""
                width={280}
                height={560}
                className="h-48 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:h-64"
              />
            </div>
          </div>
        </Section>
      )}

      {program.sections.map((section, index) => (
        <Section key={section.heading} tone={index % 2 === 0 ? "surface" : "default"}>
          <div
            className={clsx(
              "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
              index % 2 === 1 && "lg:[&>div:first-child]:order-2",
            )}
          >
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                {section.heading}
              </p>
              <p className="mt-4 max-w-md text-xl leading-relaxed text-bright/90 md:text-2xl">
                {section.body}
              </p>
              {program.slug === "ftc" && index === 0 && (
                <ButtonLink href={site.interestForm} className="mt-8" withArrow>
                  Interest form
                </ButtonLink>
              )}
            </div>
            {section.image && (
              <Photo
                src={section.image}
                alt={section.imageAlt ?? ""}
                className="aspect-4/3 min-h-72 w-full"
              />
            )}
          </div>
        </Section>
      ))}

      {program.teams && (
        <Section heading="Our FTC teams">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.teams.map((team) => {
              const inner = (
                <>
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
                </>
              );

              return team.href ? (
                <Link
                  key={team.number}
                  href={team.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block h-full"
                >
                  <Card interactive className="group flex h-full flex-col items-center gap-4 text-center">
                    {inner}
                  </Card>
                </Link>
              ) : (
                <Card
                  key={team.number}
                  interactive
                  className="group flex flex-col items-center gap-4 text-center"
                >
                  {inner}
                </Card>
              );
            })}
          </div>
        </Section>
      )}

      {program.photos && program.photos.length > 0 && (
        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {program.photos.map((photo) => (
              <Photo
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 min-h-64 w-full"
              />
            ))}
          </div>
        </Section>
      )}

      <Section heading={program.subteamsHeading} tone="surface">
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
                  className="size-16 shrink-0 object-contain transition duration-500 group-hover:scale-105"
                />
              ) : (
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs font-semibold text-ember-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <div>
                <h3 className="font-semibold tracking-tight">{subteam.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{subteam.description}</p>
              </div>
            </Card>
          ))}
        </div>
        {(program.slug === "business" || program.slug === "marketing") && (
          <p className="mt-10 text-sm text-muted">
            Also see{" "}
            <Link
              href={
                program.slug === "business" ? paths.programs.marketing : paths.programs.business
              }
              className="font-medium text-ember-300 hover:underline"
            >
              {program.slug === "business" ? "Marketing" : "Business"}
            </Link>
            .
          </p>
        )}
      </Section>
    </>
  );
}
