import React from 'react';
import { Container, Grid, Box, Stack, Paper, Typography as MuiTypography, Link } from '@mui/material';
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
              <Button variant="primary">Nuestros Servicios</Button>
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
            {/* Aquí iría una imagen o ilustración */}
            <Paper 
              sx={{ 
                height: 400, 
                bgcolor: 'secondary.light', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 3
              }}
            >
              <MuiTypography sx={{ color: 'secondary.main', fontWeight: 600 }}>
                Imagen de IA
              </MuiTypography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 