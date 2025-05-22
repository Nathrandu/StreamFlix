import React, { useState } from 'react';
import { User, Settings, LogOut, CreditCard, Bell, Shield, ChevronRight } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto my-16">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-teal-400 flex items-center justify-center text-white">
              <User size={40} />
            </div>
            <button className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full border-2 border-purple-500">
              <Settings size={16} className="text-white" />
            </button>
          </div>
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">Anime Lover</h2>
            <p className="text-purple-200">Premium Member</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
              <span className="bg-purple-500/30 text-purple-200 text-xs px-3 py-1 rounded-full">
                Anime Fan
              </span>
              <span className="bg-teal-500/30 text-teal-200 text-xs px-3 py-1 rounded-full">
                Joined 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 mb-6">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'membership' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('membership')}
          >
            Membership
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
        
        {/* Profile content */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-white text-lg font-medium">Personal Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Username</label>
                    <input 
                      type="text" 
                      value="AnimeEnthusiast" 
                      className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Email</label>
                    <input 
                      type="email" 
                      value="user@example.com" 
                      className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-white text-lg font-medium">Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Autoplay next episode</span>
                    <div className="w-12 h-6 bg-purple-600 rounded-full p-1 flex items-center">
                      <div className="bg-white w-4 h-4 rounded-full transform translate-x-6 transition"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Show recommendations</span>
                    <div className="w-12 h-6 bg-purple-600 rounded-full p-1 flex items-center">
                      <div className="bg-white w-4 h-4 rounded-full transform translate-x-6 transition"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Email notifications</span>
                    <div className="w-12 h-6 bg-gray-700 rounded-full p-1 flex items-center">
                      <div className="bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors">
              Save Changes
            </button>
          </div>
        )}
        
        {/* Membership content */}
        {activeTab === 'membership' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-lg p-4 border border-purple-800">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-purple-400 font-medium">Current Plan</span>
                  <h3 className="text-white text-xl font-bold">Premium</h3>
                  <p className="text-gray-300 text-sm">Renews on October 15, 2025</p>
                </div>
                <CreditCard size={32} className="text-purple-400" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white text-lg font-medium">Plan Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-3">✓</span>
                  Unlimited access to all content
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-3">✓</span>
                  HD and 4K streaming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-3">✓</span>
                  Ad-free experience
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-3">✓</span>
                  Offline downloads
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors">
                Change Plan
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-2 px-6 rounded-md transition-colors">
                Cancel Membership
              </button>
            </div>
          </div>
        )}
        
        {/* Settings content */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-3">
              <button className="w-full flex items-center justify-between text-gray-300 py-2 hover:text-white">
                <div className="flex items-center">
                  <Bell size={20} className="mr-3" />
                  <span>Notification Settings</span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="border-b border-gray-800 pb-3">
              <button className="w-full flex items-center justify-between text-gray-300 py-2 hover:text-white">
                <div className="flex items-center">
                  <Shield size={20} className="mr-3" />
                  <span>Privacy & Security</span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="border-b border-gray-800 pb-3">
              <button className="w-full flex items-center justify-between text-gray-300 py-2 hover:text-white">
                <div className="flex items-center">
                  <CreditCard size={20} className="mr-3" />
                  <span>Payment Methods</span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
            <div>
              <button className="w-full flex items-center justify-between text-red-400 py-2 hover:text-red-300">
                <div className="flex items-center">
                  <LogOut size={20} className="mr-3" />
                  <span>Sign Out</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;