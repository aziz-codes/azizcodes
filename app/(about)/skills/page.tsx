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
    <div className="bg-[#1E1E1E] text-white p-6 rounded-lg  max-w-4xl mx-auto my-12 relative">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="border flex w-full  py-1.5 px-1 space-x-2 rounded-md items-center">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search skills"
              className="outline-none w-full bg-transparent"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
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
