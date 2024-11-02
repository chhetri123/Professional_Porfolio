"use client";

import { Hash } from "lucide-react"; // Import Hash icon

interface CategoryFilterProps {
  categories: {
    name: string;
    count: number;
  }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 w-full">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Hash className="w-5 h-5 mr-2" />
        Categories
      </h2>
      <div className="space-y-1">
        <button
          onClick={() => onCategoryChange("All")}
          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
            selectedCategory === "All"
              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
          }`}
        >
          All Blogs
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              selectedCategory === category.name
                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            }`}
          >
            <span>{category.name}</span>
            <span className="float-right text-sm text-gray-500 dark:text-gray-400">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
