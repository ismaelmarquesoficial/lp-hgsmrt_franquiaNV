import { Box, Container, Grid, Typography, Button, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 8 }}>
      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.default',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, 
              rgba(1, 192, 236, 0.05) 0%, 
              rgba(0, 123, 255, 0.05) 100%
            )`,
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  color: '#01c0ec'
                }}
              >
                Cansado de ter dificuldades em saber qual o negócio certo para investir?
              </Typography>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ mb: 4, color: 'text.primary' }}
              >
                Agora você pode ter uma franquia validada e com sucesso por todo o Brasil!
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#01c0ec',
                  color: '#011511',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#33ccff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(1, 192, 236, 0.3)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Quero ser franqueado
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(1, 192, 236, 0.1)' }} />

      {/* Contact Information */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#01c0ec' }}>
              Contatos
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ color: '#01c0ec', mr: 2 }} />
              <Typography>
                atendimento@hgsmart.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTimeIcon sx={{ color: '#01c0ec', mr: 2 }} />
              <Typography>
                Seg. - Sex. 08:30 às 19:00<br />
                Sábados - 08:30 às 18:00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ color: '#01c0ec', mr: 2 }} />
              <Typography>
                Rua Tenente-Coronel Brito, 501 - Centro<br />
                Santa Cruz do Sul - RS, 96810-202
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: 2,
        borderTop: '1px solid rgba(1, 192, 236, 0.1)'
      }}>
        <Container>
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} HG Smart. Todos os direitos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 