import React from 'react';
import { Container, Grid, Box, Typography as MuiTypography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import { H2, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import HeroSection from '../components/HeroSection';

interface Service {
  id: number;
  title: string;
  description: string;
}

const Home = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Desarrollo de Chatbots",
      description: "Creamos chatbots personalizados que mejoran la experiencia del cliente y optimizan procesos."
    },
    {
      id: 2,
      title: "Análisis Predictivo",
      description: "Utilizamos técnicas de machine learning para predecir tendencias y comportamientos futuros."
    },
    {
      id: 3,
      title: "Procesamiento de Lenguaje Natural",
      description: "Implementamos soluciones que permiten a las máquinas entender y generar lenguaje humano."
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <H2 sx={{ mb: 2 }}>Nuestros Servicios</H2>
            <BodyText sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
              Ofrecemos un conjunto completo de soluciones de inteligencia artificial 
              adaptadas a las necesidades específicas de tu empresa.
            </BodyText>
          </Box>

          <Grid container spacing={4}>
            {services.map(service => (
              <Grid item xs={12} md={4} key={service.id}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <H2 sx={{ mb: 3, color: 'background.default' }}>
              ¿Listo para transformar tu negocio?
            </H2>
            <BodyText sx={{ mb: 4, color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
              Descubre cómo nuestras soluciones de inteligencia artificial pueden 
              ayudarte a alcanzar tus objetivos de negocio.
            </BodyText>
            <Button 
              variant="primary" 
              size="large"
            >
              Solicita una demostración
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 