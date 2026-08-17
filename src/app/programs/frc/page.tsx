import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { FrcSeasonResults } from "@/components/site/SeasonResults";
import { frc } from "@/content/programs";

export const metadata: Metadata = {
  title: "FRC",
  description:
    "Team 3501 Firebots compete in the FIRST Robotics Competition across Mechanical Design, Manufacturing, Electrical, Software, and Integration.",
};

export default function FrcPage() {
  return (
    <>
      <ProgramPage program={frc} />
      <FrcSeasonResults />
    </>
  );
}
