import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  // Skill data
  const skills = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Software Engineering', percentage: 90 },
    { name: 'Cloud and DevOps', percentage: 85 },
    { name: 'UI/UX Design', percentage: 80 }
  ];

  // Stats data
  const stats = [
    { value: 75, label: 'Projects completed' },
    { value: 14, label: 'Years of Experience' },
    { value: 55, label: 'Ongoing projects' }
  ];

  return (
    <section className="py-20 bg-[#e7e6e2]">

      <div className="container mx-auto px-6">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white p-8 shadow-lg'>
                <h2 className='text-xl font-semibold mb-5'>01.Design & Prototyping</h2>
                <p>Our team creates wireframes and prototypes that visualize the user interface and user experience design.</p>
            </div>
            <div className='bg-white p-8 shadow-lg'>
                <h2 className='text-xl font-semibold mb-5'>02.Development & Testing</h2>
                <p>With designs approved, our developers begin the implementation phase. We adopt agile methodologies to ensure flexibility.</p>
            </div>
            <div className='bg-white p-8 shadow-lg'>
                <h2 className='text-xl font-semibold mb-5'>03.Deployment & Maintenance</h2>
                <p>We conduct reviews & gather insights from users to identify areas for improvement. This iterative approach allows enhancing solution continually.</p>
            </div>
        </div>
        {/* Flex container for side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - Experience text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-black">
                My Experience
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I have honed my skills in full-stack web development and software engineering. I have a deep understanding of front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. On the back end, I am proficient in Node.js, Express.js, and databases like MongoDB and MySQL.
            </p>
            
            {/* Stats Grid - Moved up here */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 lg:mb-0">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <span className="bg-clip-text text-transparent bg-black">
                      {stat.value}+
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                    <span className="text-yellow-500 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-teal-400 h-2.5 rounded-full"
                      style={{
                        width: animated ? `${skill.percentage}%` : '0%',
                        transition: `width 1.5s ease-out ${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;