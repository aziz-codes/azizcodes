import React from "react";
import GitHubCalendar from "react-github-calendar";
const Contributions = () => {
  const username = "aziz-codes";
  return (
    <div className="my-3 flex justify-center max-w-[300px] md:max-w-full overflow-x-auto">
      <GitHubCalendar username={username} />
    </div>
  );
};

export default Contributions;
