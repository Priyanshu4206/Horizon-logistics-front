import React from 'react';
import { FaShippingFast, FaHeadset, FaFileAlt, FaTruck, FaBoxOpen, FaTachometerAlt, FaExchangeAlt, FaMobileAlt, FaChartLine, FaSyncAlt, FaTabletAlt, FaFileSignature } from 'react-icons/fa';
import HeroBanner from '../components/ui/HeroBanner';
import FeatureSection from '../components/ui/FeatureSection';
import ServiceGrid from '../components/ui/ServiceGrid';
import CTABanner from '../components/ui/CTABanner';
import { Card, CardImage, CardBody } from '../components/ui/Card';
import { Grid, GridItem, Flex, FlexItem } from '../components/ui/Grid';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import LazyImage from '../components/ui/LazyImage';
import DotPattern from '../components/ui/DotPattern';
import usePageTransition from '../hooks/usePageTransition';
import PageLoader from '../components/ui/PageLoader';

const TrustSection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const TrustImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

const TrustContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const TrustTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TrustDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CarrierCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CarrierImage = styled.div`
  flex: 0 0 40%;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const CarrierContent = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CarrierTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const PartnerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  
  img {
    height: 50px;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: var(--transition-normal);
    
    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
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

const HomePage = () => {
  const { isLoading } = usePageTransition();
  
  // Data for Quick Links in Hero Banner
  const quickLinks = [
    {
      icon: <FaShippingFast />,
      text: 'Fast Shipping',
      url: '/services'
    },
    {
      icon: <FaHeadset />,
      text: '24/7 Support',
      url: '/contact'
    },
    {
      icon: <FaFileAlt />,
      text: 'Freight Documentation',
      url: '/services'
    },
    {
      icon: <FaTruck />,
      text: 'Truck Availability',
      url: '/services'
    }
  ];
  
  // Data for Features
  const features = [
    {
      icon: <FaTachometerAlt />,
      title: 'Speed',
      description: 'Fast transit times and efficient loading/unloading processes for quicker deliveries.'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Transparency',
      description: 'Real-time visibility into your shipment location and status at every step.'
    },
    {
      icon: <FaChartLine />,
      title: 'Reliability',
      description: 'Consistent service with industry-leading on-time performance metrics.'
    }
  ];
  
  // Data for Services
  const services = [
    {
      icon: <FaTruck />,
      title: 'Truckload',
      description: 'Dedicated truck service for larger shipments with time-sensitive delivery needs.'
    },
    {
      icon: <FaBoxOpen />,
      title: 'LTL Shipping',
      description: 'Cost-effective solutions for shipments that don\'t require a full truck.'
    },
    {
      icon: <FaShippingFast />,
      title: 'Flatbed',
      description: 'Specialized shipping for oversized, wide, or unconventionally shaped cargo.'
    },
    {
      icon: <FaSyncAlt />,
      title: 'Reefer',
      description: 'Temperature-controlled transportation for perishable and sensitive goods.'
    }
  ];
  
  // Data for Industries
  const industries = [
    {
      icon: <FaBoxOpen />,
      title: 'FMCG',
      description: 'Specialized logistics for fast-moving consumer goods with tight delivery windows.'
    },
    {
      icon: <FaShippingFast />,
      title: 'Automotive',
      description: 'Just-in-time delivery solutions for the automotive supply chain.'
    },
    {
      icon: <FaTruck />,
      title: 'Retail',
      description: 'Distribution solutions for retail networks with varying volume requirements.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Pharma',
      description: 'Compliant transport services for pharmaceuticals and healthcare products.'
    }
  ];
  
  // Data for Technology
  const techFeatures = [
    {
      icon: <FaMobileAlt />,
      title: 'Live Tracking',
      description: 'Real-time GPS tracking of your shipments with minute-by-minute updates.'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'API/EDI Support',
      description: 'Seamless integration with your existing supply chain management systems.'
    },
    {
      icon: <FaTabletAlt />,
      title: 'Shipment Portal',
      description: 'User-friendly dashboard to manage all your shipments in one place.'
    },
    {
      icon: <FaFileSignature />,
      title: 'Digital Documentation',
      description: 'Paperless processing for all shipping documents and PODs.'
    }
  ];
  
  return (
    <>
      {isLoading && <PageLoader />}
      
      {/* Hero Banner */}
      <HeroBanner
        backgroundType="image"
        backgroundSrc="/placeholder-hero.jpg"
        title="Built for the Road. Trusted by Business."
        subtitle="End-to-end trucking logistics focused on reliability, speed, and precision."
        primaryButtonText="Get a Quote"
        primaryButtonLink="/quote"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        quickLinks={quickLinks}
      />
      
      {/* Why Choose Us Section */}
      <ScrollReveal>
        <FeatureSection
          title="We Go the Extra Mile. Literally."
          subtitle="Our logistics services are designed around your business needs, delivering value at every turn."
          features={features}
          image="/placeholder-features.jpg"
          imagePosition="right"
          bgColor="#fff"
        />
      </ScrollReveal>
      
      {/* Trust & Partners Section */}
      <TrustSection>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          top="0" 
          right="0" 
          opacity="0.05"
          delay="0.2s"
        />
        
        <Container>
          <ScrollReveal>
            <Flex align="center" gap="3rem" mobileFlex="column">
              <FlexItem flex="1">
                <TrustImage>
                  <LazyImage 
                    src="/placeholder-trust.jpg" 
                    alt="Trusted Logistics" 
                    height="400px"
                  />
                </TrustImage>
              </FlexItem>
              
              <FlexItem flex="1">
                <TrustContent>
                  <TrustTitle>We're the shipper's top choice – by design.</TrustTitle>
                  <TrustDescription>
                    Horizon Trucking has built a reputation for excellence by focusing on what matters most to our clients: reliability, transparency, and personalized service.
                  </TrustDescription>
                  <Button as={Link} to="/about" variant="primary">
                    Read Our Case Studies
                  </Button>
                  
                  <PartnerLogos>
                    <img src="/placeholder-logo1.png" alt="Partner Logo" />
                    <img src="/placeholder-logo2.png" alt="Partner Logo" />
                    <img src="/placeholder-logo3.png" alt="Partner Logo" />
                    <img src="/placeholder-logo4.png" alt="Partner Logo" />
                  </PartnerLogos>
                </TrustContent>
              </FlexItem>
            </Flex>
          </ScrollReveal>
        </Container>
      </TrustSection>
      
      {/* Carrier First Approach */}
      <Section>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          bottom="0" 
          left="0" 
          opacity="0.05"
          delay="0.3s"
        />
        <DotPattern 
          pattern="rotatedGrid" 
          width="200px" 
          height="200px" 
          top="50px" 
          right="50px" 
          opacity="0.03"
          delay="0.2s"
        />
        
        <Container>
          <ScrollReveal delay="0.2s">
            <CarrierCard>
              <CarrierImage>
                <LazyImage 
                  src="/placeholder-carrier.jpg" 
                  alt="Carrier Partners" 
                  height="100%"
                />
              </CarrierImage>
              
              <CarrierContent>
                <CarrierTitle>Empowering Carriers. Delivering Value.</CarrierTitle>
                <p>
                  Our carrier-centric approach ensures that we build strong relationships with the best carriers in the industry. This translates to better service, more reliable capacity, and consistent performance for our shippers.
                </p>
                <Button as={Link} to="/contact" variant="primary">
                  Become a Carrier Partner
                </Button>
              </CarrierContent>
            </CarrierCard>
          </ScrollReveal>
        </Container>
      </Section>
      
      {/* Services Grid */}
      <ScrollReveal>
        <ServiceGrid
          title="What We Move & How"
          subtitle="Specialized solutions for your unique shipping challenges"
          services={services}
          industries={industries}
        />
      </ScrollReveal>
      
      {/* Technology Section */}
      <ScrollReveal>
        <FeatureSection
          title="Technology that Moves with You"
          subtitle="Our digital tools ensure complete visibility and control over your supply chain"
          features={techFeatures}
          textAlign="center"
          bgColor="#fff"
        />
      </ScrollReveal>
      
      {/* Blog Section Removed as Requested */}
      
      {/* CTA Banner */}
      <ScrollReveal>
        <CTABanner
          title="Talk Logistics? We're Always Ready."
          phone="1-800-YOUR-TRUCKING"
          phoneIcon={<FaHeadset />}
          primaryButtonText="Contact Us"
          primaryButtonLink="/contact"
          secondaryButtonText="Get a Quote"
          secondaryButtonLink="/quote"
        />
      </ScrollReveal>
    </>
  );
};

export default HomePage; 