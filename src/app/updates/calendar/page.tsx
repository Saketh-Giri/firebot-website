import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Glow } from "@/components/fx/Glow";
import { Timeline } from "@/components/fx/Timeline";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { paths } from "@/content/paths";
import { season } from "@/content/season";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Meetings, build sessions, outreach events, and competitions for Fremont High Robotics.",
};

const rhythm = [
  { when: "Aug – Sep", title: "Tryouts", body: "Interest form first, then tryout emails. New members land on an FTC team." },
  { when: "Sep – Dec", title: "FTC season", body: "League meets and qualifiers. FRC members train and prototype." },
  { when: "January", title: "FRC kickoff", body: "Game reveal on a Saturday in early January. Build season starts the same day." },
  { when: "Feb – Apr", title: "Competitions", body: "District events, state championship, and — in a good year — Houston." },
  { when: "May – Jul", title: "Offseason", body: "Outreach, FLL coaching, summer bootcamps, and shop upgrades." },
];

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Calendar"
        lede="Build season typically runs January through April. Outreach continues year-round. Tryout details go out in August and September."
      />

      <Section heading="Upcoming" lede={season.calendar.intro}>
        <ul className="grid gap-4 md:grid-cols-2">
          {season.calendar.events.map((event) => (
            <li key={event.title}>
              <Glow className="flex h-full flex-col gap-5 rounded-2xl border border-white/8 bg-surface p-6 shadow-card sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs font-semibold tracking-[0.16em] text-ember-300 uppercase">
                    {event.when}
                  </p>
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted">
                    <CalendarDays className="size-4" />
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-bright">{event.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{event.detail}</p>
                </div>
                <ButtonLink href={event.href} variant="secondary" size="sm" className="w-fit">
                  Details
                </ButtonLink>
              </Glow>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Need shop hours or the live team calendar? Email{" "}
          <a href={`mailto:${site.email}`} className="text-ember-300 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </Section>

      <Section
        eyebrow="A year on the team"
        heading="How a season runs"
        lede={<p>The shape of the year barely changes; the game does.</p>}
        tone="surface"
      >
        <Timeline
          entries={rhythm.map((step) => ({
            label: step.when,
            content: (
              <div
                key={step.when}
                className="rounded-2xl border border-white/8 bg-surface p-6 shadow-card sm:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight text-bright">{step.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">{step.body}</p>
              </div>
            ),
          }))}
        />
      </Section>

      <Section heading="Get involved">
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={paths.join} withArrow>
            Join the team
          </ButtonLink>
          <ButtonLink href={season.links.tba} variant="secondary">
            The Blue Alliance
          </ButtonLink>
          <ButtonLink href={paths.outreach.events} variant="secondary">
            Past events
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
