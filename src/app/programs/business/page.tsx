import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { business } from "@/content/programs";

export const metadata: Metadata = {
  title: "Business",
  description:
    "The Business subteam manages finances, sponsor relations, newsletters, grants, and judging across Fremont High Robotics.",
};

export default function BusinessPage() {
  return <ProgramPage program={business} />;
}
