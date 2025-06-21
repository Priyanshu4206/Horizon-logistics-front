import React from 'react';
import styled from 'styled-components';
import { Flex, FlexItem, Grid, GridItem } from './Grid';
import Container from './Container';
import Section from './Section';

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${props => props.align || 'center'};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--gray-text);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: ${props => props.align === 'center' ? 'auto' : '0'};
  margin-right: ${props => props.align === 'center' ? 'auto' : '0'};
  text-align: ${props => props.align || 'center'};
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const FeatureCard = styled.div`
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  background-color: #fff;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || 'rgba(10, 61, 98, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: ${props => props.iconColor || 'var(--primary-color)'};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--gray-text);
  margin-bottom: 0;
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureSection = ({
  title,
  subtitle,
  features = [],
  image,
  imagePosition = 'right',
  bgColor = 'transparent',
  textAlign = 'center'
}) => {
  return (
    <Section bgColor={bgColor}>
      <Container>
        <SectionTitle align={textAlign}>{title}</SectionTitle>
        {subtitle && <SectionSubtitle align={textAlign}>{subtitle}</SectionSubtitle>}
        
        <Flex direction={imagePosition === 'left' ? 'row-reverse' : 'row'} mobileFlex="column" gap="3rem">
          <FlexItem flex="1">
            {image && <FeatureImage>
              <img src={image} alt={title} />
            </FeatureImage>}
          </FlexItem>
          
          <FlexItem flex="1">
            <Grid columns={features.length > 3 ? 2 : 1} gap="1.5rem">
              {features.map((feature, index) => (
                <GridItem key={index}>
                  <FeatureCard>
                    {feature.icon && (
                      <FeatureIcon bgColor={feature.iconBgColor} iconColor={feature.iconColor}>
                        {feature.icon}
                      </FeatureIcon>
                    )}
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureCard>
                </GridItem>
              ))}
            </Grid>
          </FlexItem>
        </Flex>
      </Container>
    </Section>
  );
};

export default FeatureSection; 