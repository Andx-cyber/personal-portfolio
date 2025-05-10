import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Element name="home">
          <Hero />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="services">
          <Services />
        </Element>

        <Element name="testimonials">
          <Testimonials />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>

        <Footer />
      </div>
    </div>
  );
}

export default App;