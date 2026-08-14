import { paths } from "../paths";
import type { Program } from "./types";

export const business: Program = {
  slug: "business",
  href: paths.programs.business,
  eyebrow: "Business",
  title: "Business",
  short: "Finances, sponsors, newsletters, grants, and judging.",
  cover: "/images/business-and-marketing/01-img-6050-heic.png",
  highlights: [
    { value: "501(c)(3)", label: "non-profit" },
    { value: "Year-round", label: "sponsor relations" },
    { value: "Competition", label: "judging" },
  ],
  sections: [
    {
      heading: "Keep the organization running",
      body: "Business manages the budget, writes newsletters and grants, and represents the team in front of judges. Members come from every competition team.",
      image: "/images/business-and-marketing/01-img-6050-heic.png",
      imageAlt: "Students working on business materials",
    },
  ],
  subteamsHeading: "What students work on",
  subteams: [
    { name: "Finance", description: "Budgets and responsible use of team funds." },
    { name: "Sponsors", description: "Newsletters, competition branding, and ongoing relationships." },
    { name: "Judging", description: "Presenting the team's work during competition." },
  ],
  photos: [
    {
      src: "/images/business-and-marketing/03-img-0420-jpg.jpg",
      alt: "Business subteam members at an event",
    },
  ],
};
