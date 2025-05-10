import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { fadeIn, staggerContainer } from '../utils/animations';
import { skills, aboutMe } from '../utils/constants';

const About = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better and discover the skills I bring to the table"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative">
              <div className="w-full max-w-md h-auto rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={aboutMe.image} 
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 dark:bg-indigo-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">5+ Years Experience</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {aboutMe.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">{aboutMe.name}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">hello@devportfolio.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">From:</h4>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, USA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-300">Full-time</p>
              </div>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Download CV
            </button>
          </motion.div>
        </div>
        
        <div>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              className={`px-6 py-2 rounded-full ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} font-medium`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeFilter === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} font-medium`}
              onClick={() => handleFilterClick('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeFilter === 'backend' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} font-medium`}
              onClick={() => handleFilterClick('backend')}
            >
              Backend
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeFilter === 'design' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} font-medium`}
              onClick={() => handleFilterClick('design')}
            >
              Design
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeFilter === 'devops' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} font-medium`}
              onClick={() => handleFilterClick('devops')}
            >
              DevOps
            </button>
          </div>
          
          <motion.div 
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;