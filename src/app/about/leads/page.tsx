import type { Metadata } from "next";
import { PeopleRoster } from "@/components/site/PeopleRoster";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { leadGroups, leadsIntro } from "@/content/about/people";

export const metadata: Metadata = {
  title: "Leads",
  description: "Student leadership for the 2026–27 season: executive, technical, and non-technical leads.",
};

export default function LeadsPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Our leadership" lede={leadsIntro} />

      <Section>
        <PeopleRoster groups={leadGroups} />
      </Section>
    </>
  );
}
