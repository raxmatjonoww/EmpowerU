import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-american-navy to-american-blue bg-clip-text text-transparent">
            Empower<span className="text-american-red">U</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-american-blue transition duration-300">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-american-blue transition duration-300">About</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-american-blue transition duration-300">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-american-blue transition duration-300">Contact</a></li>
        </ul>

        {/* Desktop Telegram Button */}
        <a
          href="https://t.me/Nasiba_EmpowerU"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        >
          <Button
            variant="ghost"
            className="inline-flex items-center gap-1 text-american-navy border-american-navy hover:bg-american-navy/10"
            size="sm"
          >
            <span>Telegram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              <li><a href="#home" className="block text-gray-700 hover:text-american-blue transition duration-300" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" className="block text-gray-700 hover:text-american-blue transition duration-300" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" className="block text-gray-700 hover:text-american-blue transition duration-300" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" className="block text-gray-700 hover:text-american-blue transition duration-300" onClick={toggleMenu}>Contact</a></li>
              <li>
                <a
                  href="https://t.me/Nasiba_EmpowerU"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <Button
                    variant="ghost"
                    className="inline-flex items-center gap-1 text-american-navy border-american-navy hover:bg-american-navy/10"
                    size="sm"
                  >
                    <span>Telegram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
