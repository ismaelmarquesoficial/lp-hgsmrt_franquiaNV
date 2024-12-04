import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { animations } from '../../animations/config';

const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={animations.button}
    >
      <Button
        {...props}
        sx={{
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
          },
          ...props.sx
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimatedButton; 