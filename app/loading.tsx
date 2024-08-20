import { LoaderCircle } from "lucide-react";
import { Avatar } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div
      className="w-full h-screen bg-bgMain flex items-center justify-center fixed left-0 top-0"
      style={{ zIndex: 9999 }}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={Avatar}
          alt="Loading Avatar"
          className="rounded-full"
          width={80}
          height={80}
        />

        <LoaderCircle
          className="absolute w-28 h-28 text-gray-300 animate-spin"
          strokeWidth={0.5}
          stroke="#007ACC"
        />
      </div>
    </div>
  );
};

export default Loading;
