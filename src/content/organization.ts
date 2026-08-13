export interface CoreValue {
  name: string;
  points: string[];
  groups?: { heading: string; points: string[] }[];
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

export const bamDivisions = [
  { name: "Media", note: "Brand, photo, video, site" },
  { name: "Events", note: "Outreach and demos" },
  { name: "Business", note: "Finances and sponsors" },
];

export const coreValues: CoreValue[] = [
  {
    name: "Culture of Excellence",
    points: ["Aim for quality and reliability.", "Act with intent."],
  },
  {
    name: "We Not Me",
    points: [
      "Ask how a choice helps the team.",
      "Share credit. Share work. Lift others in STEAM.",
    ],
  },
  {
    name: "Be Courageous",
    points: ["Speak up kindly.", "Take smart risks. Learn from failure."],
  },
  {
    name: "Everybody Belongs",
    points: ["Respect everyone.", "Debate ideas, not people."],
  },
  {
    name: "Act with Integrity",
    points: ["Do the right thing.", "Own mistakes. Stay open."],
  },
];

export const aboutFirst = {
  paragraphs: [
    "FIRST introduces students to science and technology through robotics. Founded by Dean Kamen in 1990, it runs programs from elementary through high school.",
  ],
  programsHeading: "Programs we touch",
  programs: [
    { abbr: "FRC", name: "FIRST Robotics Competition", grades: "9–12" },
    { abbr: "FTC", name: "FIRST Tech Challenge", grades: "7–12" },
    { abbr: "FLL-C", name: "FIRST Lego League Challenge", grades: "4–8" },
    { abbr: "FLL-E", name: "FIRST Lego League Explore", grades: "1–4" },
  ],
};
