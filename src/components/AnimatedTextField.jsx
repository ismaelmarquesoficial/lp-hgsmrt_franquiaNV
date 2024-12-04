import { motion } from 'framer-motion';
import { TextField, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const validationIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2 }
  }
};

const AnimatedTextField = ({ value, onChange, ...props }) => {
  const isValid = value?.length > 0;

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: 'border-color 0.3s ease',
            '&.Mui-focused': {
              '& fieldset': {
                borderColor: '#01c0ec',
                borderWidth: '2px',
                transition: 'all 0.3s ease'
              }
            }
          }
        }}
        {...props}
      />
      {isValid && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={validationIconVariants}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <CheckCircleIcon sx={{ color: '#01c0ec', fontSize: 20 }} />
        </motion.div>
      )}
    </Box>
  );
};

export default AnimatedTextField; 