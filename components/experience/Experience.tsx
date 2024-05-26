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
                    <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about1}
                    </li>
                    <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about2}
                    </li>
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
    name: "EnterLeaf",
    logo: "https://media.licdn.com/dms/image/D4D0BAQH8gkvAJ_Ox7g/company-logo_200_200/0/1715545920565?e=1724889600&v=beta&t=7bbVLFCwk25sEeTK_mUSEtRlh7FRSsuASrTxxw5-Sc8",
    timeSpan: "Jan 2024 - Current",
    role: "Microservice Backend Developer",
    about1:
      "Architecting microservices and implementing containerization for scalability.",
    about2: "Utilizing CI/CD pipeline for efficient deployment.",
  },
  {
    name: "UpStartPrep",
    logo: "https://media.licdn.com/dms/image/C560BAQGt8nd2YciCCA/company-logo_200_200/0/1671462814241/upstartprep_logo?e=1724889600&v=beta&t=c-Vf-bM6K_HDfVO-I6gjuwKkHq_TA5sUTGXizAQHVIU",
    timeSpan: "Dec 2022 - Jun 2023",
    role: "Backend Developer",

    about1:
      "Creating and improving application programming interfaces (APIs), architecture, and servers, and databases (SQL) for E‑Learning Platforms",
    about2:
      " Implementation of Payment System ( Stripe ) and Used Cloud Services like AWS",
  },
];
