import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaChartLine } from 'react-icons/fa';

const iconMap = {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaChartLine,
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
        <IconComponent className="text-2xl text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;