import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Name/Brand */}
          <div className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Emmanuel
            </span>
          </div>

          {/* Right side - Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#myworks" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 relative group"
            >
              Myworks
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#aboutme" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 relative group"
            >
              AboutMe
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#blogs" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 relative group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#reviews" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button (hidden on larger screens) */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;