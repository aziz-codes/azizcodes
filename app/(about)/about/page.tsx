"use client";
import React from "react";
import { Avatar } from "@/constants/images";
import Image from "next/image";
import { socialIcons } from "@/constants/social-icons";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-20 flex min-h-screen space-y-1 items-center flex-col">
      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          height={100}
          width={100}
          src={Avatar.src}
          alt="avatar"
          className="rounded-full ring-2 ring-bgSidebar object-fill"
        />
      </motion.div>

      {/* Animated Name */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-[500]"
      >
        Noor Aziz
      </motion.h4>

      {/* Animated Role */}
      <div className="designation">Frontend Developer</div>

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center relative top-5 line-clamp-6 max-w-2xl text-gray-400 font-[200]"
      >
        I am a Frontend Web Developer specializing in creating dynamic,
        user-centered websites and applications. Adept at translating complex
        design concepts into responsive, high-performance code. Passionate about
        crafting seamless user experiences with a keen eye for detail and a
        strong understanding of modern web technologies. Experienced in
        collaborating with cross-functional teams to deliver innovative
        solutions and enhance digital interactions.
      </motion.p>

      {/* Animated Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative top-14 flex items-center space-x-7"
      >
        {socialIcons.map((icon, index) => {
          const Icon = icon.icon;
          return (
            <Link href={icon.link} key={index} target="_blank">
              <Icon className="w-5 text-bgSidebar hover:text-gray-400 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;
