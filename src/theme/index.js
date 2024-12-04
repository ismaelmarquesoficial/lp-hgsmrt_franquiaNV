import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#01c0ec',
      light: '#33ccff',
      dark: '#0099cc',
      contrastText: '#fff',
    },
    secondary: {
      main: '#007bff',
      light: '#3395ff',
      dark: '#0056b3',
      contrastText: '#fff',
    },
    background: {
      default: '#011511',
      paper: '#011f18',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    accent: {
      main: '#01c0ec',
      light: 'rgba(1, 192, 236, 0.1)',
    },
    custom: {
      blueLight: '#01c0ec',
      blueMedium: '#007bff',
      blueDark: '#0056b3',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          padding: '10px 24px',
        },
        contained: {
          backgroundColor: '#01c0ec',
          color: '#011511',
          boxShadow: '0 8px 20px rgba(1, 192, 236, 0.2)',
          '&:hover': {
            backgroundColor: '#33ccff',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px rgba(1, 192, 236, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundImage: 'linear-gradient(145deg, rgba(1, 192, 236, 0.05), rgba(0, 123, 255, 0.05))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(1, 192, 236, 0.1)',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(1, 192, 236, 0.15)',
            transform: 'translateY(-4px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          overflow: 'hidden',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            background: 'rgba(255, 255, 255, 0.05)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-focused': {
              background: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderBottom: '1px solid rgba(1, 192, 236, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '& > *': {
            borderRadius: 24,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '16px !important',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&.Mui-expanded': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          background: 'rgba(1, 21, 17, 0.95)',
          border: '1px solid rgba(1, 192, 236, 0.1)',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiAlert-root': {
            borderRadius: 16,
          },
        },
      },
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
}); 