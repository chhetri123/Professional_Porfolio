"use client";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-10 ml-6" key={data.name}>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 ring-2 ring-white dark:ring-gray-800 shadow-md flex-shrink-0">
                  <NextImage
                    src={data.logo}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    alt={`${data.name} logo`}
                  />
                </div>
                <div className="flex-1 animate_in">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-8 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                      {data.name}
                    </h3>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="self-start lg:self-center px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                    >
                      {data.timeSpan}
                    </Button>
                  </div>
                  <p className="text-base font-medium text-gray-600 dark:text-gray-400 mb-3">
                    {data.role}
                  </p>
                  <ul className="space-y-2">
                    {data.about.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

const Data = [
  {
    name: "Swivt technology",
    logo: "/swivt.png",
    timeSpan: "Nov 2023 - Aug 2025",
    role: "Full Stack Software Developer",

    about: [
      "Managing server configurations, troubleshooting, and resolving issues",
      "Handling international client projects, ensuring high-quality deliverables and receiving consistently positive feedback",
      "Enhancing existing projects by implementing new features",
      "WebRTC ,CRM,CMS and role‑based management systems",
      "Application containerization, Nginx optimization, Cloudflare DNS/domain management, and end-to-end cloud-native deployment of RAG transformer models for medical insurance systems.",
    ],
  },

  {
    name: "Swivt Education",
    logo: "/swivt_education.png",
    timeSpan: "Nov 2023 - Aug 2025",
    role: "Full Stack Developer (Mentor)",

    about: [
      "Provide guidance and mentorship to junior developers, helping them enhance their technical skills and grow as full‑ stack engineers.",
      "Assist mentees in building real‑world applications, focusing on both frontend and backend development using modern technologies (e.g., React, Node.js, MongoDB)",
      "Review code, provide constructive feedback, and introduce best practices in software development.",
      "Teach concepts like version control, API development, responsive design, and database management.",
    ],
  },
  {
    name: "EnterLeaf",
    logo: "/enterleaf.png",
    timeSpan: "Jul 2023 - Nov 2023",
    role: "Microservice Backend Developer",
    about: [
      "Designed and developed different services using NestJS, leveraging NATS for message brokering, enabling a robust event‑driven architecture.",
      "Integrated an API Gateway to handle and route requests efficiently from both mobile and web browser clients, ensuring seamless communication across services",
      "Implemented a CI/CD pipeline using GitHub Actions, streamlining the deployment process and ensuring continuous integration and delivery for rapid and reliable updates.",
    ],
  },
  {
    name: "UpStartPrep",
    logo: "/upstartprep.png",
    timeSpan: "Dec 2022 - Jun 2023",
    role: "Backend Developer",
    about: [
      "Creating and improving application programming interfaces (APIs), architecture, and servers, and databases (SQL) for E‑Learning Platforms.",
      "Implementation of Payment System ( Stripe ) and Used Cloud Services like AWS.",
      "Implementation of microservices‑based architecture, incorporating containerization and CI/CD pipeline for efficient development.",
    ],
  },
];
