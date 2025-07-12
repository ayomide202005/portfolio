import React, { useEffect } from "react";
import heroimage from "../assets/heroimg.jpeg";

const Hero = () => {
  useEffect(() => {
    // This ensures animations trigger after component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-40 h-full flex items-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl lg:pr-8 animate-fadeInUp">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-8 animate-fadeIn">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium tracking-wider">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Crafting Digital <br className="hidden sm:block" />
                Experiences That{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Matter</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -rotate-1 z-0 animate-underline"></span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Full-stack engineer specializing in performant, accessible digital
              experiences that drive business results.
            </p>

            {/* CTA Button */}
            <button className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg mb-12 flex items-center gap-2 animate-fadeIn">
              <span className="relative z-10">Start a Project</span>
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
            <div className="flex items-center gap-4 animate-fadeIn">
              <div className="flex -space-x-3">
                {["A", "M", "J"].map((initial, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-gray-900 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-semibold text-white">
                      {initial}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">
                  Trusted by industry leaders
                </span>{" "}
                to deliver
                <br />
                exceptional digital products
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center max-w-2xl animate-fadeInRight">
            <div className="relative w-full">
              {/* Glow effect */}
              <div className="absolute -right-20 -top-20 w-[150%] h-[170%] bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full opacity-15 blur-[100px] animate-pulse-slow"></div>

              {/* Image container */}
              <div className="relative w-72 h-72 lg:w-150 lg:h-140 mx-auto group">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl animate-rotate">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Profile image */}
                <div className="absolute inset-1 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                  <img
                    src={heroimage}
                    alt="Professional portrait"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "center top" }}
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-[60px] animate-float"></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-500 rounded-full opacity-20 blur-[60px] animate-float-delay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        .animate-underline { animation: underline 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Hero;