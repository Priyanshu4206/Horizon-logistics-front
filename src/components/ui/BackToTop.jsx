import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--light-text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  z-index: 99;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.8)')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px) scale(1.05);
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button visible={isVisible} onClick={scrollToTop} aria-label="Back to top">
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop; 