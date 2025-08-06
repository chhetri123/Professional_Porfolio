"use client";

import { Calendar, Video } from "lucide-react";
import { Award, getAwardColor } from "./constants";

interface AwardsTimelineProps {
  awards: Award[];
}

export default function AwardsTimeline({ awards }: AwardsTimelineProps) {
  // Sort awards by date (newest first)
  const sortedAwards = [...awards].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="space-y-8">
        {sortedAwards.map((award, index) => (
          <div
            key={award.id}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Node */}
            <div
              className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${getAwardColor(
                award.type
              )} flex items-center justify-center shadow-lg z-10`}
            >
              <span className="text-white text-sm">{award.icon}</span>
            </div>

            {/* Content Card */}
            <div
              className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="group rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {/* Date Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{award.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-200"
                      >
                        <Video className="h-3 w-3" />
                        <span>Watch</span>
                      </a>
                    )}

                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${getAwardColor(
                        award.type
                      )} text-white`}
                    >
                      {award.type}
                    </span>
                  </div>
                </div>

                {/* Award Title */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {award.title}
                </h4>

                {/* Organization */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {award.organization}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {award.description}
                </p>

                {/* Decorative Arrow (Desktop only) */}
                <div
                  className={`hidden md:block absolute top-8 ${
                    index % 2 === 0
                      ? "right-0 translate-x-full"
                      : "left-0 -translate-x-full"
                  } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                    index % 2 === 0
                      ? "border-l-8 border-l-gray-200 dark:border-l-gray-700"
                      : "border-r-8 border-r-gray-200 dark:border-r-gray-700"
                  }`}
                ></div>
              </div>
            </div>

            {/* Empty space for alternating layout (Desktop only) */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Timeline End */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bottom-0 translate-y-4 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"></div>
    </div>
  );
}
