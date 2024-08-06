import { AI, Node, ReactHooks, Redux, Tailwind, TS } from "./images";

export const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    desc: "A comprehensive guide to understanding and using React Hooks in your projects. Learn about useState, useEffect, and custom hooks.",
    dateCreated: "2024-01-15",
    thumbnail: ReactHooks.src,
  },
  {
    id: 2,
    title: "The Rise of AI in Everyday Applications",
    desc: "Exploring the impact of artificial intelligence in our daily lives, from smart assistants to autonomous vehicles.",
    dateCreated: "2024-02-10",
    thumbnail: AI.src,
  },
  {
    id: 3,
    title: "Getting Started with TypeScript",
    desc: "An introduction to TypeScript, its features, and how to integrate it into your JavaScript projects for better type safety.",
    dateCreated: "2024-03-05",
    thumbnail: TS.src,
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Node.js",
    desc: "Tips and best practices for building scalable and performant web applications using Node.js and Express.",
    dateCreated: "2024-04-22",
    thumbnail: Node.src,
  },
  {
    id: 5,
    title: "Exploring the Benefits of Tailwind CSS",
    desc: "A deep dive into Tailwind CSS, its utility-first approach, and how it can improve your development workflow.",
    dateCreated: "2024-05-17",
    thumbnail: Tailwind.src,
  },
  {
    id: 6,
    title: "Mastering Redux Toolkit for State Management",
    desc: "Learn how to effectively manage state in your React applications using Redux Toolkit. Includes setup, usage, and advanced techniques.",
    dateCreated: "2024-06-12",
    thumbnail: Redux.src,
  },
];
