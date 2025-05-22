import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and socials */}
          <div className="space-y-6">
            <h2 className="text-purple-500 font-bold text-2xl">Stream<span className="text-teal-400">Flix</span></h2>
            <p className="text-sm">The ultimate anime streaming platform with the latest shows, movies, and classics.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="text-white font-medium mb-4">Browse</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Anime Series</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Popular</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Genres</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Jobs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Corporate Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 StreamFlix. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button className="flex items-center text-sm text-purple-400 hover:text-purple-300">
              <Mail size={16} className="mr-2" />
              Subscribe to newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;