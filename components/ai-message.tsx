import { useEffect, useState } from "react";

const AIMessage = ({ content }: { content: string }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const currenChar = content[index];
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
  return <p className="text-xs">{displayedContent}</p>;
};

export default AIMessage;
