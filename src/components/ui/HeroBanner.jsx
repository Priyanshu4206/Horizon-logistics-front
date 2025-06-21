import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import Container from './Container';
import { Flex, FlexItem } from './Grid';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: var(--light-text);
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const QuickLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--light-text);
  font-weight: 500;
  transition: var(--transition-fast);
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.25rem;
    color: var(--accent-color);
  }
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HeroBanner = ({
  backgroundType = 'image',
  backgroundSrc,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  quickLinks = []
}) => {
  return (
    <HeroSection>
      <HeroBackground>
        {backgroundType === 'video' ? (
          <video autoPlay muted loop playsInline>
            <source src={backgroundSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={backgroundSrc} alt="Hero Background" />
        )}
      </HeroBackground>
      
      <Container>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          
          <HeroButtons>
            <Button as={Link} to={primaryButtonLink} variant="accent">
              {primaryButtonText}
            </Button>
            <Button as={Link} to={secondaryButtonLink} variant="outline">
              {secondaryButtonText}
            </Button>
          </HeroButtons>
          
          {quickLinks.length > 0 && (
            <QuickLinks>
              {quickLinks.map((link, index) => (
                <QuickLink key={index} to={link.url}>
                  {link.icon}
                  {link.text}
                </QuickLink>
              ))}
            </QuickLinks>
          )}
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default HeroBanner; 