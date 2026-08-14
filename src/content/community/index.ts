import { paths } from "../paths";

export interface Lesson {
  name: string;
  description: string;
  href?: string;
}

export const communityImpact = {
  missionEyebrow: "Our mission",
  mission:
    "Inspire youth in our community to become the next generation of STEAM leaders — through lessons, kits, and hands-on activities.",
  roadmap:
    "A multi-year program, bigger than any one season of demos. We design lessons that are scalable, affordable, and easy to teach.",
  photo: "/images/community-impact/04-99b5f0ea-1275-4b70-afa8-a22e280289f9-1-105-c.jpg",
  extraPhotos: [
    {
      src: "/images/community-impact/02-6df8-mv2.png",
      alt: "Community Impact lesson materials",
    },
    {
      src: "/images/team-gallery/09-070d8fba-3df7-459f-9633-97a23b9b8f98-1-105-c.jpeg",
      alt: "Students at a Community Impact activity",
    },
  ],
};

export const torchbearingTutors = {
  intro: "Since spring 2023, Firebots teach custom STEAM lessons at six Sunnyvale afterschool programs. No experience required.",
  lessonsHeading: "Our lessons",
  photo: "/images/community-impact/03-922f-mv2.png",
  lessons: [
    {
      name: "Wind Flyer",
      description: "Students explore flight, weight, and the engineering design process.",
      href: paths.community.kindlingKits.airplaneLauncher,
    },
    {
      name: "Hurricane Housing",
      description: "Build structures meant to survive a simulated storm.",
    },
    {
      name: "Marble Coaster",
      description: "PVC, paper rolls, and the fundamentals of energy in motion.",
      href: paths.community.kindlingKits.marbleCoaster,
    },
  ] satisfies Lesson[],
};

export const kindlingKits = {
  intro: "Launched in 2023: recyclable materials, a build-along video, and a kitchen-table project.",
  photo: "/images/kindling-kits/01-image.png",
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
  image: string;
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
    image: "/images/kindling-kits/01-image.png",
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
    image: "/images/community-impact/02-6df8-mv2.png",
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
    image: "/images/community-impact/01-dark-pink.png",
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
