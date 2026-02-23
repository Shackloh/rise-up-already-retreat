import React, { useState } from 'react';
import { Menu, X } from 'react-icons/fa';

const RetreatNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white bg-opacity-95 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-forest-500">Rise Up</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#experience" className="text-gray-700 hover:text-forest-500 transition">Experience</a>
          <a href="#schedule" className="text-gray-700 hover:text-forest-500 transition">Schedule</a>
          <a href="#pricing" className="text-gray-700 hover:text-forest-500 transition">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-forest-500 transition">FAQ</a>
        </div>

        <button className="hidden md:inline-block bg-forest-500 text-white px-6 py-2 rounded-lg hover:bg-forest-600 transition">
          Reserve Your Spot
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <a href="#experience" className="block py-2 text-gray-700 hover:text-forest-500" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#schedule" className="block py-2 text-gray-700 hover:text-forest-500" onClick={() => setIsOpen(false)}>Schedule</a>
          <a href="#pricing" className="block py-2 text-gray-700 hover:text-forest-500" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" className="block py-2 text-gray-700 hover:text-forest-500" onClick={() => setIsOpen(false)}>FAQ</a>
          <button className="w-full mt-4 bg-forest-500 text-white px-6 py-2 rounded-lg hover:bg-forest-600 transition">
            Reserve Your Spot
          </button>
        </div>
      )}
    </nav>
  );
};

export default RetreatNavbar;
