import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { Flex, FlexItem } from './Grid';

const CTAWrapper = styled.section`
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    transform: translate(150px, -150px);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    transform: translate(-100px, 100px);
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  
  svg {
    margin-right: 0.5rem;
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--accent-color);
  color: var(--dark-text);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  
  &:hover {
    background-color: #FFB84D;
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--light-text);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--light-text);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const CTABanner = ({
  title,
  description,
  phone,
  phoneIcon,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <CTAWrapper>
      <Container>
        <CTAContent>
          <CTATitle>{title}</CTATitle>
          {description && <CTADescription>{description}</CTADescription>}
          
          {(primaryButtonText || secondaryButtonText) && (
            <ButtonGroup>
              {primaryButtonText && (
                <PrimaryButton as={Link} to={primaryButtonLink}>
                  {primaryButtonText}
                </PrimaryButton>
              )}
              
              {secondaryButtonText && (
                <SecondaryButton as={Link} to={secondaryButtonLink}>
                  {secondaryButtonText}
                </SecondaryButton>
              )}
            </ButtonGroup>
          )}
          
          {phone && (
            <CTAPhone>
              {phoneIcon}
              {phone}
            </CTAPhone>
          )}
        </CTAContent>
      </Container>
    </CTAWrapper>
  );
};

export default CTABanner; 