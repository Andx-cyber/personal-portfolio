import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { staggerContainer } from '../utils/animations';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Services" 
          subtitle="Discover the range of services I offer to help bring your digital vision to life"
        />
        
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I love taking on new challenges and creating custom solutions tailored to your specific needs.
            Let's discuss your project and find the perfect approach.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;