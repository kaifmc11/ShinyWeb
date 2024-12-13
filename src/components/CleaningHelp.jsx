import React from 'react';
import { PlayIcon } from 'lucide-react';
import { FaUserCheck, FaHome, FaTrophy, FaGlassMartiniAlt } from 'react-icons/fa';
import CleaningHelp from '../assets/CleaningHelp.jpg';

const CleaningHelpComponent = () => {
  return (
    <div 
      className="relative py-20" 
      style={{ 
        backgroundImage: `url(${CleaningHelp})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Cleaning your Worries Away
            </h1>
            <button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <PlayIcon size={24} />
            </button>
          </div>
          <p className="text-lg md:text-xl text-white mb-12">Need Help With Cleaning?</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Request Call Back
          </button>
          <div className="flex flex-wrap justify-around w-full mt-12">
            <div className="flex flex-col items-center mx-4 my-4">
              <FaUserCheck size={48} className="text-white mb-4" />
              <span className="text-4xl font-bold text-white">385</span>
              <p className="text-white">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center mx-4 my-4">
              <FaHome size={48} className="text-white mb-4" />
              <span className="text-4xl font-bold text-white">842</span>
              <p className="text-white">Houses Cleaned</p>
            </div>
            <div className="flex flex-col items-center mx-4 my-4">
              <FaTrophy size={48} className="text-white mb-4" />
              <span className="text-4xl font-bold text-white">489</span>
              <p className="text-white">Awards Received</p>
            </div>
            <div className="flex flex-col items-center mx-4 my-4">
              <FaGlassMartiniAlt size={48} className="text-white mb-4" />
              <span className="text-4xl font-bold text-white">1344</span>
              <p className="text-white">Glass Cleaned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningHelpComponent;
