import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBox, FaTruck, FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { Grid, GridItem } from '../components/ui/Grid';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const HeroSection = styled(Section)`
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: 10rem 0 5rem;
  position: relative;
  overflow: hidden;
  
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

const TrackingSection = styled(Section)`
  margin-top: -4rem;
  position: relative;
  z-index: 10;
  background-color: transparent;
  padding-bottom: 0;
`;

const TrackingCard = styled(Card)`
  padding: 2.5rem;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(10, 61, 98, 0.2);
  }
  
  &::placeholder {
    color: var(--gray-text);
  }
`;

const SearchButton = styled(Button)`
  padding: 1rem 2rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ResultsSection = styled(Section)`
  background-color: var(--light-bg);
  padding-top: 0;
`;

const ShipmentCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const ShipmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ShipmentTitle = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: var(--gray-text);
    margin: 0;
  }
`;

const ShipmentStatus = styled.div`
  background-color: ${props => {
    switch (props.status) {
      case 'delivered':
        return 'rgba(46, 204, 113, 0.1)';
      case 'in_transit':
        return 'rgba(52, 152, 219, 0.1)';
      case 'pending':
        return 'rgba(243, 156, 18, 0.1)';
      default:
        return 'rgba(189, 195, 199, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'delivered':
        return '#27ae60';
      case 'in_transit':
        return '#2980b9';
      case 'pending':
        return '#f39c12';
      default:
        return '#7f8c8d';
    }
  }};
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const ShipmentDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  h3 {
    font-size: 0.875rem;
    color: var(--gray-text);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
      color: var(--primary-color);
    }
  }
  
  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin-top: 3rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    width: 2px;
    background-color: var(--border-color);
    
    @media (max-width: 768px) {
      left: 14px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 45px;
  padding-bottom: 2rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
    border: 2px solid ${props => props.active ? 'var(--primary-color)' : '#fff'};
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 8px;
    }
  }
`;

const TimelineContent = styled.div`
  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray-text);
    margin-bottom: 0.25rem;
  }
  
  .time {
    font-size: 0.875rem;
    color: var(--gray-text);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  svg {
    font-size: 3rem;
    color: var(--gray-text);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--gray-text);
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FAQSection = styled(Section)`
  background-color: #fff;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.75rem;
      color: var(--primary-color);
      flex-shrink: 0;
    }
  }
  
  p {
    padding-left: 2.25rem;
    color: var(--gray-text);
  }
`;

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [shipmentData, setShipmentData] = useState(null);
  
  const handleTrackingChange = (e) => {
    setTrackingNumber(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (trackingNumber.trim() === '') return;
    
    setSearchSubmitted(true);
    
    // Simulate API call to fetch tracking data
    // In a real app, you'd make an API request here
    if (trackingNumber.toLowerCase() === 'ht12345678') {
      setShipmentData({
        trackingNumber: 'HT12345678',
        status: 'in_transit',
        origin: 'Chicago, IL',
        destination: 'Dallas, TX',
        estimatedDelivery: 'June 15, 2023',
        service: 'Truckload Express',
        weight: '8,500 lbs',
        pieces: '24 pallets',
        reference: 'PO-987654',
        carrier: 'Horizon Fleet',
        timeline: [
          {
            status: 'Order Placed',
            location: 'Online',
            date: 'June 10, 2023',
            time: '09:15 AM',
            active: true
          },
          {
            status: 'Pickup Scheduled',
            location: 'Chicago, IL',
            date: 'June 11, 2023',
            time: '10:30 AM',
            active: true
          },
          {
            status: 'Shipment Picked Up',
            location: 'Chicago Warehouse',
            date: 'June 12, 2023',
            time: '02:45 PM',
            active: true
          },
          {
            status: 'In Transit',
            location: 'St. Louis, MO',
            date: 'June 13, 2023',
            time: '11:20 AM',
            active: true
          },
          {
            status: 'Out for Delivery',
            location: 'Dallas, TX',
            date: 'June 15, 2023',
            time: 'Scheduled',
            active: false
          },
          {
            status: 'Delivered',
            location: 'Dallas, TX',
            date: 'June 15, 2023',
            time: 'Pending',
            active: false
          }
        ]
      });
    } else {
      setShipmentData(null);
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FaCheckCircle />;
      case 'in_transit':
        return <FaTruck />;
      case 'pending':
        return <FaBox />;
      default:
        return <FaInfoCircle />;
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroTitle>Track Your Shipment</HeroTitle>
          <HeroSubtitle>
            Get real-time updates on your shipment's location and estimated delivery time.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      {/* Tracking Search Section */}
      <TrackingSection>
        <Container>
          <TrackingCard>
            <h2 style={{ marginBottom: '1.5rem' }}>Enter Your Tracking Number</h2>
            <SearchForm onSubmit={handleSubmit}>
              <SearchInput
                type="text"
                value={trackingNumber}
                onChange={handleTrackingChange}
                placeholder="e.g. HT12345678"
              />
              <SearchButton type="submit" variant="primary">
                <FaSearch /> Track
              </SearchButton>
            </SearchForm>
            <p style={{ color: 'var(--gray-text)', marginBottom: 0 }}>
              * Try using tracking number: HT12345678 for a demo
            </p>
          </TrackingCard>
        </Container>
      </TrackingSection>
      
      {/* Results Section */}
      <ResultsSection>
        <Container>
          {searchSubmitted && (
            <>
              {shipmentData ? (
                <ShipmentCard>
                  <ShipmentHeader>
                    <ShipmentTitle>
                      <h2>Tracking #{shipmentData.trackingNumber}</h2>
                      <p>
                        {shipmentData.origin} to {shipmentData.destination}
                      </p>
                    </ShipmentTitle>
                    <ShipmentStatus status={shipmentData.status}>
                      {getStatusIcon(shipmentData.status)}
                      {shipmentData.status === 'in_transit' ? 'In Transit' : 
                        shipmentData.status === 'delivered' ? 'Delivered' : 'Pending'}
                    </ShipmentStatus>
                  </ShipmentHeader>
                  
                  <ShipmentDetails>
                    <DetailItem>
                      <h3><FaCalendarAlt /> Estimated Delivery</h3>
                      <p>{shipmentData.estimatedDelivery}</p>
                    </DetailItem>
                    <DetailItem>
                      <h3><FaTruck /> Service</h3>
                      <p>{shipmentData.service}</p>
                    </DetailItem>
                    <DetailItem>
                      <h3><FaBox /> Weight</h3>
                      <p>{shipmentData.weight}</p>
                    </DetailItem>
                    <DetailItem>
                      <h3><FaBox /> Pieces</h3>
                      <p>{shipmentData.pieces}</p>
                    </DetailItem>
                    <DetailItem>
                      <h3><FaInfoCircle /> Reference</h3>
                      <p>{shipmentData.reference}</p>
                    </DetailItem>
                    <DetailItem>
                      <h3><FaTruck /> Carrier</h3>
                      <p>{shipmentData.carrier}</p>
                    </DetailItem>
                  </ShipmentDetails>
                  
                  <h3>Shipment Progress</h3>
                  <Timeline>
                    {shipmentData.timeline.map((event, index) => (
                      <TimelineItem key={index} active={event.active}>
                        <TimelineContent>
                          <h3>{event.status}</h3>
                          <p><FaMapMarkerAlt /> {event.location}</p>
                          <div className="time">
                            {event.date} at {event.time}
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </ShipmentCard>
              ) : (
                <NoResults>
                  <FaInfoCircle />
                  <h3>No Shipment Found</h3>
                  <p>
                    We couldn't find a shipment with the tracking number you provided. 
                    Please check the number and try again, or contact our support team for assistance.
                  </p>
                </NoResults>
              )}
            </>
          )}
        </Container>
      </ResultsSection>
      
      {/* FAQ Section */}
      <FAQSection>
        <Container>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          
          <Grid columns={2} mobileColumns={1} gap="2rem">
            <GridItem>
              <FAQItem>
                <h3><FaInfoCircle /> How do I track my shipment?</h3>
                <p>
                  Enter your tracking number in the search box above. You can find your tracking number in your shipping confirmation email or receipt.
                </p>
              </FAQItem>
              
              <FAQItem>
                <h3><FaInfoCircle /> What if my tracking number isn't working?</h3>
                <p>
                  It may take up to 24 hours for your tracking information to appear in our system after your shipment is processed. If it's been longer than 24 hours, please contact our customer support.
                </p>
              </FAQItem>
              
              <FAQItem>
                <h3><FaInfoCircle /> How often is tracking information updated?</h3>
                <p>
                  Tracking information is typically updated several times throughout the day. The frequency depends on the specific route and carrier handling your shipment.
                </p>
              </FAQItem>
            </GridItem>
            
            <GridItem>
              <FAQItem>
                <h3><FaInfoCircle /> What do the different tracking statuses mean?</h3>
                <p>
                  "Pending" means your shipment is registered but not yet picked up. "In Transit" indicates your shipment is on the way to its destination. "Delivered" confirms your shipment has been delivered.
                </p>
              </FAQItem>
              
              <FAQItem>
                <h3><FaInfoCircle /> Can I change my delivery address?</h3>
                <p>
                  In some cases, yes. Please contact our customer support as soon as possible with your tracking number to request a delivery address change.
                </p>
              </FAQItem>
              
              <FAQItem>
                <h3><FaInfoCircle /> What if my shipment is delayed?</h3>
                <p>
                  If your shipment is experiencing a delay, it will be noted in the tracking details. For additional information or concerns, please contact our customer support team.
                </p>
              </FAQItem>
            </GridItem>
          </Grid>
        </Container>
      </FAQSection>
    </>
  );
};

export default TrackingPage; 