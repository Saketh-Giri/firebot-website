export interface Album {
  title: string;
  image: string;
}

export interface Newsletter {
  volume: string;
  date: string;
  file: string;
  cover: string;
}

export const albums: Album[] = [
  { title: "2022 - 2023 Outreach", image: "/images/team-gallery/01-img-5545-jpg.jpg" },
  {
    title: "2022 - 2023 Firebot FRC Orange County Regional",
    image: "/images/team-gallery/02-pxl-20230312-050937766.jpg",
  },
  { title: "2021 - 2022 Sparkbots Season", image: "/images/team-gallery/03-img-0714.jpg" },
  {
    title: "2022 Firebots FRC Monterey Bay Regional",
    image: "/images/team-gallery/04-img-0423-jpg.jpg",
  },
  { title: "2022 Sparkbots FTC Santa Clara", image: "/images/team-gallery/05-img-6751-heic.png" },
  {
    title: "2020 - 2021 Fremont High Robotics Outreach",
    image: "/images/team-gallery/06-screen-shot-2020-11-12-at-8-15-48-pm.png",
  },
  { title: "2019 FLL Bootcamp", image: "/images/team-gallery/07-img-8090.jpeg" },
  {
    title: "2016 FLL Saratoga High School Competition",
    image: "/images/team-gallery/08-20161119-173219.jpeg",
  },
  {
    title: "2022 - 2023 Community Impact Project",
    image: "/images/team-gallery/09-070d8fba-3df7-459f-9633-97a23b9b8f98-1-105-c.jpeg",
  },
  {
    title: "2022 - 2023 Sparkbots FTC Season",
    image: "/images/team-gallery/10-e9c857b7-d702-4197-92b3-476a4ed53572.jpeg",
  },
  {
    title: "2021 - 2022 Infernobots Season",
    image: "/images/team-gallery/11-b4cb8ce6-9ea9-4e0c-8667-9fe37cf60530-jpeg.jpeg",
  },
  {
    title: "2022 Infernobots FTC NorCal Championships",
    image: "/images/team-gallery/12-pxl-20220313-162437472.jpg",
  },
  {
    title: "2021 Sparkbots & Emberbots FTC Burlingame",
    image: "/images/team-gallery/13-img-6395-heic.png",
  },
  {
    title: "2019 - 2020 Fremont High Robotics Season",
    image: "/images/team-gallery/14-img-8898-jpg.jpg",
  },
  { title: "2019 Firebots FRC Utah Regional", image: "/images/team-gallery/15-img-5624.jpeg" },
  { title: "2014 - 2015 Firebots Season", image: "/images/history/01-driveteam2017-1.jpg" },
  {
    title: "2022 - 2023 Firebot FRC Build Season",
    image: "/images/team-gallery/17-dsc-5930-jpg.jpg",
  },
  {
    title: "2022 - 2023 Infernobots FTC Season",
    image: "/images/team-gallery/18-img-9620-jpg.jpg",
  },
  { title: "2021 - 2022 Emberbots Season", image: "/images/team-gallery/19-20220220-103318.jpg" },
  {
    title: "2022 Firebots FRC Hueneme Port Regional",
    image: "/images/team-gallery/20-e831250e-cb8f-4e9f-a50e-58c32cfc9c9a-1-105-c-1.jpeg",
  },
  {
    title: "2020 - 2021 Firebots Season",
    image: "/images/team-gallery/21-screen-shot-2021-05-15-at-9-00-50-pm.png",
  },
  {
    title: "2020 Firebots FRC LA North Regional",
    image: "/images/team-gallery/22-20200229-133544.jpg",
  },
  { title: "2019 Firebots FRC Valencia Regional", image: "/images/team-gallery/23-dsc-0108-nef.jpg" },
  {
    title: "2022 - 2023 Firebot FRC Sacramento Regional",
    image: "/images/team-gallery/24-dsc-3653-jpg.jpg",
  },
  { title: "2021 - 2022 Firebots Season", image: "/images/team-gallery/25-img-9183-1-jpg.jpg" },
  {
    title: "2021 - 2022 Fremont High Robotics Outreach",
    image: "/images/team-gallery/26-img-20211113-142848.jpg",
  },
  { title: "2022 Infernobots FTC Mountain View", image: "/images/team-gallery/27-img-1327.jpg" },
  { title: "2020 - 2021 FTC Season", image: "/images/team-gallery/28-emberbots4.jpeg" },
  {
    title: "2019 Infernobots FTC Redwood City Qualifier",
    image: "/images/history/03-img-20191117-082233.jpg",
  },
  {
    title: "2018 Firebots Training Season Demo Day",
    image: "/images/team-gallery/30-img-4490.jpg",
  },
];

export const newsletterYears: { year: string; issues: Newsletter[] }[] = [
  {
    year: "2021 - 2022",
    issues: [
      {
        volume: "Volume 2 Issue 1",
        date: "January 2022",
        file: "/newsletters/vol2-issue1-january-2022.pdf",
        cover: "/images/newsletters/01-january-2022-fhs-robotics-rewind.png",
      },
      {
        volume: "Volume 2 Issue 2",
        date: "February 2022",
        file: "/newsletters/vol2-issue2-february-2022.pdf",
        cover: "/images/newsletters/02-february-2022-fhs-robotics-rewind.png",
      },
      {
        volume: "Volume 2 Issue 3",
        date: "March 2022",
        file: "/newsletters/vol2-issue3-march-2022.pdf",
        cover: "/images/newsletters/03-march-2022-fhs-robotics-rewind.png",
      },
    ],
  },
  {
    year: "2020 - 2021",
    issues: [
      {
        volume: "Volume 1 Issue 1",
        date: "October 2020",
        file: "/newsletters/vol1-issue1-october-2020.pdf",
        cover: "/images/newsletters/04-fhs-rewind-issue-1-volume-1.png",
      },
      {
        volume: "Volume 1 Issue 2",
        date: "December 2020",
        file: "/newsletters/vol1-issue2-december-2020.pdf",
        cover: "/images/newsletters/05-fhs-rewind-issue-2-volume-1.png",
      },
    ],
  },
];
