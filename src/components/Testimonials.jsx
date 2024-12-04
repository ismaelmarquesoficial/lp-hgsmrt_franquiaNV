import { Box, Container, Typography, Paper, Rating } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Melhor decisão que tomei foi me tornar um franqueado HG Smart. O suporte é excepcional e os resultados superaram minhas expectativas.',
    },
    {
      name: 'Maria Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Em apenas 1 ano já recuperei meu investimento. A marca é muito forte e os clientes confiam no nosso trabalho.',
    },
    {
      name: 'Pedro Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'O treinamento técnico é excelente e o suporte da franqueadora nos ajuda a resolver qualquer desafio.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box 
      component="section"
      id="testimonials"
      py={8}
    >
      <Container>
        <Typography variant="h2" textAlign="center" mb={6} data-aos="fade-up">
          O que dizem nossos Franqueados
        </Typography>
        <Box data-aos="fade-up">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} px={2}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    maxWidth: 600,
                    mx: 'auto',
                    border: '1px solid rgba(1, 192, 236, 0.1)',
                  }}
                >
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {testimonial.location}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 