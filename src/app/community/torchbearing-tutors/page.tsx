import type { Metadata } from "next";
import { Card, LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
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
        title="Torchbearing Tutors"
        lede={torchbearingTutors.intro}
        image="/images/community-impact/04-99b5f0ea-1275-4b70-afa8-a22e280289f9-1-105-c.jpg"
      />

      <Section>
        <Photo
          src={torchbearingTutors.photo}
          alt="Torchbearing Tutors lesson materials"
          className="aspect-21/9 min-h-64 w-full"
        />
      </Section>

      <Section eyebrow={torchbearingTutors.lessonsHeading} heading="Lessons we teach" tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {torchbearingTutors.lessons.map((lesson) =>
            lesson.href ? (
              <LinkCard
                key={lesson.name}
                href={lesson.href}
                title={lesson.name}
                description={lesson.description}
              />
            ) : (
              <Card key={lesson.name} className="h-full">
                <h3 className="text-xl font-semibold tracking-tight">{lesson.name}</h3>
                <p className="mt-3 text-sm text-muted">{lesson.description}</p>
              </Card>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
