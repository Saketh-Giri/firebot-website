import { paths } from "../paths";

export interface CoreValue {
  name: string;
  points: string[];
}

export interface OrgNode {
  name: string;
  detail?: string;
  href?: string;
}

export interface OrgBranch extends OrgNode {

  badge: string;
  children: OrgNode[];
}

export const orgIntro =
  "Student-led by design. Mentors advise; students run the shop, the teams, and the outreach.";

export const orgChart: { root: OrgNode; branches: OrgBranch[] } = {
  root: { name: "Fremont High Robotics", detail: "Student leads · Mentors advise" },
  branches: [
    {
      badge: "FRC",
      name: "Firebots",
      detail: "Team 3501",
      href: paths.programs.frc,
      children: [
        { name: "Design", detail: "VP of Design" },
        { name: "Manufacturing", detail: "VP of Manufacturing" },
        { name: "Integration", detail: "VP of Integration" },
        { name: "Software", detail: "VP of Software" },
      ],
    },
    {
      badge: "FTC",
      name: "Tech Challenge",
      detail: "Four teams",
      href: paths.programs.ftc,
      children: [
        { name: "Sparkbots", detail: "Team 16532" },
        { name: "Infernobots", detail: "Team 16533" },
        { name: "Emberbots", detail: "Team 26106" },
        { name: "Electrobots", detail: "Team 30541" },
      ],
    },
    {
      badge: "BaM",
      name: "Business & Marketing",
      detail: "Every team",
      href: paths.programs.business,
      children: [
        { name: "Business", detail: "Finance, sponsors, judging", href: paths.programs.business },
        { name: "Marketing", detail: "Brand, socials, media", href: paths.programs.marketing },
      ],
    },
    {
      badge: "CI",
      name: "Community Impact",
      detail: "Year-round outreach",
      href: paths.community.index,
      children: [
        { name: "Torchbearing Tutors", detail: "Lessons in schools", href: paths.community.tutors },
        { name: "Kindling Kits", detail: "Build-at-home kits", href: paths.community.kits },
        { name: "Measurement", detail: "Director of Measurement" },
        { name: "Education Programs", detail: "Director of Education" },
      ],
    },
  ],
};

export const competitionTeams = [
  { number: "3501", name: "Firebots", program: "FRC" },
  { number: "16532", name: "Sparkbots", program: "FTC" },
  { number: "26106", name: "Emberbots", program: "FTC" },
  { number: "16533", name: "Infernobots", program: "FTC" },
  { number: "30541", name: "Electrobots", program: "FTC" },
];

export const technicalSubteams = [
  { name: "Mechanical Design", note: "Every competition team" },
  { name: "Mechanical Manufacturing", note: "Every competition team" },
  { name: "Software", note: "Every competition team" },
  { name: "Electrical", note: "Firebots only" },
];

export const nonTechnicalSubteams = [
  { name: "Business", note: "Finances, sponsors, newsletters, and judging" },
  { name: "Marketing", note: "Brand, socials, photography, the website, and events" },
];

export const coreValues: CoreValue[] = [
  {
    name: "Culture of Excellence",
    points: [
      "We aim for quality and reliability in the work we ship.",
      "We act with intention, not on autopilot.",
    ],
  },
  {
    name: "We Not Me",
    points: [
      "We ask how a choice helps the team, not only the individual.",
      "We share credit, share work, and lift others in STEAM.",
    ],
  },
  {
    name: "Be Courageous",
    points: [
      "We speak up, and we do it kindly.",
      "We take smart risks and treat failure as something we can learn from.",
    ],
  },
  {
    name: "Everybody Belongs",
    points: [
      "We respect everyone who walks into the shop.",
      "We debate ideas, not people.",
    ],
  },
  {
    name: "Act with Integrity",
    points: [
      "We do the right thing, including when it is inconvenient.",
      "We own mistakes and stay open to being wrong.",
    ],
  },
];

export const aboutFirst = {
  summary: "FIRST introduces students to science and technology through robotics. Founded by Dean Kamen in 1990.",
  programsHeading: "Programs we participate in",
  programs: [
    { abbr: "FRC", name: "FIRST Robotics Competition", grades: "9th–12th grade" },
    { abbr: "FTC", name: "FIRST Tech Challenge", grades: "7th–12th grade" },
    { abbr: "FLL-C", name: "FIRST Lego League Challenge", grades: "4th–8th grade" },
    { abbr: "FLL-E", name: "FIRST Lego League Explore", grades: "1st–4th grade" },
  ],
};

export const structurePhotos = {
  shop: "/images/team-gallery/25-img-9183-1-jpg.jpg",
  first: "/images/organizational-structure/03-first-vertical-rgb.png",
};
