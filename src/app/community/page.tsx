import type { Metadata } from "next";
import { DotGrid } from "@/components/fx/DotGrid";
import { Roadmap } from "@/components/fx/Roadmap";
import { TextGenerate } from "@/components/fx/TextGenerate";
import { TiltCard } from "@/components/fx/TiltCard";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { communityImpact, torchbearingTutors } from "@/content/community";
import { paths } from "@/content/paths";

export const metadata: Metadata = {
  title: "Community Impact",
  description: "Hands-on STEAM for local youth through Torchbearing Tutors and Kindling Kits.",
};

export default function CommunityImpactPage() {
  const { gallery } = communityImpact;

  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title="Community Impact"
        lede={communityImpact.roadmap}
        image={communityImpact.photo}
      />

      <section className="relative isolate overflow-hidden py-24 md:py-36">
        <DotGrid className="mask-vignette -z-10" gap={28} radius={180} />
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute top-1/2 left-1/2 -z-20 size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/10 blur-[130px]"
        />
        <div className="container-page">
          <figure className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow className="mx-auto">{communityImpact.missionEyebrow}</Eyebrow>
            </Reveal>
            <TextGenerate
              text={communityImpact.mission}
              className="text-balance-tight mt-8 text-2xl leading-snug font-medium tracking-tight text-bright md:text-[2.4rem] md:leading-[1.2]"
            />
          </figure>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <Photo
              src={gallery.wide.src}
              alt={gallery.wide.alt}
              className="aspect-[21/10] min-h-72 w-full"
              sizes="100vw"
            />
          </Reveal>
          {gallery.pair.map((photo, i) => (
            <Reveal key={photo.src} delay={0.08 + i * 0.08}>
              <TiltCard maxTilt={4} scale={1.01}>
                <Photo src={photo.src} alt={photo.alt} className="aspect-4/3 min-h-56 w-full" />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section heading="Two paths" tone="surface">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <LinkCard
              href={paths.community.tutors}
              image={torchbearingTutors.photo.src}
              eyebrow="In schools"
              title="Torchbearing Tutors"
              description="STEAM lessons at six Sunnyvale afterschool programs."
              className="h-full"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <LinkCard
              href={paths.community.kits}
              image="/images/kindling-kits/01-image.png"
              eyebrow="At home"
              title="Kindling Kits"
              description="Build-along kits from recyclable materials."
              className="h-full"
            />
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Our roadmap"
        heading="A plan that outlasts any one season"
        lede={<p>{communityImpact.roadmapIntro}</p>}
        narrow
      >
        <Roadmap stages={communityImpact.roadmapStages} className="mt-4" />
      </Section>
    </>
  );
}
