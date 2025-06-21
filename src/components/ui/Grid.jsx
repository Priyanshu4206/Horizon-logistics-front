import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  grid-gap: ${props => props.gap || 'var(--spacing-md)'};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 6}, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 2}, 1fr);
  }
`;

export const GridItem = styled.div`
  grid-column: span ${props => props.span || 1};
  
  @media (max-width: 992px) {
    grid-column: span ${props => props.tabletSpan || props.span || 1};
  }
  
  @media (max-width: 768px) {
    grid-column: span ${props => props.mobileSpan || props.tabletSpan || props.span || 1};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.mobileFlex || 'column'};
  }
`;

export const FlexItem = styled.div`
  flex: ${props => props.flex || '0 1 auto'};
  order: ${props => props.order || '0'};
`;

export default { Grid, GridItem, Flex, FlexItem }; 