import type { Metadata } from "next";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { albums } from "@/content/updates/media";

export const metadata: Metadata = {
  title: "Team Gallery",
  description:
    "Albums of photos from Fremont High Robotics seasons, regionals, qualifiers, and outreach going back to 2014.",
};

export default function TeamGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Team gallery"
        lede="Build, compete, outreach. Cover photos from seasons going back to 2014 — highlights, not full albums."
        image="/images/team-gallery/02-pxl-20230312-050937766.jpg"
      />

      <Section>
        <Gallery items={albums} />
      </Section>
    </>
  );
}
