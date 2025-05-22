import React from 'react';
import { Play, Plus, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          filter: "brightness(60%)"
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end z-10">
        <div className="container mx-auto px-4 pb-20 md:pb-32">
          <div className="max-w-2xl">
            <div className="mb-2">
              <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">
                NEW RELEASE
              </span>
              <span className="inline-block ml-2 text-teal-400 text-xs font-semibold">
                98% Match
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in leading-tight">
              Dragon Slayer: Chronicles
            </h1>
            
            <p className="text-gray-200 text-lg mb-6 max-w-xl">
              A legendary warrior embarks on a perilous journey to save his homeland from an ancient evil. Follow his quest for redemption and adventure in this epic tale.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-md flex items-center transition-all duration-300 transform hover:scale-105">
                <Play size={20} className="mr-2" />
                Play
              </button>
              <button className="bg-gray-700/80 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-md flex items-center transition-all duration-300">
                <Plus size={20} className="mr-2" />
                My List
              </button>
              <button className="bg-transparent border border-gray-500 hover:border-white text-white font-semibold py-3 px-6 rounded-md flex items-center transition-all duration-300">
                <Info size={20} className="mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default Hero;