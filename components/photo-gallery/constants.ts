import GUIC from "@/assets/photos/guic.jpg";
import GUIC_2 from "@/assets/photos/guic_1.jpeg";

//
import RTSTI from "@/assets/photos/rtsti_1.jpeg";
import RTSTI_2 from "@/assets/photos/rtsti_2.jpeg";

//
import Robo_Soccer from "@/assets/photos/robo-soccer.jpg";
import Robo_Soccer_4 from "@/assets/photos/robo_soccer.jpg";
import Robo_Soccer_1 from "@/assets/photos/robo_soccer_1.jpg";
import Robo_Soccer_2 from "@/assets/photos/robo_soccer_2.jpg";
import Robo_Soccer_3 from "@/assets/photos/robo_soccer_3.jpg";

//
import Line_Follower from "@/assets/photos/line_follower.jpg";

//
import moon from "@/assets/photos/moon-1.jpeg";
import moon_2 from "@/assets/photos/moon_2.jpeg";
import moon_3 from "@/assets/photos/moon_3.jpeg";
import moon_4 from "@/assets/photos/moon_4.jpeg";

//
import excavator from "@/assets/photos/excavator_1.jpeg";
import excavator_2 from "@/assets/photos/excavator_2.jpeg";
import excavator_3 from "@/assets/photos/excavator_3.jpeg";

import { StaticImageData } from "next/image";

export interface PhotoItem {
  id: string;
  src: StaticImageData;
  alt: string;
  title: string;
  date: string;
  location?: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  photos: PhotoItem[];
}

export const photoGalleryData: PhotoCategory[] = [
  {
    id: "events_2",
    name: "RTSTI Conference  2024",
    tag: "Event",
    description:
      "Presented a comprehensive research on Vehicle’s Crash Detection and Alert System at RTSTI 2024 as a PRESENTER.",
    photos: [
      {
        id: "rtsti-1",
        src: RTSTI, // Placeholder - replace with actual event photos
        alt: "Presenting project at prestigious Gandaki University Conference",
        title: "RTSTI Conference",
        date: "1/20/2024",
        location: "Gandaki University",
      },
      {
        id: "rtsti-2",
        src: RTSTI_2, // Placeholder - replace with actual event photos
        alt: "Presenting project at prestigious Gandaki University Conference",
        title: "RTSTI Conference",
        date: "1/20/2024",
        location: "Gandaki University",
      },
    ],
  },
  {
    id: "events",
    name: "GUIC Conference",
    tag: "Event",
    description:
      "Presenting our project on prestigious Gandaki University Conference.",
    photos: [
      {
        id: "guic-1",
        src: GUIC, // Placeholder - replace with actual event photos
        alt: "Presenting project at prestigious Gandaki University Conference",
        title: "GUIC Conference",
        date: "1/20/2024",
        location: "Gandaki University",
      },
      {
        id: "guic-2",
        src: GUIC_2, // Placeholder - replace with actual event photos
        alt: "Presenting project at prestigious Gandaki University Conference",
        title: "GUIC Conference",
        date: "1/20/2024",
        location: "Gandaki University",
      },
    ],
  },
  {
    id: "line-follower",
    name: "Line following robot",
    tag: "Bot",
    description:
      "Built a line-following robot with a team of four members using Arduino, IR sensors, and a Bluetooth module, which enabled the robot to detect and follow a line as well as be remotely controlled.",
    photos: [
      {
        id: "line-follower-1",
        src: Line_Follower, // Placeholder - replace with actual outdoor photos
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2024",
        location: "Resort near Pokhara",
      },
    ],
  },
  {
    id: "robo-soccer",
    name: "A Robo-Soccer Robot",
    tag: "Bot",
    description:
      "A robo-soccer system that can kick a ball and score goals in a goalpost, built using a Bluetooth module, Arduino, L298N and controlled remotely.",
    photos: [
      {
        id: "robo-soccer-1",
        src: Robo_Soccer, // Placeholder - replace with actual outdoor photos
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2021",
        location: "Resort near Pokhara",
      },
      {
        id: "robo-soccer-1",
        src: Robo_Soccer_1, // Placeholder - replace with actual outdoor photos
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2021",
        location: "Resort near Pokhara",
      },
      {
        id: "robo-soccer-2",
        src: Robo_Soccer_2, // Placeholder - replace with actual outdoor photos
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2021",
        location: "Resort near Pokhara",
      },
      {
        id: "robo-soccer-2",
        src: Robo_Soccer_3, // Placeholder - replace with actual outdoor photos
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2021",
        location: "Resort near Pokhara",
      },
      {
        id: "robo-soccer-2",
        src: Robo_Soccer_4,
        alt: "Celebrating a nice dayout at Resort near Pokhara with college mates",
        title: "Robo Soccer",
        date: "1/25/2021",
        location: "Resort near Pokhara",
      },
    ],
  },

  {
    id: "moon",
    name: "Mathematics Olympiad Of Nepal (MOON)",
    tag: "Event",
    description:
      "Participated in MOON, a mathematics olympiad organized by the Nepal Mathematics Olympiad Organization (NMOO), where I solved problems in mathematics and logic.",
    photos: [
      {
        id: "moon-1",
        src: moon,
        alt: "Participating in MOON, a mathematics olympiad organized by the Nepal Mathematics Olympiad Organization (NMOO)",
        title: "MOON",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
      {
        id: "moon-2",
        src: moon_2,
        alt: "Participating in MOON, a mathematics olympiad organized by the Nepal Mathematics Olympiad Organization (NMOO)",
        title: "MOON",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
      {
        id: "moon-3",
        src: moon_3,
        alt: "Participating in MOON, a mathematics olympiad organized by the Nepal Mathematics Olympiad Organization (NMOO)",
        title: "MOON",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
      {
        id: "moon-4",
        src: moon_4,
        alt: "Participating in MOON, a mathematics olympiad organized by the Nepal Mathematics Olympiad Organization (NMOO)",
        title: "MOON",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
    ],
  },
  {
    id: "excavator",
    name: "A Remote Controlled Excavator",
    tag: "Bot",
    description:
      "Built a remote controlled excavator with a team of four members using Motor, Siringe for lifting and lowering the bucket",
    photos: [
      {
        id: "excavator-1",
        src: excavator,
        alt: "Built a remote controlled excavator with a team of four members using Motor, Siringe for lifting and lowering the bucket",
        title: "Excavator",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
      {
        id: "excavator-2",
        src: excavator_2,
        alt: "Built a remote controlled excavator with a team of four members using Motor, Siringe for lifting and lowering the bucket",
        title: "Excavator",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
      {
        id: "excavator-3",
        src: excavator_3,
        alt: "Built a remote controlled excavator with a team of four members using Motor, Siringe for lifting and lowering the bucket",
        title: "Excavator",
        date: "1/20/2018",
        location: "Kathmandu, Nepal",
      },
    ],
  },
];

export const getAllCategories = (): string[] => {
  const categories = photoGalleryData.map((category) => category.tag);
  return ["All", ...Array.from(new Set(categories))];
};

export const getPhotosByCategory = (category: string): PhotoCategory[] => {
  if (category === "All") {
    return photoGalleryData;
  }
  return photoGalleryData.filter((item) => item.tag === category);
};
