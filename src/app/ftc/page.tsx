import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { programBySlug } from "@/content/programs";

export const metadata: Metadata = {
  title: "FTC",
  description:
    "Our FIRST Tech Challenge teams introduce engineering, community impact, business, and leadership to new members through four main subteams.",
};

export default function FtcPage() {
  return (
    <ProgramPage
      program={programBySlug("ftc")}
      image="/images/team-gallery/18-img-9620-jpg.jpg"
    />
  );
}
