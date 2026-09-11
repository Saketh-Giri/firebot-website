import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { CircularText } from "@/components/fx/CircularText";
import { DotGrid } from "@/components/fx/DotGrid";
import { Embers } from "@/components/fx/Embers";
import { ExpandingPanels } from "@/components/fx/ExpandingPanels";
import { Glow } from "@/components/fx/Glow";
import { Magnetic } from "@/components/fx/Magnetic";
import { Marquee3D } from "@/components/fx/Marquee3D";
import { ScrollVelocity } from "@/components/fx/ScrollVelocity";
import { SplitText } from "@/components/fx/SplitText";
import { Spotlight } from "@/components/fx/Spotlight";
import { TextGenerate } from "@/components/fx/TextGenerate";
import { heroLede, mission, stats } from "@/content/home";
import { programs } from "@/content/programs";
import { sponsorLogos } from "@/content/sponsors";
import { competitionTeams } from "@/content/about/structure";
import { albums } from "@/content/updates/media";
import { paths } from "@/content/paths";
import { frc2026, season } from "@/content/season";
import { site } from "@/content/site";
import { clsx } from "@/lib/clsx";

const heroImage = "/images/home/01-0b69-mv2.jpg";

const ticker = [
  `${season.game.year} ${season.game.name}`,
  "FIRST Championship · Galileo",
  "Excellence in Engineering",
  frc2026.record,
  `District ${frc2026.districtRank}`,
  "Woodie Flowers Finalist",
  "District Impact Award",
  "5 competition teams",
  "Est. 2010 · Sunnyvale",
];

const bento: { label: string; span?: "wide" | "tall" | "big" }[] = [
  { label: "community members reached", span: "big" },
  { label: "competition teams" },
  { label: "outreach events in the last 3 years" },
  { label: "years in FIRST" },
  { label: "active students in the 2025–26 season" },
  { label: "of team members pursue STEAM majors in college", span: "wide" },
  { label: "FLL teams mentored" },
  { label: "active mentors" },
];

export default function HomePage() {
  const statByLabel = new Map(stats.map((s) => [s.label, s]));
  const wall = albums.slice(0, 24).map((a) => ({ src: a.image, alt: a.title }));

  return (
    <>

      <section className="relative isolate flex h-svh min-h-[40rem] flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt="Fremont High Robotics team at competition"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/70 to-transparent" />
        <Embers density={1.1} className="opacity-90" />
        <Spotlight size={640} strength={0.16} />

        <div className="container-page relative w-full pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8 md:pb-12">
          <div className="flex items-end justify-between gap-8">
            <div className="min-w-0">
              <Reveal onMount>
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
                    <p className="text-display font-semibold tracking-[-0.04em] uppercase">Firebots</p>
                    <p className="mt-2 font-mono text-xs font-semibold tracking-[0.22em] text-ember-300 uppercase sm:mt-3 sm:text-sm md:text-base">
                      3501 · Fremont High Robotics
                    </p>
                  </div>
                </div>
              </Reveal>

              <SplitText
                as="h1"
                text={heroLede}
                delay={0.25}
                stagger={0.05}
                className="mt-5 max-w-xl text-xl leading-snug font-semibold tracking-tight text-white sm:mt-7 md:mt-8 md:text-3xl"
              />

              <Reveal onMount delay={0.5}>
                <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7 md:mt-8">
                  <Magnetic>
                    <ButtonLink href={paths.join} size="lg" withArrow>
                      Join the Team
                    </ButtonLink>
                  </Magnetic>
                  <ButtonLink href={paths.programs.index} size="lg" variant="secondary">
                    Programs
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal onMount delay={0.6}>
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

            <Reveal onMount delay={0.7} className="hidden shrink-0 lg:block">
              <Link
                href="#mission"
                aria-label="Scroll to the mission"
                className="group relative grid size-40 place-items-center text-white/60 transition-colors duration-500 hover:text-ember-300"
              >
                <CircularText
                  text="FRC TEAM 3501 · FREMONT HIGH ROBOTICS · SUNNYVALE CA · "
                  size={160}
                  className="absolute inset-0"
                />
                <span className="grid size-12 place-items-center rounded-full border border-white/15 bg-ink/50 backdrop-blur transition duration-500 group-hover:border-ember-400/60 group-hover:bg-ember-500/15">
                  <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-y border-white/8 bg-ink-2/80 py-4">
        <ScrollVelocity baseVelocity={-38}>
          {ticker.map((item) => (
            <span key={item} className="flex items-center">
              <span className="font-mono text-xs font-semibold tracking-[0.22em] text-white/70 uppercase sm:text-sm">
                {item}
              </span>
              <span aria-hidden className="mx-6 block size-1.5 rotate-45 bg-ember-500 sm:mx-8" />
            </span>
          ))}
        </ScrollVelocity>
      </div>

      <section id="mission" className="relative isolate scroll-mt-20 overflow-hidden py-28 md:py-40">
        <DotGrid className="mask-vignette -z-10" gap={28} radius={190} />
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute top-1/2 left-1/2 -z-20 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/10 blur-[130px]"
        />
        <div className="container-page">
          <Reveal className="text-center">
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <TextGenerate
            text={mission.replace("STEAM", "*STEAM*").replace("hands-on", "*hands-on*")}
            className="text-balance-tight mx-auto mt-8 max-w-4xl text-center text-2xl leading-snug font-medium tracking-tight text-bright sm:text-3xl md:text-[2.6rem] md:leading-[1.2]"
          />
        </div>
      </section>

      <Section eyebrow="At a glance" heading="By the numbers" tone="surface">
        <div className="grid auto-rows-[minmax(9rem,auto)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {bento.map((cell, i) => {
            const stat = statByLabel.get(cell.label);
            if (!stat) return null;
            const big = cell.span === "big";
            return (
              <Reveal
                key={cell.label}
                delay={Math.min(i * 0.05, 0.3)}
                className={clsx(
                  big && "col-span-2 row-span-2",
                  cell.span === "wide" && "col-span-2",
                )}
              >
                <Glow
                  className={clsx(
                    "relative isolate flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/8 bg-surface p-5 shadow-card sm:p-6",
                    big && "min-h-80",
                  )}
                >
                  {big && (
                    <>
                      <Image
                        src="/images/community-impact/04-99b5f0ea-1275-4b70-afa8-a22e280289f9-1-105-c.jpg"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="-z-10 object-cover opacity-70 saturate-[0.8]"
                      />
                      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
                      <span className="absolute top-5 left-5 font-mono text-[0.65rem] font-semibold tracking-[0.2em] text-ember-300 uppercase sm:top-6 sm:left-6">
                        Community impact
                      </span>
                    </>
                  )}
                  <Stat value={stat.value} label={stat.label} size={big ? "lg" : "md"} bare />
                </Glow>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Programs"
        heading="What we run"
        lede={<p>Five competition teams and two non-technical groups share one shop. Start in FTC; earn a spot on Firebots.</p>}
      >
        <ExpandingPanels
          panels={programs.map((p) => ({
            href: p.href,
            eyebrow: p.eyebrow,
            title: p.title,
            description: p.short,
            image: p.cover ?? heroImage,
          }))}
        />
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>{frc2026.heading}</Eyebrow>
            <h2 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
              Houston, four banners, and a finalist.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{frc2026.lede}</p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
              {[
                [frc2026.record, "official play"],
                [frc2026.districtRank, "FIRST California"],
                [frc2026.districtPoints, "district points"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-gradient-bright text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl md:text-4xl">
                    {value}
                  </dt>
                  <dd className="mt-2 text-xs text-muted sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={paths.programs.frc} withArrow>
                The 2026 season
              </ButtonLink>
              <ButtonLink href={frc2026.source.href} variant="secondary">
                The Blue Alliance
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {frc2026.awards.map((award, i) => (
                <li key={award.name}>
                  <Glow className="flex items-start gap-4 rounded-2xl border border-white/8 bg-surface p-5 shadow-card">
                    <span
                      className={clsx(
                        "grid size-10 shrink-0 place-items-center rounded-xl border",
                        i === 0
                          ? "border-flare-400/40 bg-flare-400/10 text-flare-400"
                          : "border-white/10 bg-white/5 text-ember-300",
                      )}
                    >
                      <Trophy className="size-4" />
                    </span>
                    <span>
                      <span className="block font-semibold tracking-tight text-bright">{award.name}</span>
                      <span className="mt-1 block text-sm text-muted">{award.event}</span>
                    </span>
                  </Glow>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden py-32 md:py-44">
        <Marquee3D images={wall} columns={6} className="absolute inset-0 -z-20 opacity-80" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/30 to-ink" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_50%_50%,rgba(8,9,12,0.7),rgba(8,9,12,0.35)_60%,transparent)]" />
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mx-auto">Gallery</Eyebrow>
            <h2 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
              Seventeen seasons, one shop.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              Regionals, league meets, bootcamps, and late nights before bag day. The album goes back to 2014.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={paths.updates.gallery} size="lg" withArrow>
                Open the gallery
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Support" heading="Sponsors power the shop" tone="surface">
        <div className="mask-fade-x relative -mx-4 overflow-hidden sm:-mx-6">
          <LogoRow logos={sponsorLogos} />
          <LogoRow logos={[...sponsorLogos].reverse()} reverse />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={paths.sponsors} withArrow>
            Become a Sponsor
          </ButtonLink>
          <ButtonLink href={season.donate.href} variant="secondary">
            Donate
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <Glow className="relative isolate grid overflow-hidden rounded-3xl border border-white/10 bg-surface lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src={season.announcement.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface" />
          </div>
          <div className="relative isolate overflow-hidden p-8 md:p-12">
            <Embers density={0.6} speed={0.8} className="-z-10 opacity-80" />
            <div
              aria-hidden
              className="animate-drift pointer-events-none absolute -top-24 -right-16 -z-20 size-[18rem] rounded-full bg-ember-600/16 blur-[90px]"
            />
            <Eyebrow>{season.announcement.eyebrow}</Eyebrow>
            <h2 className="text-gradient-bright mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              {season.announcement.title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{season.announcement.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.interestForm} withArrow>
                {season.announcement.cta.label}
              </ButtonLink>
              <ButtonLink href={season.announcement.secondary.href} variant="secondary">
                {season.announcement.secondary.label}
              </ButtonLink>
            </div>
            <Link
              href={paths.join}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ember-300"
            >
              How tryouts work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Glow>
      </Section>
    </>
  );
}

function LogoRow({
  logos,
  reverse = false,
}: {
  logos: { name: string; image: string; href?: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="group overflow-hidden">
      <div
        className={clsx(
          "flex w-max items-center gap-4 py-3",
          reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee",
        )}
      >
        {[...logos, ...logos].map((sponsor, index) => {
          const duplicate = index >= logos.length;
          const logo = (
            <span className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/95 px-4 py-3 grayscale transition duration-500 group-hover:grayscale-0">
              <Image
                src={sponsor.image}
                alt={duplicate ? "" : sponsor.name}
                aria-hidden={duplicate}
                width={180}
                height={80}
                className="h-full w-full object-contain"
              />
            </span>
          );
          if (sponsor.href && !duplicate) {
            return (
              <a
                key={`${sponsor.name}-${index}`}
                href={sponsor.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition duration-300 hover:-translate-y-0.5"
              >
                {logo}
              </a>
            );
          }
          return <div key={`${sponsor.name}-${index}`}>{logo}</div>;
        })}
      </div>
    </div>
  );
}
