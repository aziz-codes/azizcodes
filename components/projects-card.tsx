import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import Link from "next/link";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import { githubSvg } from "@/constants/svgs";
import { Variants } from "framer-motion";
interface ProjectProps {
  thumbnail: string;
  title: string;
  description: string;
  tools: any[];
  link: string;
  githubLink: boolean;
}
const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    whileHover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <Card className="w-full md:w-[350px] bg-transparent">
      <CardHeader className="p-0">
        <div className="relative w-full h-52">
          <Image
            src={project.thumbnail}
            fill
            alt="thumnail"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
        <Label className="px-4 text-lg">{project.title}</Label>
      </CardHeader>
      <CardContent className="px-4">
        <CardDescription className="line-clamp-4 break-all text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between px-4">
        <div className="flex -space-x-2">
          {project.tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 h-8 p-1 w-8 bg-[#212020] rounded-full border-secondary -space-x-3"
            >
              {tool}
            </div>
          ))}
        </div>
        <div>
          {project.githubLink ? (
            <Link href={project.link} title="github repository">
              {githubSvg}
            </Link>
          ) : (
            <Link
              href={project.link}
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-150 ease-out"
            >
              <Label className="cursor-pointer">Check Live Site</Label>
              <MousePointer2 className="w-5 rotate-90" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
