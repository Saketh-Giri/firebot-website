export interface Subteam {
  name: string;
  description: string;
  image?: string;
}

export interface Program {
  slug: "frc" | "ftc" | "business-and-marketing";
  eyebrow: string;
  title: string;
  short: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  subteamsHeading: string;
  subteams: Subteam[];
  logo?: string;
  mascot?: string;
  hero?: string;
  teams?: { name: string; number: string; image: string }[];
}

export const programs: Program[] = [
  {
    slug: "frc",
    eyebrow: "FRC · 3501",
    title: "The big robot.",
    short: "Design, build, and drive a 120 lb machine in weeks.",
    intro:
      "FRC is our flagship program. About 30 students across Design, Manufacturing, Electrical, and Software ship one competition robot each season.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Members usually start in FTC, then mentors invite them into Firebots. Subteams specialize, then integrate before competition. Business and Marketing runs finance, outreach, and brand alongside the build.",
        ],
      },
    ],
    subteamsHeading: "Technical subteams",
    subteams: [
      {
        name: "Mechanical Design",
        description: "CAD the robot and guide manufacturing through build season.",
        image: "/images/frc/03-mechdesign-logo.png",
      },
      {
        name: "Manufacturing",
        description: "Cut, machine, and assemble the robot base for electrical and software.",
        image: "/images/frc/04-manufactoring-logo.png",
      },
      {
        name: "Integration",
        description: "Keep every subteam aligned on mechanisms and decisions.",
        image: "/images/frc/05-integration-logo.png",
      },
      {
        name: "Software",
        description: "Controls, autonomy, vision, and reliable driver code.",
        image: "/images/frc/06-software-logo.png",
      },
    ],
    logo: "/images/frc/01-firstrobotics-iconvert-rgb.png",
    mascot: "/images/frc/02-frc-logo-final.png",
  },
  {
    slug: "ftc",
    eyebrow: "FTC",
    title: "FIRST Tech Challenge",
    short: "Four teams where new members learn robotics from the ground up.",
    intro:
      "FTC is where most students start. Smaller teams design, build, and program Android-based robots for 2v2 alliance matches — plus notebooks, outreach, and judging.",
    sections: [
      {
        heading: "A path into Firebots",
        paragraphs: [
          "Tryouts look for curiosity and character, not prior experience. Strong FTC members can move to the advanced FTC team or FRC.",
        ],
      },
    ],
    subteamsHeading: "Four subteams",
    subteams: [
      {
        name: "Design & Manufacturing",
        description: "CAD and build the competition machine.",
      },
      {
        name: "Software",
        description: "Autonomous routines and driver controls.",
      },
      {
        name: "Business & Marketing",
        description: "Notebook, outreach, and judge presentations.",
      },
      {
        name: "Community Impact",
        description: "STEAM lessons, kits, and local events.",
      },
    ],
    logo: "/images/ftc/01-firsttech-iconvert-rgb.png",
    teams: [
      { name: "Sparkbots", number: "16532", image: "/images/ftc/02-sparkbot-head.png" },
      { name: "Infernobots", number: "16533", image: "/images/ftc/03-infernobot-head.png" },
      { name: "Emberbots", number: "26106", image: "/images/ftc/04-emberbots-head.png" },
      { name: "Electrobots", number: "30541", image: "/images/home/05-7ebe-mv2.png" },
    ],
  },
  {
    slug: "business-and-marketing",
    eyebrow: "BaM",
    title: "Business and Marketing",
    short: "Finance, events, and media across every team.",
    intro:
      "BaM keeps the organization funded, visible, and connected — grants, sponsors, outreach events, socials, photo, video, and this site.",
    sections: [
      {
        heading: "Cross-team by design",
        paragraphs: [
          "Members from every competition team share Business, Events, and Media projects. Specialize where you care most; move between projects as the season needs.",
        ],
      },
    ],
    subteamsHeading: "Three divisions",
    subteams: [
      {
        name: "Business",
        description: "Budgets, sponsors, newsletters, and judging.",
      },
      {
        name: "Events",
        description: "Outreach demos and community partnerships year-round.",
      },
      {
        name: "Media",
        description: "Brand, merch, socials, photography, and videography.",
      },
    ],
    logo: "/images/organizational-structure/06-bam-logo.png",
  },
];

export const programBySlug = (slug: Program["slug"]) =>
  programs.find((program) => program.slug === slug)!;
