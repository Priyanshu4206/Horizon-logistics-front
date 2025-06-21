import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Container from '../ui/Container';
import { Grid, GridItem } from '../ui/Grid';
import logo from '../../assets/logo.svg';

const FooterWrapper = styled.footer`
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: var(--spacing-xl) 0 0;
`;

const FooterTop = styled.div`
  padding-bottom: var(--spacing-xl);
`;

const FooterBottom = styled.div`
  padding: var(--spacing-md) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.875rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--light-text);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    transition: var(--transition-fast);
    display: inline-block;
    
    &:hover {
      color: var(--accent-color);
      transform: translateX(5px);
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    color: var(--accent-color);
  }
`;

/* Social Icons commented out for v2
const SocialIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--light-text);
  margin-right: 0.75rem;
  transition: var(--transition-fast);
  
  &:hover {
    background-color: var(--accent-color);
    color: var(--dark-text);
    transform: translateY(-3px);
  }
`;
*/

const LogoArea = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 50px;
    margin-bottom: 1rem;
  }
`;

const CompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const FooterLink = styled(Link)`
  color: var(--accent-color);
  transition: var(--transition-fast);
  
  &:hover {
    color: #FF8F00;
    text-decoration: underline;
  }
`;

const QuoteButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--accent-color);
  color: var(--dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  margin-top: 1rem;
  transition: var(--transition-fast);
  
  svg {
    margin-left: 0.5rem;
    transition: var(--transition-fast);
  }
  
  &:hover {
    background-color: #FFB84D;
    transform: translateY(-3px);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <Grid columns={3} mobileColumns={1} gap="2rem">
            <GridItem span={1}>
              <LogoArea>
                <img src={logo} alt="Horizon Trucking" />
                <CompanyName>Horizon Trucking</CompanyName>
                <CompanyDescription>
                  End-to-end trucking logistics focused on reliability, speed, and precision.
                </CompanyDescription>
              </LogoArea>
              
              <QuoteButton to="/quote">
                Get a Free Quote <FaArrowRight />
              </QuoteButton>
              
              {/* Social Icons commented out for v2 
              <SocialIcons>
                <SocialIcon to="https://facebook.com" target="_blank">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon to="https://twitter.com" target="_blank">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon to="https://linkedin.com" target="_blank">
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon to="https://instagram.com" target="_blank">
                  <FaInstagram />
                </SocialIcon>
              </SocialIcons>
              */}
            </GridItem>
            
            <GridItem span={1}>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterNav>
                <FooterNavItem>
                  <Link to="/">Home</Link>
                </FooterNavItem>
                <FooterNavItem>
                  <Link to="/about">About Us</Link>
                </FooterNavItem>
                <FooterNavItem>
                  <Link to="/services">Services</Link>
                </FooterNavItem>
                <FooterNavItem>
                  <Link to="/contact">Contact</Link>
                </FooterNavItem>
              </FooterNav>
            </GridItem>
            
            <GridItem span={1}>
              <FooterTitle>Contact Us</FooterTitle>
              <ContactItem>
                <FaMapMarkerAlt />
                <div>
                  1234 Logistics Way<br />
                  Suite 500<br />
                  Chicago, IL 60601
                </div>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <div>+1 (800) 123-4567</div>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <div>info@horizontrucking.com</div>
              </ContactItem>
            </GridItem>
          </Grid>
        </FooterTop>
      </Container>
      
      <FooterBottom>
        <Container>
          <p>&copy; {new Date().getFullYear()} Horizon Trucking. All Rights Reserved. <FooterLink to="/services">View Services</FooterLink></p>
        </Container>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer; 