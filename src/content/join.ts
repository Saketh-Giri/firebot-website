export interface Faq {
  question: string;
  answer: string[];
}

export const joinIntro = [
  "Curious about design, code, media, or events — or brand new to all of it? Fill out the interest form. We'll email you about tryouts.",
];

export const subteamTags = [
  "Mechanical Design",
  "Manufacturing",
  "Software",
  "Electrical",
  "Business",
  "Media",
  "Events",
];

export const faqs: Faq[] = [
  {
    question: "Do I need robotics experience?",
    answer: ["No. Curiosity and dedication beat prior knowledge every time."],
  },
  {
    question: "What am I trying out for?",
    answer: [
      "FTC — technical, non-technical, or both. You can still cross over during the season.",
    ],
  },
  {
    question: "How do I get into FRC?",
    answer: ["Through FTC. Mentors recommend members who are ready for Firebots."],
  },
  {
    question: "When are tryouts?",
    answer: ["Usually August–September. Interest-form folks get the email first."],
  },
  {
    question: "How do tryouts work?",
    answer: ["Fill out the interest form — details arrive in the fall."],
  },
];

export const recruitmentFlyer = "/images/join-the-team/01-2022-2023-recruitment-flyer.jpg";
