import React from 'react';

interface AboutVisualProps {
  avatar?: string;
}

const AboutVisual: React.FC<AboutVisualProps> = ({ avatar }) => {
  return (
    <div className="relative animate-fade-in-up">
      {/* Main Profile Container with Enhanced Shadow & Border */}
      <div className="relative inline-block">
        {avatar ? (
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-blue-200/40 transition-all duration-500 transform hover:scale-105">
            <img
              src={avatar}
              alt="Profile Picture"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ) : (
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl shadow-2xl relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 transform hover:scale-105 transition-transform duration-500">
            {/* Noise/texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" id="noise" width="100%" height="100%">
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            {/* Centered placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <div className="text-5xl sm:text-7xl mb-4 drop-shadow-lg">👨‍💻</div>
              <div className="text-lg sm:text-xl font-bold drop-shadow tracking-wide">
                Full-Stack Developer
              </div>
            </div>
          </div>
        )}

        {/* Decorative floating elements */}
        <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg animate-ping opacity-80"></div>
        
        <div className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-lg animate-bounce opacity-60 animation-delay-1000"></div>
        
        <div className="absolute top-1/3 -right-7 w-8 h-8 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full shadow-md animate-pulse opacity-70 animation-delay-500"></div>
      </div>

      {/* Floating badge - "Available for Work" */}
      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce text-nowrap z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
        Open to Work
      </div>

      {/* Optional subtle glow behind avatar */}
      <div className="absolute inset-0 w-80 h-80 -z-10 rounded-full bg-blue-500/10 blur-3xl scale-75 sm:scale-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default AboutVisual;