import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight, Close, ZoomIn } from '@mui/icons-material';
import { AI4U_PALETTE, SHADOW_TOKENS, TRANSITION_TOKENS } from '../tokens';
import { H2, BodyText } from '../atoms';

// Estilos para el contenedor principal de la galería
const GalleryContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '3rem 0',
  backgroundColor: AI4U_PALETTE.lightBackground,
  overflow: 'hidden',
  '&.dark': {
    backgroundColor: AI4U_PALETTE.darkBackground,
  },
}));

// Estilos para el contenedor de imágenes con scroll horizontal
const ImageScrollContainer = styled(Box)({
  display: 'flex',
  gap: '2rem',
  padding: '0 3rem',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

// Estilos para cada imagen de la galería
const GalleryImage = styled('img')(({ theme }) => ({
  width: '500px',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: TRANSITION_TOKENS.common.hover,
  boxShadow: SHADOW_TOKENS.lg,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: SHADOW_TOKENS.xl,
  },
}));

const ModalImage = styled('img')({
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
  borderRadius: '8px',
});

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: AI4U_PALETTE.lightPaper,
  borderRadius: '16px',
  padding: '20px',
  boxShadow: SHADOW_TOKENS.lg,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
}));

const ModalOverlay = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 1300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Función para hacer scroll a una imagen específica
  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = 500 + 24; // ancho de imagen + gap
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
      const imageWidth = 500 + 24;
      const newIndex = Math.round(scrollLeft / imageWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Pausar auto-scroll al hacer hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(autoScroll);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleModalImageClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

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
    <>
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
              <Box
                key={image.id}
                                 sx={{
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   gap: 1,
                   minWidth: '520px',
                   padding: '24px',
                 }}
              >
                                 <Box position="relative">
                   <GalleryImage
                     src={image.src}
                     alt={image.alt}
                     onClick={() => handleImageClick(image)}
                   />
                   <IconButton
                     size="small"
                     sx={{
                       position: 'absolute',
                       top: '8px',
                       right: '8px',
                       backgroundColor: 'rgba(255, 255, 255, 0.9)',
                       '&:hover': {
                         backgroundColor: 'rgba(255, 255, 255, 1)',
                       },
                     }}
                     onClick={() => handleImageClick(image)}
                   >
                     <ZoomIn fontSize="small" />
                   </IconButton>
                 </Box>
              </Box>
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

      {/* Modal para imagen en tamaño completo */}
      {selectedImage && (
        <ModalOverlay onClick={handleCloseModal}>
                       <ModalContent onClick={handleModalImageClick}>
               <Box
                 sx={{
                   display: 'flex',
                   justifyContent: 'flex-end',
                   width: '100%',
                   marginBottom: 2,
                 }}
               >
                 <IconButton
                   onClick={handleCloseModal}
                   sx={{
                     color: AI4U_PALETTE.grapheneBlack,
                     '&:hover': {
                       backgroundColor: 'rgba(0, 0, 0, 0.1)',
                     },
                   }}
                 >
                   <Close />
                 </IconButton>
               </Box>
               
               <ModalImage
                 src={selectedImage.src}
                 alt={selectedImage.alt}
               />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Gallery; 