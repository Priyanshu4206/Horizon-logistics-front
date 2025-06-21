import styled, { css } from 'styled-components';

const baseTextStyles = css`
  margin: 0;
  font-family: ${props => props.fontFamily || 'inherit'};
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => props.fontWeight || 'inherit'};
  line-height: ${props => props.lineHeight || 'inherit'};
  letter-spacing: ${props => props.letterSpacing || 'inherit'};
  text-align: ${props => props.textAlign || 'inherit'};
  text-transform: ${props => props.textTransform || 'none'};
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
`;

export const Heading1 = styled.h1`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-6xl)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.2;
  margin-bottom: ${props => props.mb || 'var(--spacing-md)'};
  
  @media (max-width: 768px) {
    font-size: ${props => props.mobileFontSize || 'var(--font-size-4xl)'};
  }
`;

export const Heading2 = styled.h2`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-4xl)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.2;
  margin-bottom: ${props => props.mb || 'var(--spacing-md)'};
  
  @media (max-width: 768px) {
    font-size: ${props => props.mobileFontSize || 'var(--font-size-3xl)'};
  }
`;

export const Heading3 = styled.h3`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-3xl)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.3;
  margin-bottom: ${props => props.mb || 'var(--spacing-sm)'};
  
  @media (max-width: 768px) {
    font-size: ${props => props.mobileFontSize || 'var(--font-size-2xl)'};
  }
`;

export const Heading4 = styled.h4`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-2xl)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.4;
  margin-bottom: ${props => props.mb || 'var(--spacing-sm)'};
`;

export const Heading5 = styled.h5`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-xl)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.5;
  margin-bottom: ${props => props.mb || 'var(--spacing-sm)'};
`;

export const Heading6 = styled.h6`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-lg)'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 1.6;
  margin-bottom: ${props => props.mb || 'var(--spacing-sm)'};
`;

export const Paragraph = styled.p`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-md)'};
  line-height: 1.6;
  margin-bottom: ${props => props.mb || 'var(--spacing-md)'};
  max-width: ${props => props.maxWidth || 'none'};
`;

export const Text = styled.span`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'inherit'};
  display: ${props => props.block ? 'block' : 'inline'};
`;

export const SmallText = styled.small`
  ${baseTextStyles}
  font-size: ${props => props.fontSize || 'var(--font-size-sm)'};
  display: ${props => props.block ? 'block' : 'inline'};
`;

export default {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Text,
  SmallText
}; 