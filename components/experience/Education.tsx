"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/NextImage";

const Education = () => {
  return (
    <div className="flex flex-col items-center py-10 sm:py-16 md:py-20 px-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Education
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
        </h2>

        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-8 ml-4 sm:ml-6" key={data.name}>
              <div className="flex items-start">
                {/* Logo Container */}
                <div className="absolute -left-3 sm:-left-4">
                  <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 ring-2 ring-white dark:ring-gray-800 shadow-md">
                    <NextImage
                      src={data.logo}
                      width={24}
                      height={24}
                      className="rounded-full w-5 h-5 sm:w-6 sm:h-6"
                      alt={data.name}
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="ml-2 sm:ml-4 animate_in">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {data.name}
                    </h3>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="max-w-fit text-xs sm:text-sm px-2 sm:px-3 py-0.5 rounded-full"
                    >
                      {data.timeSpan}
                    </Button>
                  </div>

                  <p className="text-sm sm:text-base mt-1 sm:mt-2 font-medium text-gray-600 dark:text-gray-400">
                    {data.department}
                    <span className="text-xs sm:text-sm font-mono ml-1">
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
