import { motion } from 'framer-motion';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

const AnimatedIcon = ({ name, size = 40, color = '#01c0ec' }) => {
  const icons = {
    smartphone: PhoneAndroidIcon,
    store: StorefrontIcon,
    trending: TrendingUpIcon,
    wrench: BuildIcon,
    users: GroupIcon,
    award: EmojiEventsIcon,
    school: SchoolIcon
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={iconVariants}
    >
      <IconComponent 
        sx={{ 
          fontSize: size,
          color: color
        }}
      />
    </motion.div>
  );
};

export default AnimatedIcon; 