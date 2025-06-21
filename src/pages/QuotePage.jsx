import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTruck, FaBoxOpen, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { Grid, GridItem, Flex, FlexItem } from '../components/ui/Grid';
import Button from '../components/ui/Button';
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

const QuoteFormSection = styled(Section)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
`;

const QuoteCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2.5rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const FormStep = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(10, 61, 98, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);
  background-color: #fff;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(10, 61, 98, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(10, 61, 98, 0.2);
  }
`;

const FormNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StepDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  margin: 0 6px;
  transition: var(--transition-fast);
`;

const ServiceOption = styled.div`
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  cursor: pointer;
  transition: var(--transition-fast);
  background-color: ${props => props.selected ? 'rgba(10, 61, 98, 0.05)' : 'transparent'};
  
  &:hover {
    border-color: ${props => props.selected ? 'var(--primary-color)' : 'var(--accent-color)'};
    transform: translateY(-2px);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.selected ? 'var(--primary-color)' : 'rgba(10, 61, 98, 0.1)'};
  color: ${props => props.selected ? 'var(--light-text)' : 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: var(--transition-fast);
  
  svg {
    font-size: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  .check {
    margin-left: 0.5rem;
    color: var(--accent-color);
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  
  svg {
    font-size: 4rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: var(--gray-text);
  }
`;

const QuotePage = () => {
  const { isLoading } = usePageTransition();
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    origin: '',
    destination: '',
    shipmentDate: '',
    weight: '',
    dimensions: '',
    specialRequirements: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      serviceType: service
    });
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1500);
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormStep active={currentStep === 1}>
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
            
            <Grid columns={2} mobileColumns={1} gap="1.5rem">
              <GridItem>
                <FormGroup>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </GridItem>
              
              <GridItem>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </GridItem>
            </Grid>
            
            <Grid columns={2} mobileColumns={1} gap="1.5rem">
              <GridItem>
                <FormGroup>
                  <Label htmlFor="email">Email*</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </GridItem>
              
              <GridItem>
                <FormGroup>
                  <Label htmlFor="phone">Phone*</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </GridItem>
            </Grid>
            
            <FormGroup>
              <Label htmlFor="company">Company Name</Label>
              <Input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleInputChange} 
              />
            </FormGroup>
          </FormStep>
        );
        
      case 2:
        return (
          <FormStep active={currentStep === 2}>
            <h3 style={{ marginBottom: '1.5rem' }}>Service Selection</h3>
            
            <Grid columns={2} mobileColumns={1} gap="1.5rem">
              <GridItem>
                <ServiceOption 
                  selected={formData.serviceType === 'truckload'} 
                  onClick={() => handleServiceSelect('truckload')}
                >
                  <ServiceIcon selected={formData.serviceType === 'truckload'}>
                    <FaTruck />
                  </ServiceIcon>
                  <ServiceTitle>
                    Truckload 
                    {formData.serviceType === 'truckload' && <FaCheck className="check" />}
                  </ServiceTitle>
                  <p>Dedicated truck for your shipment</p>
                </ServiceOption>
              </GridItem>
              
              <GridItem>
                <ServiceOption 
                  selected={formData.serviceType === 'ltl'} 
                  onClick={() => handleServiceSelect('ltl')}
                >
                  <ServiceIcon selected={formData.serviceType === 'ltl'}>
                    <FaBoxOpen />
                  </ServiceIcon>
                  <ServiceTitle>
                    Less Than Truckload 
                    {formData.serviceType === 'ltl' && <FaCheck className="check" />}
                  </ServiceTitle>
                  <p>Cost-effective for smaller shipments</p>
                </ServiceOption>
              </GridItem>
              
              <GridItem>
                <ServiceOption 
                  selected={formData.serviceType === 'flatbed'} 
                  onClick={() => handleServiceSelect('flatbed')}
                >
                  <ServiceIcon selected={formData.serviceType === 'flatbed'}>
                    <FaTruck />
                  </ServiceIcon>
                  <ServiceTitle>
                    Flatbed 
                    {formData.serviceType === 'flatbed' && <FaCheck className="check" />}
                  </ServiceTitle>
                  <p>For oversized or unconventional loads</p>
                </ServiceOption>
              </GridItem>
              
              <GridItem>
                <ServiceOption 
                  selected={formData.serviceType === 'refrigerated'} 
                  onClick={() => handleServiceSelect('refrigerated')}
                >
                  <ServiceIcon selected={formData.serviceType === 'refrigerated'}>
                    <FaTruck />
                  </ServiceIcon>
                  <ServiceTitle>
                    Refrigerated 
                    {formData.serviceType === 'refrigerated' && <FaCheck className="check" />}
                  </ServiceTitle>
                  <p>Temperature-controlled transport</p>
                </ServiceOption>
              </GridItem>
            </Grid>
          </FormStep>
        );
        
      case 3:
        return (
          <FormStep active={currentStep === 3}>
            <h3 style={{ marginBottom: '1.5rem' }}>Shipment Details</h3>
            
            <Grid columns={2} mobileColumns={1} gap="1.5rem">
              <GridItem>
                <FormGroup>
                  <Label htmlFor="origin">Origin Location*</Label>
                  <Input 
                    type="text" 
                    id="origin" 
                    name="origin" 
                    value={formData.origin} 
                    onChange={handleInputChange} 
                    placeholder="City, State, Zip"
                    required 
                  />
                </FormGroup>
              </GridItem>
              
              <GridItem>
                <FormGroup>
                  <Label htmlFor="destination">Destination*</Label>
                  <Input 
                    type="text" 
                    id="destination" 
                    name="destination" 
                    value={formData.destination} 
                    onChange={handleInputChange} 
                    placeholder="City, State, Zip"
                    required 
                  />
                </FormGroup>
              </GridItem>
            </Grid>
            
            <Grid columns={2} mobileColumns={1} gap="1.5rem">
              <GridItem>
                <FormGroup>
                  <Label htmlFor="shipmentDate">Shipment Date*</Label>
                  <Input 
                    type="date" 
                    id="shipmentDate" 
                    name="shipmentDate" 
                    value={formData.shipmentDate} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </GridItem>
              
              <GridItem>
                <FormGroup>
                  <Label htmlFor="weight">Estimated Weight (lbs)</Label>
                  <Input 
                    type="text" 
                    id="weight" 
                    name="weight" 
                    value={formData.weight} 
                    onChange={handleInputChange} 
                  />
                </FormGroup>
              </GridItem>
            </Grid>
            
            <FormGroup>
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input 
                type="text" 
                id="dimensions" 
                name="dimensions" 
                value={formData.dimensions} 
                onChange={handleInputChange} 
                placeholder="Length x Width x Height"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="specialRequirements">Special Requirements or Notes</Label>
              <TextArea 
                id="specialRequirements" 
                name="specialRequirements" 
                value={formData.specialRequirements} 
                onChange={handleInputChange} 
              />
            </FormGroup>
          </FormStep>
        );
        
      default:
        return null;
    }
  };
  
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
        />
        <DotPattern 
          pattern="grid" 
          width="300px" 
          height="300px" 
          bottom="0" 
          left="0" 
          opacity="0.05" 
        />
        
        <Container>
          <ScrollReveal>
            <HeroTitle>Get a Shipping Quote</HeroTitle>
            <HeroSubtitle>
              Tell us about your shipping needs and we'll provide you with a competitive quote tailored to your requirements.
            </HeroSubtitle>
          </ScrollReveal>
        </Container>
      </HeroSection>
      
      {/* Quote Form Section */}
      <QuoteFormSection>
        <Container>
          <QuoteCard>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <ScrollReveal>
                  <FormTitle>Freight Quote Request</FormTitle>
                  
                  <StepIndicator>
                    <StepDot active={currentStep >= 1} />
                    <StepDot active={currentStep >= 2} />
                    <StepDot active={currentStep >= 3} />
                  </StepIndicator>
                  
                  {renderStepContent()}
                  
                  <FormNavigation>
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                    )}
                    
                    {currentStep < 3 ? (
                      <Button type="button" onClick={nextStep} style={{ marginLeft: 'auto' }}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" variant="accent" style={{ marginLeft: 'auto' }}>
                        Submit Quote Request
                      </Button>
                    )}
                  </FormNavigation>
                </ScrollReveal>
              </form>
            ) : (
              <ScrollReveal>
                <SuccessMessage>
                  <FaCheck size={60} />
                  <h3>Quote Request Submitted!</h3>
                  <p>
                    Thank you for your interest in our services. Our team will review your request 
                    and contact you within 24 hours with a customized quote.
                  </p>
                  <Button as="a" href="/" variant="primary">
                    Return to Home
                  </Button>
                </SuccessMessage>
              </ScrollReveal>
            )}
          </QuoteCard>
        </Container>
      </QuoteFormSection>
    </>
  );
};

export default QuotePage; 