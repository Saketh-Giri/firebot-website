import type { Metadata } from "next";
import { Card, LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { torchbearingTutors } from "@/content/community";

export const metadata: Metadata = {
  title: "Torchbearing Tutors",
  description: "Firebots teach STEAM at six Sunnyvale afterschool programs.",
};

export default function TorchbearingTutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Torchbearing Tutors"
        title="Pass the torch."
        lede={torchbearingTutors.intro}
      />

      <Section
        eyebrow={torchbearingTutors.lessonsHeading}
        heading="Three afternoon builds."
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {torchbearingTutors.lessons.map((lesson) =>
            lesson.href ? (
              <LinkCard
                key={lesson.name}
                href={lesson.href}
                title={lesson.name}
                description={lesson.description}
                className="h-full"
              />
            ) : (
              <Card key={lesson.name} className="h-full">
                <h3 className="text-xl font-semibold tracking-tight">{lesson.name}</h3>
                <p className="mt-3 text-muted">{lesson.description}</p>
              </Card>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
