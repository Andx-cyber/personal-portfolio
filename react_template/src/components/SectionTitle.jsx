import { motion } from 'framer-motion';
import { textVariant } from '../utils/animations';

const SectionTitle = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
      variants={textVariant(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'} dark:text-white`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} dark:text-gray-300 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-indigo-600 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;