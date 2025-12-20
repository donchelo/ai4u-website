import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Button from '../Button';

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

describe('Button Component', () => {
  test('renders with children text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies variant prop correctly', () => {
    renderWithTheme(<Button variant="outlined">Outlined Button</Button>);
    const button = screen.getByText('Outlined Button');
    expect(button).toBeInTheDocument();
  });

  test('applies disabled state', () => {
    renderWithTheme(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  test('applies custom className', () => {
    const customClass = 'custom-button-class';
    renderWithTheme(<Button className={customClass}>Custom Button</Button>);
    const button = screen.getByText('Custom Button');
    expect(button).toHaveClass(customClass);
  });

  test('renders with different sizes', () => {
    renderWithTheme(<Button size="large">Large Button</Button>);
    const button = screen.getByText('Large Button');
    expect(button).toBeInTheDocument();
  });

  test('handles keyboard events', () => {
    const handleKeyDown = jest.fn();
    renderWithTheme(
      <Button onKeyDown={handleKeyDown}>Keyboard Button</Button>
    );
    
    fireEvent.keyDown(screen.getByText('Keyboard Button'), { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
}); 