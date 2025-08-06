"use client";

import { ExternalLink, FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Publication } from "./constants";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const handleDoiClick = () => {
    if (publication.doi) {
      window.open(`https://doi.org/${publication.doi}`, "_blank");
    }
  };

  const handleSummaryClick = () => {
    if (publication.summaryUrl) {
      window.open(publication.summaryUrl, "_blank");
    }
  };

  return (
    <Card className="group  dark:bg-black border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {publication.type}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3" />
              <span>{publication.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {publication.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {publication.description}
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:w-80 flex flex-col justify-between">
          {/* DOI */}
          {publication.doi && (
            <div className="mb-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  DOI:
                </span>
                <span className="text-xs font-mono text-gray-700 dark:text-gray-300">
                  {publication.doi}
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            {publication.doi && (
              <Button
                onClick={handleDoiClick}
                size="sm"
                className="w-full h-10 text-sm bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Paper
              </Button>
            )}
            {publication.summaryUrl && (
              <Button
                onClick={handleSummaryClick}
                variant="outline"
                size="sm"
                className="w-full h-10 text-sm border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <FileText className="h-4 w-4 mr-2" />
                Read Summary
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
