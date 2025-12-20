import React from 'react';
import { Box, Skeleton, Container, Stack, useTheme } from '@mui/material';
import { Logo } from './index';

const LoadingScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          {/* Logo */}
          <Box sx={{ mb: 4 }}>
            <Logo />
          </Box>

          {/* Skeleton para hero section */}
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Skeleton 
              variant="rectangular" 
              height={400} 
              sx={{ 
                borderRadius: 2,
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
          </Box>

          {/* Skeleton para texto */}
          <Stack spacing={2} sx={{ width: '100%', maxWidth: 500 }}>
            <Skeleton 
              variant="text" 
              height={40} 
              width="80%" 
              sx={{ 
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Skeleton 
              variant="text" 
              height={24} 
              width="60%" 
              sx={{ 
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Skeleton 
              variant="text" 
              height={24} 
              width="70%" 
              sx={{ 
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
          </Stack>

          {/* Skeleton para botones */}
          <Stack direction="row" spacing={2}>
            <Skeleton 
              variant="rectangular" 
              height={48} 
              width={160} 
              sx={{ 
                borderRadius: 2,
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Skeleton 
              variant="rectangular" 
              height={48} 
              width={160} 
              sx={{ 
                borderRadius: 2,
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }} 
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoadingScreen; 