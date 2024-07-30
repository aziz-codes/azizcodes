import React from "react";
import ProjectCard from "@/components/projects-card";
import { projects } from "@/constants/projects";

const Projects = () => {
  return (
    <div className="flex gap-4 flex-wrap mt-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default Projects;
