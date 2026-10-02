"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AIMessage = ({ content }: { content: string }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  useEffect(() => {
    if (!content) return;
    let index = 0;
    const interval = setInterval(() => {
      const currenChar = content[index || 0];
      if (index < content.length) {
        setDisplayedContent((prev) => prev + currenChar);
        index += 1;
      } else {
        clearInterval(interval); // Stop the interval when all content is displayed
      }
    }, 50); // Adjust the speed (in ms) here

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [content]);
  const renderMessage = (message: string): React.ReactNode => {
    const emailRegex = /([^\s@]+@[^\s@]+\.[^\s@]+)/;
    const parts = message.split(emailRegex);

    return (
      <p>
        {parts.map((part, i) =>
          emailRegex.test(part) ? (
            <Link key={i} href={`mailto:${part}`} className="text-sky-500">
              {part}
            </Link>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
    );
  };

  return renderMessage(displayedContent);
};

export default AIMessage;
