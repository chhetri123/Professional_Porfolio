"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NextImage from "@/components/NextImage";
import { PhotoItem } from "./constants";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  initialPhotoIndex: number;
  categoryName: string;
  categoryDescription: string;
}

export default function PhotoModal({
  isOpen,
  onClose,
  photos,
  initialPhotoIndex,
  categoryName,
  categoryDescription,
}: PhotoModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(initialPhotoIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const currentPhoto = photos[currentPhotoIndex];
  const hasMultiplePhotos = photos.length > 1;

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
        style={{
          margin: "auto",
          maxWidth: "1200px",
          width: "100%",
          maxHeight: "90vh",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-white text-xl sm:text-2xl font-semibold">
            {categoryName}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0">
          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center bg-gray-900/50 rounded-lg overflow-hidden min-h-[400px] max-h-[70vh]">
            <NextImage
              src={currentPhoto.src.src}
              alt={currentPhoto.alt}
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-lg"
              fill
              sizes="(max-width: 640px) 100vw, 1200px"
            />

            {/* Navigation Arrows - only show if multiple photos */}
            {hasMultiplePhotos && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Photo Counter */}
            {hasMultiplePhotos && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="lg:w-80 flex-shrink-0">
            <Card className="h-full bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  {currentPhoto.title}
                </h3>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {categoryDescription}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{currentPhoto.date}</span>
                    </div>

                    {currentPhoto.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{currentPhoto.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Navigation - only show if multiple photos */}
                  {hasMultiplePhotos && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-3 text-gray-300">
                        Other photos ({photos.length})
                      </h4>
                      <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                        {photos.map((photo, index) => (
                          <button
                            key={photo.id}
                            onClick={() => setCurrentPhotoIndex(index)}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentPhotoIndex
                                ? "border-blue-500 ring-2 ring-blue-500/50"
                                : "border-white/20 hover:border-white/40"
                            }`}
                          >
                            <NextImage
                              src={photo.src.src}
                              alt={photo.alt}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
