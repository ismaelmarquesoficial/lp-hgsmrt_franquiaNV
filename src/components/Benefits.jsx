import { Box, Container, Grid } from '@mui/material';
import AnimatedIcon from './AnimatedIcon';
import AnimatedCard from './animated/AnimatedCard';
import AnimatedContainer from './animated/AnimatedContainer';

const Benefits = () => {
  const benefits = [
    {
      icon: 'trending',
      title: 'Alta Lucratividade',
      description: 'Retorno do investimento em até 18 meses com margem de lucro atrativa.'
    },
    {
      icon: 'users',
      title: 'Suporte Completo',
      description: 'Acompanhamento desde a escolha do ponto até a operação diária.'
    },
    {
      icon: 'trending',
      title: 'Mercado em Expansão',
      description: 'Setor com crescimento constante e demanda garantida.'
    },
    {
      icon: 'smartphone',
      title: 'Baixo Estoque',
      description: 'Sistema just-in-time com fornecedores homologados.'
    },
    {
      icon: 'school',
      title: 'Treinamento Contínuo',
      description: 'Capacitação técnica e gerencial para você e sua equipe.'
    },
    {
      icon: 'store',
      title: 'Marca Reconhecida',
      description: 'Credibilidade e reconhecimento em todo o território nacional.'
    }
  ];

  return (
    <Box 
      component="section"
      id="benefits"
      py={8}
      bgcolor="background.default"
    >
      <Container>
        <AnimatedContainer animation="fadeIn" variant="h2" textAlign="center" mb={6} data-aos="fade-up">
          Por que ser um Franqueado?
        </AnimatedContainer>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard
                elevation={1}
                sx={{
                  p: 3,
                  height: '100%',
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  <AnimatedIcon name={benefit.icon} />
                </Box>
                <AnimatedContainer animation="fadeIn" variant="h5" color="primary" gutterBottom>
                  {benefit.title}
                </AnimatedContainer>
                <AnimatedContainer animation="fadeIn" color="text.primary">
                  {benefit.description}
                </AnimatedContainer>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits; 