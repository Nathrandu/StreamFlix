import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Home, Compass, BookOpen, Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <span className="text-purple-500 font-bold text-2xl">Stream<span className="text-teal-400">Flix</span></span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
              <Compass size={18} />
              <span>Discover</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
              <BookOpen size={18} />
              <span>Library</span>
            </a>
          </div>

          {/* Right navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3">
              <Compass size={18} />
              <span>Discover</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3">
              <BookOpen size={18} />
              <span>Library</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3">
              <Heart size={18} />
              <span>My List</span>
            </a>
            <div className="flex justify-around pt-4">
              <button className="text-gray-300 hover:text-white p-2">
                <Search size={22} />
              </button>
              <button className="text-gray-300 hover:text-white p-2 relative">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
              </button>
              <button className="text-gray-300 hover:text-white p-2">
                <User size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;