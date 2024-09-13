"use server";
let blogs = [
  {
    id: "1",
    title: "Exploring the Beauty of Nature",
    date: "2024-08-04",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    likes: 150,
    comments: 25,
  },
];
export const GET = async (request) => {
  return new Response(JSON.stringify(blogs), { status: 200 });
};
