import React, { ReactNode } from 'react';
import { H1, H2, H3, BodyText } from './Typography';

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
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
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
  const getLayoutClasses = () => {
    switch (variant) {
      case 'glassmorphism':
        return "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100";
      case 'futuristic':
        return "min-h-screen bg-gradient-to-br from-graphene-black to-gray-900 text-white";
      default:
        return "min-h-screen bg-white";
    }
  };

  const getHeaderClasses = () => {
    switch (variant) {
      case 'glassmorphism':
        return "relative bg-white/20 backdrop-blur-xl border-b border-white/30";
      case 'futuristic':
        return "relative bg-black/20 backdrop-blur-xl border-b border-white/15";
      default:
        return "bg-white border-b border-gray-200";
    }
  };

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {(title || subtitle) && (
        <header className={getHeaderClasses()}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              {title && (
                <H1 className="mb-6 bg-gradient-to-r from-neon-blaze to-digital-coral bg-clip-text text-transparent">
                  {title}
                </H1>
              )}
              {subtitle && (
                <BodyText className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {subtitle}
                </BodyText>
              )}
            </div>
          </div>
        </header>
      )}
      <main className="flex flex-col">{children}</main>
    </div>
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
  const getSectionClasses = () => {
    switch (variant) {
      case 'glassmorphism':
        return "relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8";
      case 'futuristic':
        return "relative bg-black/20 backdrop-blur-xl border border-white/15 rounded-3xl p-8";
      default:
        return "bg-white rounded-lg border border-gray-200 p-6";
    }
  };

  return (
    <section className={`${getSectionClasses()} ${className}`}>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <H2 className="mb-4 bg-gradient-to-r from-neon-blaze to-digital-coral bg-clip-text text-transparent">
              {title}
            </H2>
          )}
          {description && (
            <BodyText className="text-lg text-gray-600 mb-8">
              {description}
            </BodyText>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

// Componente Container para centrar contenido
const Container = ({ 
  children, 
  className = '', 
  maxWidth = '7xl', 
  padding = 'lg' 
}: ContainerProps) => {
  const getMaxWidthClasses = () => {
    switch (maxWidth) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      case '7xl': return 'max-w-7xl';
      default: return 'max-w-7xl';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none': return '';
      case 'sm': return 'px-4 py-4';
      case 'md': return 'px-6 py-6';
      case 'lg': return 'px-4 sm:px-6 lg:px-8 py-8';
      case 'xl': return 'px-4 sm:px-6 lg:px-8 py-12';
      default: return 'px-4 sm:px-6 lg:px-8 py-8';
    }
  };

  return (
    <div className={`${getMaxWidthClasses()} mx-auto ${getPaddingClasses()} ${className}`}>
      {children}
    </div>
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
  const getColsClasses = () => {
    switch (cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 6: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
      case 12: return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12';
      default: return 'grid-cols-1';
    }
  };

  const getGapClasses = () => {
    switch (gap) {
      case 'sm': return 'gap-4';
      case 'md': return 'gap-6';
      case 'lg': return 'gap-8';
      case 'xl': return 'gap-12';
      default: return 'gap-8';
    }
  };

  return (
    <div className={`grid ${getColsClasses()} ${getGapClasses()} ${className}`}>
      {children}
    </div>
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
  const getSpacingClasses = () => {
    switch (spacing) {
      case 'sm': return 'space-y-4';
      case 'md': return 'space-y-6';
      case 'lg': return 'space-y-8';
      case 'xl': return 'space-y-12';
      default: return 'space-y-6';
    }
  };

  return (
    <div className={`${getSpacingClasses()} ${className}`}>
      {children}
    </div>
  );
};

export { PageLayout, Section, Container, Grid, Stack };
export default PageLayout; 