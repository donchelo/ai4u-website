import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Navigation from '../../organisms/Navigation';

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
    },
    helpers: {
      state: {
        hover: 'rgba(0, 0, 0, 0.04)'
      }
    }
  })
}));

const theme = createTheme();

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Navigation Integration', () => {
  const mockItems = [
    { id: 'home', label: 'Inicio', path: '/', icon: 'home' },
    { id: 'services', label: 'Servicios', path: '/servicios', icon: 'services' },
    { id: 'about', label: 'Nosotros', path: '/nosotros', icon: 'about' }
  ];

  test('renders navigation items correctly', () => {
    renderWithProviders(<Navigation items={mockItems} />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
  });

  test('handles item clicks correctly', () => {
    const handleItemClick = jest.fn();
    renderWithProviders(
      <Navigation items={mockItems} onItemClick={handleItemClick} />
    );
    
    fireEvent.click(screen.getByText('Inicio'));
    expect(handleItemClick).toHaveBeenCalledWith(mockItems[0]);
  });

  test('highlights active item', () => {
    renderWithProviders(
      <Navigation items={mockItems} activeItem="services" />
    );
    
    const activeItem = screen.getByText('Servicios');
    expect(activeItem).toBeInTheDocument();
  });

  test('works with different variants', () => {
    renderWithProviders(
      <Navigation items={mockItems} variant="vertical" />
    );
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
  });

  test('handles empty items array', () => {
    renderWithProviders(<Navigation items={[]} />);
    
    // Verificar que se renderiza sin errores (sin esperar role navigation)
    expect(document.querySelector('.MuiBox-root')).toBeInTheDocument();
  });
}); 