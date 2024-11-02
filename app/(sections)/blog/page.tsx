import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";
import BlogContent from "@/components/Blog/BlogContent";

async function getPosts() {
  const contentDir = path.join(process.cwd(), "content");

  const getAllFiles = (
    dirPath: string,
    arrayOfFiles: string[] = []
  ): string[] => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else if (file.endsWith(".md")) {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  };

  const files = getAllFiles(contentDir);

  const posts: Post[] = files.map((filepath) => {
    const content = fs.readFileSync(filepath, "utf8");
    const { data } = matter(content);
    const slug = filepath
      .replace(contentDir, "")
      .replace(/^\//, "")
      .replace(/\.md$/, "");

    return {
      slug,
      title: data.title,
      date: data.published,
      author: data.author,
      excerpt: data.excerpt || data.description,
      categories: data.categories || [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function getAllCategories(posts: Post[]) {
  const categories = posts.flatMap((post) => post.categories);
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export default async function BlogIndex() {
  const posts = await getPosts();
  const categories = getAllCategories(posts);

  return <BlogContent initialPosts={posts} categories={categories} />;
}
