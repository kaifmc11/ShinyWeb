import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from "./assets/logo.png";

import CleaningService from './components/CleaningService';
import Features from './components/Features';
import WhyChooseUs from './components/ChooseUS';
import OurTeam from './components/OurTeam';
import CleaningHelpComponent from './components/CleaningHelp';
import RecentNews from './components/RecentNews';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const pagesRef = useRef(null);
  const galleryRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll function
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Top Bar */}
        <div className={`bg-cyan-50 py-3 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'opacity-90' : ''}`}>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-700">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-600" />
                <span className="text-sm">+123-456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-cyan-600" />
                <span className="text-sm">info@yourdomain.com</span>
              </div>
            </div>
            <button className="bg-cyan-500 text-white px-4 md:px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors text-sm mt-2 md:mt-0">
              GET A QUOTE
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-white shadow-md fixed top-[4rem] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Amiso Logo" className="h-8 md:h-10" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {[
                { name: 'HOME', ref: homeRef },
                { name: 'ABOUT', ref: aboutRef },
                { name: 'PAGES', ref: pagesRef },
                { name: 'GALLERY', ref: galleryRef },
                { name: 'BLOG', ref: blogRef },
                { name: 'CONTACT', ref: contactRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-700 hover:text-cyan-600 transition-colors font-medium text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute w-full bg-white shadow-lg">
              {[
                { name: 'HOME', ref: homeRef },
                { name: 'ABOUT', ref: aboutRef },
                { name: 'PAGES', ref: pagesRef },
                { name: 'GALLERY', ref: galleryRef },
                { name: 'BLOG', ref: blogRef },
                { name: 'CONTACT', ref: contactRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="block px-4 py-3 hover:bg-cyan-50 text-gray-700 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>

        <div className="pt-24 md:pt-28">
          <Routes>
            {/* Default route for '/' */}
            <Route path="/" element={
              <>
                <div ref={homeRef}>
                  <CleaningService />
                </div>

                <div ref={aboutRef}>
                  <Features />
                </div>

                <div ref={pagesRef}>
                  <WhyChooseUs />
                </div>

                <div ref={galleryRef}>
                  <OurTeam />
                  <CleaningHelpComponent />
                </div>

                <div ref={blogRef}>
                  <RecentNews />
                </div>

                <div ref={contactRef}>
                  <Footer />
                </div>
              </>
            } />

            {/* Route for '/ShinyWeb' */}
            <Route path="/ShinyWeb/" element={
              <>
                <div ref={homeRef}>
                  <CleaningService />
                </div>

                <div ref={aboutRef}>
                  <Features />
                </div>

                <div ref={pagesRef}>
                  <WhyChooseUs />
                </div>

                <div ref={galleryRef}>
                  <OurTeam />
                  <CleaningHelpComponent />
                </div>

                <div ref={blogRef}>
                  <RecentNews />
                </div>

                <div ref={contactRef}>
                  <Footer />
                </div>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
