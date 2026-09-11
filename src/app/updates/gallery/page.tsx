import type { Metadata } from "next";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { albums } from "@/content/updates/media";
import { imageSize } from "@/lib/image-size";

export const metadata: Metadata = {
  title: "Team Gallery",
  description:
    "Albums of photos from Fremont High Robotics seasons, regionals, qualifiers, and outreach going back to 2014.",
};

export default function TeamGalleryPage() {

  const items = albums.map((album) => ({ ...album, ...(imageSize(album.image) ?? {}) }));

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Team gallery"
        lede="Build, compete, outreach. Cover photos from seasons going back to 2014 — highlights, not full albums."
        image="/images/team-gallery/02-pxl-20230312-050937766.jpg"
      />

      <Section>
        <p className="mb-8 font-mono text-xs tracking-[0.16em] text-dim uppercase">
          {albums.length} albums · select a photo to view it full size
        </p>
        <Gallery items={items} columns={3} />
      </Section>
    </>
  );
}
