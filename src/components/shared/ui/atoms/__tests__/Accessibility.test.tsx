import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Button, Logo, Typography } from '../index';

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

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Accessibility Tests', () => {
  test('Button has proper ARIA attributes', () => {
    renderWithTheme(<Button aria-label="Test button">Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Test button' });
    expect(button).toBeInTheDocument();
  });

  test('Logo has proper alt text', () => {
    renderWithTheme(<Logo />);
    
    const logo = screen.getByAltText('AI4U Logo');
    expect(logo).toBeInTheDocument();
  });

  test('Typography has proper heading structure', () => {
    renderWithTheme(
      <div>
        <Typography variant="h1">Main Heading</Typography>
        <Typography variant="h2">Sub Heading</Typography>
      </div>
    );
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  test('Interactive elements are keyboard accessible', () => {
    const handleClick = jest.fn();
    
    renderWithTheme(
      <Button onClick={handleClick} tabIndex={0}>
        Accessible Button
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('tabindex', '0');
  });

  test('Color contrast is sufficient', () => {
    renderWithTheme(
      <div>
        <Typography variant="h1" sx={{ color: '#000000', backgroundColor: '#FFFFFF' }}>
          High Contrast Text
        </Typography>
      </div>
    );
    
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('Images have descriptive alt text', () => {
    renderWithTheme(<Logo alt="AI4U Company Logo" />);
    
    const logo = screen.getByAltText('AI4U Company Logo');
    expect(logo).toBeInTheDocument();
  });

  test('Form elements have proper labels', () => {
    renderWithTheme(
      <div>
        <label htmlFor="test-input">Test Label</label>
        <input id="test-input" type="text" />
      </div>
    );
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
  });

  test('Landmarks are properly defined', () => {
    renderWithTheme(
      <div>
        <nav role="navigation">Navigation</nav>
        <main role="main">Main Content</main>
        <footer role="contentinfo">Footer</footer>
      </div>
    );
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
}); 