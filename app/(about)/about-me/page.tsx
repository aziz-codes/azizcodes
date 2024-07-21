import React from "react";
import { Avatar } from "@/constants/images";
import Image from "next/image";
import { socialIcons } from "@/constants/social-icons";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-20 flex min-h-screen space-y-1 items-center flex-col">
      <Image
        height={100}
        width={100}
        src={Avatar.src}
        alt="avatar"
        className="rounded-full  ring-2 ring-bgSidebar object-fill"
      />
      <h4 className="font-[500]">Noor Aziz</h4>
      <h5 className="text-sm text-gray-500 text-center">Frontend Developer</h5>

      <p className="text-center relative top-12 line-clamp-4 max-w-2xl text-gray-400 font-[200]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        culpa vel soluta error ullam labore? Et eaque quas pariatur fugit
        asperiores! Consequatur, vitae voluptate. Ut beatae molestiae
        exercitationem magnam libero.
      </p>
      <div className="relative top-48 flex items-center space-x-7">
        {socialIcons.map((icon, index) => {
          const Icon = icon.icon;
          return (
            <Link href={icon.link} key={index} target="_blank">
              <Icon className="w-5 text-bgSidebar hover:text-gray-400 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default About;
