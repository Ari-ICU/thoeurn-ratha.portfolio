import React from "react";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
  title,
  children,
  icon,
  className = "",
}) => {
  return (
    <section className={`mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="flex items-center mb-6">
        {icon && (
          <span className="text-3xl mr-4 text-blue-600 dark:text-blue-400">
            {icon}
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default ResumeSection;
