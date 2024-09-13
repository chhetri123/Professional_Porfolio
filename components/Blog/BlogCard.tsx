import React, { useState } from "react";
import { formatDate } from "@/lib/utils";
import { Heart, Link, MessageCircleMore } from "lucide-react";
import { useRouter } from "next/navigation";
type blogCard = {
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  readTime: string;
  imageUrl: string;
  likes: number;
  comments: number;
  isDarkMode: boolean;
};
const BlogCard = ({
  title,
  tags,
  date,
  readTime,
  imageUrl,
  likes,
  comments,
  isDarkMode,
}: blogCard) => {
  const router = useRouter();
  const [isLiked, setLiked] = useState(false);
  return (
    <div
      onClick={() => {
        router.push(`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`);
      }}
      className={`bg-${isDarkMode ? "gray-800" : "white"} border border-${
        isDarkMode ? "gray-700" : "gray-200"
      } rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-104 `}
    >
      <div className="p-4">
        <h2
          className={`cursor-pointer text-2xl leading-6  font-bold text-${
            isDarkMode ? "white" : "gray-900"
          }`}
        >
          {title}
        </h2>

        <div className="mt-2 flex items-center space-x-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-4  rounded-full text-sm font-medium border-[1px] bg-${
                isDarkMode ? "gray-700" : "gray-200"
              } text-gray-500`}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span
            className={`text-sm text-${isDarkMode ? "gray-400" : "gray-600"}`}
          >
            {formatDate(date)}
          </span>
          <span
            className={`text-sm text-${isDarkMode ? "gray-400" : "gray-600"}`}
          >
            • {readTime} read time
          </span>
        </div>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className={`w-full cursor-pointer  h-48 object-cover ${
          isDarkMode ? "brightness-75" : "brightness-100"
        }`}
      />
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Heart
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!isLiked);
            }}
            className={`h-5 w-5 text-gray-500 cursor-pointer ${
              isLiked
                ? "fill-red-500 text-red-500"
                : "stroke transition duration-300 hover:stroke-red-500"
            }`}
          />

          <span
            className={`text-sm text-${isDarkMode ? "gray-400" : "gray-600"}`}
            style={{ marginLeft: "3px" }}
          >
            {likes}
          </span>
          <MessageCircleMore className="h-5 w-5 text-gray-500" />
          <span
            className={`text-sm  cursor-pointer text-${
              isDarkMode ? "gray-400" : "gray-600"
            }`}
            style={{ marginLeft: "3px" }}
          >
            {comments}
          </span>
        </div>

        <div className="transition-all  cursor-pointer duration-300 hover:bg-gray-200 py-1 px-1 hover:rounded">
          <Link className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
