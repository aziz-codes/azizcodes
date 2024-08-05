"use client";
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import json from "@/constants/meta.json";

const JsonViewer = () => {
  const formattedJson = JSON.stringify(json, null, 2);

  return (
    <div className="py-3">
      <SyntaxHighlighter language="json" style={a11yDark}>
        {formattedJson}
      </SyntaxHighlighter>
    </div>
  );
};

export default JsonViewer;
