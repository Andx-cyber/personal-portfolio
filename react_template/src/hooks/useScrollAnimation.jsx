import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for triggering animations when elements come into view
const useScrollAnimation = (threshold = 0.2) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  
  return { ref, inView, hasAnimated };
};

export default useScrollAnimation;