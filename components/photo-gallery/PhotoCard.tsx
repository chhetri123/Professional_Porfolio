"use client";

import { Card, CardContent } from "@/components/ui/card";
import NextImage from "@/components/NextImage";
import { PhotoCategory } from "./constants";

interface PhotoCardProps {
  category: PhotoCategory;
  onClick: () => void;
}

export default function PhotoCard({ category, onClick }: PhotoCardProps) {
  const primaryPhoto = category.photos[0];
  const photoCount = category.photos.length;
  return (
    <Card
      className="group cursor-pointer overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <NextImage
          src={primaryPhoto.src.src}
          alt={primaryPhoto.alt}
          title={primaryPhoto.title}
          width={400}
          height={192}
          className="object-cover w-full h-full"
        />

        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/90 text-white backdrop-blur-sm">
            {category.tag}
          </span>
        </div>

        {/* Photo Count Badge - only show if multiple photos */}
        {photoCount > 1 && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-sm">
              +{photoCount}
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {category.name}
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
          {category.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>{primaryPhoto.date}</span>
          {primaryPhoto.location && (
            <span className="truncate ml-2">{primaryPhoto.location}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
