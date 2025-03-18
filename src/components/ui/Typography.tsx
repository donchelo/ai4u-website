import React, { ReactNode } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

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

export const CodeText = (props: TypographyExtendedProps) => (
  <MuiTypography
    component="code"
    fontFamily="monospace"
    sx={{ 
      display: 'inline-block',
      backgroundColor: 'rgba(0,0,0,0.04)',
      borderRadius: 1,
      px: 0.5
    }}
    {...props}
  />
);

// Componente Typography general que permite seleccionar variante
export const Typography = ({ variant = 'body1', ...props }: TypographyExtendedProps) => {
  return <MuiTypography variant={variant} {...props} />;
};

export default Typography; 