import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
// import TrackingPage from './pages/TrackingPage'; // Commented out as requested
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            {/* Tracking page route commented out as requested */}
            {/* <Route path="/track" element={<TrackingPage />} /> */}
          </Routes>
          <BackToTop />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 