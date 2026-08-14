import type { Metadata } from "next";
import { KitPageView } from "@/components/site/KitPageView";
import { kitBySlug } from "@/content/community";

export const metadata: Metadata = {
  title: "Marble Coaster",
  description:
    "Learn the physics behind roller coasters and use the fundamentals of energy to help a marble navigate twists and turns.",
};

export default function MarbleCoasterPage() {
  return <KitPageView kit={kitBySlug("marble-coaster")} />;
}
