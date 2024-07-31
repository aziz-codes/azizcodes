import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div
      className="w-full h-screen bg-bgMain flex items-center justify-center fixed left-0 top-0"
      style={{ zIndex: 9999 }}
    >
      <LoaderCircle className="w-6 animate-spin" />
    </div>
  );
};

export default Loading;
