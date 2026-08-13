import type { Metadata } from "next";
import { KitPageView } from "@/components/site/KitPageView";
import { kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Airplane Launcher",
  description:
    "Learn the physics behind how airplanes fly and put together a simple launcher to test your paper airplane designs.",
};

export default function AirplaneLauncherPage() {
  return <KitPageView kit={kitPages.find((kit) => kit.slug === "airplane-launcher")!} />;
}
