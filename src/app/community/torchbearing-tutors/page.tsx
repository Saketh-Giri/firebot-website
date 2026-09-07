import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Glow } from "@/components/fx/Glow";
import { KitBlueprint } from "@/components/fx/KitBlueprint";
import { TiltCard } from "@/components/fx/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { torchbearingTutors } from "@/content/community";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Torchbearing Tutors",
  description: "Firebots teach STEAM at six Sunnyvale afterschool programs.",
};

export default function TorchbearingTutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Torchbearing Tutors"
        title="Torchbearing Tutors"
        lede={torchbearingTutors.intro}
        image={torchbearingTutors.heroPhoto}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal>
            <TiltCard maxTilt={5} scale={1.01}>
              <Photo
                src={torchbearingTutors.photo.src}
                alt={torchbearingTutors.photo.alt}
                className="aspect-4/5 w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </TiltCard>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-gradient-bright text-balance-tight text-title font-semibold">
                {torchbearingTutors.approachHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="text-pretty-tight mt-6 space-y-4 text-lg leading-relaxed text-muted">
                {torchbearingTutors.approach.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {torchbearingTutors.facts.map((fact) =>
                  fact.plain ? (
                    <div key={fact.label} className="group relative pt-6">
                      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />
                      <span
                        aria-hidden
                        className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-ember-400 to-ember-600 transition-all duration-700 ease-out-expo group-hover:w-full"
                      />
                      <div className="text-gradient-bright text-4xl font-semibold tracking-[-0.03em] tabular-nums md:text-5xl">
                        {fact.value}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{fact.label}</p>
                    </div>
                  ) : (
                    <Stat key={fact.label} value={fact.value} label={fact.label} />
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={torchbearingTutors.lessonsHeading}
        heading="Lessons we teach"
        lede={
          <p>
            Each lesson is one build and one idea. Two of them grew into Kindling Kits you can make at
            home.
          </p>
        }
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {torchbearingTutors.lessons.map((lesson, i) => {
            const body = (
              <>
                <KitBlueprint
                  kind={lesson.blueprint}
                  className="aspect-16/10 border-b border-white/8"
                />
                <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                      Lesson {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{lesson.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.description}</p>
                  </div>
                  {lesson.href ? (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ember-300 transition-colors group-hover:text-ember-200">
                      Get the kit
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  ) : (
                    <span className="font-mono text-xs tracking-[0.16em] text-dim uppercase">
                      Classroom only
                    </span>
                  )}
                </div>
              </>
            );
            const shell =
              "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface shadow-card transition duration-500 ease-out-expo";
            return (
              <Reveal key={lesson.name} delay={i * 0.08}>
                <Glow as="article" className="h-full rounded-2xl">
                  {lesson.href ? (
                    <Link
                      href={lesson.href}
                      className={`${shell} hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow`}
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className={shell}>{body}</div>
                  )}
                </Glow>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section narrow>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-600/18 via-surface to-surface p-8 md:p-12">
            <div
              aria-hidden
              className="animate-drift pointer-events-none absolute -top-24 -right-16 -z-10 size-72 rounded-full bg-ember-500/25 blur-[90px]"
            />
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              For educators
            </p>
            <h2 className="text-balance-tight mt-4 text-2xl font-semibold tracking-tight text-bright md:text-3xl">
              Run an afterschool program in Sunnyvale? We would like to teach there.
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Tell us about your program and the kids you work with, and a lead will follow up.
            </p>
            <ButtonLink
              href={`mailto:${site.email}?subject=Torchbearing%20Tutors`}
              className="mt-8"
              withArrow
            >
              Email the team
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
