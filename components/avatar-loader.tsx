import { Avatar } from "@/constants/images";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const AvatarLoader = () => {
  return (
    <div className="relative flex items-center justify-center mx-auto">
      <Image
        src={Avatar}
        alt="Loading Avatar"
        className="rounded-full"
        width={20}
        height={20}
      />

      <LoaderCircle
        className="absolute w-8 h-8 text-gray-300 animate-spin"
        strokeWidth={0.5}
        stroke="#007ACC"
      />
    </div>
  );
};

export default AvatarLoader;
