"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { blogs } from "@/constants/blogs";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const SingleBlog = () => {
  const params = useParams();
  const blogId = Number(params.id);

  const filteredBlog = useMemo(() => {
    return blogs.find((blog) => blog.id === blogId);
  }, [blogId]);

  if (!filteredBlog) {
    return (
      <div className="flex justify-center items-center mt-5 h-screen">
        Blog not found, return to &nbsp;
        <Link href="/blogs" className="text-sky-500">
          blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg text-white">
      <div className="relative w-full  h-80 rounded-md overflow-hidden mb-6">
        <Image
          src={filteredBlog.thumbnail}
          alt={filteredBlog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{filteredBlog.title}</h1>
      <div className="flex items-center space-x-2 mb-6">
        <CalendarDays className="text-gray-400 w-5 h-5" />
        <span className="italic text-gray-400">{filteredBlog.dateCreated}</span>
      </div>
      <p className="leading-relaxed text-lg">{filteredBlog.desc}</p>
    </div>
  );
};

export default SingleBlog;
