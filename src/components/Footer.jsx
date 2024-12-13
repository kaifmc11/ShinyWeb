import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks1 = ['Home', 'About', 'Services', 'Team'];
  const quickLinks2 = ['FAQ', 'Contact Us', 'Gallery', 'Blogs'];

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="col-span-1">
            <img src={logo} alt="Amiso Logo" className="h-8 mb-4" />
            <p className="text-gray-500 text-sm mb-4">
              Washla customers has a tremendous opportunity to answer the call of logistic.
            </p>
          </div>

          {/* Get In Touch Section */}
          <div className="col-span-1">
            <h3 className="text-teal-900 font-semibold mb-4">Get In Touch</h3>
            <address className="not-italic">
              <p className="text-gray-500 text-sm mb-2">
                8273 NW 56th ST Miami, Florida,<br />
                33195 United States
              </p>
              <a href="mailto:info@amiso.com" className="text-gray-500 text-sm block mb-2 hover:text-cyan-500">
                info@amiso.com
              </a>
              <a href="tel:0525401322" className="text-gray-500 text-sm block hover:text-cyan-500">
                052 5401 3322
              </a>
            </address>
          </div>

          <div className="col-span-1">
            <h3 className="text-teal-900 font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="space-y-2">
                {quickLinks1.map((item) => (
                  <div key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 text-sm hover:text-cyan-500 transition-colors duration-200">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {quickLinks2.map((item) => (
                  <div key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 text-sm hover:text-cyan-500 transition-colors duration-200">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-teal-900 font-semibold mb-4">Our Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to our newsletter to receive the latest news about our services.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm hover:bg-cyan-600 transition-colors duration-200"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 amiso all rights reserved.
          </p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-200"
              >
                <span className="sr-only">{social}</span>
                <i className={`fab fa-${social}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 transition-colors duration-200 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;