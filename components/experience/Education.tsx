"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/NextImage";

const Education = () => {
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

                  <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {data.degree}
                  </p>

                  {data.specialization && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {data.specialization}
                    </p>
                  )}

                  <div className="space-y-1">
                    {data.grade && (
                      <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Final Grade:</strong> {data.grade}
                        </span>
                      </div>
                    )}

                    {data.cgpa && (
                      <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>CGPA:</strong> {data.cgpa}
                        </span>
                      </div>
                    )}

                    {data.percentage && (
                      <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Percentage:</strong> {data.percentage}
                        </span>
                      </div>
                    )}

                    {data.thesis && (
                      <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Thesis Title:</strong> {data.thesis}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;

const Data = [
  {
    name: "Pashchimanchal Campus Pokhara, Institute of Engineering, TU, Nepal",
    logo: "/paschimanchal.png",
    timeSpan: "2019 – 2024",
    degree: "B.E. in Electronics, Communication and Information Engineering",
    specialization: "Electronics, Communication and Information Engineering",
    percentage: "72.55%",
    grade: "First Division",
    thesis: "Image Captioning in Nepali Language",
  },
  {
    name: "Global Collegiate School, Nepal",
    logo: "/global.png",
    timeSpan: "2017 – 2019",
    degree: "Science, National Examination Board (NEB)",
    specialization: "Science Stream",
    cgpa: "3.45/4.0",
  },
];
