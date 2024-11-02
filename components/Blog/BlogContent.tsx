"use client";

import { Post } from "@/types/post";
import { CategoryFilter } from "./CategoryFilter";
import { BlogHeader } from "./BlogHeader";
import { BlogPost } from "./BlogPost";
import { NoPostsMessage } from "./NoPostsMessage";
import { useState, useMemo } from "react";

interface BlogContentProps {
  initialPosts: Post[];
  categories: {
    name: string;
    count: number;
  }[];
}

export default function BlogContent({
  initialPosts,
  categories,
}: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return initialPosts;
    }
    return initialPosts.filter((post) =>
      post.categories.includes(selectedCategory)
    );
  }, [initialPosts, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <BlogHeader />

      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-4 overflow-y-auto scrollbar-hide">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-6 overflow-y-auto  mb-10 scrollbar-hide">
              {filteredPosts.map((post) => (
                <BlogPost key={post.slug} post={post} />
              ))}

              {filteredPosts.length === 0 && (
                <NoPostsMessage selectedCategory={selectedCategory} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
