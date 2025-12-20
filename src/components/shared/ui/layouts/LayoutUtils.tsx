import React, { ReactNode } from 'react';
import { 
  Box, 
  Container as MuiContainer, 
  Grid as MuiGrid, 
  Stack as MuiStack,
  useTheme
} from '@mui/material';
import { H1, H2, BodyText } from '../atoms';

interface PageLayoutProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'glassmorphism' | 'futuristic';
}

interface SectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'glassmorphism' | 'futuristic';
}

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}



// Componente Layout principal
const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  variant = 'default' 
}: PageLayoutProps) => {
  const theme = useTheme();

  const getLayoutStyles = () => {
    switch (variant) {
      case 'glassmorphism':
        return {
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        };
      case 'futuristic':
        return {
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1f2937 100%)',
          color: '#FFFFFF',
        };
      default:
        return {
          minHeight: '100vh',
          background: '#FFFFFF',
        };
    }
  };

  const getHeaderStyles = () => {
    switch (variant) {
      case 'glassmorphism':
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        };
      case 'futuristic':
        return {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        };
      default:
        return {
          background: '#FFFFFF',
          borderBottom: `1px solid ${theme.palette.divider}`,
        };
    }
  };

  return (
    <Box sx={getLayoutStyles()} className={className}>
      {(title || subtitle) && (
        <Box component="header" sx={getHeaderStyles()}>
                  <MuiContainer maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center' }}>
            {title && (
              <H1 sx={{ 
                mb: { xs: 4, md: 6 },
                color: variant === 'futuristic' ? '#FFFFFF' : '#000000',
              }}>
                {title}
              </H1>
            )}
            {subtitle && (
              <BodyText sx={{ 
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                color: variant === 'futuristic' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                maxWidth: 'md',
                mx: 'auto',
                lineHeight: 1.6,
              }}>
                {subtitle}
              </BodyText>
            )}
          </Box>
        </MuiContainer>
        </Box>
      )}
      <Box component="main" sx={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
    </Box>
  );
};

// Componente Section para organizar contenido
const Section = ({ 
  children, 
  title, 
  description, 
  className = '', 
  variant = 'default' 
}: SectionProps) => {
  const theme = useTheme();

  const getSectionStyles = () => {
    switch (variant) {
      case 'glassmorphism':
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: theme.spacing(4),
          padding: theme.spacing(4),
        };
      case 'futuristic':
        return {
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: theme.spacing(4),
          padding: theme.spacing(4),
        };
      default:
        return {
          background: theme.palette.background.paper,
          borderRadius: theme.spacing(2),
          border: `1px solid ${theme.palette.divider}`,
          padding: theme.spacing(3),
        };
    }
  };

  return (
    <Box sx={getSectionStyles()} className={className}>
      {(title || description) && (
        <Box sx={{ mb: 4 }}>
          {title && (
            <H2 sx={{ 
              mb: 2,
              background: 'linear-gradient(45deg, #FF5C00 30%, #FF7477 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {title}
            </H2>
          )}
          {description && (
            <BodyText sx={{ 
              fontSize: '1.125rem',
              color: variant === 'futuristic' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
              mb: 4,
            }}>
              {description}
            </BodyText>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
};

// Componente Container para centrar contenido
const Container = ({ 
  children, 
  className = '', 
  maxWidth = 'xl', 
  padding = 'lg' 
}: ContainerProps) => {
  const getPaddingStyles = () => {
    switch (padding) {
      case 'none': return {};
      case 'sm': return { px: 2, py: 2 };
      case 'md': return { px: 3, py: 3 };
      case 'lg': return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
      case 'xl': return { px: { xs: 2, sm: 3, lg: 4 }, py: 6 };
      default: return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
    }
  };

  return (
    <MuiContainer 
      maxWidth={maxWidth} 
      sx={getPaddingStyles()} 
      className={className}
    >
      {children}
    </MuiContainer>
  );
};

// Componente Grid para layouts responsivos
const Grid = ({ 
  children, 
  cols = 1, 
  gap = 'lg', 
  className = '' 
}: {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) => {
  const getGapStyles = () => {
    switch (gap) {
      case 'sm': return 2;
      case 'md': return 3;
      case 'lg': return 4;
      case 'xl': return 6;
      default: return 4;
    }
  };

  return (
    <MuiGrid 
      container 
      spacing={getGapStyles()} 
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MuiGrid 
          item 
          xs={12} 
          sm={cols >= 2 ? 6 : 12} 
          md={cols >= 3 ? 4 : cols >= 2 ? 6 : 12} 
          lg={cols >= 4 ? 3 : cols >= 3 ? 4 : cols >= 2 ? 6 : 12}
          xl={cols >= 6 ? 2 : cols >= 4 ? 3 : cols >= 3 ? 4 : cols >= 2 ? 6 : 12}
          key={index}
        >
          {child}
        </MuiGrid>
      ))}
    </MuiGrid>
  );
};

// Componente Stack para layouts verticales
const Stack = ({ 
  children, 
  spacing = 'md', 
  className = '' 
}: {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) => {
  const getSpacingStyles = () => {
    switch (spacing) {
      case 'sm': return 2;
      case 'md': return 3;
      case 'lg': return 4;
      case 'xl': return 6;
      default: return 3;
    }
  };

  return (
    <MuiStack 
      spacing={getSpacingStyles()} 
      className={className}
    >
      {children}
    </MuiStack>
  );
};

export { PageLayout, Section, Container, Grid, Stack };
export default PageLayout; 