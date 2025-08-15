import React from "react";
import { ExperienceItemProps } from "@/types";

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, description }) => {
  return (
    <div className="relative pl-8 mb-8">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
      {/* Vertical line */}
      <div className="absolute left-1.5 top-6 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{company}</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
