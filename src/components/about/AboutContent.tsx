import React from "react";

interface AboutContentProps {
  description: string;
  subtitle: string;
  technologies: string[];
}

const AboutContent: React.FC<AboutContentProps> = ({
  description,
  subtitle,
  technologies,
}) => {
  // Dynamic gradient mapping for tech badges
  const getTechGradient = (tech: string) => {
    const gradientMap: { [key: string]: string } = {
      JavaScript: "from-yellow-400 to-yellow-600 text-white",
      React: "from-sky-400 to-sky-600 text-white",
      "Node.js": "from-emerald-400 to-emerald-600 text-white",
      TypeScript: "from-blue-400 to-blue-600 text-white",
      Python: "from-indigo-400 to-indigo-600 text-white",
      "Vue.js": "from-emerald-400 to-emerald-600 text-white",
      Angular: "from-rose-400 to-rose-600 text-white",
      "Next.js": "from-gray-400 to-gray-600 text-white",
      Tailwind: "from-cyan-400 to-cyan-600 text-white",
      GraphQL: "from-pink-400 to-pink-600 text-white",
      Docker: "from-sky-300 to-sky-500 text-white",
      AWS: "from-orange-400 to-orange-600 text-white",
      PostgreSQL: "from-sky-500 to-sky-700 text-white",
      Redis: "from-red-400 to-red-600 text-white",
      "C++": "from-blue-500 to-blue-700 text-white",
      GitHub: "from-gray-600 to-gray-800 text-white",
      MongoDB: "from-emerald-500 to-emerald-700 text-white",
      Postman: "from-orange-500 to-orange-700 text-white",
      Laravel: "from-red-500 to-red-700 text-white",
      PHP: "from-purple-500 to-purple-700 text-white",
      Java: "from-red-600 to-red-800 text-white",
      Spring: "from-green-500 to-green-700 text-white",
      npm: "from-red-500 to-red-700 text-white",
    };
    return gradientMap[tech] || "from-gray-400 to-gray-600 text-white";
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Main Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed animate-slide-up">
        {description.split(" ").map((word, index) => {
          if (word === "full-stack") {
            return (
              <span
                key={index}
                className="font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-1.5 py-0.5 rounded-md"
              >
                {word}
              </span>
            );
          }
          if (word === "developer") {
            return (
              <span
                key={index}
                className="font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-1.5 py-0.5 rounded-md"
              >
                {word}
              </span>
            );
          }
          if (word.includes("+")) {
            return (
              <span key={index} className="font-bold text-teal-600">
                {word}
              </span>
            );
          }
          return word + " ";
        })}
      </p>

      {/* Technologies Section */}
      {technologies.length > 0 && (
        <div className="animate-slide-up">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-r ${getTechGradient(
                  tech
                )} transition-all duration-200 hover:scale-105 hover:shadow-lg`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Subtitle / Closing Statement */}
      <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed animate-slide-up-delay">
        {subtitle}
      </p>

      {/* Optional Divider */}
      <div className="pt-2">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutContent;
