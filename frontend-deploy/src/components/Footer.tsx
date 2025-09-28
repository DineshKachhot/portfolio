import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Dinesh Kachhot</h3>
            <p className="text-gray-400">
              Crafting exceptional mobile experiences with modern technology
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Dinesh Kachhot. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;