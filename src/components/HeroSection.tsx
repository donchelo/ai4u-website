import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha } from '@mui/material';
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
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
      }}
    >
      {/* Fondo con menos blur y más visible */}
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
            backgroundColor: alpha(theme.palette.background.default, 0.4),
            backdropFilter: 'blur(4px)',
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
              opacity: idx === currentImage ? 0.9 : 0,
              transition: 'opacity 1.5s ease-in-out',
              filter: 'saturate(0.8) brightness(0.85)'
            }}
          />
        ))}
      </Box>

      {/* Contenido del hero a ancho completo de la pantalla */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Panel semitransparente que abarca todo el ancho */}
        <Box
          sx={{
            width: '100%',
            py: { xs: 6, md: 0 },
            height: { xs: 'auto', md: '100%' },
            display: 'flex',
            alignItems: 'center',
            background: `linear-gradient(to right, 
              ${alpha(theme.palette.background.paper, 0.7)}, 
              ${alpha(theme.palette.background.paper, 0.2)}, 
              transparent)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Contenedor del texto ampliado al máximo */}
          <Box
            sx={{
              width: '100%',
              px: { xs: 3, sm: 4, md: 5, lg: 8 },
            }}
          >
            <Box 
              sx={{ 
                maxWidth: { xs: '100%', md: '85%', lg: '90%', xl: '100%' }
              }}
            >
              <H1 
                sx={{ 
                  mb: 3, 
                  color: 'text.primary',
                  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.8rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  background: `linear-gradient(120deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                La verdadera libertad es decidir en qué gastas tu tiempo
              </H1>
              
              <BodyText 
                sx={{ 
                  mb: 3, 
                  color: 'text.primary', 
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem', lg: '1.6rem' },
                  lineHeight: 1.4
                }}
              >
                Implementamos inteligencia artificial que automatiza tus operaciones y libera tu agenda para el crecimiento estratégico
              </BodyText>
              
              <BodyText 
                sx={{ 
                  mb: 5, 
                  color: 'text.secondary', 
                  fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', xl: '80%' }
                }}
              >
                Nuestros asistentes robóticos transforman el 70% de tareas operativas en tiempo productivo, mejorando resultados mientras reduces costos. Soluciones escalables diseñadas para cada industria.
              </BodyText>
              
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={{ xs: 2, sm: 3 }} 
                alignItems={{ xs: "stretch", sm: "center" }}
                sx={{ mb: 2 }}
              >
                <DiagnosticCTA 
                  variant="primary" 
                  text="Solicita tu diagnóstico gratuito" 
                  size="large" 
                />
                <Typography 
                  variant="caption" 
                  color="text.secondary" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', lg: '1rem' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > span': {
                      display: 'inline-flex',
                      alignItems: 'center'
                    },
                    '& > span:not(:last-child)::after': {
                      content: {xs: 'none', md: '""'},
                      display: {xs: 'none', md: 'inline-block'},
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: alpha(theme.palette.text.secondary, 0.5),
                      marginLeft: '12px'
                    }
                  }}
                >
                  <span>30 minutos</span>
                  <span>Robot estratégico desde $350.000</span>
                  <span>ROI medible desde el primer mes</span>
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Controles de navegación más minimalistas */}
      <IconButton 
        aria-label="imagen anterior"
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: 8, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: alpha(theme.palette.background.paper, 0.1),
          backdropFilter: 'blur(8px)',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          color: theme.palette.text.primary,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          zIndex: 6,
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transform: 'translateY(-50%) scale(1.05)'
          },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      
      <IconButton 
        aria-label="imagen siguiente"
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: 8, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: alpha(theme.palette.background.paper, 0.1),
          backdropFilter: 'blur(8px)',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          color: theme.palette.text.primary,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          zIndex: 6,
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transform: 'translateY(-50%) scale(1.05)'
          },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
      
      {/* Indicadores de posición más minimalistas */}
      <Stack 
        direction="row" 
        spacing={1.5} 
        justifyContent="center"
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
              width: 8,
              height: 8,
              borderRadius: '2px',
              bgcolor: index === currentImage 
                ? theme.palette.primary.main 
                : alpha(theme.palette.text.primary, 0.3),
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                bgcolor: index === currentImage 
                  ? theme.palette.primary.main 
                  : alpha(theme.palette.text.primary, 0.5),
              }
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HeroSection; 