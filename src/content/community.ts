export interface Lesson {
  name: string;
  description: string;
  href?: string;
}

export const communityImpact = {
  missionEyebrow: "Mission",
  mission: "Spark the next generation of STEAM leaders through hands-on lessons and kits.",
  roadmapHeading: "Roadmap",
  roadmap: [
    "Community Impact is a multi-year program — bigger than any single season of demos. We design lessons that are scalable, affordable, and easy to teach.",
  ],
  photo: "/images/community-impact/04-99b5f0ea-1275-4b70-afa8-a22e280289f9-1-105-c.jpg",
};

export const torchbearingTutors = {
  intro:
    "Since spring 2023, Firebots teach custom STEAM lessons at six Sunnyvale afterschool programs. No experience required.",
  lessonsHeading: "Lessons",
  lessons: [
    {
      name: "Wind Flyer",
      description: "Flight, weight, and the engineering design process.",
      href: "/airplane-launcher",
    },
    {
      name: "Hurricane Housing",
      description: "Build structures that survive a simulated storm.",
    },
    {
      name: "Marble Coaster",
      description: "PVC, paper rolls, and energy in motion.",
      href: "/marblecoaster",
    },
  ] satisfies Lesson[],
};

export const kindlingKits = {
  intro: [
    "Engineering in a box — recyclable materials, a build-along video, and a kitchen-table project.",
  ],
  photo: "/images/kindling-kits/01-image.png",
  kits: [
    { name: "Marble Coaster", href: "/marblecoaster" },
    { name: "Airplane Launcher", href: "/airplane-launcher" },
    { name: "Cardboard Chords", href: "/cardboard-chords" },
  ],
};

export interface KitPage {
  slug: "marblecoaster" | "airplane-launcher" | "cardboard-chords";
  title: string;
  summary: string;
  activities: {
    heading: string;
    body: string;
    survey?: { label: string; body: string; href?: string };
  }[];
}

export const kitPages: KitPage[] = [
  {
    slug: "marblecoaster",
    title: "Marble Coaster",
    summary: "A roller coaster from PVC and paper. Race a marble through it.",
    activities: [
      {
        heading: "The build",
        body: "Learn energy and design while building a track for a marble. Watch out, Six Flags.",
        survey: {
          label: "Feedback",
          body: "Tell us how the build went.",
          href: "https://forms.gle/P4zCVRimEi3LZ1QB8",
        },
      },
    ],
  },
  {
    slug: "airplane-launcher",
    title: "Airplane Launcher",
    summary: "Lift, design, and a launcher for paper planes.",
    activities: [
      {
        heading: "The build",
        body: "Explore aerodynamics, then build a simple launcher to test your planes.",
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
    summary: "A four-string cardboard guitar and the science of sound.",
    activities: [
      {
        heading: "The build",
        body: "Build a cardboard guitar and learn how string instruments work.",
        survey: {
          label: "Feedback",
          body: "Tell us how the build went.",
        },
      },
    ],
  },
];
