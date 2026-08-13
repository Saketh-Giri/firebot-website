export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavLink[];
}

export const site = {
  name: "Fremont High Robotics",
  shortName: "Firebots",
  team: "FRC Team 3501 Firebots",
  brand: "Firebots",
  teamNumber: "3501",
  tagline: "Sunnyvale, California",
  url: "https://www.fremontrobotics.com",
  email: "fhsrobotics3501@gmail.com",
  address: "575 W Fremont Ave, Sunnyvale, CA 94087",
  founded: 2010,
  interestForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSdOpqhll2HEeXLmFyH1IaQYhDBCd9qkQIRbUnCskEbzoppyfQ/viewform",
  socials: [
    { label: "Instagram", handle: "@fremonthighrobotics", href: "https://instagram.com/fremonthighrobotics" },
    { label: "Facebook", handle: "@team3501firebots", href: "https://www.facebook.com/team3501firebots" },
    { label: "LinkedIn", handle: "Fremont High Robotics", href: "https://www.linkedin.com/company/fremonthighrobotics/" },
    { label: "YouTube", handle: "Fremont High Robotics", href: "https://www.youtube.com/channel/UCPZuKombbt5KCHR8Gli6kRg" },
  ],
} as const;

export const nav: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "History", href: "/history", description: "Sixteen seasons" },
      { label: "Structure & Values", href: "/organizational-structure", description: "How we organize" },
      { label: "Firebots FRC", href: "/frc", description: "Team 3501" },
      { label: "FTC", href: "/ftc", description: "Four teams" },
      { label: "BaM", href: "/business-and-marketing", description: "Business, events, media" },
      { label: "Leads", href: "/leads", description: "Student leadership" },
      { label: "Mentors", href: "/mentors", description: "Our advisors" },
    ],
  },
  {
    label: "Outreach",
    children: [
      { label: "FLL Mentorship", href: "/fll-mentorship", description: "Coaching FLL" },
      { label: "Previous Events", href: "/previous-events", description: "Past outreach" },
    ],
  },
  {
    label: "Updates",
    children: [
      { label: "Calendar", href: "/calendar", description: "Meetings & comps" },
      { label: "Newsletters", href: "/newsletters", description: "Season updates" },
      { label: "Gallery", href: "/team-gallery", description: "Photos" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Community Impact", href: "/community-impact", description: "Our STEAM program" },
      { label: "Torchbearing Tutors", href: "/torchbearing-tutors", description: "Afterschool lessons" },
      { label: "Kindling Kits", href: "/kindling-kits", description: "Build-at-home kits" },
    ],
  },
  { label: "Sponsors", href: "/sponsor-us" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    heading: "About",
    links: [
      { label: "History", href: "/history" },
      { label: "Structure & Values", href: "/organizational-structure" },
      { label: "Leads", href: "/leads" },
      { label: "Mentors", href: "/mentors" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Firebots FRC", href: "/frc" },
      { label: "FTC", href: "/ftc" },
      { label: "BaM", href: "/business-and-marketing" },
      { label: "FLL Mentorship", href: "/fll-mentorship" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Community Impact", href: "/community-impact" },
      { label: "Torchbearing Tutors", href: "/torchbearing-tutors" },
      { label: "Kindling Kits", href: "/kindling-kits" },
      { label: "Previous Events", href: "/previous-events" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Join", href: "/join-the-team" },
      { label: "Sponsor", href: "/sponsor-us" },
      { label: "Calendar", href: "/calendar" },
      { label: "Contact", href: "/contact" },
    ],
  },
] satisfies { heading: string; links: NavLink[] }[];
