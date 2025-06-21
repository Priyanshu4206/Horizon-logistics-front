import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const RevealContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible, direction }) => {
    if (isVisible) return 'translateY(0) scale(1)';
    
    switch (direction) {
      case 'up':
        return 'translateY(50px) scale(0.95)';
      case 'down':
        return 'translateY(-50px) scale(0.95)';
      case 'left':
        return 'translateX(50px) scale(0.95)';
      case 'right':
        return 'translateX(-50px) scale(0.95)';
      default:
        return 'translateY(50px) scale(0.95)';
    }
  }};
  transition: opacity ${({ duration }) => duration || '0.6s'} ease-out, 
              transform ${({ duration }) => duration || '0.6s'} ease-out;
  transition-delay: ${({ delay }) => delay || '0s'};
`;

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  duration = '0.6s', 
  delay = '0s',
  threshold = 0.1,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Set isLoaded to true after first render
    setIsLoaded(true);
    
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If triggerOnce is true, and the element is already visible, don't do anything
        if (triggerOnce && isVisible) return;
        
        // Otherwise, update the visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, triggerOnce, threshold]);

  return (
    <RevealContainer
      ref={ref}
      isVisible={isVisible || !isLoaded}
      direction={direction}
      duration={duration}
      delay={delay}
    >
      {children}
    </RevealContainer>
  );
};

export default ScrollReveal; 