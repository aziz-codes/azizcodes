"use client";
import {
  GraduationCap,
  School,
  Calendar,
  ClipboardList,
  BookOpen,
  Projector,
} from "lucide-react";
import { motion } from "framer-motion";
import { reactSvgLg, tsSvg, tailwindSvg, threeSvg } from "@/constants/svgs";
const UniversityCard = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-6 rounded-lg  max-w-4xl mx-auto my-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Education</h2>
      <motion.div
        className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg relative"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GraduationCap className="absolute -right-5 text-blue-500 -top-6 w-10 h-10 rotate-45" />

        <div className="ml-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 my-2">
              <School className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">DEF University</p>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <Calendar className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">2014 - 2018</p>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <ClipboardList className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">GPA: 3.9/4.0</p>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <BookOpen className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">Major: Computer Science</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-3 text-gray-200">
              Final Year Project
            </h4>

            <div className="my-4">
              <div className="flex items-center space-x-3 my-2">
                <Projector className="w-6 h-6 text-blue-400" />
                <p className="text-lg text-gray-300">E-commerce Website</p>
              </div>
              <p className="ml-9 mt-2 text-gray-400 text-base leading-relaxed">
                Built a full-stack e-commerce website with user authentication,
                product listings, and a shopping cart. Integrated Stripe for
                payment processing and MongoDB for database management.
              </p>
              <div className="flex items-center space-x-3 mt-5 ml-9 ">
                <h4>Tech: </h4>
                <div className="flex space-x-2">
                  {reactSvgLg}

                  {tsSvg}

                  {tailwindSvg}

                  {threeSvg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UniversityCard;
