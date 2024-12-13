import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cleaning from "../assets/cleaning.avif";

const CleaningService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Section */}
      <div 
        className="relative bg-cover bg-center h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cleaning})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full px-4 py-8">
          <ChevronLeft className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 text-white cursor-pointer hover:text-cyan-300" />
          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 text-white cursor-pointer hover:text-cyan-300" />

          <div className="max-w-4xl mx-auto text-white text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              RENEW YOUR LOOK
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              A TRADITION OF QUALITY CLEANING
            </h2>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Professional Cleaning',
              description: 'Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.',
              icon: '🧹'
            },
            {
              title: 'Fast and Efficient',
              description: 'Our Aim is to Keep the House Clean - Your Aim Will Help! through Digital Innovation World Summit.',
              icon: '⚡'
            },
            {
              title: 'Renew Your Look',
              description: 'Both of us take a lot of time in getting cleaned and beautified Clean Home Professional Service.',
              icon: '🏠'
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clean House Section */}
      <div className="bg-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            A Clean House is a Happy Place!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700">Washla has met the demands of a growing world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700">Washla customers have a tremendous opportunity to answer the call of logistic needs across the globe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700">World's leading non-asset-based supply chain management companies, we design and implement industry-leading solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningService;