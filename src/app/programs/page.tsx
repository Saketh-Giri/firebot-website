import type { Metadata } from "next";
import { FlowingMenu } from "@/components/fx/FlowingMenu";
import { PageHero } from "@/components/ui/PageHero";
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
      <section className="pb-24 md:pb-32">
        <FlowingMenu
          items={[
            ...programs.map((program) => ({
              label: program.title,
              href: program.href,
              meta: program.eyebrow,
              image: program.cover,
              tagline: program.short,
            })),
            {
              label: "FLL Mentorship",
              href: paths.outreach.fll,
              meta: "Outreach",
              image: "/images/fll-mentorship/03-img-20151121-172506-1.jpg",
              tagline: "Founding and coaching FIRST LEGO League teams in Sunnyvale.",
            },
          ]}
        />
      </section>
    </>
  );
}
