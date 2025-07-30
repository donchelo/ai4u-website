import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import Logo from '../ui/Logo';

// Mock del contexto de tema
const mockThemeContext = {
  mode: 'light' as const,
  toggleColorMode: jest.fn(),
};

jest.mock('../../context/ThemeContext', () => ({
  ...jest.requireActual('../../context/ThemeContext'),
  useColorMode: () => mockThemeContext,
}));

describe('Logo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders logo with correct alt text', () => {
    render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    );
    
    const logo = screen.getByAltText('AI4U Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders with desktop variant by default', () => {
    render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    );
    
    const logo = screen.getByAltText('AI4U Logo');
    expect(logo).toHaveStyle({ height: '42px' });
  });

  it('renders with mobile variant when specified', () => {
    render(
      <ThemeProvider>
        <Logo variant="mobile" />
      </ThemeProvider>
    );
    
    const logo = screen.getByAltText('AI4U Logo');
    expect(logo).toHaveStyle({ height: '38px' });
  });

  it('calls onClick handler when provided', () => {
    const handleClick = jest.fn();
    
    render(
      <ThemeProvider>
        <Logo onClick={handleClick} />
      </ThemeProvider>
    );
    
    const logo = screen.getByAltText('AI4U Logo');
    fireEvent.click(logo);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('scrolls to top when clicked without onClick handler', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation();
    
    render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    );
    
    const logo = screen.getByAltText('AI4U Logo');
    fireEvent.click(logo);
    
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
    
    scrollToSpy.mockRestore();
  });
}); 