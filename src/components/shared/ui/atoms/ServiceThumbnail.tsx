import React from 'react';
import { Box } from '@mui/material';
import { useColors } from '../../../../hooks';

interface ServiceThumbnailProps {
  serviceId: string;
  serviceColor?: string;
  size?: 'small' | 'medium' | 'large' | 'full-width';
  className?: string;
  customThumbnail?: string; // Path al thumbnail personalizado
}

const ServiceThumbnail = ({
  serviceId,
  serviceColor,
  size = 'medium',
  className,
  customThumbnail
}: ServiceThumbnailProps): JSX.Element => {
  const colors = useColors();
  
  const sizeMap = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    'full-width': { width: '100%', height: 'auto', aspectRatio: '1/1' }
  };

  const currentSize = sizeMap[size];
  const color = serviceColor || colors.palette.accent;

  // Generar un patrón único basado en el serviceId
  const generatePattern = (id: string) => {
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const patterns = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${color}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${color}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${color}80"/>`,
      
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${color}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${color}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${color}80" rx="2"/>`,
      
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${color}40"/>
       <polygon points="70,60 90,80 50,80" fill="${color}60"/>
       <polygon points="20,70 30,90 10,90" fill="${color}80"/>`,
      
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${color}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${color}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${color}80" stroke-width="4"/>`
    ];
    
    return patterns[hash % patterns.length];
  };

  const pattern = generatePattern(serviceId);

  // Si hay un thumbnail personalizado, mostrarlo
  if (customThumbnail) {
    return (
      <Box
        className={className}
        sx={{
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          border: `1px solid ${color}20`,
          transition: 'all 0.3s ease',
          ...(size !== 'full-width' && {
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: `0 8px 25px ${color}30`,
              borderColor: `${color}40`
            }
          })
        }}
      >
        <img
          src={customThumbnail}
          alt={`Thumbnail para ${serviceId}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        {/* Overlay sutil para mantener consistencia */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${color}10 0%, transparent 100%)`,
            pointerEvents: 'none'
          }}
        />
      </Box>
    );
  }

  // Thumbnail generativo por defecto
  return (
    <Box
      className={className}
      sx={{
        width: currentSize.width,
        height: currentSize.height,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`,
        border: `1px solid ${color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        ...(size !== 'full-width' && {
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 8px 25px ${color}30`,
            borderColor: `${color}40`
          }
        })
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <defs>
          <linearGradient id={`gradient-${serviceId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`${color}20`} />
            <stop offset="100%" stopColor={`${color}10`} />
          </linearGradient>
        </defs>
        
        {/* Fondo con gradiente */}
        <rect width="100%" height="100%" fill={`url(#gradient-${serviceId})`} />
        
        {/* Patrón generativo */}
        <g dangerouslySetInnerHTML={{ __html: pattern }} />
        
        {/* Overlay sutil */}
        <rect 
          width="100%" 
          height="100%" 
          fill="none" 
          stroke={`${color}30`} 
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>
      
      {/* Texto del servicio (opcional para thumbnails pequeños) */}
      {size === 'large' && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            right: 8,
            textAlign: 'center',
            zIndex: 2
          }}
        >
          <Box
            sx={{
              fontSize: '0.6rem',
              fontWeight: 400,
              color: color,
              textTransform: 'none',
              letterSpacing: '0.5px',
              background: 'rgba(255,255,255,0.9)',
              padding: '2px 6px',
              borderRadius: 1,
              backdropFilter: 'blur(4px)'
            }}
          >
            {serviceId.split('-').slice(0, 2).join(' ')}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ServiceThumbnail;
