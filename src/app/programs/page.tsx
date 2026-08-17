import type { Metadata } from "next";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { paths } from "@/content/paths";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "FRC, FTC, Business, and Marketing — the programs that make up Fremont High Robotics.",
};

export default function ProgramsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="What we run"
        lede="Four competition and support programs, plus FLL mentorship in the community."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {programs.map((program) => (
            <LinkCard
              key={program.slug}
              href={program.href}
              image={program.cover}
              eyebrow={program.eyebrow}
              title={program.title}
              description={program.short}
            />
          ))}
        </div>
        <div className="mt-8">
          <LinkCard
            href={paths.outreach.fll}
            title="FLL Mentorship"
            description="Founding and coaching FIRST LEGO League teams in Sunnyvale."
          />
        </div>
      </Section>
    </>
  );
}
