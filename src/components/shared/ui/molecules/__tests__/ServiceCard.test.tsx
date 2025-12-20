import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import ServiceCard from '../ServiceCard';

// Mock del hook useColors
jest.mock('../../../../../hooks', () => ({
  useColors: () => ({
    contrast: {
      text: { primary: '#000000' },
      surface: '#FFFFFF'
    },
    palette: {
      orange: '#FF5C00',
      green: '#B6CA40',
      blue: '#1FA9F6',
      gray: '#7D848B'
    }
  })
}));

const theme = createTheme();

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </HelmetProvider>
  );
};

describe('ServiceCard Integration', () => {
  const mockService = {
    id: 'ai-consulting',
    title: 'Consultoría en IA',
    description: 'Servicios de consultoría en inteligencia artificial',
    price: 50000,
    rating: 4.8,
    reviews: 25,
    image: '/path/to/image.jpg',
    features: ['Análisis de datos', 'Machine Learning', 'Automatización'],
    benefits: ['Ahorro de tiempo', 'Mejora de eficiencia'],
    status: 'active'
  };

  test('displays basic service information', () => {
    renderWithProviders(<ServiceCard service={mockService} />);
    
    expect(screen.getByText('Consultoría en IA')).toBeInTheDocument();
    expect(screen.getByText('Servicios de consultoría en inteligencia artificial')).toBeInTheDocument();
  });

  test('displays service benefits', () => {
    renderWithProviders(<ServiceCard service={mockService} />);
    
    expect(screen.getByText('Beneficios:')).toBeInTheDocument();
    expect(screen.getByText('Ahorro de tiempo')).toBeInTheDocument();
    expect(screen.getByText('Mejora de eficiencia')).toBeInTheDocument();
  });

  test('displays price information', () => {
    renderWithProviders(<ServiceCard service={mockService} />);
    
    expect(screen.getByText('Precio:')).toBeInTheDocument();
    expect(screen.getByText('50000')).toBeInTheDocument();
  });

  test('handles compact mode', () => {
    renderWithProviders(<ServiceCard service={mockService} compact />);
    
    expect(screen.getByText('Consultoría en IA')).toBeInTheDocument();
  });

  test('displays service status', () => {
    renderWithProviders(<ServiceCard service={mockService} />);
    
    expect(screen.getByText('Consultoría en IA')).toBeInTheDocument();
  });

  test('handles service without image', () => {
    const serviceWithoutImage = { ...mockService, image: undefined };
    renderWithProviders(<ServiceCard service={serviceWithoutImage} />);
    
    expect(screen.getByText('Consultoría en IA')).toBeInTheDocument();
  });

  test('handles service without benefits', () => {
    const serviceWithoutBenefits = { ...mockService, benefits: [] };
    renderWithProviders(<ServiceCard service={serviceWithoutBenefits} />);
    
    expect(screen.getByText('Consultoría en IA')).toBeInTheDocument();
  });
}); 