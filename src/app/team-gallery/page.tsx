import type { Metadata } from "next";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { albums } from "@/content/media";

export const metadata: Metadata = {
  title: "Team Gallery",
  description:
    "Thirty albums of photos from Fremont High Robotics seasons, regionals, qualifiers, and outreach going back to 2014.",
};

export default function TeamGalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A decade of seasons." lede="Build, compete, outreach." />

      <Section>
        <Gallery items={albums} />
      </Section>
    </>
  );
}
