import { paths } from "./paths";

export interface Stat {
  value: string;
  label: string;
}

export const mission =
  "Anyone with an appreciation for STEAM can succeed here — through hands-on work, and guidance from other students and mentors.";

export const heroLede = "Student-run robotics at Fremont High School in Sunnyvale.";

export const stats: Stat[] = [
  { value: "6", label: "established teams" },
  { value: "80%", label: "of FLL teams advanced to regionals" },
  { value: "50,600+", label: "community members reached" },
  { value: "175+", label: "outreach events in the last 3 years" },
  { value: "11", label: "subteams: technical and non-technical" },
  { value: "17", label: "years in FIRST" },
  { value: "13", label: "FLL teams mentored" },
  { value: "5:2", label: "male to female member ratio" },
  { value: "95", label: "active students in the 2025–26 season" },
  { value: "10", label: "FLL teams founded over the past 5 years" },
  { value: "96%", label: "of team members pursue STEAM majors in college" },
  { value: "15+", label: "active mentors" },
];

export const announcement = {
  eyebrow: "2026 season",
  title: "Build season is underway.",
  body: 'This year’s FRC game is "Rebuilt." Follow the shop, the field, and the outreach.',
  cta: { label: "Past events", href: paths.outreach.events },
  image: "/images/home/06-ee0b-mv2.jpg",
};
