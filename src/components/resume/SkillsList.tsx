import React from "react";

interface Skill {
  name: string;
  level: number; // 0 to 100
}

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col w-full">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
