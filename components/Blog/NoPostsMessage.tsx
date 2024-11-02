interface NoPostsMessageProps {
  selectedCategory: string;
}

export function NoPostsMessage({ selectedCategory }: NoPostsMessageProps) {
  return (
    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
        No posts found
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {selectedCategory === "All"
          ? "There are no blog posts yet."
          : `No posts found in the "${selectedCategory}" category.`}
      </p>
    </div>
  );
}
