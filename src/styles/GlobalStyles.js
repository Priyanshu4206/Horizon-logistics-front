import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary-color: #0A3D62; /* Dark Navy Blue */
    --secondary-color: #006064; /* Deep Teal */
    --accent-color: #FFA000; /* Bright Yellow/Orange */
    --light-bg: #F5F7FA;
    --dark-text: #333333;
    --light-text: #FFFFFF;
    --gray-text: #777777;
    --border-color: #E0E0E0;
    
    /* Spacing Variables */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 5rem;
    
    /* Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark-text);
    background-color: #FFFFFF;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--accent-color);
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }
  
  ul, ol {
    list-style: none;
  }
  
  img, video {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  section {
    padding: var(--spacing-xl) 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    section {
      padding: var(--spacing-lg) 0;
    }
  }
`;

export default GlobalStyles; 