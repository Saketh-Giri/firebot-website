import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/ProgramPage";
import { ftc } from "@/content/programs";

export const metadata: Metadata = {
  title: "FTC",
  description:
    "Our FIRST Tech Challenge teams introduce engineering, community impact, business, and leadership to new members.",
};

export default function FtcPage() {
  return <ProgramPage program={ftc} />;
}
