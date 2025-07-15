import React from "react";
import aboutpics from "../assets/experienceimg.jpeg"; // Adjust the path as necessary

const Aboutme = () => {
  return (
    <section id="aboutme" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My goal is to leverage technology to solve complex problems and
            deliver innovative solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700">
              <img
                src={aboutpics}
                alt="Professional headshot"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ objectPosition: "center top" }} // Ensures head is properly framed
                loading="lazy"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

            </div>
          </div>
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I am a dedicated and passionate full-stack developer with a strong
              background in creating performant, accessible, and user-friendly
              web applications. With 4 years of industry experience, I
              specialize in modern JavaScript frameworks, Wordpress website design,
              and UI/UX design.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">4+ years</span> of
                  professional experience building scalable applications
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Successfully delivered{" "}
                  <span className="font-semibold">15+ projects</span> for
                  clients worldwide
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Trusted by <span className="font-semibold">28+ clients</span>{" "}
                  across multiple industries
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Get in touch for collaboration"
            >
              Let's Collaborate
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
