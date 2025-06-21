import React from 'react';
import styled from 'styled-components';
import { FaAward, FaUsers, FaTruck, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
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

const StatsSection = styled(Section)`
  margin-top: -4rem;
  position: relative;
  z-index: 10;
`;

const StatsCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;
  height: 100%;
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StatDescription = styled.p`
  font-size: 0.9rem;
  color: var(--gray-text);
`;

const StorySection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const StoryImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const StoryContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamSection = styled(Section)`
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const TeamMemberCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: var(--transition-normal);
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const TeamMemberImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const TeamMemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TeamMemberPosition = styled.p`
  font-size: 0.9rem;
  color: var(--gray-text);
  margin-bottom: 1rem;
`;

const ValuesSection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const ValueCard = styled.div`
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

const ValueIcon = styled.div`
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

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const AboutPage = () => {
  const { isLoading } = usePageTransition();
  
  const stats = [
    {
      number: '15+',
      title: 'Years of Experience',
      description: 'Delivering logistics excellence since 2008'
    },
    {
      number: '500+',
      title: 'Carriers Network',
      description: 'Vetted and reliable transportation partners'
    },
    {
      number: '99.7%',
      title: 'On-Time Delivery',
      description: 'Industry-leading performance metrics'
    },
    {
      number: '24/7',
      title: 'Customer Support',
      description: 'Always available when you need us'
    }
  ];
  
  const teamMembers = [
    {
      name: 'Michael Reynolds',
      position: 'CEO & Founder',
      image: '/placeholder-team1.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'VP of Operations',
      image: '/placeholder-team2.jpg'
    },
    {
      name: 'David Chen',
      position: 'Technology Director',
      image: '/placeholder-team3.jpg'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Customer Success Manager',
      image: '/placeholder-team4.jpg'
    }
  ];
  
  const values = [
    {
      icon: <FaCheckCircle />,
      title: 'Reliability',
      description: 'We deliver on our promises, maintaining the highest standards of dependability in every shipment.'
    },
    {
      icon: <FaUsers />,
      title: 'Customer-Centric',
      description: 'Your business goals become our goals as we build logistics solutions around your unique needs.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Sustainability',
      description: 'We\'re committed to reducing our environmental footprint through efficient routes and modern fleet.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We continuously improve and innovate to maintain the highest quality standards in logistics.'
    }
  ];
  
  return (
    <>
      {isLoading && <PageLoader />}
      
      {/* Hero Section */}
      <HeroSection>
        <DotPattern 
          pattern="hexagon" 
          width="400px" 
          height="400px" 
          top="0" 
          right="0" 
          opacity="0.05"
          delay="0.2s"
        />
        <DotPattern 
          pattern="grid" 
          width="300px" 
          height="300px" 
          bottom="0" 
          left="0" 
          opacity="0.05"
          delay="0.4s"
        />
        
        <Container>
          <ScrollReveal>
            <HeroTitle>About Horizon Trucking</HeroTitle>
            <HeroSubtitle>
              Founded on principles of reliability and customer service, we've grown to become one of the leading logistics providers in the industry.
            </HeroSubtitle>
          </ScrollReveal>
        </Container>
      </HeroSection>
      
      {/* Stats Section */}
      <StatsSection padding="0 0 5rem">
        <Container>
          <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="1.5rem">
            {stats.map((stat, index) => (
              <GridItem key={index}>
                <ScrollReveal delay={`${0.1 * index}s`}>
                  <StatsCard>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatTitle>{stat.title}</StatTitle>
                    <StatDescription>{stat.description}</StatDescription>
                  </StatsCard>
                </ScrollReveal>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </StatsSection>
      
      {/* Our Story Section */}
      <StorySection>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          top="50px" 
          right="50px" 
          opacity="0.05"
          delay="0.2s"
        />
        <DotPattern 
          pattern="rotatedGrid" 
          width="200px" 
          height="200px" 
          bottom="50px" 
          left="50px" 
          opacity="0.03"
          delay="0.4s"
        />
        
        <Container>
          <Flex gap="3rem" mobileFlex="column">
            <FlexItem flex="1">
              <ScrollReveal direction="left">
                <StoryImage>
                  <LazyImage src="/placeholder-story.jpg" alt="Our Story" height="100%" />
                </StoryImage>
              </ScrollReveal>
            </FlexItem>
            
            <FlexItem flex="1">
              <ScrollReveal direction="right">
                <StoryContent>
                  <SectionTitle>Our Story</SectionTitle>
                  <p>
                    Horizon Trucking was founded in 2008 by Michael Reynolds, a logistics industry veteran with a vision to create a more reliable and transparent shipping experience.
                  </p>
                  <p>
                    What started as a small regional operation with just 5 trucks has grown into a nationwide logistics provider with a network of over 500 carriers and a comprehensive suite of transportation solutions.
                  </p>
                  <p>
                    Throughout our growth, we've maintained our founding principles: reliability, transparency, and exceptional customer service. These values guide every decision we make and every shipment we handle.
                  </p>
                  <Button as={Link} to="/services" variant="primary" style={{ marginTop: '1rem' }}>
                    Explore Our Services
                  </Button>
                </StoryContent>
              </ScrollReveal>
            </FlexItem>
          </Flex>
        </Container>
      </StorySection>
      
      {/* Our Values Section */}
      <ValuesSection>
        <DotPattern 
          pattern="circles" 
          width="350px" 
          height="350px" 
          bottom="0" 
          left="0" 
          opacity="0.05"
          delay="0.3s"
        />
        
        <Container>
          <ScrollReveal>
            <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Core Values</SectionTitle>
          </ScrollReveal>
          
          <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="2rem">
            {values.map((value, index) => (
              <GridItem key={index}>
                <ScrollReveal delay={`${0.1 * index}s`}>
                  <ValueCard>
                    <ValueIcon>{value.icon}</ValueIcon>
                    <ValueTitle>{value.title}</ValueTitle>
                    <p>{value.description}</p>
                  </ValueCard>
                </ScrollReveal>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </ValuesSection>
      
      {/* Team Section */}
      <TeamSection>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          top="50px" 
          right="0" 
          opacity="0.05"
          delay="0.2s"
        />
        
        <Container>
          <ScrollReveal>
            <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet Our Leadership</SectionTitle>
          </ScrollReveal>
          
          <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="2rem">
            {teamMembers.map((member, index) => (
              <GridItem key={index}>
                <ScrollReveal delay={`${0.1 * index}s`}>
                  <TeamMemberCard>
                    <TeamMemberImage>
                      <LazyImage src={member.image} alt={member.name} height="100%" zoom />
                    </TeamMemberImage>
                    <TeamMemberInfo>
                      <TeamMemberName>{member.name}</TeamMemberName>
                      <TeamMemberPosition>{member.position}</TeamMemberPosition>
                    </TeamMemberInfo>
                  </TeamMemberCard>
                </ScrollReveal>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </TeamSection>
      
      {/* CTA Section */}
      <ScrollReveal>
        <CTABanner
          title="Ready to Experience the Horizon Difference?"
          description="Let's discuss how our logistics solutions can benefit your business."
          primaryButtonText="Contact Us"
          primaryButtonLink="/contact"
          secondaryButtonText="View Services"
          secondaryButtonLink="/services"
        />
      </ScrollReveal>
    </>
  );
};

export default AboutPage; 