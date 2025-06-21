import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PatternContainer = styled.div`
  position: absolute;
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '300px'};
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  z-index: ${props => props.zIndex || '0'};
  opacity: ${props => props.opacity || '0.1'};
  pointer-events: none;
  overflow: hidden;
  animation: ${fadeIn} ${props => props.animationDuration || '1s'} ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: backwards;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const patterns = {
  dots: (size = 10, gap = 20, color = 'currentColor', secondaryColor = null) => (
    <pattern id="dotPattern" patternUnits="userSpaceOnUse" width={gap} height={gap}>
      <circle cx={gap / 2} cy={gap / 2} r={size / 2} fill={color} />
      {secondaryColor && <circle cx={gap / 2} cy={gap / 2} r={size / 4} fill={secondaryColor} />}
    </pattern>
  ),
  
  grid: (size = 1, gap = 20, color = 'currentColor', secondaryColor = null) => (
    <pattern id="gridPattern" patternUnits="userSpaceOnUse" width={gap} height={gap}>
      <path d={`M ${gap} 0 L 0 0 0 ${gap}`} stroke={color} strokeWidth={size} fill="none" />
      {secondaryColor && (
        <path d={`M ${gap/2} 0 L ${gap/2} ${gap} M 0 ${gap/2} L ${gap} ${gap/2}`} 
              stroke={secondaryColor} strokeWidth={size/2} strokeDasharray="2,2" fill="none" />
      )}
    </pattern>
  ),
  
  rotatedGrid: (size = 1, gap = 20, color = 'currentColor', secondaryColor = null) => (
    <pattern id="rotatedGridPattern" patternUnits="userSpaceOnUse" width={gap} height={gap}>
      <g transform={`rotate(45, ${gap/2}, ${gap/2})`}>
        <path d={`M ${gap} 0 L 0 0 0 ${gap} ${gap} ${gap} ${gap} 0`} stroke={color} strokeWidth={size} fill="none" />
        {secondaryColor && (
          <path d={`M ${gap/2} 0 L ${gap/2} ${gap} M 0 ${gap/2} L ${gap} ${gap/2}`} 
                stroke={secondaryColor} strokeWidth={size/2} fill="none" />
        )}
      </g>
    </pattern>
  ),
  
  diagonal: (size = 1, gap = 20, color = 'currentColor', secondaryColor = null) => (
    <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width={gap} height={gap}>
      <path d={`M 0 0 L ${gap} ${gap}`} stroke={color} strokeWidth={size} fill="none" />
      {secondaryColor && (
        <path d={`M ${gap} 0 L 0 ${gap}`} stroke={secondaryColor} strokeWidth={size} fill="none" />
      )}
    </pattern>
  ),
  
  hexagon: (size = 10, gap = 20, color = 'currentColor', secondaryColor = null) => {
    const hexHeight = gap * Math.sqrt(3);
    return (
      <pattern id="hexagonPattern" patternUnits="userSpaceOnUse" width={gap * 2} height={hexHeight}>
        <path 
          d={`M ${gap},0 L ${gap * 2},${hexHeight / 2} L ${gap},${hexHeight} L 0,${hexHeight / 2} Z`} 
          stroke={color} 
          strokeWidth={size / 5} 
          fill="none" 
        />
        {secondaryColor && (
          <circle 
            cx={gap} 
            cy={hexHeight/2} 
            r={size/2} 
            fill={secondaryColor} 
          />
        )}
      </pattern>
    );
  },
  
  circles: (size = 10, gap = 40, color = 'currentColor', secondaryColor = null) => (
    <pattern id="circlesPattern" patternUnits="userSpaceOnUse" width={gap} height={gap}>
      <circle cx={gap / 2} cy={gap / 2} r={size} stroke={color} strokeWidth={1} fill="none" />
      {secondaryColor && (
        <circle cx={gap / 2} cy={gap / 2} r={size/2} stroke={secondaryColor} strokeWidth={1} fill="none" />
      )}
    </pattern>
  ),
  
  waves: (size = 5, gap = 20, color = 'currentColor', secondaryColor = null) => {
    const amplitude = size;
    const waveLength = gap;
    return (
      <pattern id="wavesPattern" patternUnits="userSpaceOnUse" width={waveLength} height={waveLength}>
        <path 
          d={`M 0 ${waveLength/2} Q ${waveLength/4} ${waveLength/2 - amplitude}, ${waveLength/2} ${waveLength/2} T ${waveLength} ${waveLength/2}`} 
          stroke={color} 
          strokeWidth="1" 
          fill="none" 
        />
        {secondaryColor && (
          <path 
            d={`M 0 ${waveLength/2 + amplitude*1.5} Q ${waveLength/4} ${waveLength/2 + amplitude*0.5}, ${waveLength/2} ${waveLength/2 + amplitude*1.5} T ${waveLength} ${waveLength/2 + amplitude*1.5}`} 
            stroke={secondaryColor} 
            strokeWidth="1" 
            fill="none" 
          />
        )}
      </pattern>
    );
  }
};

const DotPattern = ({ 
  pattern = 'dots', 
  size = 10, 
  gap = 20, 
  color = 'rgba(10, 61, 98, 0.7)',
  secondaryColor = 'rgba(10, 61, 98, 0.3)',
  width,
  height,
  top,
  left,
  right,
  bottom,
  zIndex,
  opacity,
  delay = '0s',
  animationDuration
}) => {
  // Generate unique ID for the pattern to avoid conflicts when using multiple patterns
  const patternId = `pattern-${pattern}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Get the pattern generator function
  const getPattern = patterns[pattern] || patterns.dots;
  
  return (
    <PatternContainer
      width={width}
      height={height}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      opacity={opacity}
      delay={delay}
      animationDuration={animationDuration}
    >
      <svg>
        <defs>
          {React.cloneElement(getPattern(size, gap, color, secondaryColor), { id: patternId })}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </PatternContainer>
  );
};

export default DotPattern;