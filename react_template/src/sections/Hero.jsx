import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import ParticleBackground from '../components/ParticleBackground';
import { fadeIn, textVariant, floatAnimation } from '../utils/animations';
import { aboutMe } from '../utils/constants';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeIn('up', 0.2)}
              className="mb-4 text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={textVariant(0.3)}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {aboutMe.name}
            </motion.h1>
            
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  {aboutMe.title}
                </span>
              </h2>
            </motion.div>
            
            <motion.p
              variants={fadeIn('up', 0.5)}
              className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Transforming ideas into exceptional digital experiences through creative coding and design.
            </motion.p>
            
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors cursor-pointer"
              >
                View My Work
              </ScrollLink>
              
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-transparent hover:bg-indigo-50 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium py-3 px-8 rounded-lg border border-indigo-600 dark:border-indigo-400 transition-colors cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70 blur-lg"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                <img 
                  src={aboutMe.image} 
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
              <div className="absolute -left-8 top-10 w-16 h-16 bg-purple-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-10 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center justify-center cursor-pointer"
            aria-label="Scroll down"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;