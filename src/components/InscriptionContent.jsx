import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';

const InscriptionContent = () => {
  const highlights = [
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 60 }} />,
      title: 'Investimento Total',
      value: 'A partir de R$ 120 mil',
      description: 'Inclui taxa de franquia, instalações e capital de giro'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60 }} />,
      title: 'Equipe Necessária',
      value: '2 a 4 pessoas',
      description: 'Funcionários treinados e capacitados pela franqueadora'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 60 }} />,
      title: 'Faturamento Médio',
      value: 'R$ 50-80 mil/mês',
      description: 'Potencial de receita mensal por unidade'
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 60 }} />,
      title: 'Área Mínima',
      value: '30-50m²',
      description: 'Localização em ruas comerciais ou shopping centers'
    }
  ];

  const businessDetails = [
    {
      title: 'O Negócio',
      content: `A HG Smart é a maior rede de assistência técnica especializada em smartphones e tablets do Brasil. 
      Com mais de 100 unidades em operação, oferecemos um modelo de negócio comprovado e lucrativo no mercado 
      de reparos de dispositivos móveis.`
    },
    {
      title: 'Diferenciais',
      content: `• Suporte completo da franqueadora
      • Treinamento técnico e gerencial
      • Sistema exclusivo de gestão
      • Marketing digital e offline
      • Território protegido
      • Central de compras
      • Suporte técnico especializado`
    },
    {
      title: 'Retorno do Investimento',
      content: `• Payback estimado: 18 a 24 meses
      • Margem de lucro atrativa
      • Modelo de negócio escalável
      • Mercado em constante crescimento
      • Receitas recorrentes`
    }
  ];

  return (
    <Box component="section" py={8}>
      <Container>
        <Typography 
          variant="h1" 
          textAlign="center" 
          mb={8}
          data-aos="fade-up"
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700 
          }}
        >
          Seja um Franqueado HG Smart
        </Typography>

        {/* Highlights */}
        <Grid container spacing={4} mb={8}>
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography 
                  variant="h5" 
                  color="primary.main" 
                  gutterBottom 
                  sx={{ fontWeight: 700 }}
                >
                  {item.value}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Business Details */}
        <Grid container spacing={4}>
          {businessDetails.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: index === 0 ? 'primary.main' : 'background.paper'
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    color: index === 0 ? 'white' : 'primary.main',
                    fontWeight: 700 
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{ 
                    color: index === 0 ? 'white' : 'text.primary',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {section.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InscriptionContent; 