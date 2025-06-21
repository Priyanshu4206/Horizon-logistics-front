import styled, { css } from 'styled-components';

const ButtonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const PrimaryButton = styled.button`
  ${ButtonBase}
  background-color: var(--primary-color);
  color: var(--light-text);
  
  &:hover:not(:disabled) {
    background-color: #0b2d4a;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  ${ButtonBase}
  background-color: var(--secondary-color);
  color: var(--light-text);
  
  &:hover:not(:disabled) {
    background-color: #00474a;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const AccentButton = styled.button`
  ${ButtonBase}
  background-color: var(--accent-color);
  color: var(--dark-text);
  
  &:hover:not(:disabled) {
    background-color: #FF8F00;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const OutlineButton = styled.button`
  ${ButtonBase}
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  
  &:hover:not(:disabled) {
    background-color: var(--primary-color);
    color: var(--light-text);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const GhostButton = styled.button`
  ${ButtonBase}
  background-color: transparent;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  
  &:hover:not(:disabled) {
    background-color: rgba(10, 61, 98, 0.1);
  }
`;

const Button = ({ variant = 'primary', children, ...props }) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    case 'accent':
      return <AccentButton {...props}>{children}</AccentButton>;
    case 'outline':
      return <OutlineButton {...props}>{children}</OutlineButton>;
    case 'ghost':
      return <GhostButton {...props}>{children}</GhostButton>;
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
};

export default Button; 