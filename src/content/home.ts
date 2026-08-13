export interface Stat {
  value: string;
  label: string;
}

/** Short vision line under the brand — never longer than the name above it. */
export const mission = "STEAM for everyone.";

export const heroLede =
  "Student-run robotics in Sunnyvale. Six teams. One shop. Beginners welcome.";

/** Keep the glance grid tight — the strongest signals only. */
export const stats: Stat[] = [
  { value: "95", label: "active students" },
  { value: "6", label: "competition teams" },
  { value: "17", label: "years in FIRST" },
  { value: "50,600+", label: "community members reached" },
  { value: "175+", label: "outreach events, 3 years" },
  { value: "96%", label: "pursue STEAM in college" },
];

export const announcement = {
  eyebrow: "2026 Season",
  title: "Build season is on.",
  body: 'This year\'s FRC game is "Rebuilt." Follow the shop, the field, and the outreach.',
  cta: { label: "Past events", href: "/previous-events" },
};

export const homeCtas = [
  { label: "Join Us", href: "/join-the-team", description: "Tryouts & subteams" },
  { label: "Programs", href: "/organizational-structure", description: "FRC, FTC, BaM" },
  { label: "Outreach", href: "/previous-events", description: "Where we've been" },
  { label: "History", href: "/history", description: "Sixteen seasons" },
  { label: "Sponsor", href: "/sponsor-us", description: "Put tools in hands" },
  { label: "Contact", href: "/contact", description: "Ask a question" },
];
