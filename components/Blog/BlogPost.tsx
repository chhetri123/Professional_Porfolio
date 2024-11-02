import Link from "next/link";
import { Post } from "@/types/post";
import { PostMeta } from "./PostMeta";
import { PostCategories } from "./PostCategories";

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-5">
        <PostMeta date={post.date} author={post.author} />

        <Link href={`/blog/${post.slug}`} className="block group space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {post.excerpt}
          </p>
        </Link>

        <PostCategories categories={post.categories} />
      </div>
    </article>
  );
}
