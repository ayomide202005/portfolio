import React from "react";
import experience from "../assets/experienceimg.jpeg"; // Adjust the path as necessary

const Aboutme = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My goal is to leverage technology to solve complex problems and
            deliver innovative solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Right Column - Image Content */}

          <div className="md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center min-h-64 md:min-h-80">
            <div className="text-center p-6 text-gray-500">
              <img src={experience} alt="" />
            </div>
          </div>

          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-8">
              I am a dedicated and passionate web developer with a strong
              background in creating dynamic and user-friendly websites and
              applications. With 5 years of experience in the industry, I have
              honed my skills in front-end and back-end development, UI/UX
              design, and software engineering.
            </p>

            {/* Check Items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 w-5 h-5 border-2 border-blue-500 rounded-sm"></div>
                <p className="text-gray-700">
                  Over 10 years of experience in the industry
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 w-5 h-5 border-2 border-blue-500 rounded-sm"></div>
                <p className="text-gray-700">
                  Proudly served more than 1000 clients globally
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 w-5 h-5 border-2 border-blue-500 rounded-sm"></div>
                <p className="text-gray-700">
                  Successfully delivered over 500 projects
                </p>
              </div>
            </div>

            {/* Client Count */}
            <div className="mb-8">
              <p className="text-gray-700">
                Across continents partnering with{" "}
                <span className="font-bold text-blue-500">520+</span> clients
              </p>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors duration-300 flex items-center">
              Let's Collaborate →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
