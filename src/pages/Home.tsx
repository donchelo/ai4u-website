import React from 'react';
import { Container, Grid, Box, Typography as MuiTypography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { H2, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import HeroSection from '../components/HeroSection';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';

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

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <RouterLink to="/servicios" style={{ textDecoration: 'none' }}>
              <Button 
                variant="outline" 
                size="medium"
              >
                Ver todos nuestros servicios
              </Button>
            </RouterLink>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper', textAlign: 'center' }}>
        <Container maxWidth="md">
          <H2 sx={{ mb: 3 }}>¿Listo para transformar tu negocio con IA?</H2>
          <BodyText sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Agenda un diagnóstico gratuito y descubre cómo podemos ayudarte a implementar
            soluciones de IA que mejoren la eficiencia y experiencia de tus clientes.
          </BodyText>
          <DiagnosticCTA 
            variant="primary" 
            size="large" 
            text="Agenda tu diagnóstico gratuito" 
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 