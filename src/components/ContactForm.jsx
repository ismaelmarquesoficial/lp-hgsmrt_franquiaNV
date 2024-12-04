import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import AnimatedTextField from './AnimatedTextField';
import AnimatedButton from './animated/AnimatedButton';
import AnimatedNotification from './AnimatedNotification';
import AnimatedContainer from './animated/AnimatedContainer';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box 
      component="section"
      id="contact"
      py={8}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{ 
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  width: '80px',
                  height: '4px',
                  backgroundColor: '#01c0ec'
                }
              }}
            >
              Seja um Franqueado
            </Typography>
            <Typography variant="h5" paragraph sx={{ mt: 4 }}>
              Preencha o formulário e entraremos em contato para mais informações sobre como fazer parte da maior rede de assistência técnica do Brasil.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4,
                background: 'rgba(1, 21, 17, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(1, 192, 236, 0.1)',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <AnimatedTextField
                      fullWidth
                      label="Nome completo"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: '#01c0ec' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="E-mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: '#01c0ec' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{ color: '#01c0ec' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Cidade/Estado"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon sx={{ color: '#01c0ec' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MessageIcon sx={{ color: '#01c0ec' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedButton
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={24} /> : <SendIcon />}
                    >
                      {loading ? 'Enviando...' : 'Quero ser Franqueado'}
                    </AnimatedButton>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <AnimatedContainer animation="slideIn">
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)} severity="success">
            Mensagem enviada com sucesso!
          </Alert>
        </Snackbar>
      </AnimatedContainer>
    </Box>
  );
};

export default ContactForm; 