"use client";

import React from 'react';

interface ProjectOverviewProps {
  description: string;
  technologies?: string[];
  goals?: string[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ description, technologies, goals }) => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        
        {technologies && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-900 to-cyan-700 text-white rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {goals && (
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Project Goals:</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              {goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectOverview;
