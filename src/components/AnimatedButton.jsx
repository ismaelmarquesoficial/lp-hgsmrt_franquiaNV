import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(motion.div)(({ theme }) => ({
  '& .MuiButton-root': {
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: '0.5s',
    },
    '&:hover::after': {
      left: '100%',
    }
  }
}));

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const AnimatedButton = ({ children, ...props }) => {
  return (
    <StyledButton
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Button {...props}>
        {children}
      </Button>
    </StyledButton>
  );
};

export default AnimatedButton; 