import React from "react";
import Image from "next/image";
import { Education } from "@/types";


interface EducationItemProps{
  education : Education[]
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="mb-6 relative group">
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              {edu.logo && (
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                />
              )}
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h4>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {edu.period}
                </span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              {edu.institution}
            </p>
            {edu.description && (
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>

          {/* Optional accent bar */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-blue-500 dark:bg-blue-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default EducationItem;