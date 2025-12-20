import React, { ReactNode } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps, useTheme } from '@mui/material';
import { TEXT_VARIANTS } from '../tokens/typography';

interface TypographyExtendedProps extends MuiTypographyProps {
  children?: ReactNode;
}

// Componentes de tipografía minimalistas usando nuevos tokens
export const H1 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h1" 
    sx={{
      fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
      fontWeight: 300,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      ...props.sx
    }}
    {...props} 
  />
);

export const H2 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h2" 
    sx={{
      fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      ...props.sx
    }}
    {...props} 
  />
);

export const H3 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h3" 
    sx={{
      fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
      fontWeight: 500,
      lineHeight: 1.3,
      ...props.sx
    }}
    {...props} 
  />
);

export const H4 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h4" 
    sx={{
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      fontWeight: 500,
      lineHeight: 1.4,
      ...props.sx
    }}
    {...props} 
  />
);

export const H5 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h5" 
    sx={{
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
      ...props.sx
    }}
    {...props} 
  />
);

export const H6 = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="h6" 
    sx={{
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      ...props.sx
    }}
    {...props} 
  />
);

export const BodyText = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="body1" 
    sx={{
      fontSize: { xs: '1rem', md: '1.125rem' },
      fontWeight: 400,
      lineHeight: 1.6,
      ...props.sx
    }}
    {...props} 
  />
);

export const SmallText = (props: TypographyExtendedProps) => (
  <MuiTypography 
    variant="body2" 
    sx={{
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      ...props.sx
    }}
    {...props} 
  />
);

export const CodeText = (props: TypographyExtendedProps) => {
  const theme = useTheme();
  
  return (
    <MuiTypography
      component="code"
      fontFamily="monospace"
      sx={{ 
        display: 'inline-block',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
        color: theme.palette.mode === 'dark' ? 'primary.light' : 'text.primary',
        borderRadius: 1,
        px: 0.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.4,
        ...props.sx
      }}
      {...props}
    />
  );
};

// Componente Typography general que permite seleccionar variante
export const Typography = ({ variant = 'body1', ...props }: TypographyExtendedProps) => {
  return <MuiTypography variant={variant} {...props} />;
};

export default Typography; 