import { paths } from "../paths";
import type { Program } from "./types";

export const frc: Program = {
  slug: "frc",
  href: paths.programs.frc,
  eyebrow: "FRC · Team 3501",
  title: "FIRST Robotics Competition",
  short: "Design, build, and compete with a robot from scratch — 3v3 alliances.",
  cover: "/images/home/06-ee0b-mv2.jpg",
  highlights: [
    { value: "~30", label: "students" },
    { value: "4", label: "technical subteams" },
    { value: "3v3", label: "alliance format" },
  ],
  sections: [
    {
      heading: "Team 3501 Firebots",
      body: "After FTC, mentors invite students onto Firebots. Four technical subteams — Design, Manufacturing, Electrical, and Software — plus Integration toward the end of build season.",
      image: "/images/home/06-ee0b-mv2.jpg",
      imageAlt: "Firebots at an FRC competition",
    },
  ],
  subteamsHeading: "Technical subteams",
  subteams: [
    {
      name: "Mechanical Design",
      description: "CAD the robot and guide manufacturing through build season.",
      image: "/images/frc/03-mechdesign-logo.png",
    },
    {
      name: "Manufacturing",
      description: "Cut, machine, and assemble the working base for electrical and software.",
      image: "/images/frc/04-manufactoring-logo.png",
    },
    {
      name: "Electrical",
      description: "Wire, power, and instrument the robot so software has a reliable machine to drive.",
    },
    {
      name: "Software",
      description: "Controls, autonomy, vision, and reliable driver code.",
      image: "/images/frc/06-software-logo.png",
    },
    {
      name: "Integration",
      description: "Keep Design, Manufacturing, Electrical, and Software aligned on mechanisms and decisions.",
      image: "/images/frc/05-integration-logo.png",
    },
  ],
  logo: "/images/frc/01-firstrobotics-iconvert-rgb.png",
  mascot: "/images/frc/02-frc-logo-final.png",
};
