import type { Metadata } from "next";
import { PeopleRoster } from "@/components/site/PeopleRoster";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { leadGroups, leadsIntro } from "@/content/about/people";

export const metadata: Metadata = {
  title: "Leads",
  description: "Student leadership for Fremont High Robotics, 2025–26.",
};

export default function LeadsPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Our leadership" lede={leadsIntro} brandMark />

      <Section>
        <PeopleRoster groups={leadGroups} />
      </Section>
    </>
  );
}
