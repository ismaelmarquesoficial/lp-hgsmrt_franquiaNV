export const transitions = {
  default: {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96]
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 20
  },
  slow: {
    duration: 0.6,
    ease: "easeInOut"
  }
};

export const animations = {
  button: {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: transitions.default
    },
    tap: { 
      scale: 0.95,
      transition: transitions.default
    }
  },
  card: {
    initial: { 
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px rgba(1, 192, 236, 0.1)"
    },
    hover: { 
      scale: 1.03,
      y: -5,
      boxShadow: "0 12px 24px rgba(1, 192, 236, 0.2)",
      transition: transitions.default
    }
  },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: transitions.default
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: transitions.default
    }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: transitions.default
    },
    exit: { 
      x: 20, 
      opacity: 0,
      transition: transitions.default
    }
  }
}; 