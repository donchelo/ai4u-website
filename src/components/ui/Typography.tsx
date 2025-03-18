import React, { ReactNode } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps, useTheme } from '@mui/material';

interface TypographyExtendedProps extends MuiTypographyProps {
  children?: ReactNode;
}

// Componentes de tipografía usando Material UI
export const H1 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h1" {...props} />
);

export const H2 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h2" {...props} />
);

export const H3 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h3" {...props} />
);

export const BodyText = (props: TypographyExtendedProps) => (
  <MuiTypography variant="body1" {...props} />
);

export const SmallText = (props: TypographyExtendedProps) => (
  <MuiTypography variant="body2" {...props} />
);

export const CodeText = (props: TypographyExtendedProps) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <MuiTypography
      component="code"
      fontFamily="monospace"
      sx={{ 
        display: 'inline-block',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
        color: isDarkMode ? theme.palette.primary.light : 'inherit',
        borderRadius: 1,
        px: 0.5
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