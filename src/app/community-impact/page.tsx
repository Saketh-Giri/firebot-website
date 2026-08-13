import type { Metadata } from "next";
import Image from "next/image";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow, Prose, Section } from "@/components/ui/Section";
import { communityImpact } from "@/content/community";

export const metadata: Metadata = {
  title: "Community Impact",
  description: "Hands-on STEAM for local youth through lessons and kits.",
};

export default function CommunityImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title="Bigger than one season."
        image={communityImpact.photo}
        brandMark
      />

      <Section tone="glow">
        <figure className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mx-auto">{communityImpact.missionEyebrow}</Eyebrow>
          <blockquote className="text-balance-tight mt-6 text-2xl font-medium tracking-tight md:text-3xl">
            {communityImpact.mission}
          </blockquote>
        </figure>
      </Section>

      <Section eyebrow="Roadmap" heading="Scalable. Affordable. Easy to teach." tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Prose paragraphs={communityImpact.roadmap} />
          <Image
            src={communityImpact.photo}
            alt="Community Impact volunteers"
            width={900}
            height={900}
            className="w-full rounded-2xl border border-white/10 object-cover shadow-lift"
          />
        </div>
      </Section>

      <Section eyebrow="Programs" heading="Two paths.">
        <div className="grid gap-5 md:grid-cols-2">
          <LinkCard
            href="/torchbearing-tutors"
            eyebrow="In schools"
            title="Torchbearing Tutors"
            description="Afterschool STEAM at six Sunnyvale sites."
            className="h-full"
          />
          <LinkCard
            href="/kindling-kits"
            eyebrow="At home"
            title="Kindling Kits"
            description="Build-along kits from recyclable materials."
            className="h-full"
          />
        </div>
      </Section>
    </>
  );
}
