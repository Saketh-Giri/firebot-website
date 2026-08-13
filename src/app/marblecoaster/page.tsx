import type { Metadata } from "next";
import { KitPageView } from "@/components/site/KitPageView";
import { kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Marble Coaster",
  description:
    "Learn the physics behind roller coasters and use the fundamentals of energy to help a marble navigate some twists and turns.",
};

export default function MarbleCoasterPage() {
  return <KitPageView kit={kitPages.find((kit) => kit.slug === "marblecoaster")!} />;
}
