import { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        aria-label="scroll to top"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          backgroundColor: '#16FFB0',
          color: '#011511',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#16FFB0',
            transform: 'scale(1.1)',
            boxShadow: '0 8px 16px rgba(22, 255, 176, 0.3)',
          },
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 12px rgba(22, 255, 176, 0.2)',
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
};

export default FloatingButton; 