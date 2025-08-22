import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownContent from "@/components/Blog/MarkdownContent";
import ShareLinks from "@/components/Blog/ShareLinks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Import the arrow icon
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const contentDir = path.join(process.cwd(), "content");
  const fullPath = path.join(contentDir, ...params.slug);

  const mdPath = fullPath + ".md";
  if (!fs.existsSync(mdPath)) {
    return notFound();
  }

  const content = fs.readFileSync(mdPath, "utf8");
  const { data } = matter(content);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug.join(
    "/"
  )}`;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    title: data.title,
    description: data.description || data.excerpt,
    openGraph: {
      title: data.title,
      description: data.description || data.excerpt,
      url: url,
      siteName: "Your Site Name",
      type: "article",
      publishedTime: data.published,
      authors: [data.author],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || data.excerpt,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const contentDir = path.join(process.cwd(), "content");
  const fullPath = path.join(contentDir, ...params.slug);
  // Handle markdown files
  const mdPath = fullPath + ".md";
  if (!fs.existsSync(mdPath)) {
    return notFound();
  }

  const content = fs.readFileSync(mdPath, "utf8");
  const { data, content: markdownContent } = matter(content);

  return (
    <article className="min-h-screen dark:bg-gray-900">
      <div className="dark:bg-gray-900 text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
        <div className="w-full sm:container mx-auto sm:max-w-4xl px-4 sm:px-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 
                       hover:text-blue-600 dark:hover:text-blue-500 transition-colors mb-4 sm:mb-6"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Blog</span>
          </Link>

          {/* Existing Title */}
          <h1
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 
                       text-black dark:text-white break-words leading-tight"
          >
            {data.title
              .split(" ")
              .map(
                (word: string) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </h1>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
            {data.categories?.map((category: string) => (
              <span
                key={category}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800 dark:bg-gray-700 
                         text-gray-100 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4">
        <div className="w-full border-b border-gray-200 dark:border-gray-700"></div>
      </div>

      {/* Author and Date Section */}
      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* First Row: Author and Published */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h2 className="text-gray-500 dark:text-gray-400 uppercase text-xs mb-2">
              AUTHOR
            </h2>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              {data.author}
            </p>
          </div>
          <div>
            <h2 className="text-gray-500 dark:text-gray-400 uppercase text-xs mb-2">
              PUBLISHED
            </h2>
            <time
              dateTime={data.published}
              className="text-sm text-gray-900 dark:text-gray-100"
            >
              {new Date(data.published).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Second Row: DOI and Share Links */}

        <div className="grid grid-cols-2 gap-8">
          {data.doi && (
            <div>
              <h2 className="text-gray-500 dark:text-gray-400 uppercase text-xs mb-2">
                DOI
              </h2>
              <a
                href={`https://doi.org/${data.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {data.doi}
              </a>
            </div>
          )}

          <div>
            <ShareLinks
              title={data.title}
              url={`${"https://manishchhetri.com.np"}/blog/${params.slug.join(
                "/"
              )}`}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4">
        <div className="w-full border-b border-gray-300 dark:border-gray-700"></div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="text-base md:text-lg">
          <MarkdownContent content={markdownContent} path={params.slug} />
        </div>
      </div>
    </article>
  );
}
