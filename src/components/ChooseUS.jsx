import React from 'react';
import CleaningWoman from '../assets/WomenCleaning.jpeg';
import BgCleaning from '../assets/CleanBg.jpg';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50">
      {/* About Us */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img 
            src={CleaningWoman} 
            alt="Cleaning Woman" 
            className="w-full max-w-md rounded-xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">A Cleaner Place is a Safer Place</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Washla cleaning service: We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Professional Cleaning",
                description: "Ensuring top-quality housekeeping with meticulous attention to detail."
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast and Efficient",
                description: "Delivering swift and comprehensive cleaning services."
              }
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 p-3 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgCleaning})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Our Great Services</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Restoring the beauty and freshness of all your upholstered fabrics and taking the work out of housework for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Cleaning",
                description: "Comprehensive home cleaning with thorough attention to every corner and surface."
              },
              {
                title: "Windows Cleaning",
                description: "Professional window cleaning that brings clarity and shine to your glass surfaces."
              },
              {
                title: "Office Cleaning",
                description: "Maintaining a clean, healthy, and productive workspace for your professional environment."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;