import React from 'react';
import CleaningWomen1 from '../assets/Cleaning-women1.jpeg'
import CleaningWomen2 from '../assets/Cleaning-women2.jpeg'
import CleaningWomen3 from '../assets/Cleaning-women3.jpeg'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Monica Gordon",
      role: "House Cleaning Specialist",
      image: CleaningWomen1,
      description: "Experienced professional with attention to detail and commitment to quality cleaning services."
    },
    {
      name: "Laura Jones",
      role: "Senior Cleaner",
      image: CleaningWomen2,
      description: "Dedicated team member known for thorough and efficient cleaning techniques."
    },
    {
      name: "Sara Ryan",
      role: "Cleaning Expert",
      image: CleaningWomen3,
      description: "Skilled professional bringing years of experience and a passion for maintaining pristine spaces."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Meet Our Cleaning Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals are committed to delivering exceptional cleaning services with care and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-100 mx-auto shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-500 transition duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 9.14c.05.35.05.69.05 1.04 0 4.34-3.31 7.43-7.43 7.43-1.49 0-2.88-.44-4.04-1.2a5.236 5.236 0 004.38-.43 2.635 2.635 0 01-2.46-1.83c.38.07.77.07 1.17-.03a2.63 2.63 0 01-2.12-2.59v-.04c.35.2.75.32 1.17.33a2.633 2.633 0 01-.81-3.51 7.431 7.431 0 005.38 2.73c-.39-1.88.97-3.47 2.83-3.47.84 0 1.58.35 2.11.92.66-.13 1.28-.36 1.85-.69a2.64 2.64 0 01-1.15 1.45c.59-.07 1.16-.22 1.69-.44-.4.59-.9 1.11-1.48 1.53z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-500 transition duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-500 transition duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.89 15.54h-1.5v-6h1.5v6zm-.75-6.77a.88.88 0 110-1.76.88.88 0 010 1.76zm6.16 6.77h-1.5v-3.43c0-.65-.23-1.1-.82-1.1-.82 0-1.18.57-1.18 1.52v3.01h-1.5v-6h1.5v.82h.02c.28-.5.76-.82 1.39-.82 1.01 0 1.89.66 1.89 2.09v3.91z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;