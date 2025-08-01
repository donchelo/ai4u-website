import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { AI4U_PALETTE, SHADOW_TOKENS, TRANSITION_TOKENS } from '../tokens';
import { H2, BodyText } from '../atoms';

// Estilos para el contenedor principal de la galería
const GalleryContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '2rem 0',
  backgroundColor: AI4U_PALETTE.lightBackground,
  overflow: 'hidden',
  '&.dark': {
    backgroundColor: AI4U_PALETTE.darkBackground,
  },
}));

// Estilos para el contenedor de imágenes con scroll horizontal
const ImageScrollContainer = styled(Box)({
  display: 'flex',
  gap: '1.5rem',
  padding: '0 2rem',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

// Estilos para cada imagen de la galería
const GalleryImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: '300px',
  height: '400px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: SHADOW_TOKENS.ai4u.card,
  transition: TRANSITION_TOKENS.common.card,
  cursor: 'pointer',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: SHADOW_TOKENS.lg,
  },
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: TRANSITION_TOKENS.common.hover,
  },
  
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

// Estilos para los botones de navegación
const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: AI4U_PALETTE.neonBlaze,
  color: AI4U_PALETTE.lightBackground,
  boxShadow: SHADOW_TOKENS.ai4u.button,
  zIndex: 10,
  
  '&:hover': {
    backgroundColor: AI4U_PALETTE.neonBlaze,
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: SHADOW_TOKENS.ai4u.glow,
  },
  
  '&.prev': {
    left: '1rem',
  },
  
  '&.next': {
    right: '1rem',
  },
}));

// Estilos para el overlay de información
const ImageOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
  color: AI4U_PALETTE.lightBackground,
  padding: '1rem',
  transform: 'translateY(100%)',
  transition: TRANSITION_TOKENS.common.hover,
});

// Estilos para el indicador de progreso
const ProgressIndicator = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
});

const ProgressDot = styled(Box)<{ active: boolean }>(({ active }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: active ? AI4U_PALETTE.neonBlaze : AI4U_PALETTE.techSlate,
  transition: TRANSITION_TOKENS.common.hover,
}));

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  autoScroll?: boolean;
  scrollInterval?: number;
  showNavigation?: boolean;
  showProgress?: boolean;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  title = 'Galería AI4U',
  subtitle = 'Descubre nuestra colección visual',
  autoScroll = true,
  scrollInterval = 5000,
  showNavigation = true,
  showProgress = true,
  className = '',
}) => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);

  // Función para hacer scroll a una imagen específica
  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = 300 + 24; // ancho de imagen + gap
      container.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  // Función para navegar al siguiente
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToImage(nextIndex);
  };

  // Función para navegar al anterior
  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    scrollToImage(prevIndex);
  };

  // Auto-scroll automático
  useEffect(() => {
    if (!isAutoScrolling || !autoScroll) return;

    const interval = setInterval(() => {
      handleNext();
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling, autoScroll, scrollInterval]);

  // Detectar scroll manual
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const imageWidth = 300 + 24;
      const newIndex = Math.round(scrollLeft / imageWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Pausar auto-scroll al hacer hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(autoScroll);

  if (!images || images.length === 0) {
    return (
      <GalleryContainer className={className}>
        <Box textAlign="center" py={4}>
          <H2>No hay imágenes disponibles</H2>
          <BodyText>La galería se actualizará automáticamente cuando se agreguen imágenes</BodyText>
        </Box>
      </GalleryContainer>
    );
  }

  return (
    <GalleryContainer 
      className={`${className} ${theme.palette.mode === 'dark' ? 'dark' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Título de la sección */}
      <Box textAlign="center" mb={4}>
        <H2 color="primary" gutterBottom>
          {title}
        </H2>
        <BodyText color="text.secondary">
          {subtitle}
        </BodyText>
      </Box>

      {/* Contenedor de imágenes con scroll */}
      <Box position="relative">
        <ImageScrollContainer ref={scrollContainerRef}>
          {images.map((image, index) => (
            <GalleryImage key={image.id}>
              <img src={image.src} alt={image.alt} />
              {(image.title || image.description) && (
                <ImageOverlay>
                  {image.title && (
                    <BodyText variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {image.title}
                    </BodyText>
                  )}
                  {image.description && (
                    <BodyText variant="body2" sx={{ opacity: 0.9 }}>
                      {image.description}
                    </BodyText>
                  )}
                </ImageOverlay>
              )}
            </GalleryImage>
          ))}
        </ImageScrollContainer>

        {/* Botones de navegación */}
        {showNavigation && images.length > 1 && (
          <>
            <NavigationButton
              className="prev"
              onClick={handlePrev}
              size="large"
            >
              <ChevronLeft />
            </NavigationButton>
            <NavigationButton
              className="next"
              onClick={handleNext}
              size="large"
            >
              <ChevronRight />
            </NavigationButton>
          </>
        )}
      </Box>

      {/* Indicador de progreso */}
      {showProgress && images.length > 1 && (
        <ProgressIndicator>
          {images.map((_, index) => (
            <ProgressDot
              key={index}
              active={index === currentIndex}
              onClick={() => scrollToImage(index)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </ProgressIndicator>
      )}
    </GalleryContainer>
  );
};

export default Gallery; 