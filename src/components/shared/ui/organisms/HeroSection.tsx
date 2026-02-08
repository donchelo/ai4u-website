import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Giant, H1, BodyText, LazyImage } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';
import { TEXT_VARIANTS } from '../tokens/typography';

interface HeroSectionProps {
  customTitle?: string;
  customSubtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  customTitle = 'Tu tiempo es oro',
  customSubtitle = 'IA que potencia tu productividad.',
  primaryButtonText = 'Recupera tu tiempo',
  secondaryButtonText = 'Calcula tu ROI'
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

  const humanElementText = 'IA con enfoque humano';

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
        minHeight: { xs: 'auto', md: '100vh' },
        maxHeight: { xs: '100vh', md: 'none' },
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Cambio a alineación a la izquierda
        bgcolor: colors.palette.black,
        py: { xs: 4, sm: 6, md: 12 }
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
            backgroundColor: alpha(colors.palette.black, 0.4), // Overlay más suave
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
                opacity: idx === currentImage ? 0.7 : 0, // Un poco más de opacidad para la imagen
                transition: 'opacity 1.5s ease-in-out, transform 10s ease-out',
                filter: 'grayscale(100%) contrast(1.2)', // Más contraste en el fondo
                transform: idx === currentImage ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Texto de fondo asimétrico */}
      <Typography
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          fontSize: { xs: '10rem', md: '25rem' },
          fontWeight: 400,
          color: colors.palette.white,
          opacity: 0.05,
          zIndex: 1,
          lineHeight: 0.8,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        AI 4U
      </Typography>

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative',
          zIndex: 5,
          px: { xs: 2, sm: 3, md: 10, lg: 15 }, // Ajuste de padding para asimetría
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems="flex-start" // Alineación a la izquierda
          sx={{ width: '100%', maxWidth: '900px', textAlign: 'left' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box 
              sx={{ 
                bgcolor: colors.palette.accentColors.orange, 
                color: colors.palette.black,
                px: 2,
                py: 0.5,
                mb: 4,
                ...TEXT_VARIANTS.ui.code,
                fontSize: '0.9rem',
                transform: 'rotate(-2deg)' // Toque asimétrico
              }}
            >
              Estrategia + IA
            </Box>
            <Giant 
              sx={{ 
                color: colors.palette.white,
                mb: { xs: 1, sm: 1.5, md: 2 },
                maxWidth: '850px',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '6rem', lg: '8rem' }, // Más grande para impacto
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                textAlign: 'left',
                fontWeight: 400
              }}
            >
              {customTitle.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>
                  {word}
                </span>
              ))}
            </Giant>
            
            <H1 
              sx={{ 
                color: colors.palette.white,
                maxWidth: '600px',
                mb: { xs: 4, sm: 5, md: 6 },
                opacity: 0.9,
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '2rem' },
                lineHeight: 1.1,
                textAlign: 'left',
                borderLeft: `4px solid ${colors.palette.white}`,
                pl: 3
              }}
            >
              {customSubtitle}
            </H1>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 3, md: 4 }}
            alignItems="flex-start"
          >
            <DiagnosticCTA 
              variant="primary" 
              text={primaryButtonText} 
              size="large"
              showIcon={false}
              sx={{ 
                height: { xs: '55px', md: '90px' }, 
                px: { xs: 4, md: 8 }, 
                fontSize: { xs: '0.9rem', md: '1.5rem' },
                fontWeight: 400,
                borderRadius: 0,
                bgcolor: colors.palette.white,
                color: colors.palette.black,
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.palette.accentColors.orange,
                  color: colors.palette.black,
                  transform: 'translateY(-5px) rotate(1deg)'
                }
              }}
            />
            
            <Box sx={{ 
              pt: { xs: 1, md: 2 },
              position: 'relative'
            }}>
              <BodyText 
                sx={{ 
                  color: colors.palette.white,
                  fontWeight: 400,
                  fontSize: { xs: '0.8rem', md: '1.2rem' },
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  lineHeight: 1.2,
                  textAlign: 'left',
                  opacity: 0.6
                }}
              >
                // {humanElementText}
              </BodyText>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
