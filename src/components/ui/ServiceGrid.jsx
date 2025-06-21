import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from './Grid';
import Container from './Container';
import Section from './Section';

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--gray-text);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  background-color: #fff;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  &:hover .service-description {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover .service-icon {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(10, 61, 98, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: var(--transition-normal);
  
  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: var(--gray-text);
  margin-bottom: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition-normal);
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'var(--light-text)' : 'var(--dark-text)'};
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(10, 61, 98, 0.1)'};
  }
`;

const ServiceGrid = ({
  title,
  subtitle,
  services = [],
  industries = [],
  bgColor = 'var(--light-bg)'
}) => {
  const [activeTab, setActiveTab] = useState('services');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const items = activeTab === 'services' ? services : industries;
  
  return (
    <Section bgColor={bgColor}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'services'} 
            onClick={() => handleTabChange('services')}
          >
            Service Modes
          </Tab>
          <Tab 
            active={activeTab === 'industries'} 
            onClick={() => handleTabChange('industries')}
          >
            Industries Served
          </Tab>
        </TabsContainer>
        
        <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="1.5rem">
          {items.map((item, index) => (
            <GridItem key={index}>
              <ServiceCard>
                <ServiceIcon className="service-icon">
                  {item.icon}
                </ServiceIcon>
                <ServiceTitle>{item.title}</ServiceTitle>
                <ServiceDescription className="service-description">
                  {item.description}
                </ServiceDescription>
              </ServiceCard>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServiceGrid; 