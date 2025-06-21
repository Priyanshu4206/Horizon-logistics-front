import React from 'react';
import styled from 'styled-components';
import { FaTruck, FaBoxOpen, FaShippingFast, FaSyncAlt, FaShieldAlt, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { Grid, GridItem, Flex, FlexItem } from '../components/ui/Grid';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import CTABanner from '../components/ui/CTABanner';
import ScrollReveal from '../components/ui/ScrollReveal';
import LazyImage from '../components/ui/LazyImage';
import DotPattern from '../components/ui/DotPattern';
import usePageTransition from '../hooks/usePageTransition';
import PageLoader from '../components/ui/PageLoader';

const HeroSection = styled(Section)`
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: 10rem 0 5rem;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ServiceList = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: rgba(10, 61, 98, 0.1);
    
    @media (min-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ServiceItem = styled.div`
  margin-bottom: 4rem;
  position: relative;
  
  @media (min-width: 992px) {
    display: flex;
    justify-content: ${props => props.position === 'right' ? 'flex-start' : 'flex-end'};
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin-left: 48px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
  
  @media (min-width: 992px) {
    width: 46%;
    margin-left: 0;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--accent-color);
  }
`;

const ServiceDescription = styled.p`
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    
    svg {
      color: var(--accent-color);
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }
`;

const ServiceDot = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary-color);
  left: 14px;
  top: 30px;
  z-index: 2;
  
  @media (min-width: 992px) {
    left: 50%;
    transform: translateX(-50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent-color);
    top: 4px;
    left: 4px;
  }
`;

const ServiceConnector = styled.div`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: var(--primary-color);
  top: 42px;
  left: 38px;
  z-index: 1;
  
  @media (min-width: 992px) {
    width: calc(4% - 10px);
    left: ${props => props.position === 'right' ? '50%' : 'auto'};
    right: ${props => props.position === 'left' ? '50%' : 'auto'};
  }
`;

const IndustrySection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
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

const IndustryCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
  height: 100%;
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const IndustryIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(10, 61, 98, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: var(--primary-color);
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ProcessSection = styled(Section)`
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProcessNumber = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--light-text);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

const ProcessContent = styled.div`
  flex: 1;
`;

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const ServicesPage = () => {
  const { isLoading } = usePageTransition();
  
  const services = [
    {
      title: 'Full Truckload',
      description: 'Dedicated trucks for your shipments that require the entire trailer space and time-sensitive delivery.',
      image: '/placeholder-service1.jpg',
      features: [
        'Single pickup and delivery points',
        'Best for large shipments',
        'Faster transit times',
        'No freight handling during transit'
      ]
    },
    {
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective solutions for smaller shipments that don\'t require a full trailer.',
      image: '/placeholder-service2.jpg',
      features: [
        'Economical for smaller shipments',
        'Multiple pickup and delivery options',
        'Flexible scheduling',
        'Pay only for the space you need'
      ]
    },
    {
      title: 'Flatbed Services',
      description: 'Specialized transportation for oversized, awkward, or unconventionally shaped freight.',
      image: '/placeholder-service3.jpg',
      features: [
        'Side and top loading capabilities',
        'Ideal for construction materials',
        'Accommodates oversized freight',
        'Specialized securing equipment'
      ]
    },
    {
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled logistics for perishable and temperature-sensitive goods.',
      image: '/placeholder-service4.jpg',
      features: [
        'Precise temperature monitoring',
        'Suitable for food, pharmaceuticals, and chemicals',
        'State-of-the-art refrigeration units',
        'Temperature documentation and compliance'
      ]
    }
  ];
  
  const industries = [
    {
      icon: <FaBoxOpen />,
      title: 'Retail & E-commerce',
      description: 'Logistics solutions designed for the modern retail supply chain, with the flexibility to handle seasonal peaks and just-in-time inventory requirements.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Manufacturing',
      description: 'Reliable transportation for raw materials and finished products, with specialized equipment for industrial cargo and heavy machinery.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Healthcare & Pharmaceuticals',
      description: 'Temperature-controlled and secure transportation for sensitive medical supplies, pharmaceuticals, and healthcare equipment.'
    },
    {
      icon: <FaTruck />,
      title: 'Food & Beverage',
      description: 'Time-sensitive logistics with strict temperature control for perishable goods, ensuring freshness and compliance with food safety regulations.'
    }
  ];
  
  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start by understanding your unique logistics needs, including volume, frequency, special requirements, and business goals.'
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized logistics solution that optimizes routes, vehicle types, and scheduling to meet your specific requirements.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We assign dedicated carriers, set up tracking systems, and establish communication protocols for seamless execution.'
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      description: 'We regularly review performance metrics and gather feedback to identify opportunities for optimization and cost savings.'
    }
  ];
  
  return (
    <>
      {isLoading && <PageLoader />}
      
      {/* Hero Section */}
      <HeroSection>
        <DotPattern 
          pattern="dots" 
          width="400px" 
          height="400px" 
          top="0" 
          right="0" 
          opacity="0.05"
          delay="0.2s"
        />
        
        <Container>
          <ScrollReveal>
            <HeroTitle>Our Services</HeroTitle>
            <HeroSubtitle>
              We provide end-to-end logistics solutions tailored to your business needs, with a focus on reliability, efficiency, and customer satisfaction.
            </HeroSubtitle>
          </ScrollReveal>
        </Container>
      </HeroSection>
      
      {/* Services Section */}
      <Section>
        <DotPattern 
          pattern="dots" 
          width="250px" 
          height="250px" 
          top="50px" 
          right="50px" 
          opacity="0.05"
          delay="0.2s"
        />
        
        <Container>
          <ScrollReveal>
            <SectionTitle>Transportation Services</SectionTitle>
            <SectionSubtitle>
              Our comprehensive range of transportation services is designed to meet diverse shipping needs across industries and geographies.
            </SectionSubtitle>
          </ScrollReveal>
          
          <ServiceList>
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={`${0.1 * index}s`} direction={index % 2 === 0 ? "left" : "right"}>
                <ServiceItem position={index % 2 === 0 ? 'right' : 'left'}>
                  <ServiceDot />
                  <ServiceConnector position={index % 2 === 0 ? 'right' : 'left'} />
                  <ServiceCard>
                    <ServiceImage>
                      <LazyImage src={service.image} alt={service.title} height="100%" zoom />
                    </ServiceImage>
                    <ServiceContent>
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDescription>{service.description}</ServiceDescription>
                      <ServiceFeatures>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <FaArrowRight /> {feature}
                          </li>
                        ))}
                      </ServiceFeatures>
                      <Button as={Link} to="/quote" variant="primary">
                        Get a Quote
                      </Button>
                    </ServiceContent>
                  </ServiceCard>
                </ServiceItem>
              </ScrollReveal>
            ))}
          </ServiceList>
        </Container>
      </Section>
      
      {/* Industries Section */}
      <IndustrySection>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          bottom="0" 
          right="0" 
          opacity="0.05"
          delay="0.3s"
        />
        
        <Container>
          <ScrollReveal>
            <SectionTitle>Industries We Serve</SectionTitle>
            <SectionSubtitle>
              We have specialized experience across various industries, each with unique logistics requirements and challenges.
            </SectionSubtitle>
          </ScrollReveal>
          
          <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="2rem">
            {industries.map((industry, index) => (
              <GridItem key={index}>
                <ScrollReveal delay={`${0.1 * index}s`}>
                  <IndustryCard>
                    <IndustryIcon>{industry.icon}</IndustryIcon>
                    <IndustryTitle>{industry.title}</IndustryTitle>
                    <p>{industry.description}</p>
                  </IndustryCard>
                </ScrollReveal>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </IndustrySection>
      
      {/* Our Process Section */}
      <ProcessSection>
        <DotPattern 
          pattern="dots" 
          width="250px" 
          height="250px" 
          top="50px" 
          left="50px" 
          opacity="0.05"
          delay="0.2s"
        />
        <DotPattern 
          pattern="rotatedGrid" 
          width="200px" 
          height="200px" 
          bottom="50px" 
          right="50px" 
          opacity="0.03"
          delay="0.4s"
        />
        
        <Container>
          <ScrollReveal>
            <SectionTitle>Our Process</SectionTitle>
            <SectionSubtitle>
              We follow a structured approach to ensure every logistics solution is tailored to your specific needs and delivers optimal results.
            </SectionSubtitle>
          </ScrollReveal>
          
          {process.map((step, index) => (
            <ScrollReveal key={index} delay={`${0.1 * index}s`} direction="left">
              <ProcessStep>
                <ProcessNumber>{step.number}</ProcessNumber>
                <ProcessContent>
                  <ProcessTitle>{step.title}</ProcessTitle>
                  <p>{step.description}</p>
                </ProcessContent>
              </ProcessStep>
            </ScrollReveal>
          ))}
        </Container>
      </ProcessSection>
      
      {/* CTA Section */}
      <ScrollReveal>
        <CTABanner
          title="Ready to Streamline Your Logistics?"
          description="Contact us today to discuss how our services can be tailored to your specific shipping needs."
          primaryButtonText="Get a Quote"
          primaryButtonLink="/quote"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </ScrollReveal>
    </>
  );
};

export default ServicesPage; 