"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useStore } from "@/context/context-provider";
const Contributions = () => {
  const { open } = useStore();
  const username = "aziz-codes";
  return (
    <div
      className={`my-3 flex justify-center overflow-x-auto ${
        open
          ? "max-w-52 sm:max-w-sm md:max-w-full"
          : "w-56 sm:w-[500px] md:w-full"
      }`}
    >
      <GitHubCalendar username={username} />
    </div>
  );
};

export default Contributions;
