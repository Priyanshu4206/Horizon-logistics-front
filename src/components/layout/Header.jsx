import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from '../ui/Container';
import logo from '../../assets/logo.svg';

const HeaderWrapper = styled.header`
  position: ${props => props.isSticky ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.isSticky ? '0.75rem 0' : '1.5rem 0'};
  background-color: ${props => props.isSticky ? 'var(--light-text)' : 'transparent'};
  box-shadow: ${props => props.isSticky ? 'var(--shadow-md)' : 'none'};
  transition: var(--transition-normal);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.isSticky ? 'var(--primary-color)' : 'var(--light-text)'};
  transition: var(--transition-normal);
  
  img {
    height: 40px;
    margin-right: 0.5rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background-color: var(--light-text);
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 2rem;
    transition: var(--transition-normal);
    box-shadow: var(--shadow-lg);
    z-index: 1001;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  position: relative;
  
  @media (max-width: 992px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.isSticky ? 'var(--dark-text)' : 'var(--light-text)'};
  font-weight: 500;
  padding: 0.5rem;
  transition: var(--transition-normal);
  
  &:hover {
    color: var(--accent-color);
  }
  
  &.active {
    color: var(--accent-color);
  }
  
  @media (max-width: 992px) {
    color: var(--dark-text);
    display: block;
    padding: 0.5rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${props => props.isSticky ? 'var(--primary-color)' : 'var(--light-text)'};
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--dark-text);
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const CTAButton = styled(Link)`
  background-color: var(--accent-color);
  color: var(--dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: var(--transition-normal);
  margin-left: 1rem;
  
  &:hover {
    background-color: #FF8F00;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 992px) {
    margin: 1.5rem 0 0;
    width: 100%;
    text-align: center;
  }
`;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderContainer>
        <Logo to="/" isSticky={isSticky}>
          <img src={logo} alt="Horizon Trucking" />
          Horizon
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu} isSticky={isSticky}>
          <FaBars />
        </MobileMenuButton>
        
        <NavMenu isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavItem>
            <NavLink to="/" isSticky={isSticky} onClick={closeMenu}>
              Home
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/about" isSticky={isSticky} onClick={closeMenu}>
              About Us
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/services" isSticky={isSticky} onClick={closeMenu}>
              Services
            </NavLink>
          </NavItem>
          
          {/* Track Shipment link removed as requested */}
          
          <NavItem>
            <NavLink to="/contact" isSticky={isSticky} onClick={closeMenu}>
              Contact
            </NavLink>
          </NavItem>
          
          <CTAButton to="/quote" onClick={closeMenu}>
            Get a Quote
          </CTAButton>
        </NavMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 