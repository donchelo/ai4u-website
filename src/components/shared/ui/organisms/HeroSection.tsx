import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Giant, H1, BodyText, LazyImage } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';

interface HeroSectionProps {
  customTitle?: string;
  customSubtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  customTitle = 'TU TIEMPO ES ORO',
  customSubtitle = 'Mientras otros pierden el 70% de su día en tareas operativas, nuestros asistentes robóticos trabajan 24/7.',
  primaryButtonText = 'RECUPERA TU TIEMPO',
  secondaryButtonText = 'CALCULA TU ROI'
}) => {
  const theme = useTheme();
  const colors = useColors();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ];

  const humanElementText = 'TECNOLOGÍA QUE LIBERA TU POTENCIAL HUMANO';

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
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: colors.palette.black,
        py: { xs: 10, md: 15 } // Abundante white space
      }}
    >
      {/* Fondo Minimalista con Alto Contraste */}
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
            backgroundColor: alpha(colors.palette.black, 0.8), // Más oscuro para contraste
            zIndex: 1
          }
        }}
      >
        {images.map((img, idx) => (
          <Box key={idx} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <LazyImage
              src={img}
              alt={`Background ${idx + 1}`}
              priority={idx === 0}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: idx === currentImage ? 0.4 : 0,
                transition: 'opacity 1.5s ease-in-out',
                filter: 'grayscale(100%)' // Estilo moderno/brutalista
              }}
            />
          </Box>
        ))}
      </Box>

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative',
          zIndex: 5,
          px: { xs: 4, md: 12, lg: 20 }, // Más white space lateral
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 6, md: 12 }}
          alignItems="flex-start"
          sx={{ width: '100%', mx: 0 }}
        >
          <Box>
            <Giant 
              sx={{ 
                color: colors.palette.white,
                mb: 4,
                maxWidth: '1100px',
                fontSize: { xs: '3.5rem', md: '7rem', lg: '9rem' }, // Reducido para legibilidad en PC
                lineHeight: 0.8,
                letterSpacing: '-0.05em'
              }}
            >
              {customTitle}
            </Giant>
            
            <H1 
              sx={{ 
                color: colors.palette.white,
                maxWidth: '900px',
                mb: 6,
                opacity: 0.9,
                fontWeight: 300,
                fontSize: { xs: '2rem', md: '4rem' },
                lineHeight: 1.1
              }}
            >
              {customSubtitle}
            </H1>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={6}
            alignItems="center"
          >
            <DiagnosticCTA 
              variant="primary" 
              text={primaryButtonText} 
              size="large"
              showIcon={false}
              sx={{ 
                height: '120px', 
                px: 10, 
                fontSize: '2rem',
                fontWeight: 900,
                border: `6px solid ${colors.palette.white}`,
                bgcolor: colors.palette.white,
                color: colors.palette.black,
                '&:hover': {
                  bgcolor: colors.palette.black,
                  color: colors.palette.white
                }
              }}
            />
            
            <Box sx={{ borderLeft: `6px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
              <BodyText 
                sx={{ 
                  color: colors.palette.white,
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  lineHeight: 1
                }}
              >
                {humanElementText}
              </BodyText>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
