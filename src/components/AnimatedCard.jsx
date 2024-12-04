import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(motion(Paper))(({ theme }) => ({
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(1, 192, 236, 0.15)'
  }
}));

const cardVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.2 }
  }
};

const AnimatedCard = ({ children, ...props }) => {
  return (
    <StyledPaper
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      {...props}
    >
      {children}
    </StyledPaper>
  );
};

export default AnimatedCard; 