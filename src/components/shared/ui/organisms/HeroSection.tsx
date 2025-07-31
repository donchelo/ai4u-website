import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { H1, BodyText } from '../atoms';
import { DiagnosticCTA } from '../molecules';

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
            backgroundColor: alpha(theme.palette.common.black, 0.65),
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

      {/* Contenido con dos columnas: texto e imagen */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 5,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 8, md: 0 }
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '100%',
          }}
        >
          {/* Columna de texto - Alineada a la izquierda */}
          <Stack
            direction="column"
            spacing={{ xs: 2.5, md: 3 }}
            alignItems={{ xs: 'flex-start', md: 'flex-start' }}
            sx={{
              width: { xs: '100%', md: '55%' },
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            <H1 
              sx={{ 
                color: theme.palette.common.white,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.25rem', lg: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                mb: { xs: 1, md: 1.5 }
              }}
            >
              La verdadera libertad es decidir en qué gastas tu tiempo
            </H1>
            
            <BodyText 
              sx={{ 
                color: alpha(theme.palette.common.white, 0.9),
                fontWeight: 500,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                lineHeight: 1.5,
                mb: { xs: 1, md: 2 },
                maxWidth: { xs: '95%', md: '100%' },
                textAlign: { xs: 'left', md: 'left' }
              }}
            >
              Construimos infraestructura de inteligencia artificial que transforma tu operación empresarial
            </BodyText>
            
            <BodyText 
              sx={{ 
                color: alpha(theme.palette.common.white, 0.8),
                fontWeight: 400,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                lineHeight: 1.5,
                mb: { xs: 2, md: 3 },
                maxWidth: { xs: '90%', md: '100%' },
                textAlign: { xs: 'left', md: 'left' }
              }}
            >
              Arquitectura de IA personalizada que automatiza procesos críticos y evoluciona con tu negocio. Implementación rápida, resultados medibles y escalabilidad garantizada.
            </BodyText>
            
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems={{ xs: 'flex-start', md: 'flex-start' }}
              alignSelf={{ xs: 'flex-start', md: 'flex-start' }}
            >
              <DiagnosticCTA 
                variant="primary" 
                text="Solicita tu diagnóstico gratuito" 
                size="large"
                showIcon={false}
              />
              
              <Typography
                variant="body2"
                sx={{
                  color: alpha(theme.palette.common.white, 0.8),
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  gap: { xs: 0.8, md: 1.5 },
                  '& span': {
                    display: 'inline-flex',
                    alignItems: 'center',
                  },
                  '& span:not(:last-child)::after': {
                    content: '""',
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.common.white, 0.5),
                    margin: '0 8px',
                  }
                }}
              >
                <span>30 minutos</span>
                <span>Sin compromiso</span>
                <span>Resultados inmediatos</span>
              </Typography>
            </Stack>
          </Stack>
          
          {/* Columna de imagen del asistente */}
                      <Box
              sx={{
                width: { xs: '80%', sm: '70%', md: '40%' },
                height: { xs: '280px', sm: '320px', md: '420px' },
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: { xs: 2, md: 0 },
                mb: { xs: 2, md: 0 }
              }}
            >
            <Box
              component="img"
              src="/assets/images/robot-assistant.png"
              alt="Asistente de IA empresarial"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 20px rgba(32, 166, 210, 0.4))',
                animation: 'float 4s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0)'
                  },
                  '50%': {
                    transform: 'translateY(-15px)'
                  }
                }
              }}
            />
            
          </Box>
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
                ? 'primary.main'
                : alpha(theme.palette.common.white, 0.4),
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: index === currentImage 
                  ? 'primary.main'
                  : alpha(theme.palette.common.white, 0.6),
              }
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HeroSection;