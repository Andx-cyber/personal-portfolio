import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { fadeIn } from '../utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'hello@devportfolio.com',
      link: 'mailto:hello@devportfolio.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (234) 567-8901',
      link: 'tel:+12345678901'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's discuss how I can help you achieve your goals"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item.content}
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's discuss your project</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Fill out the form and I'll get back to you as soon as possible.
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Work Availability</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently available for freelance work or full-time positions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Website Development</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile App Development</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Technical Consulting</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;