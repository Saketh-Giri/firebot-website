export interface AwardBlock {
  event: string;
  results: string[];
}

export interface Season {
  season: string;
  awards?: AwardBlock[];
  leadership?: { role: string; name: string }[];
}

export const historyIntro = [
  {
    year: "2010",
    title: "The Grinders",
    body: "Ten students at Fremont High. FRC 3501 Firebots from 2011 — at least two regionals a year since, and an all-time peak of 131 active members in 2018.",
  },
  {
    year: "2019",
    title: "FTC begins",
    body: "Sparkbots and Infernobots: teams of about ten, and a path from FTC into FRC. Emberbots followed in 2020, through the pandemic.",
  },
  {
    year: "Today",
    title: "Five competition teams",
    body: "Electrobots joined for the 2025–26 season. About 12 students per FTC team and 39 on FRC.",
  },
];

export const historyFigures = [
  { value: "2010", label: "Founded" },
  { value: "131", label: "Members at the 2018 peak" },
  { value: "5", label: "Competition teams" },
];

export const historyPhotos = [
  {
    src: "/images/history/01-driveteam2017-1.jpg",
    alt: "A Firebots drive team at competition",
  },
  {
    src: "/images/history/03-img-20191117-082233.jpg",
    alt: "Students with an FTC robot",
  },
];

export const seasons: Season[] = [
  {
    season: "2025 - 2026",
    awards: [
      {
        event: "2026 FRC Ventura County District Event",
        results: ["Gracious Professionalism Award", "Captain of Alliance #7"],
      },
      {
        event: "2026 FRC Glendale County District Event",
        results: ["FIRST Impact Award", "Captain of Alliance #5, Semifinalist"],
      },
      {
        event: "2025 South Bay League Tournament",
        results: ["Innovate Award (Team 26106)", "Captain of Alliance #2, Finalist (Team 26106)"],
      },
      {
        event: "2025 Play Space #7 Qualifying Tournament",
        results: [
          "Innovate Award (Team 16533)",
          "1st Pick of Alliance #2, Finalist (Team 16533)",
        ],
      },
      {
        event: "2025 Santa Clara Qualifying Tournament #2",
        results: [
          "Innovate Award (Team 16533)",
          "1st Pick of Alliance #2, Winning Alliance (Team 16533)",
        ],
      },
    ],
    leadership: [
      { role: "President", name: "Christopher Kao" },
      { role: "VP of Community Impact", name: "Nina Chandy" },
      { role: "VP of Business", name: "Mahesh Kodam" },
      { role: "FRC VP of Design", name: "Anthon Buynitsky" },
      { role: "FRC VP of Manufacturing", name: "Akhil Pathapati" },
      { role: "FRC VP of Integration", name: "Kalash Venkumahanti" },
      { role: "FRC VP of Software", name: "Anthony Lu" },
      { role: "FTC Team 16533 Lead", name: "Raj Petkar" },
      { role: "FTC Team 16532 Lead", name: "Vianna Moshtaghi" },
      { role: "FTC Team 26106 Lead", name: "Jaiveer Zaveri" },
      { role: "Measurement Lead", name: "Neal Lawrence" },
      { role: "Director of Education Programs", name: "Lakshmi Annavarapu" },
    ],
  },
  {
    season: "2024 - 2025",
    awards: [
      {
        event: "2025 FRC Orange County Regional",
        results: ["Team Spirit Award", "2nd pick of Alliance #1, Semifinalist"],
      },
      {
        event: "2025 FRC Hawaii Regional",
        results: ["Engineering Inspiration Award", "1st pick of Alliance #2, Semifinalist"],
      },
      { event: "2024 Google FTC Qualifying Tournament", results: ["Think Award (Team 16533)"] },
      {
        event: "2024 Stratford FTC Qualifying Tournament",
        results: [
          "Connect Award (Team 16533)",
          "Winning Alliance Captain / #2 Seed (Team 16533)",
        ],
      },
      {
        event: "2025 FTC NorCal Regional Championships",
        results: [
          "Silicon Division 6th Alliance Captain (Team 16533)",
          "Silicon Division 8th Seed (Team 16533)",
        ],
      },
    ],
    leadership: [
      { role: "President", name: "Christopher Kao" },
      { role: "VP of Business and Marketing", name: "Mukta Patil" },
      { role: "VP of Community Impact", name: "Nina Chandy" },
      { role: "FRC VP of Design", name: "Anthon Buynitsky" },
      { role: "FRC VP of Manufacturing", name: "Akhil Pathapati" },
      { role: "FRC VP of Integration", name: "Kalash Venkumahanti" },
      { role: "FRC VP of Software", name: "Ritvik Setty" },
      { role: "FTC Team 16533 Lead", name: "Raj Petkar" },
      { role: "FTC Team 16532 Lead", name: "Sujay Vungarala" },
      { role: "FTC Team 26106 Lead", name: "Jaiveer Zaveri" },
      { role: "Media Lead", name: "Rotem Ben David" },
      { role: "Measurement Lead", name: "Neal Lawrence" },
      { role: "Curriculum Lead", name: "Venkat Ramisetty" },
      { role: "Events Director", name: "Arnav Prasad" },
    ],
  },
  {
    season: "2023 - 2024",
    awards: [
      {
        event: "2024 FRC Central Valley Regional",
        results: ["Gracious Professionalism Award", "Semifinalist Alliance"],
      },
      {
        event: "2024 FRC Utah Regional",
        results: [
          "Judges Award",
          "Woodie Flowers Finalist Award (Sohini Stone)",
          "Semifinalist Alliance Captain (#7 Seed and 5th Alliance Captain)",
        ],
      },
      {
        event: "2023 FTC San Jose Qualifying Tournament #1",
        results: ["Finalist Alliance (Team 16533)"],
      },
      {
        event: "2023 FTC San Jose Qualifying Tournament #2",
        results: [
          "Winning Alliance (Top Seed Alliance) (Team 16532)",
          "Design Award Runner Up (Team 16532)",
        ],
      },
      {
        event: "2023 FTC Santa Clara Qualifying Tournament #2",
        results: [
          "Motivate Award (Team 16532)",
          "Finalist Alliance Captain (Team 16532)",
        ],
      },
    ],
    leadership: [
      { role: "President", name: "Nika Ziper" },
      { role: "VP of Business and Marketing", name: "Shraddha Sriram" },
      { role: "VP of Community Impact", name: "Jaidev Shankar" },
      { role: "FRC VP of Design", name: "Oliver Chang" },
      { role: "FRC VP of Manufacturing", name: "Shaunak Patil" },
      { role: "FRC VP of Integration", name: "Christopher Kao" },
      { role: "FRC VP of Software", name: "Aagrim Hoysal" },
      { role: "FTC Team Lead", name: "Nina Chandy" },
      { role: "FTC Team Lead", name: "Toshi North" },
      { role: "Media Lead", name: "Tejas Manjunatha" },
      { role: "Measurement Lead", name: "Mahika Maini" },
      { role: "Curriculum Lead", name: "Nikash Malhotra" },
    ],
  },
  {
    season: "2022 - 2023",
    awards: [
      {
        event: "2023 FRC Sacramento Regional",
        results: ["Semifinalists [8th seed alliance]", "Team Sustainability Award"],
      },
      {
        event: "2023 FRC Orange County Regional",
        results: ["Woodie Flowers Award Finalist (Sean Stone)", "Team Sustainability Award"],
      },
      {
        event: "2023 FTC Norcal Regional Championships",
        results: [
          "4th Alliance Captain [#5 seed after qualifiers] (Team 16533)",
          "4th Alliance second pick [#10 seed after qualifiers] (Team 16532)",
          "2nd runner up, Promote Award (Team 16533)",
        ],
      },
      {
        event: "2022 FTC San Jose Qualifying Tournament #1",
        results: [
          "Winning Alliance (Team 16532)",
          "#2 Seed (Team 16532)",
          "Control Award (Team 16532)",
        ],
      },
      {
        event: "2022 FTC Saratoga Qualifying Tournament #1",
        results: ["Finalist Alliance (Team 16532)", "Innovate Award (Team 16532)"],
      },
      {
        event: "2022 FTC Google Qualifying Tournament #1",
        results: [
          "Winning Alliance (Team 16533)",
          "Inspire Award Runner-Up (Team 16533)",
          "Design Award (Team 16533)",
        ],
      },
    ],
    leadership: [
      { role: "President", name: "Jai Bhatia" },
      { role: "VP of Business and Marketing", name: "Shrida Bhat" },
      { role: "FRC VP of Design", name: "Nika Ziper" },
      { role: "FRC VP of Manufacturing", name: "Sal Barray" },
      { role: "FRC VP of Electrical", name: "Taran Kondamuru" },
      { role: "FRC VP of Software", name: "Pranav Joshi" },
      { role: "FTC Team Lead", name: "Tanvi Panse" },
      { role: "FTC Team Lead", name: "Vinay Jain" },
      { role: "Community Impact Lead", name: "Oindree Chatterjee" },
      { role: "Events Lead", name: "Shraddha Sriram" },
    ],
  },
  {
    season: "2021 - 2022",
    awards: [
      {
        event: "2022 FRC Hueneme Port Regional",
        results: ["Entrepreneurship Award", "Quarterfinalists"],
      },
      {
        event: "2022 FRC Monterey Bay Regional",
        results: ["Entrepreneurship Award", "Quarterfinalists"],
      },
      {
        event: "2021 FTC Burlingame Qualifying Tournament",
        results: [
          "Think Award (Team 16532)",
          "2nd Place Think Award (Team 18223)",
          "Finalist Alliance (Team 16532)",
        ],
      },
      {
        event: "2021 FTC Santa Clara Qualifying Tournament",
        results: [
          "Think Award (Team 16532)",
          "2nd Place Control Award (Team 16532)",
          "Winning Alliance (Team 16532)",
        ],
      },
      {
        event: "2021 FTC Santa Clara Qualifying Tournament #2",
        results: ["2nd Place Think Award (Team 18223)"],
      },
      {
        event: "2021 Google FTC Qualifying Tournament",
        results: ["2nd Place Think Award (Team 16533)"],
      },
      {
        event: "2021 FTC Mountain View Qualifying Tournament",
        results: [
          "Design Award (Team 16533)",
          "3rd Place Inspire Award (Team 16533)",
          "Finalist Alliance 1st Pick (Team 16533)",
        ],
      },
      {
        event: "2022 NorCal Regional Championships",
        results: ["2nd Place Promote Award (Team 16533)"],
      },
    ],
    leadership: [
      { role: "President", name: "Dwijen Chawra" },
      { role: "VP of Business and Marketing", name: "Chloe Lau" },
      { role: "VP of Design", name: "Alexiy Buynitsky" },
      { role: "VP of Manufacturing", name: "Samik Singh" },
      { role: "VP of Software", name: "Katya Teodorovich" },
      { role: "VP of Electrical", name: "Elizabeth Moh" },
      { role: "FTC Team 16532 Lead", name: "Zek Esa" },
      { role: "FTC Team 16533 Lead", name: "Tanvi Panse" },
      { role: "FTC Team 18223 Lead", name: "Oindree Chatterjee" },
      { role: "Events Lead", name: "Eshika Jaini" },
      { role: "Community Impact Lead", name: "Kaitlin Wong" },
    ],
  },
  {
    season: "2020 - 2021",
    awards: [{ event: "2021 Game Design Challenge", results: ["Designer's Award"] }],
    leadership: [
      { role: "President", name: "Zaki Loldj" },
      { role: "VP of Business and Marketing", name: "Manan Bhargava" },
      { role: "VP of Design", name: "Adam Vaughn" },
      { role: "VP of Manufacturing", name: "Kavin Sureshbabu" },
      { role: "VP of Software", name: "Dwijen Chawra" },
      { role: "VP of Electrical", name: "Yusuf Jarada" },
      { role: "FTC Team 16532 Lead", name: "Juan Pedraza Arellano" },
      { role: "FTC Team 16533 Lead", name: "Tanvi Panse" },
      { role: "FTC Team 18223 Lead", name: "Oindree Chatterjee" },
      { role: "Media Lead", name: "Chloe Lau" },
      { role: "Events Lead", name: "Eesha Ghanta" },
      { role: "FLL Lead", name: "Taran Kondamuru" },
    ],
  },
  {
    season: "2019 - 2020",
    awards: [
      {
        event: "Season awards",
        results: ["Award for Outstanding Accomplishment in S.T.E.A.M. Leadership"],
      },
    ],
    leadership: [
      { role: "President", name: "Daniel Ziper" },
      { role: "VP of Electrical Engineering", name: "Akash Jain" },
      { role: "VP of Mechanical Design", name: "Adam Vaughan" },
      { role: "VP of Manufacturing", name: "Zaki Loldj" },
      { role: "VP of Software Engineering", name: "Dwijen Chawra" },
      { role: "VP of Business and Media", name: "Manan Bhargava" },
    ],
  },
  {
    season: "2018 - 2019",
    leadership: [
      { role: "President", name: "Yash Kedia" },
      { role: "VP of Electrical Engineering", name: "Daniel Ziper" },
      { role: "VP of Mechanical Engineering", name: "Assaf Vayner" },
      { role: "VP of Software Engineering", name: "Rohan Rodrigues" },
      { role: "VP of Business and Media", name: "Marc Corfmat" },
      { role: "VP of Strategy", name: "Alon Lahav" },
    ],
  },
  {
    season: "2017 - 2018",
    awards: [{ event: "2018 Arizona North Regional", results: ["Quarterfinalist"] }],
    leadership: [
      { role: "President", name: "Colin Howard" },
      { role: "VP of Electrical Engineering", name: "Yash Kedia" },
      { role: "VP of Mechanical Engineering", name: "Prithvi Kannan" },
      { role: "VP of Software Engineering", name: "Cindy Zhang" },
      { role: "VP of Marketing and Public Relations", name: "Shaina Chen" },
      { role: "VP of Finance", name: "Niyati Sriram" },
      { role: "VP of Strategy", name: "Rohan Walia" },
    ],
  },
  {
    season: "2016 - 2017",
    leadership: [
      { role: "President", name: "Kevin Zhang" },
      { role: "VP of Electrical Engineering", name: "Yash Kedia" },
      { role: "VP of Mechanical Engineering", name: "CH" },
      { role: "VP of Software Engineering", name: "Cindy Zhang" },
      { role: "VP of Marketing and Public Relations", name: "Lauren Meier" },
      { role: "VP of Safety", name: "Karthik Balakrishnan" },
      { role: "VP of Finance", name: "Meryem Esa" },
      { role: "VP of Strategy", name: "Rohan Walia" },
    ],
  },
  {
    season: "2015 - 2016",
    awards: [
      { event: "2016 Calgames", results: ["Finalist"] },
      { event: "2016 Central Valley Regional", results: ["Spirit Award"] },
    ],
    leadership: [
      { role: "Chief Executive Officer", name: "Logan Howard" },
      { role: "VP of Electrical Engineering", name: "Davide Lanfranconi" },
      { role: "VP of Mechanical Engineering", name: "Rishab Kedia" },
      { role: "VP of Software Engineering", name: "Kevin Zhang" },
      { role: "VP of Public Relations and Marketing", name: "Daniel Zhang" },
      { role: "VP of Safety/Quality", name: "Aayush Patel" },
      { role: "VP of Finance", name: "Meryem Esa" },
      { role: "VP of Special Projects", name: "Neel Saswade" },
      { role: "VP of Strategy", name: "Cindy Zhang" },
    ],
  },
  {
    season: "2014 - 2015",
    awards: [
      {
        event: "2015 Central Valley Regional",
        results: ["Quarterfinalist", "Alliance Captain", "Industrial Safetway Award Finalist"],
      },
      {
        event: "2015 Ventura Regional",
        results: ["Quarterfinalist", "Alliance Captain", "Industrial Safety Award Finalist"],
      },
    ],
    leadership: [
      { role: "Chief Executive Officer", name: "Sitar Harel" },
      { role: "VP of Electrical Engineering", name: "Rajat Walia" },
      { role: "VP of Mechanical Engineering", name: "Rishab Kedia" },
      { role: "VP of Software Engineering", name: "Harel Dor" },
      { role: "VP of Public Relations and Marketing", name: "Daniel Zhang" },
      { role: "VP of Safety/Quality", name: "Annam Quraishi" },
      { role: "VP of Finance", name: "Kenny Nguyen" },
      { role: "VP of Project Management", name: "Logan Howard" },
      { role: "VP of Strategy", name: "John Lin" },
    ],
  },
  {
    season: "2013 - 2014",
    awards: [
      { event: "2014 Central Valley Regional", results: ["Semifinalist", "Spirit Award"] },
    ],
    leadership: [
      { role: "President", name: "Stuart McCrorie" },
      { role: "Lead of Electrical Engineering", name: "Rajat Walia" },
      { role: "Lead of Mechanical Engineering", name: "Sitar Harel" },
      { role: "Lead of Software Engineering", name: "Jaidev Bapat" },
      { role: "Lead of Business/Public Relations", name: "Hailey Sanidad" },
      { role: "Lead of Safety/Quality", name: "Annam Quraishi" },
    ],
  },
  {
    season: "2012 - 2013",
    awards: [
      {
        event: "2013 Central Valley Regional",
        results: ["Finalist", "Alliance Captain", "Judges' Award", "No. 1 Seed"],
      },
      { event: "2013 Calgames", results: ["Quarterfinalist"] },
    ],
    leadership: [
      { role: "President", name: "Stuart McCrorie" },
      { role: "Vice President", name: "Vasu Maheshwari" },
      { role: "Lead of Electrical Engineering", name: "George He" },
      { role: "Lead of Mechanical Engineering", name: "Charlie Depew" },
      { role: "Lead of Software Engineering", name: "Jaidev Bapat" },
      { role: "Lead of Business/Public Relations", name: "Hailey Sanidad" },
      { role: "Lead of Safety/Quality", name: "Annam Quraishi" },
    ],
  },
  {
    season: "2011 - 2012",
    awards: [{ event: "2012 Central Valley Regional", results: ["Semifinalist"] }],
    leadership: [
      { role: "President", name: "Jason McCrorie" },
      { role: "Vice President", name: "Stuart McCrorie" },
      { role: "Lead of Electrical Engineering", name: "Rich Kaecher" },
      { role: "Lead of Mechanical Engineering", name: "Jason McCrorie" },
      { role: "Lead of Software Engineering", name: "Bruce Feldman" },
      { role: "Lead of Business", name: "George He" },
      { role: "Lead of Public Outreach", name: "Jaidev Bapat" },
      { role: "Lead of Safety", name: "Annam Quraishi" },
    ],
  },
  {
    season: "2010 - 2011",
    awards: [
      {
        event: "2011 Silicon Valley Regional",
        results: ["Highest Rookie Seed", "Inventor Award Finalist"],
      },
    ],
    leadership: [
      { role: "President", name: "Nathan Depew" },
      { role: "Vice President", name: "Jason McCrorie" },
    ],
  },
  {
    season: "2009 - 2010",
    leadership: [
      { role: "President", name: "Nathan Depew" },
      { role: "Vice President", name: "Jason McCrorie" },
    ],
  },
];
