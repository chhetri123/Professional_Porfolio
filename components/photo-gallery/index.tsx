"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import PhotoCard from "./PhotoCard";
import PhotoModal from "./PhotoModal";
import {
  getAllCategories,
  getPhotosByCategory,
  PhotoCategory,
} from "./constants";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryData, setSelectedCategoryData] =
    useState<PhotoCategory | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const categories = getAllCategories();
  const filteredPhotos = getPhotosByCategory(selectedCategory);

  const handleCardClick = (category: PhotoCategory) => {
    setSelectedCategoryData(category);
    setSelectedPhotoIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategoryData(null);
    setSelectedPhotoIndex(0);
  };

  return (
    <section
      className="reveal flex flex-col justify-center items-center px-4 sm:px-6 py-14 md:py-20"
      id="photo-gallery"
    >
      <SectionHeading
        eyebrow="Beyond the code"
        title="Photo Gallery"
        description="A place to know me better: the woods, food, family, successes, failures and more."
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                : "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="w-full max-w-6xl mx-auto lg:px-8">
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map((category) => (
              <PhotoCard
                key={category.id}
                category={category}
                onClick={() => handleCardClick(category)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No photos found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No photos available for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedCategoryData && (
        <PhotoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          photos={selectedCategoryData.photos}
          initialPhotoIndex={selectedPhotoIndex}
          categoryName={selectedCategoryData.name}
          categoryDescription={selectedCategoryData.description}
        />
      )}
    </section>
  );
}
