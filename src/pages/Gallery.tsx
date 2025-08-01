import React from 'react';
import { Box, Container, useTheme, CircularProgress, Alert } from '@mui/material';
import { Gallery } from '../components/shared/ui/molecules';
import { H1, BodyText } from '../components/shared/ui/atoms';
import { AI4U_PALETTE } from '../components/shared/ui/tokens';
import { useGalleryImages } from '../hooks/useGalleryImages';

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const { images, isLoading, error, reload } = useGalleryImages();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header de la página */}
      <Box 
        textAlign="center" 
        mb={6}
        sx={{
          background: `linear-gradient(135deg, ${AI4U_PALETTE.lightBackground} 0%, ${AI4U_PALETTE.lightPaper} 100%)`,
          borderRadius: '16px',
          padding: '3rem 2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <H1 
          color="primary" 
          gutterBottom
          sx={{
            background: `linear-gradient(135deg, ${AI4U_PALETTE.neonBlaze}, ${AI4U_PALETTE.digitalCoral})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
          }}
        >
          Galería AI4U
        </H1>
        <BodyText 
          variant="h6" 
          color="text.secondary"
          sx={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          Descubre nuestra colección visual que representa la innovación, 
          la tecnología y la excelencia que define a AI4U
        </BodyText>
      </Box>

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
          title="Nuestra Colección Visual"
          subtitle="Cada imagen cuenta una historia de innovación y progreso"
          autoScroll={true}
          scrollInterval={4000}
          showNavigation={true}
          showProgress={true}
        />
      )}

      {/* Información adicional */}
      <Box 
        mt={6} 
        textAlign="center"
        sx={{
          background: `linear-gradient(135deg, ${AI4U_PALETTE.frostSignal} 0%, ${AI4U_PALETTE.lightPaper} 100%)`,
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <BodyText variant="h6" color="text.primary" gutterBottom>
          Galería Automática
        </BodyText>
        <BodyText color="text.secondary">
          Esta galería muestra las imágenes principales del proyecto AI4U y las imágenes 
          que agregues a la carpeta gallery. Para agregar nuevas imágenes:
        </BodyText>
        <BodyText color="text.secondary" sx={{ mt: 2 }}>
          <strong>Paso 1:</strong> Coloca tus imágenes en la carpeta 
          <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', margin: '0 4px' }}>
            assets/images/gallery/
          </code>
        </BodyText>
        <BodyText color="text.secondary" sx={{ mt: 1 }}>
          <strong>Paso 2:</strong> Agrega los nombres de archivo en la función 
          <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', margin: '0 4px' }}>
            getGalleryImages()
          </code>
          en el archivo useGalleryImages.ts
        </BodyText>
        <BodyText color="text.secondary" sx={{ mt: 1 }}>
          <strong>Ejemplo:</strong> Si agregas 'mi-foto.jpg', añade 'gallery/mi-foto.jpg' al array
        </BodyText>
      </Box>
    </Container>
  );
};

export default GalleryPage; 