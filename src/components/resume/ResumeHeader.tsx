import React from "react";

interface ResumeHeaderProps {
  name: string;
  tagline: string;
  imageUrl?: string; // Optional profile image
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ name, tagline, imageUrl }) => {
  return (
    <header className="mb-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
        {/* Profile Image */}
        {imageUrl && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-lg transform transition-transform hover:scale-105">
              <img
                src={imageUrl}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Name & Tagline */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
            {name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed mt-2">
            {tagline}
          </p>

          {/* Decorative Accent Line */}
          <div className="mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
