import { Quote } from "lucide-react";

export function BlogHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
        <h1 className="text-5xl font-serif italic text-gray-900 dark:text-white mb-3">
          My Blogs :)
        </h1>

        <div className="flex items-start gap-2 mt-4 mb-6 p-4 rounded-lg">
          <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-serif italic">
              "Be the change that you want to see in the world."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
              ― Mahatma Gandhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
