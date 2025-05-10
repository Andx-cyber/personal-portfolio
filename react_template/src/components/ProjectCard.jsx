import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { cardVariants } from '../utils/animations';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.1 }}
        onClick={() => setShowDetails(true)}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <p className="text-xs font-medium bg-indigo-600 py-1 px-2 rounded-full inline-block mb-2">
                {project.category}
              </p>
              <h3 className="font-bold text-lg">{project.title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
            >
              View Details
            </button>
            
            <div className="flex space-x-3">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} />
              </a>
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full text-gray-800 dark:text-gray-200"
                onClick={() => setShowDetails(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{project.category}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Description</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.detailDescription}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;