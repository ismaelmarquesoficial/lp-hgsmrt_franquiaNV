import { Box, Container, Typography, Button, Grid } from '@mui/material';
import AnimatedIcon from './AnimatedIcon';

const Hero = () => {
  return (
    <Box 
      component="section" 
      id="hero"
      sx={{
        position: 'relative',
        color: 'white',
        py: { xs: 6, md: 12 },
        background: `linear-gradient(
          -45deg, 
          #011511,
          #012a33,
          #01364c,
          #013d54
        )`,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(1, 21, 17, 0.3)',
          backdropFilter: 'blur(40px)',
          zIndex: 1,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(1, 192, 236, 0.1) 0%,
            rgba(1, 21, 17, 0) 50%
          )`,
          zIndex: 2,
        },
        [`@keyframes gradient`]: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography 
              variant="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                '& span': {
                  color: '#01c0ec',
                }
              }}
            >
              Abra Sua <span>Loja de Celular</span> em sua Cidade e Fature Alto com um Modelo Pronto
            </Typography>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                mb: 2,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 500,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              Adquira sua franquia HG Smart e tenha sua loja de celulares, com o melhor suporte e assessoria do país.
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4,
                color: '#01c0ec',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Fature até R$ 80 mil por mês
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                py: 2, 
                px: 6,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: 2,
                backgroundColor: '#01c0ec',
                color: '#000',
                boxShadow: '0 4px 14px 0 rgba(1,192,236,0.3)',
                '&:hover': {
                  backgroundColor: '#01c0ec',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px 0 rgba(1,192,236,0.4)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              QUERO SER FRANQUEADO
            </Button>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 4
            }}>
              {[
                { icon: 'smartphone', value: '+5000', label: 'Reparos Mensais' },
                { icon: 'store', value: '+100', label: 'Unidades' },
                { icon: 'trending', value: '300%', label: 'Crescimento' }
              ].map((item, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    textAlign: 'center',
                    backgroundColor: 'rgba(1,192,236,0.1)',
                    borderRadius: 2,
                    p: 3,
                    minWidth: '150px',
                    border: '1px solid rgba(1,192,236,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(1,192,236,0.15)',
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box sx={{ 
                    fontSize: 60,
                    mb: 2 
                  }}>
                    <AnimatedIcon name={item.icon} size={60} />
                  </Box>
                  <Typography variant="h6" sx={{ color: '#01c0ec' }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 