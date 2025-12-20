import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, useTheme, useMediaQuery, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { H1, BodyText, LazyImage } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';

interface HeroSectionProps {
  customTitle?: string;
  customSubtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  customTitle = 'Te devolvemos tu tiempo',
  customSubtitle = 'para que lo uses en lo que verdaderamente importa',
  primaryButtonText = 'Recupera tu tiempo',
  secondaryButtonText = 'Conoce más'
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

  const humanElementText = 'La parte humana detrás de la tecnología';
  const timeText = '30 minutos';
  const noCommitmentText = 'Sin compromiso';
  const immediateResultsText = 'Resultados inmediatos';

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
        bgcolor: colors.contrast.background,
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
            backgroundColor: alpha(colors.palette.black, 0.65),
            zIndex: 1
          }
        }}
      >
        {images.map((img, idx) => (
          <Box key={idx} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <LazyImage
              src={img}
              alt={`Background ${idx + 1}`}
              priority={idx === 0} // Primera imagen como prioritaria
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: idx === currentImage ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
                filter: 'brightness(0.5) contrast(1.1)'
              }}
            />
          </Box>
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
                color: colors.palette.white,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.25rem', lg: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                mb: { xs: 1, md: 1.5 }
              }}
            >
              {customTitle}
            </H1>
            
            <BodyText 
              sx={{ 
                color: alpha(colors.palette.white, 0.9),
                fontWeight: 500,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                lineHeight: 1.5,
                mb: { xs: 1, md: 2 },
                maxWidth: { xs: '95%', md: '100%' },
                textAlign: { xs: 'left', md: 'left' }
              }}
            >
              {customSubtitle}
            </BodyText>
            
            <BodyText 
              sx={{ 
                color: alpha(colors.palette.white, 0.8),
                fontWeight: 400,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                lineHeight: 1.5,
                mb: { xs: 2, md: 3 },
                maxWidth: { xs: '90%', md: '100%' },
                textAlign: { xs: 'left', md: 'left' }
              }}
            >
              {humanElementText}
            </BodyText>
            
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems={{ xs: 'flex-start', md: 'flex-start' }}
              alignSelf={{ xs: 'flex-start', md: 'flex-start' }}
            >
              <DiagnosticCTA 
                variant="primary" 
                text={primaryButtonText} 
                size="large"
                showIcon={false}
              />
              
              <Typography
                variant="body2"
                sx={{
                  color: alpha(colors.palette.white, 0.8),
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
                    backgroundColor: alpha(colors.palette.white, 0.5),
                    margin: '0 8px',
                  }
                }}
              >
                <span>{timeText}</span>
                <span>{noCommitmentText}</span>
                <span>{immediateResultsText}</span>
              </Typography>
            </Stack>
          </Stack>

          {/* Columna de imagen - Alineada a la derecha */}
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Imagen principal con glassmorfismo */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${alpha(colors.palette.white, 0.2)}`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              <LazyImage
                src={images[currentImage]}
                alt="Hero Image" 
                priority={true} // Hero image siempre prioritaria
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '24px',
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* Controles de navegación */}
      {!isMobile && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: alpha(colors.palette.white, 0.1),
              color: colors.palette.white,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(colors.palette.white, 0.2)}`,
              width: '48px',
              height: '48px',
              zIndex: 10,
              '&:hover': {
                backgroundColor: alpha(colors.palette.white, 0.2),
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: alpha(colors.palette.white, 0.1),
              color: colors.palette.white,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(colors.palette.white, 0.2)}`,
              width: '48px',
              height: '48px',
              zIndex: 10,
              '&:hover': {
                backgroundColor: alpha(colors.palette.white, 0.2),
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}

      {/* Indicadores de posición */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 10,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentImage 
                ? colors.palette.white 
                : alpha(colors.palette.white, 0.3),
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: index === currentImage 
                  ? colors.palette.white 
                  : alpha(colors.palette.white, 0.5),
              },
            }}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
