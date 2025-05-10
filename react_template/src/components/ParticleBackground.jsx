import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ darkMode }) => {
  // Particle system parameters
  const particleCount = 50;
  const particleColors = useMemo(() => 
    darkMode 
      ? ['#6366f1', '#8b5cf6', '#3b82f6', '#06b6d4']  // Dark mode colors
      : ['#6366f1', '#8b5cf6', '#3b82f6', '#06b6d4'],  // Light mode colors
    [darkMode]
  );

  useEffect(() => {
    // Canvas setup
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      });
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleColors]);
  
  return (
    <motion.canvas
      id="particle-canvas"
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default ParticleBackground;