import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { Grid, GridItem, Flex, FlexItem } from '../components/ui/Grid';
import ContactForm from '../components/ui/ContactForm';
import ScrollReveal from '../components/ui/ScrollReveal';
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

const ContactSection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const ContactInfoCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2.5rem;
  height: 100%;
  transition: var(--transition-normal);
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
  }
`;

const ContactInfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: var(--primary-color);
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray-text);
    margin-bottom: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--light-text);
  margin-right: 1rem;
  transition: var(--transition-fast);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const MapSection = styled(Section)`
  padding: 0;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`;

const ContactPage = () => {
  const { isLoading } = usePageTransition();
  
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
        <DotPattern 
          pattern="rotatedGrid" 
          width="250px" 
          height="250px" 
          bottom="0" 
          left="0" 
          opacity="0.03"
          delay="0.4s"
        />
        
        <Container>
          <ScrollReveal>
            <HeroTitle>Contact Us</HeroTitle>
            <HeroSubtitle>
              We're here to help with your logistics needs. Reach out to our team for inquiries, quotes, or support.
            </HeroSubtitle>
          </ScrollReveal>
        </Container>
      </HeroSection>
      
      {/* Contact Section */}
      <ContactSection>
        <DotPattern 
          pattern="dots" 
          width="300px" 
          height="300px" 
          top="50px" 
          right="50px" 
          opacity="0.05"
          delay="0.3s"
        />
        
        <Container>
          <Flex gap="3rem" mobileFlex="column">
            <FlexItem flex="1">
              <ScrollReveal direction="left">
                <ContactInfoCard>
                  <ContactInfoTitle>Get In Touch</ContactInfoTitle>
                  
                  <ContactItem>
                    <FaMapMarkerAlt />
                    <ContactText>
                      <h3>Our Office</h3>
                      <p>
                        1234 Logistics Way<br />
                        Suite 500<br />
                        Chicago, IL 60601
                      </p>
                    </ContactText>
                  </ContactItem>
                  
                  <ContactItem>
                    <FaPhone />
                    <ContactText>
                      <h3>Phone</h3>
                      <p>Main: +1 (800) 123-4567</p>
                      <p>Support: +1 (800) 987-6543</p>
                    </ContactText>
                  </ContactItem>
                  
                  <ContactItem>
                    <FaEnvelope />
                    <ContactText>
                      <h3>Email</h3>
                      <p>info@horizontrucking.com</p>
                      <p>support@horizontrucking.com</p>
                    </ContactText>
                  </ContactItem>
                  
                  <ContactItem>
                    <FaClock />
                    <ContactText>
                      <h3>Business Hours</h3>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Weekend: Closed</p>
                      <p>24/7 Emergency Support Available</p>
                    </ContactText>
                  </ContactItem>
                  
                  <SocialLinks>
                    <SocialLink href="https://facebook.com" target="_blank">
                      <FaFacebook />
                    </SocialLink>
                    <SocialLink href="https://twitter.com" target="_blank">
                      <FaTwitter />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com" target="_blank">
                      <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://instagram.com" target="_blank">
                      <FaInstagram />
                    </SocialLink>
                  </SocialLinks>
                </ContactInfoCard>
              </ScrollReveal>
            </FlexItem>
            
            <FlexItem flex="1">
              <ScrollReveal direction="right">
                <ContactForm title="Send Us a Message" />
              </ScrollReveal>
            </FlexItem>
          </Flex>
        </Container>
      </ContactSection>
      
      {/* Map Section */}
      <MapSection>
        <ScrollReveal>
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95157.5238574304!2d-87.7543845!3d41.8339042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1660315888082!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Chicago"
          ></MapIframe>
        </ScrollReveal>
      </MapSection>
    </>
  );
};

export default ContactPage; 