import React from "react";
import heroimage from "../assets/heroimg.jpeg"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-40 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {/* Left Content - Now with max-width for better centering */}
          <div className="flex-1 max-w-2xl z-10 lg:pr-8">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Precision in interface crafting & software solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg lg:text-xl mb-8 leading-relaxed">
              I am a passionate and dedicated software engineer with a focus on
              creating robust applications.
            </p>

            {/* CTA Button */}
            <button className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-12 flex items-center gap-2">
              <span className="relative z-10">Work with me</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
            </button>

            {/* Client Testimonials */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "M", "J"].map((initial, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-gray-900 flex items-center justify-center shadow-md"
                  >
                    <span className="text-sm font-semibold text-white">
                      {initial}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">
                  Satisfied clients
                </span>{" "}
                are the
                <br />
                cornerstone of our success
              </div>
            </div>
          </div>
                
          {/* Right Image - Centered with adjusted sizing */}
          <div className="flex-1 flex justify-center relative z-10 max-w-2xl">
            <div className="relative w-full">
              {/* Background Circle */}
              <div className="absolute -right-20 -top-20 w-[120%] h-[150%] bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full opacity-15 blur-[100px]"></div>

              {/* Yellow Circle Container - Adjusted size */}
              <div className="relative w-72 h-72 lg:w-140 lg:h-140 mx-auto">
                {/* Yellow Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl"></div>

                {/* Lion Image */}
                <div className="  absolute inset-0 overflow-hidden rounded-full border-[6px] border-white shadow-2xl -translate-x-1 -translate-y-1">
                  <img
                    src={heroimage}
                    alt="Lion"
                    className="w-full h-full object-cover object-center transform scale-110 hover:scale-115 transition-transform duration-500"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-[60px]"></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-500 rounded-full opacity-20 blur-[60px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;