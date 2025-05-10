import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../utils/constants';
import { fadeIn } from '../utils/animations';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Testimonials" 
          subtitle="See what my clients have to say about working with me"
        />
        
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="hidden">
            {/* Desktop slider controls (hidden for now, using grid layout instead) */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Work With Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;