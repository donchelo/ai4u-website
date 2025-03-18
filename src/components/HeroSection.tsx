import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Stack, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { H1, BodyText } from './ui/Typography';
import { Button } from './ui/Button';
import { DiagnosticCTA } from './ui/DiagnosticCTA';
import { ServicesButton } from './ui/ServicesButton';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
              <ServicesButton variant="primary" />
              <DiagnosticCTA variant="outline" text="Agendar diagnóstico gratis" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={images[currentImage]}
                alt={`AI4U soluciones de inteligencia artificial (${currentImage + 1}/${images.length})`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 400,
                  borderRadius: 3,
                  objectFit: 'cover',
                  boxShadow: 3,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Controles de navegación */}
              <IconButton 
                aria-label="imagen anterior"
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  width: 32,
                  height: 32,
                  zIndex: 2,
                  opacity: 0.6,
                  transition: 'opacity 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    bgcolor: 'rgba(255,255,255,0.7)',
                  }
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              
              <IconButton 
                aria-label="imagen siguiente"
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  width: 32,
                  height: 32,
                  zIndex: 2,
                  opacity: 0.6,
                  transition: 'opacity 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    bgcolor: 'rgba(255,255,255,0.7)',
                  }
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
              
              {/* Indicadores de posición */}
              <Stack 
                direction="row" 
                spacing={1} 
                justifyContent="center"
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  left: 0,
                  right: 0,
                  zIndex: 2
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: index === currentImage ? 'primary.main' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 