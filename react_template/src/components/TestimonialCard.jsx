import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mb-6">
        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-2.209 0-4 1.791-4 4v12h8v-8h-4v-4c0-1.105 0.895-2 2-2v-2zM22 8c-2.209 0-4 1.791-4 4v12h8v-8h-4v-4c0-1.105 0.895-2 2-2v-2z" />
        </svg>
        <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.quote}</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;