import type { Metadata } from "next";
import { PeopleRoster } from "@/components/site/PeopleRoster";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { leadGroups, leadsIntro } from "@/content/about/people";

export const metadata: Metadata = {
  title: "Leads",
  description: "Student leadership from the 2025–26 season. 2026–27 leads will be posted after tryouts.",
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
