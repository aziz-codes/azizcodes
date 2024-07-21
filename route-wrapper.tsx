"use client";
import React from "react";
import { useStore } from "./context/context-provider";
const RouterWrapper = ({ children }: any) => {
  const { open } = useStore();
  return (
    <main
      className={`flex-1 bg-bgRoutes  ${
        open ? "ml-60" : "ml-12"
      }  px-4 min-h-screen`}
    >
      {children}
    </main>
  );
};

export default RouterWrapper;
