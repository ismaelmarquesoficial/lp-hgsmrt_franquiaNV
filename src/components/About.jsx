import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const About = () => {
  const timelineItems = [
    {
      year: '2015',
      title: 'Fundação',
      description: 'Início das operações com a primeira loja em São Paulo'
    },
    {
      year: '2018',
      title: 'Expansão',
      description: 'Início do sistema de franquias e expansão nacional'
    },
    {
      year: '2020',
      title: 'Inovação',
      description: 'Implementação de tecnologias exclusivas de diagnóstico'
    },
    {
      year: '2023',
      title: 'Liderança',
      description: 'Maior rede de assistência técnica do Brasil'
    }
  ];

  return (
    <Box 
      component="section"
      id="about"
      py={8}
    >
      <Container>
        <Typography variant="h2" textAlign="center" mb={6} data-aos="fade-up">
          Nossa História
        </Typography>
        <Timeline position="alternate">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < timelineItems.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper 
                  elevation={3} 
                  sx={{ p: 3 }}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <Typography variant="h6" color="primary">
                    {item.year}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography>
                    {item.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default About; 