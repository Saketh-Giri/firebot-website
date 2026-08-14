import type { Metadata } from "next";
import { KitPageView } from "@/components/site/KitPageView";
import { kitBySlug } from "@/content/community";

export const metadata: Metadata = {
  title: "Cardboard Chords",
  description:
    "Build a cardboard four-string guitar and learn the science behind how string instruments work.",
};

export default function CardboardChordsPage() {
  return <KitPageView kit={kitBySlug("cardboard-chords")} />;
}
