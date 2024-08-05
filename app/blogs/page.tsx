import React from "react";
import { blogs } from "@/constants/blogs";
import BlogsCard from "@/components/blogs-card";
const Blogs = () => {
  return (
    <div className="grid grid-cols-12 gap-3 px-3 py-3">
      {blogs.map((blog) => (
        <BlogsCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blogs;
