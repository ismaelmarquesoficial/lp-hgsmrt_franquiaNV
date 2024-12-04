import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: 'Qual é o investimento inicial?',
      answer: 'O investimento inicial varia de R$ 120.000 a R$ 180.000, incluindo taxa de franquia, montagem da loja e capital de giro inicial.',
    },
    {
      question: 'Preciso ter experiência no ramo?',
      answer: 'Não é necessário ter experiência prévia. Oferecemos treinamento completo técnico e gerencial para você e sua equipe.',
    },
    {
      question: 'Qual é o prazo de retorno do investimento?',
      answer: 'O prazo médio de retorno do investimento é de 18 a 24 meses, dependendo do desempenho da unidade.',
    },
    {
      question: 'Qual é o faturamento médio mensal?',
      answer: 'O faturamento médio mensal varia de R$ 50.000 a R$ 80.000, dependendo da localização e gestão da unidade.',
    },
    {
      question: 'Como funciona o suporte da franqueadora?',
      answer: 'Oferecemos suporte completo desde a escolha do ponto até a operação diária, incluindo treinamentos, marketing, sistema de gestão e suporte técnico.',
    },
  ];

  return (
    <Box 
      component="section"
      id="faq"
      py={8}
    >
      <Container>
        <Typography variant="h2" textAlign="center" mb={6} data-aos="fade-up">
          Dúvidas Frequentes
        </Typography>
        <Box maxWidth={800} mx="auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              sx={{ mb: 2 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 