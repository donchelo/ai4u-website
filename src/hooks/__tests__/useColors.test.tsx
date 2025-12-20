import React from 'react';
import { renderHook } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useColors } from '../useColors';

const theme = createTheme();

const renderHookWithTheme = () => {
  return renderHook(() => useColors(), {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    ),
  });
};

describe('useColors Hook', () => {
  test('returns colors object with expected structure', () => {
    const { result } = renderHookWithTheme();
    
    expect(result.current).toHaveProperty('contrast');
    expect(result.current.contrast).toHaveProperty('text');
    expect(result.current.contrast).toHaveProperty('surface');
    expect(result.current.contrast.text).toHaveProperty('primary');
  });

  test('returns valid color values', () => {
    const { result } = renderHookWithTheme();
    
    // Verificar que los colores son strings válidos
    expect(typeof result.current.contrast.text.primary).toBe('string');
    expect(typeof result.current.contrast.surface).toBe('string');
    
    // Verificar que no están vacíos
    expect(result.current.contrast.text.primary).toBeTruthy();
    expect(result.current.contrast.surface).toBeTruthy();
  });

  test('returns consistent colors on multiple calls', () => {
    const { result: result1 } = renderHookWithTheme();
    const { result: result2 } = renderHookWithTheme();
    
    expect(result1.current.contrast.text.primary).toBe(result2.current.contrast.text.primary);
    expect(result1.current.contrast.surface).toBe(result2.current.contrast.surface);
  });

  test('returns colors that work with MUI theme', () => {
    const { result } = renderHookWithTheme();
    
    // Verificar que los colores son compatibles con MUI
    expect(result.current.contrast.text.primary).toMatch(/^#|^rgb|^rgba/);
    expect(result.current.contrast.surface).toMatch(/^#|^rgb|^rgba/);
  });
}); 