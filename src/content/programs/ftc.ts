import { paths } from "../paths";
import type { Program } from "./types";

export const ftc: Program = {
  slug: "ftc",
  href: paths.programs.ftc,
  eyebrow: "FTC",
  title: "FIRST Tech Challenge",
  short: "Four teams where new members learn robotics — 2v2 matches on a 12×12 ft field.",
  cover: "/images/team-gallery/18-img-9620-jpg.jpg",
  highlights: [
    { value: "4", label: "FTC teams" },
    { value: "2v2", label: "alliance matches" },
    { value: "~12", label: "students per team" },
  ],
  sections: [
    {
      heading: "Where most students start",
      body: "Tryouts look at core values, not prior knowledge. Students who excel can move to the advanced FTC team or FRC.",
      image: "/images/team-gallery/18-img-9620-jpg.jpg",
      imageAlt: "An FTC team with their robot",
    },
  ],
  subteamsHeading: "Four subteams",
  subteams: [
    { name: "Design & Manufacturing", description: "CAD and build the competition robot." },
    { name: "Software", description: "Autonomous routines and driver controls." },
    { name: "Business and Marketing", description: "Notebook, outreach, and judge presentations." },
    { name: "Community Impact", description: "STEAM lessons, kits, and local events." },
  ],
  logo: "/images/ftc/01-firsttech-iconvert-rgb.png",
  teams: [
    { name: "Sparkbots", number: "16532", image: "/images/ftc/02-sparkbot-head.png" },
    { name: "Infernobots", number: "16533", image: "/images/ftc/03-infernobot-head.png" },
    { name: "Emberbots", number: "26106", image: "/images/ftc/04-emberbots-head.png" },
    { name: "Electrobots", number: "30541", image: "/images/home/05-7ebe-mv2.png" },
  ],
};
