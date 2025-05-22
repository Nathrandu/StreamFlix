import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import animeData from './data/animeData';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      
      {/* Main content */}
      <main>
        {/* Show hero and content rows if profile is not shown */}
        {!showProfile ? (
          <>
            <Hero />
            <div className="container mx-auto mt-4">
              {animeData.map((category, index) => (
                <ContentRow
                  key={index}
                  title={category.title}
                  items={category.items}
                />
              ))}
              
              {/* User profile toggle button */}
              <div className="flex justify-center my-10">
                <button 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  onClick={() => setShowProfile(true)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="pt-20 container mx-auto px-4">
              <UserProfile />
              <div className="flex justify-center mt-8">
                <button 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  onClick={() => setShowProfile(false)}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;