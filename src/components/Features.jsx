import React from 'react';
import { FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-16 h-16 text-cyan-500 mx-auto mb-4" />,
      title: "Professional Team",
      description: "Our expertly trained team uses advanced sanitizing solutions to ensure thorough cleaning of every surface."
    },
    {
      icon: <FaClock className="w-16 h-16 text-cyan-500 mx-auto mb-4" />,
      title: "24/7 Services",
      description: "We provide round-the-clock cleaning services to meet your needs, with flexible scheduling options."
    },
    {
      icon: <FaCheckCircle className="w-16 h-16 text-cyan-500 mx-auto mb-4" />,
      title: "Service Guarantee",
      description: "We promise top-quality service with our comprehensive cleaning approach and satisfaction guarantee."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 py-16 px-4">
      <div className=" mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-cyan-600 font-semibold mb-3">
            WHY CHOOSE US
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tradition of Trust
          </h3>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed px-4">
            We specialize in intelligent & effective cleaning solutions, believing in the power of precision and partnership to deliver exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="p-8 text-center">
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-cyan-600">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="h-1 w-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;