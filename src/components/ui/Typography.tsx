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

export const H4 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h4" {...props} />
);

export const H5 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h5" {...props} />
);

export const H6 = (props: TypographyExtendedProps) => (
  <MuiTypography variant="h6" {...props} />
);

export const BodyText = (props: TypographyExtendedProps) => (
  <MuiTypography variant="body1" {...props} />
);

export const SmallText = (props: TypographyExtendedProps) => (
  <MuiTypography variant="body2" {...props} />
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