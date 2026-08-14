export interface Faq {
  question: string;
  answer: string[];
}

export const joinIntro =
  "Curious about design, code, marketing, or events — or brand new to all of it? Fill out the interest form and we will email you about tryouts.";

export const subteamTags = [
  "Mechanical Design",
  "Manufacturing",
  "Software",
  "Electrical",
  "Business",
  "Marketing",
  "Events",
];

export const faqs: Faq[] = [
  {
    question: "Do students need experience or knowledge in robotics to try out?",
    answer: [
      "No. Tryouts look at curiosity, dedication, and alignment with our core values more than prior robotics knowledge.",
    ],
  },
  {
    question: "What are students trying out for?",
    answer: [
      "FTC — technical work, non-technical work, or both. You can still move between subteams during the season.",
    ],
  },
  {
    question: "How do you get into FRC?",
    answer: [
      "Through FTC. After members have gained experience there, mentors invite students who are ready onto Firebots.",
    ],
  },
  {
    question: "When is information sent out about tryouts?",
    answer: [
      "Usually in August and September. Anyone who has filled out the interest form gets the email first.",
    ],
  },
  {
    question: "How do tryouts work?",
    answer: ["Fill out the interest form. Details arrive in the fall."],
  },
];

export const recruitmentFlyer = "/images/join-the-team/01-2022-2023-recruitment-flyer.jpg";
