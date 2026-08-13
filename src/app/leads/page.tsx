import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PersonCard } from "@/components/ui/PersonCard";
import { Section } from "@/components/ui/Section";
import { leadGroups, leadsIntro } from "@/content/people";

export const metadata: Metadata = {
  title: "Leads",
  description: "Student leadership for Firebots, 2025–26.",
};

export default function LeadsPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Meet the leads." lede={leadsIntro} brandMark />

      <Section>
        <div className="space-y-16">
          {leadGroups.map((group) => (
            <div key={group.heading}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-white/8 pb-5">
                <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                  {group.heading}
                </h2>
                <p className="font-mono text-xs text-dim tabular-nums">
                  {String(group.people.length).padStart(2, "0")}
                </p>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.people.map((person) => (
                  <PersonCard key={person.name} person={person} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
