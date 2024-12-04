import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import { animations } from '../../animations/config';

const AnimatedCard = ({ children, ...props }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={animations.card}
    >
      <Paper
        {...props}
        sx={{
          transition: 'all 0.3s ease-in-out',
          ...props.sx
        }}
      >
        {children}
      </Paper>
    </motion.div>
  );
};

export default AnimatedCard; 