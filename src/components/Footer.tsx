import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 md:mt-24">
      {/* Apply max-w-6xl and mx-auto here */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Brand and Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sarah Liu</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Digital Marketing Professional based in Auckland, New Zealand. Bridging NZ businesses with the Chinese market.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Experience</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Portfolio</Link></li>
               <li><Link to="/thoughts" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Thoughts</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
             <h4 className="text-base font-semibold text-gray-800 mb-4">Connect</h4>
             <div className="flex space-x-5">
                {/* Placeholder Links - Replace '#' with actual URLs */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github size={22} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors">
                     <span className="sr-only">LinkedIn</span>
                    <Linkedin size={22} />
                </a>
                {/* Add other relevant social links here */}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sarah Liu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
