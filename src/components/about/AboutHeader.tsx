import React from "react";

interface AboutHeaderProps {
  title: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ title }) => {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {/* Main Title */}
      <h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold 
                     bg-gradient-to-r from-green-900 to-cyan-700 
                     dark:from-green-900 dark:to-cyan-700 
                     bg-clip-text text-transparent mb-4 animate-fade-in"
      >
        {title}
      </h2>

      {/* Decorative line */}
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default AboutHeader;
