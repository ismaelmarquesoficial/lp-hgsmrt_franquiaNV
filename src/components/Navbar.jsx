import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Sobre', target: 'about' },
    { label: 'Benefícios', target: 'benefits' },
    { label: 'Depoimentos', target: 'testimonials' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contato', target: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed"
        sx={{
          background: isScrolled 
            ? 'rgba(1, 21, 17, 0.95)'
            : 'transparent',
          boxShadow: isScrolled 
            ? '0 2px 10px rgba(1, 192, 236, 0.1)'
            : 'none',
          transition: 'all 0.3s ease',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PhoneIphoneIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                mr: 1,
                color: '#01c0ec'
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              onClick={() => scrollToSection('hero')}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: '#01c0ec',
                },
                transition: 'color 0.3s ease',
              }}
            >
              HG SMART
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#01c0ec' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#011511',
                    border: '1px solid rgba(1, 192, 236, 0.1)',
                  }
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.target} 
                    onClick={() => scrollToSection(item.target)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(1, 192, 236, 0.1)',
                      }
                    }}
                  >
                    <Typography textAlign="center" color="white">
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'white',
                    display: 'block',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#01c0ec',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover:after': {
                      width: '80%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="contained"
                sx={{
                  backgroundColor: '#01c0ec',
                  color: '#011511',
                  '&:hover': {
                    backgroundColor: '#01c0ec',
                    opacity: 0.9,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Seja Franqueado
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 