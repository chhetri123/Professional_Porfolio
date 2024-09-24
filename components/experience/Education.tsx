"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/NextImage";

const Education = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-10 ml-6 " key={data.name}>
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
                      className="max-w-fit max-md:my-1 md:ml-3 px-3 py-1 rounded-full"
                    >
                      {data.timeSpan}
                    </Button>
                  </h3>
                  <p className="text-base flex flex-wrap gap-1 mt-2 font-medium text-gray-600 dark:text-gray-400">
                    {data.department}
                    <span className="text-base font-mono text-gray-600 dark:text-gray-400">
                      ({data.course})
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;

const Data = [
  {
    name: "Pashchimanchal Campus Pokhara",
    logo: "https://www.clipartmax.com/png/middle/168-1680696_1511953909tu-logo-tribhuvan-university-logo.png",
    timeSpan: "2019- 2024",
    department: "Electronics, Communication and Information Engineering",
    course: "Bachelor of Engineering",
  },
  {
    name: "Global Collegiate Secondary School",
    logo: "https://i0.wp.com/www.merorojgari.com/wp-content/uploads/2024/03/Global-Collegiate-School-logo.jpg?resize=150%2C150&ssl=1",
    timeSpan: "2017 - 2019",
    department: "Science",
    course: "Plus 2",
  },
];
