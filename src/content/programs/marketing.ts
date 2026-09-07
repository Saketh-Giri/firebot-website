import { paths } from "../paths";
import type { Program } from "./types";

export const marketing: Program = {
  slug: "marketing",
  href: paths.programs.marketing,
  eyebrow: "Marketing",
  title: "Marketing",
  short: "Brand, socials, photo, video, this site, and community events.",
  cover: "/images/business-and-marketing/02-img-0120-jpg.jpg",
  highlights: [
    { value: "Brand", label: "identity and merchandise" },
    { value: "Photo + video", label: "at every event" },
    { value: "Outreach", label: "year-round" },
  ],
  sections: [
    {
      heading: "Show the work",
      body: "Marketing runs the website and socials, photographs competition, and keeps team imagery consistent — including merchandise and documentation.",
      image: "/images/business-and-marketing/02-img-0120-jpg.jpg",
      imageAlt: "Students photographing the team",
    },
    {
      heading: "Events",
      body: "The subteam also coordinates outreach demos and presentations with schools and community partners.",
      image: "/images/business-and-marketing/04-5b40b51a-a5b5-416b-a135-2aeec05dd03a.jpg",
      imageAlt: "An outreach demonstration",
    },
  ],
  subteamsHeading: "What students work on",
  subteams: [
    { name: "Brand and design", description: "Team imagery, documentation, and merchandise." },
    { name: "Digital", description: "Website, socials, photography, and videography." },
    { name: "Events", description: "Demos and presentations with community partners." },
  ],
};
