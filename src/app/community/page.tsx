import type { Metadata } from "next";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow, Section } from "@/components/ui/Section";
import { communityImpact } from "@/content/community";
import { paths } from "@/content/paths";

export const metadata: Metadata = {
  title: "Community Impact",
  description: "Hands-on STEAM for local youth through Torchbearing Tutors and Kindling Kits.",
};

export default function CommunityImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title="Community Impact"
        lede={communityImpact.roadmap}
        image={communityImpact.photo}
      />

      <Section tone="glow">
        <figure className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mx-auto">{communityImpact.missionEyebrow}</Eyebrow>
          <blockquote className="mt-6 text-2xl leading-snug font-medium tracking-tight md:text-3xl">
            {communityImpact.mission}
          </blockquote>
        </figure>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Photo
            src={communityImpact.photo}
            alt="Community Impact volunteers with students"
            className="aspect-4/3 min-h-72 w-full md:col-span-2"
          />
          {communityImpact.extraPhotos.map((photo) => (
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="aspect-4/3 min-h-56 w-full"
            />
          ))}
        </div>
      </Section>

      <Section heading="Two paths" tone="surface">
        <div className="grid gap-5 md:grid-cols-2">
          <LinkCard
            href={paths.community.tutors}
            image={communityImpact.extraPhotos[1]?.src}
            eyebrow="In schools"
            title="Torchbearing Tutors"
            description="STEAM lessons at six Sunnyvale afterschool programs."
          />
          <LinkCard
            href={paths.community.kits}
            image="/images/kindling-kits/01-image.png"
            eyebrow="At home"
            title="Kindling Kits"
            description="Build-along kits from recyclable materials."
          />
        </div>
      </Section>
    </>
  );
}
