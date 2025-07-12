import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Smartphone, Globe, ArrowRight, Eye } from 'lucide-react';

const MyWorks = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data with placeholder images from Unsplash
  const projects = [
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features, drag-and-drop functionality, and team workspace management.",
      longDescription: "A modern task management solution with real-time collaboration, project boards, team chat, file sharing, and advanced reporting features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Frontend",
      liveUrl: "https://taskmanager-demo.vercel.app",
      codeUrl: "https://github.com/username/task-manager",
      featured: true,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics with personalized insights and recommendations.",
      longDescription: "A comprehensive fitness tracking app with workout logging, nutrition tracking, progress analytics, and AI-powered recommendations.",
      tags: ["React Native", "GraphQL", "TypeScript", "Apollo"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "Mobile",
      liveUrl: "https://fitness-tracker-demo.vercel.app",
      codeUrl: "https://github.com/username/fitness-tracker",
      featured: false,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "AI-powered content generation platform with multiple templates, real-time editing, and export functionality.",
      longDescription: "An advanced AI content generator supporting blog posts, social media content, marketing copy, and more with customizable templates.",
      tags: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI/ML",
      liveUrl: "https://ai-content-demo.vercel.app",
      codeUrl: "https://github.com/username/ai-content-generator",
      featured: false,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.",
      longDescription: "A complete real estate solution with property search, virtual tours, mortgage calculations, and comprehensive agent tools.",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Full Stack",
      liveUrl: "https://realestate-demo.vercel.app",
      codeUrl: "https://github.com/username/real-estate-platform",
      featured: false,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance insights.",
      longDescription: "A powerful social media management tool with multi-platform posting, analytics, engagement tracking, and team collaboration features.",
      tags: ["React", "D3.js", "Node.js", "Redis", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      category: "Analytics",
      liveUrl: "https://social-dashboard-demo.vercel.app",
      codeUrl: "https://github.com/username/social-media-dashboard",
      featured: false,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI/ML", "Analytics"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Full Stack": return <Code className="w-4 h-4" />;
      case "Frontend": return <Palette className="w-4 h-4" />;
      case "Mobile": return <Smartphone className="w-4 h-4" />;
      case "AI/ML": return <Eye className="w-4 h-4" />;
      case "Analytics": return <Globe className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,#3b82f6_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              My Recent Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="flex items-center gap-2">
                {category !== "All" && getCategoryIcon(category)}
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
                  >
                    <span className="mr-2">Live Demo</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Like what you see?
            </h3>
            <p className="text-gray-600 mb-8">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's build something great together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl"
              >
                View Resume
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;