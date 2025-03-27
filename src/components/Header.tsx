import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Thoughts', path: '/thoughts' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Apply max-w-6xl and mx-auto here */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Apply font-serif to the logo link */}
        <Link to="/" className="text-2xl font-serif font-semibold text-gray-900 hover:text-pink-600 transition-colors">
          Sarah Liu
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base ${
                  isActive
                    ? 'text-pink-600 font-medium' // Keep nav items Poppins (font-sans is default)
                    : 'text-gray-600 hover:text-pink-500 transition-colors'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-pink-500 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
           {/* Apply max-w-6xl and mx-auto here as well for the mobile dropdown */}
           <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col py-3 space-y-2"> {/* Removed horizontal padding from nav, handled by container */}
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md text-base font-medium ${ // Keep nav items Poppins
                        isActive
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-pink-500'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
