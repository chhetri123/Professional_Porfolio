"use client";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-10 ml-6" key={data.name}>
              <div className="flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 ring-2 ring-white dark:ring-gray-800 shadow-md">
                  <NextImage
                    src={data.logo}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt={data.name}
                  />
                </span>
                <div className="ml-4 animate_in">
                  <h3 className="flex flex-col lg:flex-row text-lg font-semibold">
                    {data.name}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="max-w-fit max-md:my-1 md:ml-10 mt-[-1%] px-3 rounded-full"
                    >
                      {data.timeSpan}
                    </Button>
                  </h3>
                  <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                    {data.role}
                  </p>
                  <ul className="list-disc font-sans text-sm mt-2 ml-5">
                    {data.about.map((point, index) => (
                      <li
                        key={index}
                        className="my-1 text-gray-700 dark:text-gray-300"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;

const Data = [
  {
    name: "Swivt technology",
    logo: "/swivt.png",
    timeSpan: "Nov 2023 - Current",
    role: "Full Stack Software Developer",

    about: [
      "Managing server configurations, troubleshooting, and resolving issues",
      "Enhancing existing projects by implementing new features",
      "Configuring and Optimizing Nginx, alongside handling DNS and domain management for over 100 domains and subdomains through Cloudflare",
    ],
  },

  {
    name: "Swivt Education",
    logo: "/swivt_education.png",
    timeSpan: "Nov 2023 - Current",
    role: "Full Stack Developer (Mentor)",

    about: [
      "Mentor junior developers to enhance skills.",
      "Guide building real-world apps with technologies",
      " Review code, provide feedback, and advice.",
    ],
  },
  {
    name: "EnterLeaf",
    logo: "/enterleaf.png",
    timeSpan: "Jul 2023 - Nov 2023",
    role: "Microservice Backend Developer",
    about: [
      "Architecting microservices and implementing containerization for scalability.",
      "Utilizing CI/CD pipeline for efficient deployment.",
    ],
  },
  {
    name: "UpStartPrep",
    logo: "/upstartprep.png",
    timeSpan: "Dec 2022 - Jun 2023",
    role: "Backend Developer",

    about: [
      "Creating and improving application programming interfaces (APIs), architecture, and servers, and databases (SQL) for E‑Learning Platforms",

      " Implementation of Payment System ( Stripe ) and Used Cloud Services like AWS",
    ],
  },
];
