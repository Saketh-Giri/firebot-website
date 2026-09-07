import type { Metadata } from "next";
import { PeopleRoster } from "@/components/site/PeopleRoster";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mentorGroups, mentorsIntro } from "@/content/about/people";

export const metadata: Metadata = {
  title: "Mentors",
  description: "Engineers and professionals who advise Fremont High Robotics.",
};

export default function MentorsPage() {
  return (
    <>
      <PageHero eyebrow="Mentors" title="Our mentors" lede={mentorsIntro} />

      <Section>
        <p className="mb-10 font-mono text-xs tracking-[0.16em] text-dim uppercase">
          Select a mentor to read their bio
        </p>
        <PeopleRoster groups={mentorGroups} />
      </Section>
    </>
  );
}
