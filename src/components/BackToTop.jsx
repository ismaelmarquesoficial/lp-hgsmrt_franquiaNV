import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        backgroundColor: '#01c0ec',
        color: '#011511',
        display: visible ? 'flex' : 'none',
        '&:hover': {
          backgroundColor: '#01c0ec',
          opacity: 0.9,
          transform: 'scale(1.1)',
        },
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 14px 0 rgba(1, 192, 236, 0.3)',
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default BackToTop; 