import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { programBySlug } from "@/content/programs";

export const metadata: Metadata = {
  title: "Business and Marketing (BaM)",
  description:
    "The Business, Events, and Media subteams handle finances, outreach, branding, and this website across every Fremont High Robotics competition team.",
};

export default function BamPage() {
  return (
    <ProgramPage
      program={programBySlug("business-and-marketing")}
      image="/images/business-and-marketing/02-img-0120-jpg.jpg"
    />
  );
}
