import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Logo from '../Logo';

// Mock del hook useColors
jest.mock('../../../../../hooks', () => ({
  useColors: () => ({
    contrast: {
      text: { primary: '#000000' },
      surface: '#FFFFFF'
    }
  })
}));

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Logo Component', () => {
  test('renders without crashing', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('has correct alt text', () => {
    renderWithTheme(<Logo />);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toHaveAttribute('alt', 'AI4U Logo');
  });

  test('renders with default size when no size prop provided', () => {
    renderWithTheme(<Logo />);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });

  test('applies custom styles when provided', () => {
    const customStyles = { width: '200px', height: '100px' };
    renderWithTheme(<Logo sx={customStyles} />);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders with different variants', () => {
    renderWithTheme(<Logo variant="dark" />);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });
}); 