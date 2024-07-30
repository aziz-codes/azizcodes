"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { reactSvg } from "@/constants/svgs";

const Projects = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col">
      <h4 className="text-center">Projects</h4>
      <Link
        href="/projects"
        className={` flex mt-5 items-center text-sm px-4 py-0.5 gap-1.5 hover:bg-[#323233] ${
          pathName === "/projects" && "bg-[#323233]"
        }`}
      >
        {reactSvg} <label className="cursor-pointer">index.tsx</label>
      </Link>
    </div>
  );
};

export default Projects;
