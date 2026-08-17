import { paths } from "./paths";

/**
 * One file to update each August / kickoff / championship.
 * Competition records are from FIRST Events and The Blue Alliance (retrieved 16 Aug 2026).
 */
export const season = {
  label: "2026–27",
  priorLabel: "2025–26",
  game: {
    year: 2026,
    name: "REBUILT",
    presentedBy: "Haas",
  },
  ftcGame: {
    year: "2025–26",
    name: "DECODE",
    next: "BIOBUZZ",
  },
  donate: {
    href: "https://givebutter.com/firebots2025",
    label: "Donate",
    campaign: "Fremont High Robotics Donation Campaign 2025–2026",
    matching:
      "If your company matches gifts, donate through their portal. Search Fremont High Robotics or Fremont High School, and note that it is for robotics.",
    matchingContact: "sohini_stone@fuhsd.org",
  },
  links: {
    tba: "https://www.thebluealliance.com/team/3501",
    tbaYear: "https://www.thebluealliance.com/team/3501/2026",
    firstEvents: "https://frc-events.firstinspires.org/2026/team/3501",
  },
  announcement: {
    eyebrow: "2026–27 season",
    title: "Tryouts are around the corner.",
    body: "Build season wrapped in the spring. Fill out the interest form and we will email you when tryout details go out — usually in August and September.",
    cta: { label: "Interest form", href: "form" as const },
    secondary: { label: "Last season", href: paths.programs.frc },
    image: "/images/home/06-ee0b-mv2.jpg",
  },
  calendar: {
    /** Wix never exposed a public calendar ID we could reuse. */
    embedSrc: null as string | null,
    intro: "Shop hours and outreach dates live on the team calendar. Until we embed it here, these are the public dates.",
    events: [
      {
        when: "August – September",
        title: "Tryouts",
        detail: "Anyone who filled out the interest form gets the email first.",
        href: paths.join,
      },
      {
        when: "October 9–11, 2026",
        title: "SoCal Showdown",
        detail: "Offseason event in El Segundo. Listed on The Blue Alliance.",
        href: "https://www.thebluealliance.com/event/2026cass",
      },
      {
        when: "Fall 2026",
        title: "FTC BIOBUZZ",
        detail: "League meets typically run November through February.",
        href: "https://ftc-events.firstinspires.org/",
      },
      {
        when: "January 2027",
        title: "FRC Kickoff",
        detail: "Build season for the next game usually starts the second Saturday in January.",
        href: "https://www.firstinspires.org/robotics/frc",
      },
    ],
  },
} as const;

export const frc2026 = {
  heading: "2026 REBUILT season",
  lede: "District championship, FIRST Championship on Galileo, and four judged awards.",
  record: "32–25–0",
  districtRank: "#42 of 344",
  districtPoints: "161",
  source: { label: "The Blue Alliance", href: season.links.tbaYear },
  awards: [
    {
      name: "Excellence in Engineering Award sponsored by Littelfuse",
      event: "FIRST Championship · Galileo Division",
    },
    {
      name: "Woodie Flowers Finalist Award — Nick Hammes",
      event: "FIRST California Northern State Championship",
    },
    {
      name: "District FIRST Impact Award",
      event: "CA District Glendale Event",
    },
    {
      name: "Gracious Professionalism Award",
      event: "CA District Ventura County Event",
    },
  ],
  events: [
    {
      name: "CA District Ventura County Event",
      when: "March 13–15, 2026",
      result: "Rank 9 · 7–7–0 · Alliance 7 captain · Gracious Professionalism",
    },
    {
      name: "CA District Glendale Event",
      when: "March 27–29, 2026",
      result: "Rank 8 · 10–7–0 · Alliance 5 captain · District FIRST Impact Award",
    },
    {
      name: "FIRST California Northern State Championship",
      when: "April 9–12, 2026 · Daly City",
      result: "Rank 16 · 9–7–0 · Alliance 3 second pick · Woodie Flowers Finalist (Nick Hammes)",
    },
    {
      name: "FIRST Championship · Galileo Division",
      when: "April 29 – May 2, 2026 · Houston",
      result: "Rank 17 · 6–4–0 · Alliance 5 third pick · Excellence in Engineering",
    },
  ],
} as const;

export const ftc2025 = {
  heading: "2025–26 DECODE season",
  lede: "Four FTC teams. Two reached NorCal. Emberbots and Infernobots brought home Innovate awards.",
  teams: [
    {
      name: "Sparkbots",
      number: "16532",
      record: "10–5–0",
      result: "South Bay League Tournament, rank 9.",
      href: "https://ftc-events.firstinspires.org/2025/team/16532",
    },
    {
      name: "Emberbots",
      number: "26106",
      record: "19–6–0",
      result: "Innovate Award and Finalist Alliance captain at South Bay League Tournament. NorCal Silicon, rank 20.",
      href: "https://ftc-events.firstinspires.org/2025/team/26106",
    },
    {
      name: "Infernobots",
      number: "16533",
      record: "15–9–0",
      result: "Innovate Award at The Play Space #7 and Santa Clara QT #2. Winning Alliance first pick at Santa Clara. NorCal Gold, rank 11.",
      href: "https://ftc-events.firstinspires.org/2025/team/16533",
    },
    {
      name: "Electrobots",
      number: "30541",
      record: "Rookie season",
      result: "First year. Play Space #8 in the DECODE season.",
      href: "https://ftc-events.firstinspires.org/team/30541",
    },
  ],
} as const;
