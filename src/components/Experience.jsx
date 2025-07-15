import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const workflow = [
    {
      step: '01',
      title: 'Design',
      description: 'Crafting intuitive interfaces with user-focused design principles',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '02',
      title: 'Develop',
      description: 'Building robust solutions with modern tech stacks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '03',
      title: 'Deploy',
      description: 'Implementing scalable architectures with CI/CD pipelines',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Wordpress', level: 85 },
    { name: 'Business plan/Pitch deck', level: 80 }
  ];

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="experience" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3 md:mb-4">
            EXPERTISE
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Engineering Digital Excellence
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto px-2">
            Transforming complex problems into elegant, scalable solutions through cutting-edge development practices.
          </p>
        </div>

        {/* Workflow - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {workflow.map((item, index) => (
            <div 
              key={index} 
              className="relative rounded-lg md:rounded-xl bg-white border border-gray-100 p-5 md:p-6 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg md:rounded-xl`}></div>
              <span className="text-xs md:text-sm font-medium text-gray-400">{item.step}</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-1 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content - Stack on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* Skills Section - Full width on mobile */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Technical Mastery</h3>
              <div className="space-y-3 md:space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs md:text-sm mb-1 md:mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="font-medium text-blue-600">
                        {animated ? skill.level : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1 md:h-1.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
                        style={{
                          width: animated ? `${skill.level}%` : '0%',
                          transition: `width 0.8s ease-out ${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section - Full width on mobile */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-lg md:rounded-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Professional Journey</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Senior full-stack engineer specializing in high-performance web applications using modern JavaScript frameworks and cloud-native technologies.
              </p>
              
              {/* Stats - 2 cols on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 text-center"
                  >
                    <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                <h4 className="font-medium text-gray-700 text-sm md:text-base mb-2 md:mb-3">Core Competencies:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'Cloud', 'CI/CD', 'Performance', 'UX', 'Agile'].map((item, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;