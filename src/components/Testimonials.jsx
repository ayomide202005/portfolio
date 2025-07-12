import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

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

  // Handle responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
      // Reset index when cards per view changes
      setCurrentIndex(0);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => 
          prev >= testimonials.length - visibleCards ? 0 : prev + 1
        );
      }, 5000);
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [visibleCards, testimonials.length]);

  const nextSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => 
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
  };

  // Calculate the maximum index to prevent overflow
  const maxIndex = Math.max(0, testimonials.length - visibleCards);
  const cardWidth = `${100 / visibleCards}%`;

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='testimonials'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(testimonials.length / visibleCards) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: cardWidth }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col transition-all hover:shadow-xl">
                    <svg 
                      className="text-gray-200 w-8 h-8 mb-4" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full border-2 border-gray-100"
                        loading="lazy"
                        width={48}
                        height={48}
                      />
                      <div className="ml-4">
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

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={prevSlide}
              className="p-2 mx-1 rounded-full bg-white shadow text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center mx-4">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 mx-1 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 mx-1 rounded-full bg-white shadow text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;