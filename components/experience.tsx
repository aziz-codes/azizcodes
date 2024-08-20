import { experience } from "@/constants/experience";
import { MapPinIcon, Building2, CalendarDays, Dot } from "lucide-react";
export default function Component() {
  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex flex-col mx-auto  justify-center items-center space-y-1">
        <h4>Frontend Web Developer</h4>
        <p className="text-sm italic font-thin">2+ Years of exp</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 justify-center">
        {experience.map((exp, index) => (
          <div
            className="border flex flex-col py-4 px-4 rounded-md space-y-4"
            key={index}
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-md flex items-center justify-center bg-[#323233] ">
                <Building2 />
              </div>
              <div className="flex flex-col ">
                <h4 className="text-lg font-semibold relative">
                  {exp.company}
                  {exp.present ? (
                    <Dot
                      className="absolute -right-7 -top-1 animate-pulse h-10 w-10"
                      fill="green"
                      stroke="green"
                    />
                  ) : (
                    "."
                  )}
                </h4>
                <p className="text-sm text-muted-foreground font-semibold capitalize">
                  {exp.designation}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CalendarDays className="text-gray-400 w-4" />
                <p className="text-xs">{exp.tenure}</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="text-gray-400 w-4" />
                <p className="text-xs">{exp.location}</p>
              </div>
            </div>
            <p className="text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
