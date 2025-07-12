import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import project1Image from '../assets/Report.jpg'; // Your first project image
import project2Image from '../assets/project2image.jpg'; // Your second project image
import project3Image from '../assets/project3image.jpeg'; // Your third project image

const Myworks = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: project1Image, // Using imported image
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: project2Image, // Using imported image
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts and nutrition.",
      tags: ["React Native", "GraphQL", "TypeScript"],
      image: project3Image, // Using imported image
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
              My Past Work
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} // Using the specific image for each project
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg group hover:from-blue-600 hover:to-teal-600 shadow-lg hover:shadow-xl">
            <span className="relative z-10">View All Projects</span>
            <span className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Myworks;