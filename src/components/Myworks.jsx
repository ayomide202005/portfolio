import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
// import project1Image from '../assets/Report.jpg'; // Your first project image
// import project2Image from '../assets/project2image.jpg'; // Your second project image
// import project3Image from "../assets/project3image.jpeg";

const Myworks = () => {
  const projects = [
     {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment processing and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "../assets/Report.jpg",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "../assets/project2image.jpg",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts and nutrition.",
      tags: ["React Native", "GraphQL", "TypeScript"],
      image: "../assets/project3image.jpeg",
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="work" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container with Lazy Loading */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={225}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FiExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <FiGithub className="mr-2" size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Myworks;