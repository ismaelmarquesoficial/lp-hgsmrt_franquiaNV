import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import InscriptionContent from './components/InscriptionContent';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Hero />
      <InscriptionContent />
      <About />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <BackToTop />
    </Box>
  );
}

export default App;