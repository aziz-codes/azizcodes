"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { Link as LinkIcon } from "lucide-react";

const SingleProject = () => {
  const params = useParams();
  const projectId = Number(params.id);

  const project = useMemo(() => {
    return projects.find((item) => item.id === projectId);
  }, [projectId]);

  if (!project) {
    return (
      <div className="text-center text-xl text-red-500">Project not found</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl h-80 relative mb-6">
          <Image
            src={project.thumbnail}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg border"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          {project.title}
        </h1>
        <div className="flex space-x-4 mb-6 items-center">
          {project.tools.map((ToolIcon, index) => (
            <div key={index}>{ToolIcon}</div>
          ))}
        </div>
        <div className="flex items-center mb-4 space-x-3">
          <LinkIcon className="w-4" />{" "}
          <Link
            href={project.link}
            className="font-thin italic hover:text-sky-500 transition-colors duration-150 ease-in-out"
          >
            {project.link}
          </Link>
        </div>
        <p className="text-gray-400 text-lg mb-6 max-w-4xl text-center px-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
