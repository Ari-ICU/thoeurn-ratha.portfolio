import React from 'react';

interface AboutStatsProps {
  yearsExperience: number;
  projectsCount: number;
}

const AboutStats: React.FC<AboutStatsProps> = ({ yearsExperience, projectsCount }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6 pt-8">
      {/* Experience */}
      <div className="group relative p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
        <div className="relative text-center">
          <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-105 transition-transform duration-300">
            {yearsExperience}+
          </div>
          <div className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
            Years of Experience
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="group relative p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
        <div className="relative text-center">
          <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-105 transition-transform duration-300">
            {projectsCount}+
          </div>
          <div className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
            Projects Completed
          </div>
        </div>
      </div>

      {/* Lifelong Learning */}
      <div className="group relative p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
        <div className="relative text-center">
          <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2 group-hover:scale-105 transition-transform duration-300">
            ∞
          </div>
          <div className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
            Lifelong Learning
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;