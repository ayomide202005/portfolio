import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Number of visible cards

  const testimonials = [
    {
      text: "This product completely transformed our workflow. The team's productivity increased by 200% and the interface is so intuitive.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechSolutions Inc.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      text: "I've tried many similar tools, but none come close to the features and reliability of this platform. Customer support is exceptional.",
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Global Brands",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      text: "As a small business owner, I needed an affordable solution that could scale. This exceeded all my expectations and helped us grow.",
      name: "Emma Rodriguez",
      role: "Founder",
      company: "Bloom Boutique",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      text: "The analytics dashboard alone is worth the price. We've made data-driven decisions that increased our revenue by 35% last quarter.",
      name: "David Wilson",
      role: "CTO",
      company: "DataSystems",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      text: "Implementation was seamless and the results were immediate. Our customer satisfaction scores improved dramatically within weeks.",
      name: "Lisa Wong",
      role: "COO",
      company: "ServiceFirst",
      avatar: "https://i.pravatar.cc/150?img=60"
    },
    {
      text: "The customizable reports have given us insights we never had before. It's like we've been operating blind until now.",
      name: "Robert Kim",
      role: "Director of Analytics",
      company: "InsightCorp",
      avatar: "https://i.pravatar.cc/150?img=28"
    }
  ];

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleCards]);

  // Calculate the width for the slider track
  const trackWidth = `${(testimonials.length / visibleCards) * 100}%`;
  const cardWidth = `${100 / visibleCards}%`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-xl text-gray-500">
          Trusted by businesses worldwide
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Testimonial Cards */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: trackWidth
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: cardWidth }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg relative h-full flex flex-col">
                  <svg 
                    className="absolute top-8 left-8 text-gray-100 w-12 h-12" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-lg text-gray-600 mb-6 relative z-10 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full border-4 border-gray-100"
                    />
                    <div className="ml-4 text-left">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Previous testimonial"
          >
            <svg 
              className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </button>

          <div className="flex mx-4">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Next testimonial"
          >
            <svg 
              className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;