import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../utils/constants';
import { navVariants } from '../utils/animations';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-indigo-600 dark:text-indigo-400">Dev</span>Portfolio
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                activeClass="text-indigo-600 dark:text-indigo-400"
              >
                {link.title}
              </ScrollLink>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              activeClass="text-indigo-600 dark:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;