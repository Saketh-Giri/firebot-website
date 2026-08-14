export interface Person {
  name: string;
  role: string;
  classOf?: string;
  since?: string;
  bio?: string;
  image?: string;
}

export interface PersonGroup {
  heading: string;
  people: Person[];
}

export const leadsIntro =
  "Student leadership for the 2025–26 season. Leads run the shop, the competition teams, and our community programs.";

export const leadGroups: PersonGroup[] = [
  {
    heading: "Executive",
    people: [
      {
        name: "Christopher Kao",
        role: "President",
        classOf: "Class of 2026",
        image: "/images/leads/01-chris-new.jpg",
      },
      {
        name: "Nina Chandy",
        role: "VP of Community Impact Programs",
        classOf: "Class of 2026",
        image: "/images/leads/02-nina.jpeg",
      },
      {
        name: "Mahesh Kodam",
        role: "VP of Business",
        classOf: "Class of 2026",
        image: "/images/leads/03-img-4983.jpg",
      },
    ],
  },
  {
    heading: "FIRST Robotics Competition",
    people: [
      {
        name: "Anthon Buynitsky",
        role: "VP of Design",
        classOf: "Class of 2026",
        image: "/images/leads/04-anthon-for-website.jpg",
      },
      {
        name: "Akhil Pathapati",
        role: "VP of Manufacturing",
        classOf: "Class of 2026",
        image: "/images/leads/05-acylic.png",
      },
      {
        name: "Kalash Venkumahanti",
        role: "VP of Integration",
        classOf: "Class of 2026",
        image: "/images/leads/06-kalash-new.jpeg",
      },
      {
        name: "Anthony Lu",
        role: "VP of Software",
        classOf: "Class of 2026",
        image: "/images/leads/07-img-5255.jpg",
      },
    ],
  },
  {
    heading: "FIRST Tech Challenge",
    people: [
      {
        name: "Raj Petkar",
        role: "Varsity FTC Lead",
        classOf: "Class of 2026",
        image: "/images/leads/08-raj.jpg",
      },
      {
        name: "Vianna Moshtaghi",
        role: "JV FTC Lead",
        classOf: "Class of 2026",
        image: "/images/leads/09-vianna.jpg",
      },
      {
        name: "Jaiveer Zaveri",
        role: "JV FTC Lead",
        classOf: "Class of 2026",
        image: "/images/leads/10-javieer.png",
      },
    ],
  },
  {
    heading: "Community Impact",
    people: [
      {
        name: "Neal Lawrence",
        role: "Director of Measurement",
        classOf: "Class of 2026",
        image: "/images/leads/11-neal.jpg",
      },
      {
        name: "Lakshmi Annavarapu",
        role: "Director of Education Programs",
        classOf: "Class of 2026",
        image: "/images/leads/12-lakshmi.jpg",
      },
    ],
  },
];

export const mentorsIntro =
  "Our mentors are the team's most valuable and trusted resources. They volunteer their time and energy; we would not be where we are today without their knowledge and advice. Students still run the team.";

export const mentorGroups: PersonGroup[] = [
  {
    heading: "Leadership",
    people: [
      {
        name: "Sohini Stone",
        role: "Head Mentor: Strategy, Leadership & Team Development, Logistics, and Business",
        since: "since 2012",
        bio: "Sohini is a physician and has been working in the Health Tech space as the Chief Medical Officer for Global Employee Health for the past 7.5 years at Google. She has been part of FIRST robotics since 1997 as a former member of FRC Team 151 and a former mentor of FRC Team 246.",
        image: "/images/mentors/01-headshot-close-up.jpeg",
      },
      {
        name: "David Dobervich",
        role: "FHS Support",
        since: "since 2010",
        bio: "Mr. D studied cognitive science, computer science and philosophy at Berkeley as an undergrad, and after working briefly as a backend developer, got a Master's in math education from Stanford. He has worked as a teacher at Fremont High School ever since and continues to work on personal programming, robotics and other projects.",
        image: "/images/mentors/02-dobervich.jpg",
      },
    ],
  },
  {
    heading: "Non-Robot Mentors",
    people: [
      {
        name: "Aparna Bhargava",
        role: "Marketing and Community Impact Mentor",
        since: "since 2014",
        bio: "Aparna got her Masters in Computer Science and Engineering from Santa Clara University. She co-founded 3 tech startups. She has mentored FLL teams and is a mentor at FHS Robotics since 2014. She was FHS PTSA president and is a parent of two Firebots alumni.",
        image: "/images/mentors/03-tbyqqhltv-uku1cdas0-ce61df9553ad-512.png",
      },
      {
        name: "Nick Hammes",
        role: "Marketing and Community Impact Mentor",
        since: "since 2022",
        bio: "Nick studied Computer Science, Philosophy, and Linguistics at the University of Minnesota, and is a Technical Program Manager at Google. He has previously been a business mentor on FRC teams 254 and 2855, competed in the short-lived college-level FIRST demo, and frequently volunteers as an Emcee or Game Announcer in all FIRST programs, including Game Announcing FTC at FIRST Championships since 2017.",
        image: "/images/mentors/04-nickmentorpage.jpg",
      },
      {
        name: "Andrew Kao",
        role: "Business Mentor",
        since: "since 2023",
        bio: "Andrew got his Bachelor's and Master degrees in EECS from MIT. After working through the many booms and busts of the tech industry, he started his own apps company. He has always enjoyed building things and organizations. He now is delighted to be working with the next generation of makers, movers, and entrepreneurs.",
        image: "/images/mentors/05-cachedimage-png.png",
      },
      {
        name: "Liam Fay",
        role: "Awards Mentor",
        since: "since 2024",
        bio: "Liam Fay is a Stanford graduate student in mechanical engineering. He is an alumnus of 2485 (\u201816-\u201818).",
        image: "/images/mentors/06-liam.jpg",
      },
      {
        name: "Rhiannon Elliot",
        role: "Community Impact Mentor",
        since: "since 2025",
        bio: "Rhiannon has a BS in Human Development & Family Science from CSU Monterey Bay, and Associate Degrees in Child & Adolescent Development and Interdisciplinary Studies. She has been volunteering with FRC since 2019 as a field resetter, scorekeeper, and field supervisor.",
        image: "/images/mentors/07-rhiannon2.jpg",
      },
    ],
  },
  {
    heading: "Mechanical Mentors",
    people: [
      {
        name: "Sean Stone",
        role: "FRC Design Lead Mentor",
        since: "since 2012",
        bio: "Sean has a BS in Electromechanical Engineering from Wentworth Institute of Technology. He has worked in the Aerospace, Oil & Gas, Medical and Consumer Electronics industries for large global companies and small startups. He was a student member of FRC Team 151. Before mentoring the Firebots, he mentored FRC Team 246 and FRC Team 1922.",
        image: "/images/mentors/08-pxl-20201119-212624471-portrait-01.jpg",
      },
    ],
  },
  {
    heading: "Software Mentors",
    people: [
      {
        name: "Ruth Nuttall",
        role: "FRC Software Lead Mentor",
        since: "since 2024",
        bio: "Ruth studied Computer Science at California State Polytechnic, Pomona receiving a Bachelors before going on to work at Northrop Grumman and then two HealthTech startups as Software Engineer. Having been involved with FIRST for just over 10 years she has been on teams such as 399, 1538, 7415, and 1967 before coming to 3501 and volunteers extensible in roles such as FTA, CSA, or whatever needs filled out that weekend.",
        image: "/images/mentors/09-ruth.jpg",
      },
      {
        name: "Matt Smith",
        role: "FRC Software Mentor",
        since: "since 2021",
        bio: "Matt has previously been a member of and mentored FRC Team 2172. He first participated in FIRST in 2008. Outside of robotics, Matt is a software engineer at Google and enjoys playing Japanese taiko drums.",
        image: "/images/mentors/10-msmith.jpg",
      },
      {
        name: "Rafael Piacsek",
        role: "FRC Software Mentor",
        since: "since 2024",
        bio: "Rafael earned his BS in Computer Science from the University of Illinois Urbana-Champaign and is currently a Software Engineer at Google. His FIRST journey began as a member of an FLL team in Brazil and continued with FTC Team 17156 in the US. While he didn't have the opportunity to compete in FRC as a student, he is excited to contribute as a mentor for FRC Team 3501.",
        image: "/images/mentors/11-rafael.jpg",
      },
      {
        name: "Pranav Arunandhi",
        role: "FRC Software Mentor",
        since: "since 2025",
        bio: "Pranav started his journey with FIRST Robotics in his freshman year of high school on FRC Team 469, and has been obsessed with robotics since. He's mentored teams whenever and wherever he could - including a brief stint with VEX Team 18882V out of Andorra. Pranav attended MIT for Computer Science and Aerospace Engineering, and is currently a software engineer at an autonomous vehicles startup.",
        image: "/images/mentors/12-pranav-original.png",
      },
    ],
  },
  {
    heading: "FTC Mentors",
    people: [
      {
        name: "Arie Vayner",
        role: "FTC Lead Mentor & Team 16532 Mentor",
        since: "since 2016",
        bio: "Arie first mentored the FRC 3501 team for two years and moved to FTC for the 2018-2019 season. He holds a BS in computer science and works at Google as an Engineering Manager.",
        image: "/images/mentors/13-arie-vayner-photo-2018-2.jpg",
      },
      {
        name: "Madhuri Ramanathan",
        role: "FTC Team 26106 Mentor",
        since: "since 2014",
        bio: "Madhuri got her Bachelor\u2019s degree in Instrumentation Engineering and her Master\u2019s degree in Computer Engineering from Boston University. She was in video conferencing technology, but it lead her to a software CRM job. When her son joined FHS Robotics, she became a mentor the same year and has enjoyed working with the students each year since.",
        image: "/images/mentors/14-img-5307-heic.png",
      },
      {
        name: "Ashok Chandy",
        role: "FTC Team 26106 Mentor",
        since: "since 2022",
        bio: "Ashok first started as an FTC mentor with Infernobots in 2022, and prior to that he was a coach for a rookie FLL team in 2020-21. Ashok has a Masters Degree in Mechanical Engineering and enjoys working on automotive safety-critical systems and technologies. His recent interest has been on autonomous driving systems having working at Apple, Argo AI and now at Volkswagen.",
        image: "/images/mentors/15-img-0421.jpeg",
      },
      {
        name: "Manoj Panicker",
        role: "FTC Team 16532 Mentor",
        since: "since 2023",
        bio: "Manoj has been in the bay area for over 20 years now and loves the weather, the people, and the awesome food. He has led technical teams in semiconductor companies like Marvell, Intel, and AMD focusing on kernel & system software that work with high-speed Ethernet devices. He's enjoyed being a parent coach for his son's team for 4 years of VEX IQ and has been involved in Fremont High School's robotics program since 2023.",
        image: "/images/mentors/16-20221108-201045.jpg",
      },
      {
        name: "David Rabinowitz",
        role: "FTC Team 16533 Mentor",
        since: "since 2023",
        bio: "David first started as an FTC mentor with Sparkbots in 2023. He holds an MSc in computer science and works at Google as a software engineer.",
        image: "/images/mentors/17-20140823t155810ros.jpg",
      },
    ],
  },
];
