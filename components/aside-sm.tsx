"use client";
import React, { useState } from "react";
import { smSidebarLists } from "@/constants/lists";

import { useStore } from "@/context/context-provider";

const AsideSm = () => {
  const [lists, setLists] = useState(smSidebarLists);
  const { setActiveComponent, setOpen } = useStore();
  const handleClick = (label: string, idx: number) => {
    const updatedItem = lists.map((list, index) => ({
      ...list,
      isActive: index === idx,
    }));

    setLists(updatedItem);

    setActiveComponent(label);

    const activeBtnIndex = lists.findIndex((item) => item.isActive === true);
    if (activeBtnIndex === idx) {
      setOpen((prev) => !prev);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="flex flex-col py-4 px-1  items-center  h-full justify-between">
      <div className="flex-col space-y-6   justify-center items-center">
        {lists.slice(0, 4).map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} title={item.label}>
              <Icon
                strokeWidth={1}
                className={`w-7 h-7 cursor-pointer text-[#858585]  hover:text-white transition-colors duration-75 ease-in ${
                  item.isActive && "text-white"
                }`}
                onClick={() => handleClick(item.label, index)}
              />
            </div>
          );
        })}
      </div>
      <div className=" flex-col space-y-6 pb-12">
        {lists.slice(4, 6).map((item, id) => {
          let index = 4 + id;
          const Icon = item.icon;
          return (
            <div key={index} title={item.label}>
              <Icon
                strokeWidth={1}
                className={`w-7 h-7 cursor-pointer text-[#858585]  hover:text-white transition-colors duration-75 ease-in ${
                  item.isActive && "text-white"
                }`}
                onClick={() => handleClick(item.label, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsideSm;
