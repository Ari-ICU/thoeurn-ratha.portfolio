"use client";

import React from 'react';

interface ProjectStatsProps {
  featuresCompleted?: number;
  linesOfCode?: number;
  teamSize?: number;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ featuresCompleted, linesOfCode, teamSize }) => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0">
        {featuresCompleted !== undefined && (
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{featuresCompleted}</h3>
            <p className="text-gray-700 dark:text-gray-300">Features Completed</p>
          </div>
        )}
        {linesOfCode !== undefined && (
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{linesOfCode.toLocaleString()}</h3>
            <p className="text-gray-700 dark:text-gray-300">Lines of Code</p>
          </div>
        )}
        {teamSize !== undefined && (
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{teamSize}</h3>
            <p className="text-gray-700 dark:text-gray-300">Team Members</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectStats;
