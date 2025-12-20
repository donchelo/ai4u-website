import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGalleryImages } from '../../../../hooks';
import { BodyText } from '../atoms';

interface GalleryFrameProps {
  interval?: number;
  showNavigation?: boolean;
  showTitle?: boolean;
  frameStyle?: 'minimal' | 'glass' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const GalleryFrame: React.FC<GalleryFrameProps> = ({
  interval = 5000,
  showNavigation = true,
  showTitle = false,
  frameStyle = 'minimal',
  size = 'medium'
}) => {
  const navigate = useNavigate();
  const { images, isLoading } = useGalleryImages();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para obtener un índice aleatorio
  const getRandomIndex = useCallback(() => {
    if (images.length === 0) return 0;
    return Math.floor(Math.random() * images.length);
  }, [images.length]);

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    if (images.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(getRandomIndex());
      setIsTransitioning(false);
    }, 300);
  };

  // Función para cambiar a la imagen anterior
  const previousImage = () => {
    if (images.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(getRandomIndex());
      setIsTransitioning(false);
    }, 300);
  };

  // Efecto para cambiar imágenes automáticamente
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  // Efecto para establecer la primera imagen aleatoria
  useEffect(() => {
    if (images.length > 0 && currentImageIndex === 0) {
      setCurrentImageIndex(getRandomIndex());
    }
  }, [images, currentImageIndex, getRandomIndex]);

  if (isLoading || images.length === 0) {
    return (
      <Box
        sx={{
          width: size === 'small' ? 200 : size === 'medium' ? 300 : 400,
          height: size === 'small' ? 267 : size === 'medium' ? 400 : 533,
          borderRadius: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
          Cargando galería...
        </Typography>
      </Box>
    );
  }

  const currentImage = images[currentImageIndex];

  const frameStyles = {
    minimal: {
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    glass: {
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(15px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
    dark: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
    },
  };

  const sizeStyles = {
    small: {
      width: 200,
      height: 267,
    },
    medium: {
      width: 300,
      height: 400,
    },
    large: {
      width: 400,
      height: 533,
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        ...sizeStyles[size],
        borderRadius: '8px',
        overflow: 'hidden',
        ...frameStyles[frameStyle],
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Imagen principal */}
      <Box
        component="img"
        src={currentImage.src}
        alt={currentImage.alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: isTransitioning ? 0.7 : 1,
        }}
      />

      {/* Overlay con información */}
      {showTitle && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
            padding: '20px',
            color: 'white',
          }}
        >
          <BodyText
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '4px',
            }}
          >
            {currentImage.title}
          </BodyText>
          <BodyText
            sx={{
              fontSize: '0.8rem',
              opacity: 0.8,
            }}
          >
            Galería AI4U
          </BodyText>
        </Box>
      )}

      {/* Controles de navegación - solo si showNavigation es true */}
      {showNavigation && (
        <>
          <IconButton
            onClick={previousImage}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              width: 32,
              height: 32,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid currentColor',
              }}
            />
          </IconButton>

          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              width: 32,
              height: 32,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '8px solid currentColor',
              }}
            />
          </IconButton>

          {/* Indicador de galería - solo si showNavigation es true */}
          <Box
            onClick={() => navigate('/gallery')}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            {currentImageIndex + 1}/{images.length}
          </Box>
        </>
      )}
    </Box>
  );
};

export default GalleryFrame; 