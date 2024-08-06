import React from "react";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface BlogProps {
  id: number;
  title: string;
  desc: string;
  dateCreated: string;
  thumbnail: string;
}
const BlogsCard = ({ blog }: { blog: BlogProps }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 px-3 py-3 rounded-md flex flex-col space-y-3 bg-[#5B595A] group hover:transition-all duration-150 ease-in-out"
    >
      <div className="w-full h-60 rounded-md   relative overflow-hidden">
        <Image
          src={blog.thumbnail}
          fill
          alt="blog-thumbnail"
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0" />
      </div>
      <h4 className="font-semibold text-sm">{blog.title}</h4>
      <p className="line-clamp-3 text-xs">{blog.desc}</p>
      <div className="flex items-center space-x-2">
        <CalendarDays className="text-gray-400 w-4 h-4" />
        <span className="italic text-xs text-gray-400">{blog.dateCreated}</span>
      </div>
    </Link>
  );
};

export default BlogsCard;
