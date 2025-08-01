import React from 'react';
import { Box, Container, useTheme, CircularProgress, Alert } from '@mui/material';
import { Gallery } from '../components/shared/ui/molecules';
import { AI4U_PALETTE } from '../components/shared/ui/tokens';
import { useGalleryImages } from '../hooks/useGalleryImages';

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const { images, isLoading, error, reload } = useGalleryImages();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Estado de carga */}
      {isLoading && (
        <Box display="flex" justifyContent="center" alignItems="center" py={8}>
          <CircularProgress size={60} sx={{ color: AI4U_PALETTE.neonBlaze }} />
        </Box>
      )}

      {/* Estado de error */}
      {error && (
        <Box mb={4}>
          <Alert 
            severity="error" 
            onClose={reload}
            sx={{ 
              borderRadius: '12px',
              '& .MuiAlert-message': {
                fontSize: '1rem',
              }
            }}
          >
            {error}
          </Alert>
        </Box>
      )}

      {/* Galería principal */}
      {!isLoading && !error && (
        <Gallery
          images={images}
          autoScroll={true}
          scrollInterval={4000}
        />
      )}
    </Container>
  );
};

export default GalleryPage; 