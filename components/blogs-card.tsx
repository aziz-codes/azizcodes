import React from "react";
interface BlogProps {
  id: number;
  title: string;
  desc: string;
  dateCreated: string;
}
const BlogsCard = ({ blog }: { blog: BlogProps }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 px-3 py-3 rounded-md flex flex-col space-y-3 bg-[#5B595A]">
      <div className="w-full h-60 rounded-md bg-sky-500"></div>
      <h4 className="font-semibold text-sm">{blog.title}</h4>
      <p className="line-clamp-3 text-xs">{blog.desc}</p>
      <span className="italic text-xs text-gray-400">{blog.dateCreated}</span>
    </div>
  );
};

export default BlogsCard;
