export interface Publication {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "Research Paper" | "Conference Paper" | "Journal Article";
  doi?: string;
  summaryUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  type: "Gold" | "Silver" | "Bronze" | "Certificate" | "Recognition";
  icon: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: "pub1",
    title:
      "Nepali Image Captioning: Generating Coherent Paragraph-Length Descriptions Using Transformer",
    description:
      "The proposed work leverages transformer architecture to generate paragraph-long Nepali image captions using a combined dataset of translated and manually curated images, with image features extracted via a pretrained Inception V3 model and evaluated using BLEU scores, demonstrating improved accuracy in Nepali caption generation.",
    date: "March 2024",
    type: "Research Paper",
    doi: "10.36548/jscp.2024.1.006",
    summaryUrl: "blog/AI/image_captioning",
  },
  {
    id: "pub2",
    title:
      "Drowsiness and Crash Detection Mobile Application for Vehicle's Safety",
    description:
      "The proposed system integrates hardware, sensor technology, and a mobile application to detect and report road accidents in real time, prevent drowsiness-related incidents through facial recognition, and communicate with emergency services via GPS and GSM, enhancing overall safety and response efficiency.",
    date: "April 2024",
    type: "Research Paper",
    doi: "10.36548/jismac.2024.1.005",
  },
];

export const awards: Award[] = [
  {
    id: "award0",
    title: "A Remote Controlled Excavator",
    organization: "Vector, Pashchimanchal Campus",
    description:
      "Built a remote controlled excavator with a team of four members using Motor, Siringe for lifting and lowering the bucket",
    date: "March 2019",
    type: "Gold",
    icon: "🥇",
  },
  {
    id: "award1",
    title: "Line following robot",
    organization: "Pashchimanchal Campus",
    description:
      "I built a line-following robot with a team of four members using Arduino, IR sensors, and a Bluetooth module, which enabled the robot to detect and follow a line as well as be remotely controlled.",
    date: "March 2020",
    type: "Silver",
    icon: "🥈",
  },
  {
    id: "award2",
    title: "A Robo-Soccer Robot",
    organization: "National Innovation center , Pokhara",
    description:
      "A robo-soccer system that can kick a ball and score goals in a goalpost, built using a Bluetooth module, Arduino, L298N and controlled remotely.",
    date: "January 2021",
    type: "Silver",
    icon: "🥈",
  },
  {
    id: "award3",
    title: "Datathon",
    organization: "ICES, Pashchimanchal Campus CLUB",
    description:
      "An unknown dataset was provided, and as a team of two, we performed data preprocessing and filtering, selected the most accurate model for label classification, and presented our findings effectively.",
    date: "February 2024",
    type: "Gold",
    icon: "🥇",
  },
  {
    id: "award3",
    title: "Minor Project",
    organization: "Pashchimanchal Campus",
    description:
      "The completed minor project utilizes hardware components such as an Arduino microcontroller, accelerometer, GPS module, GSM module, and facial recognition sensors to detect road accidents, monitor driver drowsiness, and enable real-time communication with emergency services",
    date: "November 2023",
    type: "Recognition",
    icon: "🏆",
  },
  {
    id: "award4",
    title: "Major Project",
    organization: "Pashchimanchal Campus",
    description:
      "Completed a major project using transformer architecture to generate paragraph-long Nepali image captions, combining translated and curated datasets, with Inception V3 for feature extraction and BLEU score evaluation",
    date: "March 2024",
    type: "Recognition",
    icon: "🎓",
  },
  {
    id: "award5",
    title: "Participation in MOON",
    organization: "Mathematics Olympiad Of Nepal (MOON), Kathmandu ",
    description: "Experienence in solving problems in mathematics and logic",
    date: "March 2018",
    type: "Recognition",
    icon: "🏆",
  },

  {
    id: "award6",
    title: "Presenter at RTSTI 2024",
    organization:
      "Recent Trends on Science, Technology and Innovation (RTSTI), Institute of Forestry, Pokhara Campus",
    description:
      "Presented a comprehensive research on Vehicle’s Crash Detection and Alert System at RTSTI 2024 as a PRESENTER.",
    date: "January 2024",
    type: "Recognition",
    icon: "🎤",
    link: "https://youtu.be/_TMW_9Bf9YY?feature=shared",
  },
  {
    id: "award7",
    title: "Participation in DELTA",
    organization: "Purwanchal Engineering College, Dharan",
    description:
      "A team of four members collaborated to combine accident detection and medical emergency features and presented the project.",
    date: "January 2024",
    type: "Recognition",
    icon: "🏆",
    link: "https://youtu.be/m3x9BI8uZpU?feature=shared",
  },
];

export const getAwardIcon = (type: Award["type"]): string => {
  switch (type) {
    case "Gold":
      return "🥇";
    case "Silver":
      return "🥈";
    case "Bronze":
      return "🥉";
    case "Certificate":
      return "🎓";
    case "Recognition":
      return "🏆";
    default:
      return "🏆";
  }
};

export const getAwardColor = (type: Award["type"]): string => {
  switch (type) {
    case "Gold":
      return "from-yellow-400 to-yellow-600";
    case "Silver":
      return "from-gray-300 to-gray-500";
    case "Bronze":
      return "from-orange-400 to-orange-600";
    case "Certificate":
      return "from-blue-400 to-blue-600";
    case "Recognition":
      return "from-purple-400 to-purple-600";
    default:
      return "from-gray-400 to-gray-600";
  }
};
