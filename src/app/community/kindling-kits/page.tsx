import type { Metadata } from "next";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { kindlingKits, kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Kindling Kits",
  description: "Recyclable kits with a build-along video, made for the kitchen table.",
};

export default function KindlingKitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kindling Kits"
        title="Kindling Kits"
        lede={kindlingKits.intro}
        image={kindlingKits.photo}
      />

      <Section>
        <Photo src={kindlingKits.photo} alt="A Kindling Kit" className="aspect-4/3 min-h-80 w-full" />
      </Section>

      <Section heading="Follow the video" tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {kitPages.map((kit) => (
            <LinkCard
              key={kit.href}
              href={kit.href}
              image={kit.image}
              title={kit.title}
              description={kit.summary}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
