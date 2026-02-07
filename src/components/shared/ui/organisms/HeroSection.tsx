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
        justifyContent: 'center',
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
            backgroundColor: alpha(colors.palette.black, 0.55), // Overlay más suave para que se vea la imagen de fondo
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
                opacity: idx === currentImage ? 0.6 : 0,
                transition: 'opacity 1.5s ease-in-out, transform 10s ease-out',
                filter: 'grayscale(100%)', // Estilo moderno/brutalista
                transform: idx === currentImage ? 'scale(1.15)' : 'scale(1)', // Zoom progresivo
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
          px: { xs: 2, sm: 3, md: 12, lg: 20 },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 6 }}
          alignItems="center"
          sx={{ width: '100%', mx: 0, textAlign: 'center' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Giant 
              sx={{ 
                color: colors.palette.white,
                mb: { xs: 1, sm: 1.5, md: 2 },
                maxWidth: '900px',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
                lineHeight: { xs: 1.1, md: 1.05 },
                letterSpacing: '-0.02em',
                textAlign: 'center'
              }}
            >
              {customTitle}
            </Giant>
            
            <H1 
              sx={{ 
                color: colors.palette.white,
                maxWidth: '700px',
                mb: { xs: 2, sm: 3, md: 4 },
                opacity: 0.8,
                fontWeight: 300,
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.8rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
                textAlign: 'center'
              }}
            >
              {customSubtitle}
            </H1>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, sm: 2.5, md: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <DiagnosticCTA 
              variant="primary" 
              text={primaryButtonText} 
              size="large"
              showIcon={false}
              sx={{ 
                height: { xs: '45px', sm: '55px', md: '80px' }, 
                px: { xs: 3, sm: 4, md: 6 }, 
                fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.4rem' },
                fontWeight: 400,
                borderRadius: 0,
                bgcolor: colors.palette.white,
                color: colors.palette.black,
                border: 'none',
                '&:hover': {
                  bgcolor: colors.palette.black,
                  color: colors.palette.white
                }
              }}
            />
            
            <Box sx={{ 
              borderLeft: 'none',
              borderTop: { xs: `1px solid ${colors.palette.accentColors.orange}`, md: `2px solid ${colors.palette.accentColors.orange}` },
              pt: { xs: 1, md: 2 },
              px: 2
            }}>
              <BodyText 
                sx={{ 
                  color: colors.palette.white,
                  fontWeight: 400,
                  fontSize: { xs: '0.65rem', sm: '0.85rem', md: '1.2rem' },
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  lineHeight: 1.2,
                  textAlign: 'center'
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
