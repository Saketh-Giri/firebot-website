import type { Metadata } from "next";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { previousEvents } from "@/content/outreach";

export const metadata: Metadata = {
  title: "Previous Events",
  description:
    "Outreach binders and event recaps from four seasons of Fremont High Robotics demonstrations, workshops, and community events.",
};

export default function PreviousEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="175+ outreach events."
        lede="Demos, workshops, and qualifiers — by season."
      />

      <Section>
        <Gallery items={previousEvents} columns={2} />
      </Section>
    </>
  );
}
