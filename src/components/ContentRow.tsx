import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Plus, Info } from 'lucide-react';
import AnimeCard from './AnimeCard';
import { AnimeItem } from '../types';

interface ContentRowProps {
  title: string;
  items: AnimeItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Check if scroll arrows should be visible
  const checkScrollPosition = () => {
    if (!rowRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };
  
  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    
    const { current } = rowRef;
    const scrollAmount = current.clientWidth * 0.75;
    
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    
    // Check arrows after scrolling
    setTimeout(checkScrollPosition, 500);
  };

  return (
    <div 
      className="relative py-8 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h2 className="text-xl md:text-2xl font-bold text-white px-4 mb-4 group-hover:text-purple-400 transition-colors">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button 
            className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-purple-600 transition-all duration-300 ${isHovering ? 'opacity-80' : 'opacity-0'}`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {/* Content row */}
        <div 
          ref={rowRef}
          className="flex overflow-x-auto scrollbar-hide px-4 py-2 gap-4 pb-4 snap-x"
          onScroll={checkScrollPosition}
        >
          {items.map((item, index) => (
            <AnimeCard key={index} anime={item} />
          ))}
        </div>
        
        {/* Right scroll button */}
        {showRightArrow && (
          <button 
            className={`absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-purple-600 transition-all duration-300 ${isHovering ? 'opacity-80' : 'opacity-0'}`}
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;