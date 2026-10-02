import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar as User } from "@/constants/images";
import Link from "next/link";
import { Briefcase, Download, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <Link href="/Aziz.pdf" target="_blank">
        <Button variant="ghost" className="flex items-center gap-4">
          <Download className="size-4" /> Download CV
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
// test commit
