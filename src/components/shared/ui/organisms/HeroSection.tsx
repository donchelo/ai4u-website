import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Giant, H1, BodyText, LazyImage, CodeText } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';
import { TEXT_VARIANTS } from '../tokens/typography';
import { AI4U_PALETTE } from '../tokens/palette';

interface HeroSectionProps {
  customTitle?: string;
  customSubtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  sx?: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  customTitle = 'Tu tiempo es oro',
  customSubtitle = 'IA que potencia tu productividad.',
  primaryButtonText = 'Recupera tu tiempo',
  secondaryButtonText = 'Calcula tu ROI',
  sx
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
        justifyContent: 'flex-start',
        bgcolor: colors.contrast.background,
        py: { xs: 4, sm: 6, md: 12 },
        ...sx
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
            backgroundColor: alpha(colors.contrast.background, 0.6),
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
                opacity: idx === currentImage ? 0.5 : 0,
                transition: 'opacity 1.5s ease-in-out, transform 10s ease-out',
                filter: 'grayscale(100%) contrast(1.2)',
                transform: idx === currentImage ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          </Box>
        ))}
      </Box>


      {/* Binary Overlay Pattern */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        opacity: 0.05, 
        overflow: 'hidden',
        pointerEvents: 'none',
        fontFamily: 'monospace',
        fontSize: '10px',
        lineHeight: 1,
        wordBreak: 'break-all',
        userSelect: 'none',
        zIndex: 1
      }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <Box key={i}>{Math.random().toString(2).slice(2)}</Box>
        ))}
      </Box>

      {/* Industrial Metadata */}
      <Box sx={{ position: 'absolute', bottom: 20, right: 40, textAlign: 'right', opacity: 0.3, zIndex: 6 }}>
        <CodeText sx={{ fontSize: '0.6rem' }}>COORD: 6.2442° N, 75.5812° W</CodeText>
        <CodeText sx={{ fontSize: '0.6rem' }}>SYS_LOAD: {(Math.random() * 100).toFixed(2)}%</CodeText>
      </Box>

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative',
          zIndex: 5,
          px: { xs: 2, sm: 3, md: 10, lg: 15 },
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems="flex-start"
          sx={{ width: '100%', maxWidth: '900px', textAlign: 'left' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box 
              sx={{ 
                border: `1px solid ${colors.contrast.text.primary}`, 
                color: colors.contrast.text.primary,
                px: 2,
                py: 0.5,
                mb: 4,
                ...TEXT_VARIANTS.ui.code,
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}
            >
              strategySystemV2.0
            </Box>
            <Giant 
              sx={{ 
                color: colors.contrast.text.primary,
                mb: { xs: 1, sm: 1.5, md: 2 },
                maxWidth: '850px',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '6rem', lg: '8rem' },
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                textAlign: 'left',
                fontWeight: 400
              }}
            >
              {customTitle}
            </Giant>
            
            <H1 
              sx={{ 
                color: colors.contrast.text.primary,
                maxWidth: '600px',
                mb: { xs: 4, sm: 5, md: 6 },
                opacity: 0.9,
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '2rem' },
                lineHeight: 1.1,
                textAlign: 'left',
                borderLeft: `4px solid ${colors.contrast.text.primary}`,
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
              text="Recuperar tiempo" 
              size="large"
              showIcon={false}
              sx={{ 
                height: { xs: '55px', md: '90px' }, 
                px: { xs: 4, md: 8 }, 
                fontSize: { xs: '0.9rem', md: '1.5rem' },
                fontWeight: 400,
                borderRadius: 0,
                bgcolor: colors.contrast.text.primary,
                color: colors.contrast.background,
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.contrast.text.primary,
                  opacity: 0.9,
                  transform: 'scale(1.02)'
                }
              }}
            />
            
            <Box sx={{ 
              pt: { xs: 1, md: 2 },
              position: 'relative'
            }}>
              <BodyText 
                sx={{ 
                  color: colors.contrast.text.primary,
                  fontWeight: 400,
                  fontSize: { xs: '0.8rem', md: '1.2rem' },
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  lineHeight: 1.2,
                  textAlign: 'left',
                  opacity: 0.6
                }}
              >
                // {humanElementText.toLowerCase().replace(/\s+/g, '')}
              </BodyText>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
