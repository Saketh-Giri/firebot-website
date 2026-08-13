export interface AwardLine {
  event: string;
  result: string;
}

export interface FllTeam {
  name: string;
  awards: AwardLine[];
}

export const fll = {
  intro:
    "FLL teams research a real-world problem, build a LEGO MINDSTORMS® robot, and compete on a tabletop field—while living FIRST Core Values.",
  historyHeading: "Mentorship history",
  history: [
    "Since 2015: 10 FLL Challenge teams founded, 12+ mentored, plus Explore for elementary students. Many continue into our FTC and FRC teams.",
    "We hosted FLL Qualifiers in 2018, 2019, and 2022.",
  ],
  videoSeries:
    "In 2020 we shipped a free video series so FLL teams could start without meeting in person.",
  videoSections: ["FLL Fundamentals", "Project", "Robot Design and Strategy", "EV3 Programming"],
  images: {
    challenge: "/images/fll-mentorship/01-fll-rgb-challenge-vert-icon-full-color.png",
    explore: "/images/fll-mentorship/02-fll-rgb-explore-vert-icon-full-color.png",
    photo: "/images/fll-mentorship/03-img-20151121-172506-1.jpg",
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

export interface EventAlbum {
  title: string;
  image: string;
}

export const previousEvents: EventAlbum[] = [
  {
    title: "2022 - 2023 Outreach",
    image: "/images/previous-events/01-screenshot-2023-04-04-at-7-43-27-pm.png",
  },
  {
    title: "2021 - 2022 Outreach",
    image: "/images/previous-events/02-team-3501-outreach-binder-2021-22.png",
  },
  {
    title: "2020 - 2021 Outreach",
    image: "/images/previous-events/03-outreach-binder-2020-21.png",
  },
  {
    title: "2019 - 2020 Outreach",
    image: "/images/previous-events/04-screen-shot-2022-06-09-at-10-44-38-am.png",
  },
];
