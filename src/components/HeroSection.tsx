import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { H1, BodyText } from './ui/Typography';
import { DiagnosticCTA } from './ui/DiagnosticCTA';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        height: { xs: '100vh', sm: '100vh' },
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
      }}
    >
      {/* Fondo con overlay óptimo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 1
          }
        }}
      >
        {images.map((img, idx) => (
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`Background ${idx + 1}`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: idx === currentImage ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              filter: 'brightness(0.5) contrast(1.1)'
            }}
          />
        ))}
      </Box>

      {/* Contenido centrado con estilo inspirado en la imagen */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 5,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 8, md: 0 }
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          sx={{
            maxWidth: { xs: '100%', md: '80%', lg: '70%' },
            textAlign: 'center'
          }}
        >
          <H1 
            sx={{ 
              color: '#FFFFFF',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              mb: { xs: 1, md: 2 }
            }}
          >
            Transforma tiempo operativo en libertad estratégica
          </H1>
          
          <BodyText 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              mb: { xs: 3, md: 4 },
              maxWidth: '95%'
            }}
          >
            Asistentes robóticos que trabajan 24/7 para que tú decidas cómo invertir tu tiempo más valioso
          </BodyText>
          
          <DiagnosticCTA 
            variant="primary" 
            text="Diagnóstico gratis" 
            size="large"
            showIcon={false}
          />
        </Stack>
      </Container>

      {/* Controles de navegación minimalistas */}
      <Stack 
        direction="row" 
        spacing={1.5} 
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
          zIndex: 6
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: 24,
              height: 3,
              bgcolor: index === currentImage 
                ? theme.palette.primary.main
                : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: index === currentImage 
                  ? theme.palette.primary.main
                  : 'rgba(255, 255, 255, 0.6)',
              }
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HeroSection; 