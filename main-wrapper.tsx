"use client";
import React from "react";
import AsideLg from "@/components/aside-lg";
import AsideSm from "@/components/aside-sm";
import { useStore } from "@/context/context-provider";

const MainWrapper = () => {
  const { open } = useStore();
  return (
    <>
      <div className="flex">
        <div className="w-12  border-r h-screen bg-bgSidebar fixed left-0">
          <AsideSm />
        </div>
        {open && (
          <div className="w-48 border-r h-screen bg-[#252526]  fixed left-12 ">
            <AsideLg />
          </div>
        )}
      </div>
    </>
  );
};
export default MainWrapper;
