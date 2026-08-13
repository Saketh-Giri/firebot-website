import type { Metadata } from "next";
import { KitPageView } from "@/components/site/KitPageView";
import { kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Cardboard Chords",
  description:
    "Build a cardboard 4-string guitar and learn the science behind how string instruments work.",
};

export default function CardboardChordsPage() {
  return <KitPageView kit={kitPages.find((kit) => kit.slug === "cardboard-chords")!} />;
}
