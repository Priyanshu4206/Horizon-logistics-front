import styled, { css } from 'styled-components';

const cardStyles = css`
  background: ${props => props.bgColor || '#fff'};
  border-radius: ${props => props.radius || 'var(--border-radius-lg)'};
  padding: ${props => props.padding || 'var(--spacing-lg)'};
  box-shadow: ${props => props.shadow || 'var(--shadow-md)'};
  transition: var(--transition-normal);
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '100%'};
  position: relative;
  overflow: ${props => props.overflow || 'hidden'};
  display: ${props => props.display || 'block'};
  
  ${props => props.hover && css`
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
  `}
  
  ${props => props.clickable && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
    
    &:active {
      transform: translateY(-2px);
    }
  `}
`;

export const Card = styled.div`
  ${cardStyles}
`;

export const CardHeader = styled.div`
  padding-bottom: ${props => props.pb || 'var(--spacing-md)'};
  margin-bottom: ${props => props.mb || 'var(--spacing-md)'};
  border-bottom: ${props => props.borderBottom || `1px solid var(--border-color)`};
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'space-between'};
`;

export const CardBody = styled.div`
  padding: ${props => props.padding || '0'};
`;

export const CardFooter = styled.div`
  padding-top: ${props => props.pt || 'var(--spacing-md)'};
  margin-top: ${props => props.mt || 'var(--spacing-md)'};
  border-top: ${props => props.borderTop || `1px solid var(--border-color)`};
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'space-between'};
`;

export const CardImage = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  margin-bottom: ${props => props.mb || 'var(--spacing-md)'};
  margin-top: ${props => props.mt || '0'};
  border-radius: ${props => props.radius || 'var(--border-radius-md)'};
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || 'cover'};
    object-position: ${props => props.objectPosition || 'center'};
    transition: var(--transition-normal);
  }
  
  ${props => props.zoom && css`
    &:hover img {
      transform: scale(1.05);
    }
  `}
`;

export default {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage
}; 