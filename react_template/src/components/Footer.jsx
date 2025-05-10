import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../utils/constants';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaTwitter
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-indigo-500">Dev</span>Portfolio
            </h2>
            <p className="text-gray-400 mb-4">
              Creating beautiful, functional web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'services', 'contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">hello@devportfolio.com</p>
            <p className="text-gray-400">+1 (234) 567-8901</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Designed with <span className="text-red-500">♥</span> by Creative Developer
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 z-40 ${showScrollTop ? 'block' : 'hidden'}`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-indigo-600 hover:bg-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-colors"
        >
          <FaArrowUp />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;