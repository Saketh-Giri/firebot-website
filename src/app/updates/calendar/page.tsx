import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Calendar"
        lede="Build season typically runs January through April. Outreach continues year-round. Tryout details go out in August and September."
      />

      <Section heading="Upcoming" lede={season.calendar.intro}>
        <ul className="space-y-4">
          {season.calendar.events.map((event) => (
            <li key={event.title}>
              <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.16em] text-ember-300 uppercase">
                    {event.when}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{event.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{event.detail}</p>
                </div>
                <ButtonLink href={event.href} variant="secondary" className="shrink-0">
                  Details
                </ButtonLink>
              </Card>
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

      <Section heading="Get involved" tone="surface">
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
