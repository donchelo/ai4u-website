import React, { useState, useEffect, useCallback } from 'react';
import { 
  Container, 
  Box, 
  IconButton, 
  Typography
} from '@mui/material';
import { useColors } from '../../../../hooks';
import { useLanguage } from '../../../../hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const colors = useColors();
  const { t } = useLanguage();

  const getRandomIndex = useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentImageIndex && images.length > 1);
    return newIndex;
  }, [currentImageIndex, images.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 200);
  };

  const previousImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 200);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      previousImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === ' ') {
      event.preventDefault();
      setIsAutoScrolling(!isAutoScrolling);
    }
  }, [isAutoScrolling]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!isAutoScrolling || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(getRandomIndex());
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isAutoScrolling, scrollInterval, images.length, getRandomIndex]);

  if (!images || images.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box 
          textAlign="center" 
          sx={{
            background: `linear-gradient(135deg, ${colors.contrast.surface} 0%, ${colors.contrast.background} 100%)`,
            borderRadius: '24px',
            padding: '4rem 2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.contrast.border}`,
          }}
        >
          <Box
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: colors.contrast.text.secondary,
            }}
          >
            {t('gallery.noImages')}
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
            maxWidth: { xs: '100%', lg: '1200px' }, // Use theme breakpoints instead of hardcoded values
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
                aria-label={t('gallery.navigation.previous')}
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
                <NavigateBeforeIcon />
              </IconButton>

              {/* Botón siguiente */}
              <IconButton
                onClick={nextImage}
                aria-label={t('gallery.navigation.next')}
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
                <NavigateNextIcon />
              </IconButton>

              {/* Controles de reproducción */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '24px',
                  padding: '0.5rem 1rem',
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
                <IconButton
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  aria-label={isAutoScrolling ? t('gallery.navigation.pause') : t('gallery.navigation.play')}
                  sx={{
                    color: 'white',
                    padding: '4px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {isAutoScrolling ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                
                <Typography
                  variant="caption"
                  sx={{
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    minWidth: '60px',
                    textAlign: 'center',
                  }}
                >
                  {currentImageIndex + 1} / {images.length}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Información de la imagen */}
      {currentImage.title && (
        <Box
          sx={{
            textAlign: 'center',
            mt: 3,
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: colors.contrast.text.primary,
              fontWeight: 600,
              mb: 1,
            }}
          >
            {currentImage.title}
          </Typography>
          {currentImage.description && (
            <Typography
              variant="body2"
              sx={{
                color: colors.contrast.text.secondary,
                maxWidth: { xs: '100%', sm: '600px' }, // Use theme breakpoints
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {currentImage.description}
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Gallery; 