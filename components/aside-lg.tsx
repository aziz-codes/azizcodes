"use client";
import React from "react";
import {
  About,
  Contact,
  Blogs,
  Projects,
  Experience,
  Github,
} from "@/layouts/index";
import { useStore } from "@/context/context-provider";

const AsideLg = () => {
  const { activeComponent } = useStore();

  const components: any = {
    about: <About />,
    contact: <Contact />,
    blogs: <Blogs />,
    projects: <Projects />,
    experience: <Experience />,
    github: <Github />,
  };

  const renderLayout = () => components[activeComponent];

  return <div className="py-4 w-full h-full relative">
    {renderLayout()}
    <p className="absolute bottom-12 mx-auto px-2 italic left-2 text-xs">copyright &copy; aziz.dev 2024 ~ All Rights Reserved.</p>
    </div>;
};

export default AsideLg;
