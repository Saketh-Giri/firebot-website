import type { BlueprintKind } from "@/components/fx/KitBlueprint";
import { paths } from "../paths";

export interface Lesson {
  name: string;
  description: string;
  href?: string;
  blueprint: BlueprintKind;
}

export interface RoadmapStage {
  label: string;
  title: string;
  goals: string[];
}

export const communityImpact = {
  missionEyebrow: "Our mission",
  mission:
    "Inspire youth in our community to become the next generation of STEAM leaders — through lessons, kits, and hands-on activities.",
  roadmap:
    "A multi-year program, bigger than any one season of demos. We design lessons that are scalable, affordable, and easy to teach.",
  photo: "/images/community-impact/04-99b5f0ea-1275-4b70-afa8-a22e280289f9-1-105-c.jpg",
  gallery: {
    wide: {
      src: "/images/team-gallery/26-img-20211113-142848.jpg",
      alt: "Young kids gather around a Firebots competition robot at an outdoor event",
    },
    pair: [
      {
        src: "/images/team-gallery/13-img-6395-heic.png",
        alt: "FTC robots on a demo table in a school gym",
      },
      {
        src: "/images/team-gallery/07-img-8090.jpeg",
        alt: "Students gather around a laptop and a small robot during a workshop",
      },
    ],
  },
  roadmapIntro:
    "Community Impact took the hopes of leads from several different years and turned them into a plan that outlasts any one season. Each year builds on the last.",
  roadmapStages: [
    {
      label: "Year 1",
      title: "Pilot",
      goals: [
        "Launch Community Impact as a program, not a one-off event",
        "Teach the first STEAM lessons at Sunnyvale afterschool programs",
        "Prototype a build-at-home kit from recyclable materials",
      ],
    },
    {
      label: "Year 2",
      title: "Launch",
      goals: [
        "Launch Kindling Kits, partnering with our FRC team to create custom parts",
        "Develop Torchbearing Tutors lessons and partner with our FTC teams to volunteer at schools",
        "Establish a metrics system to measure impact within our community and organization",
      ],
    },
    {
      label: "Year 3",
      title: "Unify",
      goals: [
        "Unify the organization through the outreach-hour requirements",
        "Plan a customized in-class curriculum for 3rd grade students",
        "Develop Raspberry Pi-based robots for outreach events",
      ],
    },
    {
      label: "Year 4",
      title: "Scale",
      goals: [
        "Expand Torchbearing Tutors to other elementary districts",
        "Partner with a corporate sponsor to standardize production of Kindling Kits",
        "Modularize lessons into outreach packages for other FIRST teams",
      ],
    },
  ] satisfies RoadmapStage[],
};

export const torchbearingTutors = {
  intro:
    "Since spring 2023, Firebots teach custom STEAM lessons at six Sunnyvale afterschool programs. No experience required.",
  heroPhoto: "/images/team-gallery/07-img-8090.jpeg",
  photo: {
    src: "/images/team-gallery/09-070d8fba-3df7-459f-9633-97a23b9b8f98-1-105-c.jpeg",
    alt: "Students build a cardboard arm during a hands-on lesson",
  },
  approachHeading: "Built in the shop, taught in the classroom",
  approach: [
    "Every lesson is designed by Firebots — technical and non-technical members together — and tested before it reaches a classroom. The goal is a lesson that is scalable, affordable, and easy for anyone to teach.",
    "Members run the sessions in small groups at afterschool programs around Sunnyvale. The kids need no robotics background; they just need to build.",
  ],
  facts: [
    { value: "6", label: "Sunnyvale afterschool programs" },
    { value: "3", label: "Lessons in rotation" },
    { value: "2023", label: "Spring of the first lesson", plain: true },
  ],
  lessonsHeading: "Our lessons",
  lessons: [
    {
      name: "Wind Flyer",
      description: "Students explore flight, weight, and the engineering design process.",
      href: paths.community.kindlingKits.airplaneLauncher,
      blueprint: "airplane-launcher",
    },
    {
      name: "Hurricane Housing",
      description: "Build structures meant to survive a simulated storm.",
      blueprint: "hurricane-housing",
    },
    {
      name: "Marble Coaster",
      description: "PVC, paper rolls, and the fundamentals of energy in motion.",
      href: paths.community.kindlingKits.marbleCoaster,
      blueprint: "marble-coaster",
    },
  ] satisfies Lesson[],
};

export const kindlingKits = {
  intro: "Launched in 2023: recyclable materials, a build-along video, and a kitchen-table project.",
  photo: "/images/kindling-kits/01-image.png",
  how: [
    {
      title: "Collect",
      body: "Everything in a kit is cheap and mostly recyclable: paper rolls, cardboard, tape, a marble or two.",
    },
    {
      title: "Build",
      body: "Follow the build-along video at the kitchen table. No tools beyond scissors and glue.",
    },
    {
      title: "Learn",
      body: "Each kit teaches one idea and lets you test it: energy, flight, or sound.",
    },
  ],
  kits: [
    { name: "Marble Coaster", href: paths.community.kindlingKits.marbleCoaster },
    { name: "Airplane Launcher", href: paths.community.kindlingKits.airplaneLauncher },
    { name: "Cardboard Chords", href: paths.community.kindlingKits.cardboardChords },
  ],
};

export interface KitPage {
  slug: "marble-coaster" | "airplane-launcher" | "cardboard-chords";
  title: string;
  summary: string;

  teaches: string;
  blueprint: BlueprintKind;

  photo?: string;
  href: string;
  activities: {
    heading: string;
    body: string;
    survey?: { label: string; body: string; href?: string };
  }[];
}

export const kitPages: KitPage[] = [
  {
    slug: "marble-coaster",
    title: "Marble Coaster",
    href: paths.community.kindlingKits.marbleCoaster,
    teaches: "Energy",
    blueprint: "marble-coaster",
    photo: "/images/kindling-kits/01-image.png",
    summary: "Design a roller coaster. Learn energy. Race a marble. Watch out, Six Flags.",
    activities: [
      {
        heading: "About Marble Coaster",
        body: "Learn about energy and design while building a track for a marble from PVC and paper. Then race the marble through it.",
        survey: {
          label: "Marble Coaster feedback",
          body: "We hope you enjoyed building your marble coaster. Leave your feedback here.",
          href: "https://forms.gle/P4zCVRimEi3LZ1QB8",
        },
      },
    ],
  },
  {
    slug: "airplane-launcher",
    title: "Airplane Launcher",
    href: paths.community.kindlingKits.airplaneLauncher,
    teaches: "Flight",
    blueprint: "airplane-launcher",
    summary:
      "Learn the physics behind how airplanes fly, then put together a simple launcher to test your paper airplane designs.",
    activities: [
      {
        heading: "About Airplane Launcher",
        body: "Explore aerodynamics, then build a launcher and see how your planes perform.",
        survey: {
          label: "Feedback",
          body: "Tell us how the build went.",
        },
      },
    ],
  },
  {
    slug: "cardboard-chords",
    title: "Cardboard Chords",
    href: paths.community.kindlingKits.cardboardChords,
    teaches: "Sound",
    blueprint: "cardboard-chords",
    summary: "Build a cardboard four-string guitar and learn the science behind how string instruments work.",
    activities: [
      {
        heading: "About Cardboard Chords",
        body: "Build a cardboard guitar and learn how string instruments make sound.",
        survey: {
          label: "Feedback",
          body: "Tell us how the build went.",
        },
      },
    ],
  },
];

export const kitBySlug = (slug: KitPage["slug"]) => kitPages.find((kit) => kit.slug === slug)!;
