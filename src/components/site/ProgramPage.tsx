import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import {
  ArrowUpRight,
  Camera,
  Code,
  Cog,
  DraftingCompass,
  Handshake,
  HeartHandshake,
  Landmark,
  Megaphone,
  Palette,
  Presentation,
  Puzzle,
  Wrench,
  Zap,
} from "lucide-react";
import { CircularText } from "@/components/fx/CircularText";
import { Embers } from "@/components/fx/Embers";
import { Glow } from "@/components/fx/Glow";
import { StickyScroll } from "@/components/fx/StickyScroll";
import { TiltCard } from "@/components/fx/TiltCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { Stat } from "@/components/ui/Stat";
import { ButtonLink } from "@/components/ui/Button";
import type { Program, Subteam } from "@/content/programs";
import { site } from "@/content/site";
import { paths } from "@/content/paths";
import { clsx } from "@/lib/clsx";

export function ProgramPage({ program }: { program: Program }) {
  // Numbers ("39", "3v3", "~12") sit three-up at display size even on phones;
  // word values ("Year-round") need a smaller face and a stacked phone layout.
  const wordy = program.highlights?.some((item) => !/^\D{0,2}\d/.test(item.value)) ?? false;

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
          <div
            className={clsx(
              "grid gap-6 border-y border-white/8 py-10",
              wordy ? "gap-y-7 sm:grid-cols-3" : "grid-cols-3",
            )}
          >
            {program.highlights.map((item) => (
              <Stat
                key={item.label}
                value={item.value}
                label={item.label}
                size={wordy ? "sm" : "md"}
                bare
              />
            ))}
          </div>
        </Section>
      )}

      {program.mascot && (
        <Section className="!pt-0">
          <div className="flex justify-center">
            <div className="relative grid place-items-center">
              <div
                aria-hidden
                className="animate-drift absolute top-1/2 left-1/2 -z-10 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/20 blur-[80px]"
              />
              <CircularText
                text={`${program.eyebrow.toUpperCase()} · FREMONT HIGH ROBOTICS · `}
                size={300}
                className="absolute text-white/25"
              />
              <Image
                src={program.mascot}
                alt=""
                width={280}
                height={560}
                className="h-44 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:h-56"
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
            <Reveal>
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
            </Reveal>
            {section.image && (
              <Reveal delay={0.1}>
                <TiltCard maxTilt={4} scale={1.01}>
                  <Photo
                    src={section.image}
                    alt={section.imageAlt ?? ""}
                    className="aspect-4/3 min-h-72 w-full"
                  />
                </TiltCard>
              </Reveal>
            )}
          </div>
        </Section>
      ))}

      {program.teams && (
        <Section
          heading="Our FTC teams"
          lede={<p>Four teams, about a dozen students each. Results link to FIRST&apos;s event pages.</p>}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.teams.map((team, i) => {
              const card = (
                <Glow className="group relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 text-center shadow-card">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(224,31,38,0.18),transparent_70%)]"
                  />
                  <span className="relative flex size-28 items-center justify-center">
                    <Image
                      src={team.image}
                      alt=""
                      width={112}
                      height={112}
                      className="size-full object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:scale-105"
                    />
                  </span>
                  <span className="relative">
                    <span className="block font-mono text-sm font-semibold text-ember-300 tabular-nums">
                      {team.number}
                    </span>
                    <span className="mt-1 block text-lg font-semibold tracking-tight text-bright">{team.name}</span>
                  </span>
                  {team.href && (
                    <span className="relative mt-auto inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.16em] text-dim uppercase transition-colors group-hover:text-ember-300">
                      FIRST results <ArrowUpRight className="size-3.5" />
                    </span>
                  )}
                </Glow>
              );
              return (
                <Reveal key={team.number} delay={i * 0.06}>
                  <TiltCard className="h-full" maxTilt={8}>
                    {team.href ? (
                      <Link href={team.href} target="_blank" rel="noreferrer noopener" className="block h-full rounded-2xl focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none">
                        {card}
                      </Link>
                    ) : (
                      card
                    )}
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {program.photos && program.photos.length > 0 && (
        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {program.photos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.08}>
                <Photo src={photo.src} alt={photo.alt} className="aspect-4/3 min-h-64 w-full" />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section
        eyebrow={program.subteamsHeading}
        heading={`${program.subteams.length} ways in`}
        lede={<p>Every member sits on a subteam. Move between them during the season if your interests shift.</p>}
        tone="surface"
      >
        <StickyScroll
          items={program.subteams.map((subteam, index) => ({
            id: subteam.name,
            title: subteam.name,
            description: subteam.description,
            visual: <SubteamVisual subteam={subteam} index={index} program={program} />,
          }))}
        />
        {(program.slug === "business" || program.slug === "marketing") && (
          <p className="mt-10 text-sm text-muted">
            Also see{" "}
            <Link
              href={program.slug === "business" ? paths.programs.marketing : paths.programs.business}
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

/**
 * Pinned visual for a subteam: a logo plate when the subteam has one,
 * otherwise a typographic slab. Both sit on a machined-looking panel with a
 * few embers drifting up so the switch between items has something to show.
 */
function SubteamVisual({ subteam, index, program }: { subteam: Subteam; index: number; program: Program }) {
  const palette = [
    "from-ember-900/60 via-surface to-ink-2",
    "from-surface-2 via-surface to-ember-900/40",
    "from-ink-2 via-surface-2 to-ember-800/40",
    "from-ember-800/50 via-ink-2 to-surface",
    "from-surface via-ember-900/50 to-ink-2",
  ];
  return (
    <div className={clsx("relative isolate size-full overflow-hidden bg-gradient-to-br", palette[index % palette.length])}>
      <span aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
      <Embers density={0.5} speed={0.7} className="-z-10" />
      <span
        aria-hidden
        className="absolute -right-6 -bottom-8 font-mono text-[9rem] leading-none font-bold text-white/[0.05] select-none sm:text-[12rem]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex size-full flex-col items-center justify-center p-8">
        <div className="relative flex size-40 items-center justify-center rounded-3xl border border-white/10 bg-ink/50 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur sm:size-48">
          <span aria-hidden className="absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(246,86,79,0.22),transparent_70%)]" />
          {subteam.image ? (
            <Image src={subteam.image} alt="" width={160} height={160} className="relative size-full object-contain" />
          ) : (
            <SubteamIcon
              name={subteam.name}
              aria-hidden
              strokeWidth={1.25}
              className="relative size-20 text-ember-200 drop-shadow-[0_0_18px_rgba(246,86,79,0.45)] sm:size-24"
            />
          )}
        </div>
        {/* On small screens the heading sits directly above this card, so the
            name only repeats on desktop where the visual is pinned separately. */}
        <p className="mt-7 hidden text-center text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl lg:block">
          {subteam.name}
        </p>
        <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase lg:mt-2">
          {program.eyebrow} · {String(index + 1).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

/** Line icon for a subteam, picked by keyword so new subteams still get one. */
function SubteamIcon({ name, ...props }: { name: string } & ComponentProps<typeof Cog>) {
  const n = name.toLowerCase();
  const Icon = n.includes("design")
    ? DraftingCompass
    : n.includes("manufactur")
      ? Wrench
      : n.includes("electr")
        ? Zap
        : n.includes("software")
          ? Code
          : n.includes("integrat")
            ? Puzzle
            : n.includes("financ")
              ? Landmark
              : n.includes("sponsor")
                ? Handshake
                : n.includes("judg")
                  ? Presentation
                  : n.includes("brand")
                    ? Palette
                    : n.includes("digital") || n.includes("marketing")
                      ? Camera
                      : n.includes("event")
                        ? Megaphone
                        : n.includes("community")
                          ? HeartHandshake
                          : n.includes("business")
                            ? Landmark
                            : Cog;
  return <Icon {...props} />;
}
