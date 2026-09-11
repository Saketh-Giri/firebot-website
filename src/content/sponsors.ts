export interface Tier {
  name: string;
  range: string;
  members: string[];
}

export interface SponsorLogo {
  name: string;
  image: string;
  href?: string;
}

export interface PastSponsor {
  name: string;
  years?: string;
}

export const sponsorsIntro =
  "Sponsors put tools in students' hands. Fremont High Robotics is a 501(c)(3) non-profit. Your support funds robots, safety gear, and outreach.";

export const whySponsor = {
  heading: "Why sponsor Firebots?",
  body: "Grants, donations, and in-kind gifts cover tools, parts, safety equipment, and outreach. Every dollar goes back into students.",
  fostersHeading: "Your support builds the next generation of:",
  fosters: [
    "Engineers",
    "Programmers",
    "Designers",
    "Leaders",
    "Public speakers",
  ],
  supportHeading: "We accept:",
  supportTypes: [
    "Monetary donations",
    "Mentor time or volunteer hours",
    "Shop or makerspace access",
    "Equipment and software",
    "Discounts on goods or services",
  ],
};

export const sponsorLogos: SponsorLogo[] = [
  { name: "Google", image: "/images/home/08-b49d-mv2.png", href: "https://www.google.com" },
  { name: "Apple", image: "/images/home/07-ad14-mv2.png", href: "https://www.apple.com" },
  { name: "Qualcomm", image: "/images/sponsor-us/13-master-qc-logo-pms-pos.png", href: "https://www.qualcomm.com" },
  { name: "Synopsys", image: "/images/sponsor-us/07-c5f1-mv2.png", href: "https://www.synopsys.com" },
  { name: "TE Connectivity", image: "/images/sponsor-us/12-b6d7-mv2.png", href: "https://www.te.com" },
  { name: "Gene Haas Foundation", image: "/images/sponsor-us/08-a3d3-mv2.png", href: "https://ghaasfoundation.org" },
  { name: "PG&E Corporation Foundation", image: "/images/sponsor-us/09-d25f-mv2.png", href: "https://www.pge.com" },
  { name: "Argosy Foundation", image: "/images/sponsor-us/14-7b86-mv2.png", href: "https://www.argosy.org" },
  { name: "Dream Maker Fund", image: "/images/sponsor-us/10-4050-mv2.png" },
  { name: "Intuitive Surgical", image: "/images/sponsor-us/11-intuitivesurgicallogo.png", href: "https://www.intuitive.com" },
  { name: "Turbine", image: "/images/sponsor-us/16-f779-mv2.png" },
  { name: "Fabworks", image: "/images/sponsor-us/19-fe22-mv2.png", href: "https://www.fabworks.com" },
  { name: "Igx", image: "/images/sponsor-us/06-igx-logo-bw.jpg" },
];

export const additionalSeasonPartners = ["ASUS", "Fremont HS Parents", "Fremont High School"];

export const tiers: Tier[] = [
  {
    name: "Diamond",
    range: "$10,000+",
    members: ["FHS Alumnus Family Foundation"],
  },
  {
    name: "Platinum",
    range: "$5,000 - $9,999",
    members: ["Grateful Parents, 2002 FHS Grad"],
  },
  {
    name: "Gold",
    range: "$2,000 - $4,999",
    members: ["Danny Chang", "Saketh Giri", "The Lawrence Family", "Anonymous"],
  },
  {
    name: "Silver",
    range: "$1,000 - $1,999",
    members: [
      "FIRST NorCal",
      "Matt Smith",
      "Grover Family",
      "The Munro Family",
      "Stone Family",
      "Manoj Panicker",
      "Kao Family",
      "Arie Vayner",
      "Jaiveer Zaveri & Family",
      "Khandavalli Family",
      "ELC Vet Clinic (Sunnyvale)",
    ],
  },
  {
    name: "Bronze",
    range: "$600 - $999",
    members: [
      "Petkar Family",
      "Ray and Susan Rynearson (FHS Alum)",
      "Ramisetty Lakshmi Narasimha Rao & Family",
    ],
  },
  {
    name: "Iron",
    range: "$250 - $599",
    members: [],
  },
];

export const benefitTiers = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond"] as const;

export const benefits: { benefit: string; tiers: (typeof benefitTiers)[number][] }[] = [
  {
    benefit: "Name/Logo on Website",
    tiers: ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond"],
  },
  { benefit: "Social Media Shout Out (Group of Sponsors)", tiers: ["Bronze", "Silver"] },
  {
    benefit: "Social Media Shout Out (Individual Sponsor)",
    tiers: ["Gold", "Platinum", "Diamond"],
  },
  { benefit: "Name on Team T-Shirt", tiers: ["Silver", "Gold", "Platinum", "Diamond"] },
  { benefit: "Name/Logo on Robot", tiers: ["Platinum", "Diamond"] },
  { benefit: "Mention on Home Page", tiers: ["Platinum", "Diamond"] },
  { benefit: "Register as Minor Sponsor with FIRST", tiers: ["Platinum", "Diamond"] },
  {
    benefit: "Register as Major Sponsor with FIRST (Verbally announced at competitions)",
    tiers: ["Diamond"],
  },
  { benefit: "Name/Logo on Plaque in Workshop/Practice", tiers: ["Diamond"] },
];

export const pastSponsors: PastSponsor[] = [
  { name: "JCPenney", years: "2010 - 2012" },
  { name: "Abbott Fund", years: "2011 - 2014" },
  { name: "Symantec", years: "2011 - 2014" },
  { name: "Cadence", years: "2013 - 2014" },
  { name: "Qualcomm", years: "2013 - 2015" },
  { name: "Lockheed Martin", years: "2013 - 2015 & 2019 - 2020" },
  { name: "Neonode", years: "2013 - 2016" },
  { name: "Splunk", years: "2013 - 2016" },
  { name: "Roboterra", years: "2014 - 2015" },
  { name: "Silicon Labs", years: "2014 - 2015" },
  { name: "Evil Mad Scientist", years: "2014 - 2016" },
  { name: "FX Pal", years: "2014 - 2017" },
  { name: "Yahoo Employee Foundation (YEF)", years: "2015 - 2016" },
  { name: "Real Escape Game", years: "2015 - 2016" },
  { name: "Latency Zero, LLC", years: "2015 - 2016" },
  { name: "Umpqua Bank", years: "2015 - 2017" },
  { name: "LinkedIn", years: "2015 - 2020" },
  { name: "SolidWorks", years: "2015 - 2020" },
  { name: "Mentor Graphics", years: "2016 - 2017" },
  { name: "The Brin Wojcicki Foundation", years: "2016 - 2017" },
  { name: "Camp X", years: "2017 - 2018" },
  { name: "GoEngineer", years: "2018" },
  { name: "NASA", years: "2020" },
  { name: "BAE Systems", years: "2020" },
];
