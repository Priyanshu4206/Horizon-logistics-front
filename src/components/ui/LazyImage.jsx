import React from 'react';
import styled from 'styled-components';
import useLazyImage from '../../hooks/useLazyImage';

const ImageContainer = styled.div`
  width: 100%;
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::after {
    content: '';
    display: ${props => props.loading ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  object-position: ${props => props.objectPosition || 'center'};
  transition: opacity 0.3s ease, transform 0.5s ease;
  opacity: ${props => props.loaded ? 1 : 0};
  
  ${props => props.zoom && `
    &:hover {
      transform: scale(1.05);
    }
  `}
`;

const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4=',
  height,
  objectFit,
  objectPosition,
  zoom,
  className,
  style,
  ...rest
}) => {
  const { imageSrc, isLoaded, setImageRef } = useLazyImage(src, placeholder);

  return (
    <ImageContainer 
      height={height} 
      loading={!isLoaded}
      className={className}
      style={style}
    >
      <StyledImage
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        loaded={isLoaded}
        objectFit={objectFit}
        objectPosition={objectPosition}
        zoom={zoom}
        {...rest}
      />
    </ImageContainer>
  );
};

export default LazyImage; 