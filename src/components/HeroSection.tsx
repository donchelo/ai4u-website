import React from 'react';
import { Container, Grid, Box, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { H1, BodyText } from './ui/Typography';
import { Button } from './ui/Button';

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', py: 10 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <H1 sx={{ mb: 3 }}>
              Soluciones de IA 
              <Box component="span" sx={{ color: 'primary.main' }}> para el futuro</Box>
            </H1>
            <BodyText sx={{ mb: 4, color: 'text.secondary', maxWidth: 500 }}>
              En AI4U creamos soluciones innovadoras utilizando inteligencia artificial 
              para transformar tu negocio y mejorar la experiencia de tus clientes.
            </BodyText>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <RouterLink to="/soluciones" style={{ textDecoration: 'none' }}>
                <Button variant="primary">
                  Nuestros Servicios
                </Button>
              </RouterLink>
              <Link 
                href="https://calendly.com/mgarciap333/ai4u-automatizacion-inteligente" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="outline">Agendar diagnóstico gratis</Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/hero-image.png"
              alt="AI4U soluciones de inteligencia artificial"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 