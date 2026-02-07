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
        minHeight: { xs: 'auto', md: '80vh' },
        maxHeight: { xs: '100vh', md: 'none' },
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: colors.palette.black,
        py: { xs: 2, sm: 3, md: 10 }
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
                opacity: idx === currentImage ? 0.55 : 0,
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
          px: { xs: 2, sm: 3, md: 12, lg: 20 },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 1.5, sm: 2, md: 8 }}
          alignItems="flex-start"
          sx={{ width: '100%', mx: 0 }}
        >
          <Box>
            <Giant 
              sx={{ 
                color: colors.palette.white,
                mb: { xs: 0.5, sm: 1, md: 3 },
                maxWidth: '1100px',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '5rem', lg: '7rem' },
                lineHeight: { xs: 1, sm: 0.95, md: 0.85 },
                letterSpacing: '-0.05em'
              }}
            >
              {customTitle}
            </Giant>
            
            <H1 
              sx={{ 
                color: colors.palette.white,
                maxWidth: '900px',
                mb: { xs: 1, sm: 1.5, md: 4 },
                opacity: 0.9,
                fontWeight: 300,
                fontSize: { xs: '0.75rem', sm: '1rem', md: '2.5rem' },
                lineHeight: { xs: 1.2, md: 1.1 }
              }}
            >
              {customSubtitle}
            </H1>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1.5, sm: 2, md: 4 }}
            alignItems="center"
          >
            <DiagnosticCTA 
              variant="primary" 
              text={primaryButtonText} 
              size="large"
              showIcon={false}
              sx={{ 
                height: { xs: '45px', sm: '60px', md: '100px' }, 
                px: { xs: 3, sm: 4, md: 8 }, 
                fontSize: { xs: '0.75rem', sm: '1rem', md: '1.6rem' },
                fontWeight: 900,
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
              borderLeft: { xs: `2px solid ${colors.palette.accentColors.orange}`, md: `4px solid ${colors.palette.accentColors.orange}` }, 
              pl: { xs: 1.5, sm: 2, md: 3 } 
            }}>
              <BodyText 
                sx={{ 
                  color: colors.palette.white,
                  fontWeight: 800,
                  fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1.4rem' },
                  letterSpacing: '0.08em',
                  textTransform: 'none',
                  lineHeight: 1.1
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
