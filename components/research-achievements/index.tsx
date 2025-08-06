"use client";

import { BookOpen, Trophy, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicationCard from "./PublicationCard";
import AwardsTimeline from "./AwardsGrid";
import { publications, awards } from "./constants";

export default function ResearchAchievements() {
  return (
    <section className="py-16 px-4 sm:px-6" id="research-achievements">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-center border-b-2 border-blue-600 pb-4">
              Research & Achievements
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Published research, professional certifications, and academic
            achievements that
            <br />
            showcase my commitment to continuous learning and innovation.
          </p>
        </div>

        {/* Published Research Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Published Research
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {publications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Awards & Recognition
              </h3>
            </div>
          </div>

          <AwardsTimeline awards={awards} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Trophy className="h-4 w-4" />
            <span>Committed to Excellence in Research & Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
