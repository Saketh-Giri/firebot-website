import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { programBySlug } from "@/content/programs";

export const metadata: Metadata = {
  title: "FRC",
  description:
    "Team 3501 Firebots compete in the FIRST Robotics Competition across four technical subteams: Mechanical Design, Manufacturing, Electrical, and Software.",
};

export default function FrcPage() {
  return <ProgramPage program={programBySlug("frc")} image="/images/home/06-ee0b-mv2.jpg" />;
}
