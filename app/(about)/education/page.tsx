import {
  GraduationCap,
  School,
  Calendar,
  ClipboardList,
  BookOpen,
} from "lucide-react";

const EducationSection = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Matric */}
        <div className="bg-[#2D2D2D] p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold">Matriculation</h3>
          </div>
          <div className="ml-2 space-y-4">
            <div className="flex items-center space-x-2">
              <School className="w-5 h-5 text-gray-400" />
              <p>XYZ High School</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Calendar className="w-5 h-5 text-gray-400" />
              <p>2008 - 2012</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <ClipboardList className="w-5 h-5 text-gray-400" />
              <p>Marks: 85%</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <p>Major Subjects: Science, Mathematics, English</p>
            </div>
          </div>
        </div>

        {/* College */}
        <div className="bg-[#2D2D2D] p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-semibold">College</h3>
          </div>
          <div className="ml-2 space-y-4">
            <div className="flex items-center space-x-2">
              <School className="w-5 h-5 text-gray-400" />
              <p>ABC Intermediate College</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Calendar className="w-5 h-5 text-gray-400" />
              <p>2012 - 2014</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <ClipboardList className="w-5 h-5 text-gray-400" />
              <p>Marks: 88%</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <p>Major Subjects: Physics, Chemistry, Mathematics</p>
            </div>
          </div>
        </div>

        {/* University */}
        <div className="bg-[#2D2D2D] p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold">University</h3>
          </div>
          <div className="ml-2 space-y-4">
            <div className="flex items-center space-x-2">
              <School className="w-5 h-5 text-gray-400" />
              <p>DEF University</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Calendar className="w-5 h-5 text-gray-400" />
              <p>2014 - 2018</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <ClipboardList className="w-5 h-5 text-gray-400" />
              <p>Marks: 90%</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <p>Major: Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
