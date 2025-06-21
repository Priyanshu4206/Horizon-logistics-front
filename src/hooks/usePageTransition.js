import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTransition = (duration = 2000) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader on route change
    setIsLoading(true);
    
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Hide loader after specified duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, duration]);

  return { isLoading };
};

export default usePageTransition; 