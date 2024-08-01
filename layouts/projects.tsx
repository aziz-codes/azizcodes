"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { reactSvg } from "@/constants/svgs";
import { motion } from "framer-motion";
import { projectFiles } from "@/constants/projects";
import {
  ChevronDown,
  ChevronRight,
  FolderClosed,
  FolderOpen,
} from "lucide-react";

const Projects = () => {
  const pathName = usePathname();
  const [folderOpen, setFolderOpen] = useState(true);
  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="flex flex-col select-none w-full">
      <div
        className="flex items-center py-1 px-3 space-x-1 cursor-pointer hover:bg-[#323233] text-sm"
        onClick={() => setFolderOpen(!folderOpen)}
      >
        {folderOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        {folderOpen ? (
          <FolderOpen className="h-4 w-4" stroke="#4A90E2" />
        ) : (
          <FolderClosed className="h-4 w-4" stroke="#4A90E2" />
        )}

        <label className="cursor-pointer text-sm">projects</label>
      </div>
      {folderOpen && (
        <motion.div
          className="mt-1 flex flex-col space-y-2"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          {projectFiles.map((project, index) => (
            <Link
              href={project.path}
              className={`pl-7 flex items-center text-sm px-4 py-0.5 gap-1.5 hover:bg-[#323233] ${
                pathName === project.path && "bg-[#323233]"
              }`}
              key={index}
            >
              {reactSvg}{" "}
              <span className="text-sm font-light">{project.label}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
