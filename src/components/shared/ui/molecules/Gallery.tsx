import React, { useState, useEffect } from 'react';
import { Box, Container, useTheme, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { AI4U_PALETTE } from '../tokens';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  autoScroll?: boolean;
  scrollInterval?: number;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  autoScroll = true,
  scrollInterval = 5000,
  className = '',
}) => {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para obtener un índice aleatorio
  const getRandomIndex = () => {
    if (images.length === 0) return 0;
    return Math.floor(Math.random() * images.length);
  };

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    if (images.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Función para cambiar a la imagen anterior
  const previousImage = () => {
    if (images.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  // Función para manejar navegación con teclado
  const handleKeyDown = (event: KeyboardEvent) => {
    if (images.length <= 1) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        previousImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextImage();
        break;
      default:
        break;
    }
  };

  // Auto-scroll automático
  useEffect(() => {
    if (!autoScroll || images.length === 0) return;

    const interval = setInterval(() => {
      nextImage();
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [images, autoScroll, scrollInterval]);

  // Efecto para establecer la primera imagen aleatoria
  useEffect(() => {
    if (images.length > 0 && currentImageIndex === 0) {
      setCurrentImageIndex(getRandomIndex());
    }
  }, [images]);

  // Efecto para escuchar eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images, currentImageIndex]);

  if (!images || images.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box 
          textAlign="center" 
          sx={{
            background: `linear-gradient(135deg, ${AI4U_PALETTE.lightBackground} 0%, ${AI4U_PALETTE.lightPaper} 100%)`,
            borderRadius: '24px',
            padding: '4rem 2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Box
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
            No hay imágenes disponibles
          </Box>
        </Box>
      </Container>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Galería cinematográfica */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          padding: '2rem 0',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.01)',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {/* Imagen cinematográfica */}
          <Box
            component="img"
            src={currentImage.src}
            alt={currentImage.alt}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
              display: 'block',
              transition: 'opacity 0.4s ease',
              opacity: isTransitioning ? 0.7 : 1,
              minHeight: '300px',
              maxWidth: '100%',
            }}
          />

          {/* Navegación sutil y minimalista */}
          {images.length > 1 && (
            <>
              {/* Botón anterior */}
              <IconButton
                onClick={previousImage}
                sx={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '48px',
                  height: '48px',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              >
                <ChevronLeft sx={{ fontSize: '1.5rem' }} />
              </IconButton>

              {/* Botón siguiente */}
              <IconButton
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '48px',
                  height: '48px',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              >
                <ChevronRight sx={{ fontSize: '1.5rem' }} />
              </IconButton>

              {/* Indicador sutil de posición */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: index === currentImageIndex 
                        ? 'rgba(255, 255, 255, 0.9)' 
                        : 'rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: index === currentImageIndex 
                          ? 'rgba(255, 255, 255, 1)' 
                          : 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Gallery; 