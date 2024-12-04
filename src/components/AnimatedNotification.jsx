import { motion, AnimatePresence } from 'framer-motion';
import { Alert, Snackbar } from '@mui/material';

const notificationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    y: 50,
    transition: { duration: 0.2 }
  }
};

const AnimatedNotification = ({ open, onClose, message, severity }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={notificationVariants}
        >
          <Snackbar open={open} onClose={onClose}>
            <Alert severity={severity} onClose={onClose}>
              {message}
            </Alert>
          </Snackbar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedNotification; 