import React from "react";
import { Briefcase, Calendar } from "lucide-react";
const Experience = () => {
  return (
    <div className="mt-6">
      <div className="max-w-lg mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="flex">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-48 object-cover"
              src="https://via.placeholder.com/150"
              alt="Company Logo"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center text-sm uppercase tracking-wide font-semibold">
                <Briefcase className="w-6 h-6 mr-2" />
                Software Engineer
              </div>
              <a
                href="#"
                className="block mt-1 text-xl leading-tight font-bold hover:underline"
              >
                Awesome Company
              </a>
              <p className="mt-2 text-gray-100">
                Developed and maintained web applications, ensuring high
                performance and responsiveness to requests from the front-end.
                Collaborated with team members to determine best practices and
                client requirements for software.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-gray-300" />
              <span className="text-sm font-medium text-gray-200">
                June 2020 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
