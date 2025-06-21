import styled from 'styled-components';

const Section = styled.section`
  padding: ${props => props.padding || 'var(--spacing-xl) 0'};
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: ${props => props.overflow || 'visible'};
  
  ${props => props.fullHeight && `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
  
  ${props => props.centered && `
    text-align: center;
  `}
`;

export default Section; 