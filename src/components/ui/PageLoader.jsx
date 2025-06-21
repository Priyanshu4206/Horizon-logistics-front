import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  animation: ${loaderFadeOut} 0.5s ease forwards;
  animation-delay: ${props => props.duration || '2s'};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid rgba(10, 61, 98, 0.2);
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    height: 30px;
  }
`;

const PageLoader = ({ duration = 2000 }) => {
  return (
    <LoaderWrapper duration={`${duration/1000}s`}>
      <Spinner />
      <LogoContainer>
        <img src="/logo.svg" alt="Horizon Trucking" />
      </LogoContainer>
    </LoaderWrapper>
  );
};

export default PageLoader; 