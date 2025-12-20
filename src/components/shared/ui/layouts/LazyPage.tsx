import React, { Suspense } from 'react';
import { Box, Skeleton, useTheme } from '@mui/material';
import { useColors } from '../../../../hooks';

interface LazyPageProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

const OptimizedFallback = () => {
  const theme = useTheme();
  const colors = useColors();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: 3,
        padding: 4,
        background: `linear-gradient(135deg, ${colors.contrast.surface} 0%, ${colors.contrast.background} 100%)`,
      }}
    >
      {/* Skeleton optimizado para mejor UX */}
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Skeleton 
          variant="rectangular" 
          height={300} 
          sx={{ 
            borderRadius: 2,
            mb: 2,
            bgcolor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.1)'
          }} 
        />
        <Skeleton 
          variant="text" 
          height={40} 
          width="80%" 
          sx={{ 
            mb: 1,
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
            mb: 1,
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
      </Box>
    </Box>
  );
};

const LazyPage: React.FC<LazyPageProps> = ({ 
  children, 
  fallback = <OptimizedFallback /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyPage; 