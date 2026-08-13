import type { Metadata } from "next";
import Image from "next/image";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import { kindlingKits, kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Kindling Kits",
  description: "Engineering in a box — recyclable kits with build-along videos.",
};

const kitSummary = Object.fromEntries(kitPages.map((kit) => [`/${kit.slug}`, kit.summary]));

export default function KindlingKitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kindling Kits"
        title="Engineering in a box."
        lede="Recyclable parts. Kitchen-table builds."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Prose paragraphs={kindlingKits.intro} />
          <Image
            src={kindlingKits.photo}
            alt="A Kindling Kit"
            width={900}
            height={900}
            className="w-full rounded-2xl border border-white/10 object-cover shadow-lift"
          />
        </div>
      </Section>

      <Section eyebrow="Kits" heading="Follow the video." tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {kindlingKits.kits.map((kit) => (
            <LinkCard
              key={kit.href}
              href={kit.href}
              title={kit.name}
              description={kitSummary[kit.href]}
              className="h-full"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
