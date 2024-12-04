import { motion, AnimatePresence } from 'framer-motion';
import { animations } from '../../animations/config';

const AnimatedContainer = ({ children, animation = "fadeIn", ...props }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animations[animation]}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedContainer; 