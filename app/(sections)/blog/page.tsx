"use client";

import React, { useEffect, useState } from "react";

import BlogCard from "@/components/Blog";
type blogSchema = {
  id: string;
  title: string;
  readTime: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
};
const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: "1",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "2",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "3",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "4",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "3",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "4",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "3",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "4",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "3",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "4",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "3",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
    {
      id: "4",
      title: "Exploring the Beauty of Nature",
      date: "2024-08-04",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 150,
      comments: 25,
    },
  ]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch("/api/post");
  //     const data = await response.json();
  //     setBlogPosts(data);
  //   };

  //   fetchPost();
  // }, []);
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center md:py-5  h-fullscreen mx-4 mb-24"
      id="blogs"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center border-b-2 border-blue-600 pb-4 mt-2 mb-5">
          My Blogs
        </h1>

        <div className="grid md:grid-cols-3 gap-8 md:pl-36 md:pr-20">
          {blogPosts.map((post: blogSchema) => (
            <BlogCard
              key={post.id}
              title={post.title}
              tags={["Hello", "javascript", "css"]}
              subtitle={post.title}
              date={post.date}
              readTime={post.readTime}
              imageUrl={post.image}
              likes={post.likes}
              comments={post.comments}
              isDarkMode={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
