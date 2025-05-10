import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { staggerContainer, fadeIn } from '../utils/animations';
import { projects } from '../utils/constants';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my recent work and discover the applications I've built"
        />
        
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-6 py-2 rounded-full ${activeCategory === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              } font-medium transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;