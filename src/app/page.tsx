import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { announcement, heroLede, mission, stats } from "@/content/home";
import { programs } from "@/content/programs";
import { sponsorLogos } from "@/content/sponsors";
import { competitionTeams } from "@/content/about/structure";
import { paths } from "@/content/paths";

const heroImage = "/images/home/01-0b69-mv2.jpg";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex h-svh flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt="Fremont High Robotics team at competition"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/70 to-transparent"
        />

        <div className="container-page relative w-full pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8 md:pb-10">
          <Reveal>
            <div className="flex items-center gap-4 md:gap-7">
              <Image
                src="/images/shared/logo.png"
                alt=""
                width={140}
                height={140}
                priority
                className="size-16 shrink-0 rounded-full ring-1 ring-white/20 shadow-[0_0_50px_-6px_rgba(224,31,38,0.65)] sm:size-20 md:size-28"
              />
              <div className="min-w-0 leading-none">
                <p className="text-display font-semibold tracking-[-0.04em] uppercase">
                  Firebots
                </p>
                <p className="mt-2 font-mono text-xs font-semibold tracking-[0.22em] text-ember-300 uppercase sm:mt-3 sm:text-sm md:text-base">
                  3501 · Fremont High Robotics
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-xl text-xl leading-snug font-semibold tracking-tight text-white sm:mt-7 md:mt-8 md:text-3xl">
              {heroLede}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-7 md:mt-8">
              <ButtonLink href={paths.join} size="lg" withArrow>
                Join the Team
              </ButtonLink>
              <ButtonLink href={paths.about.structure} size="lg" variant="secondary">
                Programs
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-sm sm:mt-8 md:mt-9">
              {competitionTeams.map((team) => (
                <li key={team.number} className="flex items-baseline gap-2">
                  <span className="font-mono font-semibold text-ember-300">{team.number}</span>
                  <span className="font-medium text-white/90">{team.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section tone="glow">
        <blockquote className="text-balance-tight mx-auto max-w-3xl text-center text-2xl leading-relaxed font-medium tracking-tight md:text-3xl">
          {mission}
        </blockquote>
      </Section>

      <Section eyebrow="At a glance" heading="By the numbers" tone="surface">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Programs" heading="What we run">
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

      <Section eyebrow="Support" heading="Sponsors power the shop" tone="surface">
        <div className="group mask-fade-x relative overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-4 py-4">
            {[...sponsorLogos, ...sponsorLogos].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/95 px-4 py-3"
              >
                <Image
                  src={sponsor.image}
                  alt={index < sponsorLogos.length ? sponsor.name : ""}
                  aria-hidden={index >= sponsorLogos.length}
                  width={180}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <ButtonLink href={paths.sponsors} withArrow>
            Become a Sponsor
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="relative isolate grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src={announcement.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative isolate p-8 md:p-12">
            <div
              aria-hidden
              className="animate-drift pointer-events-none absolute -top-24 -right-16 -z-10 size-[18rem] rounded-full bg-ember-600/16 blur-[90px]"
            />
            <Eyebrow>{announcement.eyebrow}</Eyebrow>
            <h2 className="text-gradient-bright mt-5 text-3xl font-semibold tracking-tight">
              {announcement.title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{announcement.body}</p>
            <ButtonLink href={announcement.cta.href} className="mt-8" withArrow>
              {announcement.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
