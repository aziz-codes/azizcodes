"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { reactSvg } from "@/constants/svgs";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  FolderClosed,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";

const About = () => {
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
  const [folders, setFolders] = useState([
    {
      name: "about",
      isActive: true,
      lists: [
        {
          label: "index.tsx",
          path: "/about",
        },
        {
          label: "education.tsx",
          path: "/education",
        },
        {
          label: "skills.tsx",
          path: "/skills",
        },
      ],
    },
    {
      name: "contact",
      isActive: false,
      lists: [
        {
          label: "contact-me.tsx",
          path: "/contact-me",
        },
      ],
    },
  ]);
  const handleItemClick = (folderName: string) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) =>
        folder.name === folderName
          ? { ...folder, isActive: !folder.isActive }
          : folder
      )
    );
  };
  return (
    <div className="flex flex-col select-none w-full">
      {folders.map((folder, index) => (
        <>
          <div
            key={index}
            className="flex items-center py-1 px-3 space-x-1 cursor-pointer hover:bg-[#323233] text-sm"
            onClick={() => handleItemClick(folder.name)}
          >
            {folder.isActive ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            {folder.isActive ? (
              <FolderOpen className="h-4 w-4" stroke="#4A90E2" />
            ) : (
              <FolderClosed className="h-4 w-4" stroke="#4A90E2" />
            )}

            <label className="cursor-pointer text-sm">{folder.name}</label>
          </div>
          {folder.isActive && (
            <motion.div
              className="mt-1 flex flex-col space-y-2 mb-3"
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              {folder.lists.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={`pl-7 flex items-center text-sm px-4 py-0.5 gap-1.5 hover:bg-[#323233] ${
                    pathName === item.path && "bg-[#323233]"
                  }`}
                >
                  {reactSvg}
                  <span className="text-sm font-light">{item.label}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};

export default About;

//  <div
//    className="flex items-center py-1 px-3 space-x-1 cursor-pointer hover:bg-[#323233] text-sm"
//    onClick={() => setFolderOpen(!folderOpen)}
//  >
//    {folderOpen ? (
//      <ChevronDown className="h-4 w-4" />
//    ) : (
//      <ChevronRight className="h-4 w-4" />
//    )}
//    {folderOpen ? (
//      <FolderOpen className="h-4 w-4" stroke="#4A90E2" />
//    ) : (
//      <FolderClosed className="h-4 w-4" stroke="#4A90E2" />
//    )}

//    <label className="cursor-pointer text-sm">about</label>
//  </div>;
//  {
//    folderOpen && (
//      <motion.div
//        className="mt-1 flex flex-col space-y-2"
//        initial="closed"
//        animate="open"
//        exit="closed"
//        variants={variants}
//      >
//        {list.map((item, index) => (
//          <Link
//            href={item.path}
//            key={index}
//            className={`pl-7 flex items-center text-sm px-4 py-0.5 gap-1.5 hover:bg-[#323233] ${
//              pathName === item.path && "bg-[#323233]"
//            }`}
//          >
//            {reactSvg} <span className="text-sm font-light">{item.label}</span>
//          </Link>
//        ))}
//      </motion.div>
//    );
//  }
