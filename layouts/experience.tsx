"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  FolderClosed,
  FolderOpen,
} from "lucide-react";
import { reactSvg } from "@/constants/svgs";
import Link from "next/link";
const Experience = () => {
  const [folderOpen, setFolderOpen] = useState(true);
  const pathName = usePathname();
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

        <label className="cursor-pointer text-sm">experience</label>
      </div>
      {folderOpen && (
        <motion.div
          className="mt-1 flex flex-col space-y-2"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          <Link
            href="/experience"
            className={`pl-7 flex items-center text-sm px-4 py-0.5 gap-1.5 hover:bg-[#323233] ${
              pathName === "/experience" && "bg-[#323233]"
            }`}
          >
            {reactSvg}
            <span className="text-sm font-light">index.tsx</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
