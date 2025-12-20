import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../SEOHead';

const renderWithHelmet = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('SEOHead Component', () => {
  test('renders without crashing', () => {
    renderWithHelmet(
      <SEOHead 
        title="Test Page"
        description="Test description"
      />
    );
    
    // Verificar que el componente se renderiza sin errores
    expect(document.querySelector('head')).toBeInTheDocument();
  });

  test('renders with all props', () => {
    renderWithHelmet(
      <SEOHead 
        title="AI4U - Test Page"
        description="This is a test description for SEO"
        keywords="test, ai4u, seo"
        canonical="https://ai4u.com.co/test-page"
        ogImage="https://ai4u.com.co/og-image.jpg"
        twitterImage="https://ai4u.com.co/twitter-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Test Page"
        }}
      />
    );
    
    // Verificar que el componente se renderiza sin errores
    expect(document.querySelector('head')).toBeInTheDocument();
  });

  test('renders with minimal props', () => {
    renderWithHelmet(
      <SEOHead 
        title="Minimal Test"
        description="Minimal description"
      />
    );
    
    // Verificar que el componente se renderiza sin errores
    expect(document.querySelector('head')).toBeInTheDocument();
  });

  test('handles missing optional props', () => {
    renderWithHelmet(
      <SEOHead 
        title="Test Page"
        description="Test description"
      />
    );
    
    // Verificar que el componente se renderiza sin errores
    expect(document.querySelector('head')).toBeInTheDocument();
  });
}); 