export interface AwardLine {
  event: string;
  result: string;
}

export interface FllTeam {
  name: string;
  awards: AwardLine[];
}

export const fll = {
  lede: "Ten teams founded. Twelve mentored. Three qualifiers hosted.",
  pillars: [
    {
      title: "Research",
      body: "A real-world problem — food safety, recycling, energy — and a solution shared with the community.",
    },
    {
      title: "Robot",
      body: "Design, build, and program a LEGO Education robot with attachments.",
    },
    {
      title: "Compete",
      body: "Matches on a 4×8 ft table, while living FIRST Core Values.",
    },
  ],

  divisions: [
    {
      name: "FLL Challenge",
      ages: "Ages 9–14",
      body: "A robot game on the table and an innovation project judged alongside it.",
      image: "/images/fll-mentorship/01-fll-rgb-challenge-vert-icon-full-color.png",
    },
    {
      name: "FLL Explore",
      ages: "Ages 6–10",
      body: "Teams build a motorized LEGO model and present a poster about what they learned.",
      image: "/images/fll-mentorship/02-fll-rgb-explore-vert-icon-full-color.png",
    },
  ],
  historyHeading: "Since 2015",
  history:
    "We have founded 10 FLL Challenge teams in Sunnyvale, mentored 12+, and hosted qualifiers in 2018, 2019, and 2022.",
  videoSeries: "In 2020 we shipped a free video series so FLL teams could start without meeting in person.",
  videoSections: ["FLL Fundamentals", "Project", "Robot Design and Strategy", "EV3 Programming"],
  images: {
    photo: "/images/fll-mentorship/03-img-20151121-172506-1.jpg",
    history: "/images/fll-mentorship/04-alpha-betas-jpg.jpg",
    support: "/images/fll-mentorship/05-fll-support-logo-final.png",
  },
};

export const fllTeams: FllTeam[] = [
  {
    name: "FLL-C Team 55971 (Electroids)",
    awards: [{ event: "2022/2023 Spring Tournament", result: "Champions Award" }],
  },
  { name: "FLL-C Team 60169", awards: [] },
  {
    name: "FLL-C Team 16154",
    awards: [
      { event: "2018 Peninsula Qualifier", result: "Core Values Award" },
      { event: "2017 Peninsula Qualifier", result: "Core Values Award" },
      { event: "2016 Regionals", result: "Competitor" },
      {
        event: "2016 Peninsula Qualifier",
        result: "Championship Award, Global Innovations Award",
      },
      { event: "2015 Peninsula Qualifier", result: "Core Values Award" },
    ],
  },
  {
    name: "FLL-C Team 16155",
    awards: [
      { event: "2019 Peninsula Qualifier", result: "Global Innovations Award" },
      { event: "2016 Peninsula Qualifier", result: "Core Values Award" },
    ],
  },
  {
    name: "FLL-C Team 44882",
    awards: [
      { event: "2019", result: "Best Project Award" },
      { event: "2019 Regionals", result: "Competitor" },
      { event: "2019 NASA Qualifier", result: "Global Innovations Award" },
    ],
  },
  {
    name: "FLL-E Team 7755",
    awards: [{ event: "2019 Learning Expo", result: "Artistic Eye Recognition" }],
  },
  {
    name: "FLL-C Team 44580",
    awards: [
      {
        event: "2022 Qualifiers",
        result: "Design Award, Mentor Award, Championship Competitor",
      },
    ],
  },
];
