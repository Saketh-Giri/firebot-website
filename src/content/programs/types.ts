export interface Subteam {
  name: string;
  description: string;
  image?: string;
}

export interface Program {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  short: string;
  cover?: string;
  highlights?: { value: string; label: string }[];
  sections: { heading: string; body: string; image?: string; imageAlt?: string }[];
  subteamsHeading: string;
  subteams: Subteam[];
  logo?: string;
  mascot?: string;
  photos?: { src: string; alt: string }[];
  teams?: { name: string; number: string; image: string }[];
}
