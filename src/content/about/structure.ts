export interface CoreValue {
  name: string;
  points: string[];
}

export const orgIntro =
  "Student-led by design. Mentors advise; students run the shop, the teams, and the outreach.";

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
  shop: "/images/organizational-structure/01-dd11-mv2.jpg",
  first: "/images/organizational-structure/03-first-vertical-rgb.png",
};
