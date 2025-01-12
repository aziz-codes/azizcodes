"use client";
import {
  GraduationCap,
  School,
  Calendar,
  BookOpen,
  Projector,
} from "lucide-react";
import { motion } from "framer-motion";
const UniversityCard = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-4 rounded-lg w-full  max-w-2xl xl:max-w-4xl mx-auto xl:my-12 my-3 relative">
      <motion.div className="bg-[#2C2C2C] p-8 rounded-lg shadow-lg relative">
        <GraduationCap className="absolute -right-5 text-blue-500 -top-6 w-10 h-10 rotate-45" />

        <div className="ml-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 my-2">
              <School className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">FUUAST Islamabad</p>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <Calendar className="w-6 h-6 text-gray-400" />
              <p className="text-lg text-gray-300">2017 - 2021</p>
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
                <Projector className="w-7 h-7 text-blue-400" />
                <p className="text-lg text-gray-400">Mobile Shopping Website</p>
              </div>
              <p className="ml-9 mt-2 text-gray-400 text-base leading-relaxed">
                Online Mobile Shop (OMS), an online platform for mobile buyers
                and suppliers, where suppliers will upload their products,
                buyers can search through products and can place order,
                implemented add to cart, search, order status, filter products
                functionalities.
              </p>
              <div className="flex items-center space-x-3 mt-5 ml-9 ">
                <h4>Tech: </h4>
                <div className="flex space-x-2 text-gray-400">
                  HTML, CSS, Bootstrap, Javascript, PHP, MYSQL
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
