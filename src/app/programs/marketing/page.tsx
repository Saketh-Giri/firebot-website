import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { marketing } from "@/content/programs";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "The Marketing subteam handles brand, social media, photography, videography, this website, and community events.",
};

export default function MarketingPage() {
  return <ProgramPage program={marketing} />;
}
