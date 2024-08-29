import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar as User } from "@/constants/images";
import Link from "next/link";
import { Briefcase, Folder } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex items-center  h-screen flex-col gap-2">
      <Avatar className="h-28 w-28 mt-20 ring-2 ring-[#333333]">
        <AvatarImage src={User.src} />
        <AvatarFallback>AZ</AvatarFallback>
      </Avatar>
      <h4 className="font-semibold">Aziz</h4>
      <p className="text-sm font-light">Frontend Web Developer</p>
      <div className="flex items-center text-[10px] space-x-2">
        <p>Quick search</p>
        <div className="px-2 py-0.5 rounded-md bg-secondary">ctrl</div>
        <p>+</p>
        <div className="px-2 py-0.5 rounded-md bg-secondary">J</div>
      </div>

      <h4 className="text-sm">Browse</h4>
      <Link
        href="/projects"
        className="flex items-center text-sky-500 text-xs space-x-2"
      >
        <Folder className="w-3 h-3" strokeWidth={1} />
        <span className="text-[9px]">Projects</span>
      </Link>
      <Link
        href="/experience"
        className="flex items-center text-sky-500   space-x-2 ml-3"
      >
        <Briefcase className="w-3 h-3" strokeWidth={1} />
        <span className="text-[9px]">Experience</span>
      </Link>
    </div>
  );
};

export default HomePage;

