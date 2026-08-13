import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { announcement, heroLede, homeCtas, mission, stats } from "@/content/home";
import { programs } from "@/content/programs";
import { sponsorLogos } from "@/content/sponsors";
import { competitionTeams } from "@/content/organization";

const heroImage = "/images/home/01-0b69-mv2.jpg";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt="Fremont High Robotics team at competition"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/75 to-transparent"
        />

        <div className="container-page relative pb-16 pt-40 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-5 md:gap-7">
              <Image
                src="/images/shared/logo.png"
                alt=""
                width={140}
                height={140}
                priority
                className="size-20 shrink-0 rounded-full ring-1 ring-white/20 shadow-[0_0_50px_-6px_rgba(224,31,38,0.65)] md:size-28"
              />
              <div className="min-w-0 leading-none">
                <p className="text-display font-semibold tracking-[-0.04em] uppercase">
                  Firebots
                </p>
                <p className="mt-3 font-mono text-sm font-semibold tracking-[0.22em] text-ember-300 uppercase md:text-base">
                  3501 · Fremont High Robotics
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance-tight mt-10 max-w-[14ch] text-title font-semibold text-bright/95">
              {mission}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">{heroLede}</p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/join-the-team" size="lg" withArrow>
                Join the Team
              </ButtonLink>
              <ButtonLink href="/organizational-structure" size="lg" variant="secondary">
                Programs
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm">
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

      <Section eyebrow="At a glance" heading="Sixteen seasons." tone="surface">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Programs" heading="FRC. FTC. BaM." lede="Build. Organize. Teach.">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.06}>
              <Link
                href={`/${program.slug}`}
                className="group relative isolate flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/8 surface-panel p-7 shadow-card transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow"
              >
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                    {program.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{program.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{program.short}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-bright">
                  Explore
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-ember-300 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Support"
        heading="Sponsors power the shop."
        lede="501(c)(3). Tools, parts, outreach."
        tone="surface"
      >
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
          <ButtonLink href="/sponsor-us" withArrow>
            Become a Sponsor
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 surface-panel p-8 md:p-12">
          <div
            aria-hidden
            className="animate-drift pointer-events-none absolute -top-32 -right-20 -z-10 size-[24rem] rounded-full bg-ember-600/16 blur-[100px]"
          />
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Eyebrow>{announcement.eyebrow}</Eyebrow>
              <h2 className="text-gradient-bright text-balance-tight mt-5 text-title font-semibold">
                {announcement.title}
              </h2>
              <p className="mt-4 text-lg text-muted">{announcement.body}</p>
            </div>
            <ButtonLink href={announcement.cta.href} withArrow>
              {announcement.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section eyebrow="Explore" heading="Where next?" tone="surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeCtas.map((cta) => (
            <LinkCard
              key={cta.href}
              href={cta.href}
              title={cta.label}
              description={cta.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
