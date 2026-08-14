import { paths } from "./paths";

export interface NavLink {
  label: string;
  href: string;
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
  { label: "Home", href: paths.home },
  {
    label: "About",
    children: [
      { label: "History", href: paths.about.history },
      { label: "Structure & Values", href: paths.about.structure },
      { label: "Firebots FRC", href: paths.programs.frc },
      { label: "FTC", href: paths.programs.ftc },
      { label: "Business", href: paths.programs.business },
      { label: "Marketing", href: paths.programs.marketing },
      { label: "Leads", href: paths.about.leads },
      { label: "Mentors", href: paths.about.mentors },
    ],
  },
  {
    label: "Outreach",
    children: [
      { label: "FLL Mentorship", href: paths.outreach.fll },
      { label: "Previous Events", href: paths.outreach.events },
    ],
  },
  {
    label: "Updates",
    children: [
      { label: "Calendar", href: paths.updates.calendar },
      { label: "Newsletters", href: paths.updates.newsletters },
      { label: "Gallery", href: paths.updates.gallery },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Community Impact", href: paths.community.index },
      { label: "Torchbearing Tutors", href: paths.community.tutors },
      { label: "Kindling Kits", href: paths.community.kits },
    ],
  },
  { label: "Sponsors", href: paths.sponsors },
  { label: "Contact", href: paths.contact },
];

export const footerColumns = [
  {
    heading: "About",
    links: [
      { label: "History", href: paths.about.history },
      { label: "Structure & Values", href: paths.about.structure },
      { label: "Leads", href: paths.about.leads },
      { label: "Mentors", href: paths.about.mentors },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Firebots FRC", href: paths.programs.frc },
      { label: "FTC", href: paths.programs.ftc },
      { label: "Business", href: paths.programs.business },
      { label: "Marketing", href: paths.programs.marketing },
      { label: "FLL Mentorship", href: paths.outreach.fll },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Community Impact", href: paths.community.index },
      { label: "Torchbearing Tutors", href: paths.community.tutors },
      { label: "Kindling Kits", href: paths.community.kits },
      { label: "Previous Events", href: paths.outreach.events },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Join", href: paths.join },
      { label: "Sponsor", href: paths.sponsors },
      { label: "Calendar", href: paths.updates.calendar },
      { label: "Contact", href: paths.contact },
    ],
  },
] satisfies { heading: string; links: NavLink[] }[];
