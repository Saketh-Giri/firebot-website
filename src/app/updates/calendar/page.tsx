import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { paths } from "@/content/paths";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Meetings, build sessions, outreach events, and competitions for the current Fremont High Robotics season.",
};

/**
 * The live site embeds a Google Calendar. Point this at the team calendar id to
 * light it up; until then the section explains how to get the schedule.
 */
const calendarEmbedSrc =
  "https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles&bgcolor=%23121316&mode=MONTH&showTitle=0&showPrint=0&showTabs=1&showCalendars=0";

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Calendar"
        lede="Build season typically runs January through April. Outreach continues year-round."
      />

      <Section>
        <div className="overflow-hidden rounded-2xl border border-white/10 surface-panel shadow-lift">
          <div className="flex items-center gap-2.5 border-b border-white/8 px-5 py-3.5">
            <span aria-hidden className="size-2 rounded-full bg-ember-500" />
            <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
              Season schedule &middot; Pacific Time
            </p>
          </div>
          <iframe
            src={calendarEmbedSrc}
            title="Fremont High Robotics calendar"
            className="h-[70vh] min-h-[520px] w-full"
            loading="lazy"
            /* The embed only ships a light theme; inverting keeps it on-brand. */
            style={{ filter: "invert(0.93) hue-rotate(180deg)" }}
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          Need the live team calendar? Email{" "}
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
          <ButtonLink href={paths.outreach.events} variant="secondary">
            Past events
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
