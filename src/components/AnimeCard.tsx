import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { AnimeItem } from '../types';

interface AnimeCardProps {
  anime: AnimeItem;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-[300px] md:h-[360px] rounded-lg overflow-hidden transition-transform duration-300 ease-out snap-start group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card image */}
      <img 
        src={anime.image} 
        alt={anime.title}
        className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110 brightness-[0.3]' : 'brightness-[0.8]'}`}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100" />
      
      {/* Title and basic info - always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300">
        <h3 className="text-white font-bold text-sm sm:text-base truncate">{anime.title}</h3>
        <div className="flex items-center text-xs text-gray-300 mt-1">
          <span className="mr-2">{anime.year}</span>
          <span className="bg-gray-700 px-1 rounded mr-2">{anime.rating}</span>
          <span>{anime.episodes} Ep</span>
        </div>
      </div>
      
      {/* Hover content */}
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2 mb-4">
            <button className="bg-white hover:bg-gray-200 text-gray-900 rounded-full p-2 transition transform hover:scale-110">
              <Play size={20} />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition transform hover:scale-110">
              <Plus size={20} />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition transform hover:scale-110">
              <ThumbsUp size={20} />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition transform hover:scale-110">
              <Info size={20} />
            </button>
          </div>
          
          <p className="text-white text-xs md:text-sm line-clamp-4 text-center">
            {anime.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-1 mt-3">
            {anime.genres.map((genre, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;