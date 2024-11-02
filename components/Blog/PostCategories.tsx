interface PostCategoriesProps {
  categories: string[];
}

export function PostCategories({ categories }: PostCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((category, index) => (
        <span
          key={index}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
