"use client";
import React from "react";
import { smSidebarLists } from "@/constants/lists";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const AsideSm = () => {
  return (
    <div className="flex flex-col py-3 px-1 space-y-6   items-center">
      {smSidebarLists.map((item, index) => {
        const Icon = item.icon;
        return (
          <TooltipProvider key={index}>
            <Tooltip delayDuration={400}>
              <TooltipTrigger asChild>
                <Icon className="w-7 h-7 cursor-pointer text-[#858585] hover:text-white transition-colors duration-75 ease-in" />
              </TooltipTrigger>
              <TooltipContent
                align="center"
                className="absolute left-4 -translate-y-1/2"
              >
                <p className="whitespace-nowrap">{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default AsideSm;
