"use client";
// import { remark } from "remark";
// import html from "remark-html";

import matter from "gray-matter";
import { MDXProvider } from "@mdx-js/react";
const MDXComponents = {};
const blog = `# MERN Course

# MERN Stack Bootcamp - 40 Days

## Table of Contents

### Unit 1: HTML & CSS Fundamentals

- HTML5 Basics (Document structure, Semantic elements)
- HTML5 Forms and Inputs
- CSS3 Selectors and Box Model
- CSS3 Flexbox and Grid
- Responsive Web Design / CSS Frameworks (Bootstrap, Tailwind)

#### Mini Project: Responsive Website Design

### Unit 2: JavaScript Fundamentals

- JavaScript Basics (Variables, Data types, Operators)
- Control Structures (if/else, loops)
- Functions and Scope
- Arrays and Objects
- DOM Manipulation and Events

#### Mini Project: Interactive Web Page

### Unit 3: Advanced JavaScript

- ES6+ Features (let/const, Arrow functions, Template literals, Destructuring, Spread/Rest operators, Modules)
- Asynchronous JavaScript (Callbacks, Promises)
- Asynchronous JavaScript (Async/Await, Fetch API)
- Object-Oriented JavaScript (Prototypes, Classes)
- Git Version Control

#### Mini Project: Async JavaScript Application

### Unit 4: Node.js Fundamentals

- Introduction to Node.js and npm modules
- File System Operations in Node.js
- Streams and Buffers in Node.js
- Building a Basic HTTP Server with Node.js
- Server-Side Rendering

#### Mini Project: Simple Node.js Server

### Unit 5: Express.js and MongoDB

- Express.js Basics, Routing & Middleware in Express.js
- RESTful API Design with Express.js
- MongoDB Basics and CRUD Operations
- Mongoose ODM (Schemas, Models, Validation)
- Real-time Application with socket.io

#### Mini Project: RESTful API with Express and MongoDB

### Unit 6: React Fundamentals

- Introduction to React and JSX
- React Components and Props
- State and Lifecycle Methods
- Handling Events in React
- Conditional Rendering and Lists

#### Mini Project: React SPA (Single Page Application)

### Unit 7: Advanced React and State Management

- Introduction to Hooks (useState, useEffect, customHooks)
- React Router (Setup, Basic and Nested Routing)
- Introduction to Redux (Store, Actions, Reducers)
- Redux Toolkit
- Introduction to Next.js (SSR & CSR)

#### Mini Project: React Application with State Management

### Unit 8: Full Stack Integration and Deployment

- Connecting React Frontend to Express Backend
- Authentication
- Unit Tests (Jest, Other Testing Libraries)
- Deployment Preparation (Introduction to Cloud Services)
- Deployment and Best Practices

#### Mini Project: Full Stack MERN Application Deployment`;

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  // Check if the slug parameter exists and is a string

  // Fetch blog post data from an API using the slug
  // const blogPostData = await fetchBlogPostData(slug);

  // Render a 404 page if the blog post data is not found

  // Parse the blog content using remark and html

  const { content } = matter(blog);

  // Use remark to convert markdown into HTML string

  return (
    <div className="pl-40">
      <MDXProvider components={MDXComponents}>{content}</MDXProvider>
      <ul>
        <li>Hello</li>
      </ul>
    </div>
  );

  // Validate the slug to ensure it exists and matches the expected format

  // If the slug is invalid, redirect to a 404 page

  // If the slug is valid, fetch the blog post data from the API

  // Render a loading state while waiting for the data to load

  // Render the blog post details

  // return <h1> {params.slug}</h1>;
};

export default BlogPost;
