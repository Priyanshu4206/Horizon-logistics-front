# Horizon Trucking - Logistics Website

A modern, responsive website for a trucking logistics company built with React, Styled Components, and Vite.

## Features

- Modern UI design with a focus on user experience
- Fully responsive layout that works on all devices
- Component-based architecture for maintainability
- CSS-in-JS styling with Styled Components
- Fast development and build times with Vite
- Optimized for deployment on Vercel

## Pages

- **Home**: Showcase the company's services and unique selling points
- **About**: Company history, values, and team information
- **Services**: Detailed information about the logistics services offered
- **Tracking**: Real-time shipment tracking functionality
- **Contact**: Contact form and company information

## Technology Stack

- React
- Styled Components
- React Router
- React Icons
- Vite
- Vercel (deployment)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/trucking-logistics-front.git
cd trucking-logistics-front
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, ready for deployment.

## Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy your site

## Project Structure

```
trucking-logistics-front/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles and theme
│   └── utils/           # Utility functions
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Customization

- Edit the theme in `src/styles/Theme.js` to change colors, fonts, etc.
- Replace placeholder images in the public directory with your own
- Update content in page components to match your business information

## License

MIT
