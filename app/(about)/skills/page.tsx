"use client";
import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { skills } from "@/constants/skills";

const Skills = () => {
  const [input, setInput] = useState("");

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) =>
      skill.toLowerCase().includes(input.toLowerCase())
    );
  }, [input]);

  return (
    <div className="mt-2 flex min-h-screen space-y-1 py-4 px-4 justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="border flex w-full max-w-lg py-1.5 px-1 space-x-2 rounded-md items-center">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search skills"
              className="outline-none w-full bg-transparent"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 ">
          {filteredSkills.map((skill) => (
            <div
              className="px-2 py-1.5 rounded-full border text-[12px]"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
