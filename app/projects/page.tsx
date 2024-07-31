"use client";
import React from "react";
import ProjectCard from "@/components/projects-card";
import { projects } from "@/constants/projects";

const Projects = () => {
  return (
    <div className="flex gap-6  flex-wrap mt-8 justify-center py-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} index={index} />
      ))}
    </div>
  );
};

export default Projects;
