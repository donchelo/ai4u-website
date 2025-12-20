import { renderHook } from '@testing-library/react';
import { useWindowSize } from '../useWindowSize';

// Mock de las funciones de helpers
jest.mock('../../utils/helpers', () => ({
  isMobile: jest.fn(),
  isTablet: jest.fn(),
  isDesktop: jest.fn()
}));

import { isMobile, isTablet, isDesktop } from '../../utils/helpers';

describe('useWindowSize', () => {
  // Mock del objeto window
  const mockWindow = {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Reset window mock
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: mockWindow.innerWidth,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: mockWindow.innerHeight,
    });

    // Setup default helper responses
    isMobile.mockReturnValue(false);
    isTablet.mockReturnValue(false);
    isDesktop.mockReturnValue(true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return initial window size and device type', () => {
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current).toEqual({
      width: 1024,
      height: 768,
      isMobile: false,
      isTablet: false,
      isDesktop: true
    });
  });

  it('should add and remove resize event listener', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    
    const { unmount } = renderHook(() => useWindowSize());
    
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('should update size when window is resized', () => {
    const { result } = renderHook(() => useWindowSize());
    
    // Verificar estado inicial
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
    
    // Simular cambio de tamaño
    Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 600, configurable: true });
    
    // Configurar helpers para tablet
    isMobile.mockReturnValue(false);
    isTablet.mockReturnValue(true);
    isDesktop.mockReturnValue(false);
    
    // Obtener el callback de resize y ejecutarlo
    const resizeCallback = (window.addEventListener as jest.Mock).mock.calls.find(
      call => call[0] === 'resize'
    )?.[1];
    
    if (resizeCallback) {
      resizeCallback();
    }
    
    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it('should handle mobile breakpoint', () => {
    // Configurar para mobile
    Object.defineProperty(window, 'innerWidth', { value: 375, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 667, configurable: true });
    
    isMobile.mockReturnValue(true);
    isTablet.mockReturnValue(false);
    isDesktop.mockReturnValue(false);
    
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current).toEqual({
      width: 375,
      height: 667,
      isMobile: true,
      isTablet: false,
      isDesktop: false
    });
  });

  it('should handle tablet breakpoint', () => {
    // Configurar para tablet
    Object.defineProperty(window, 'innerWidth', { value: 768, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1024, configurable: true });
    
    isMobile.mockReturnValue(false);
    isTablet.mockReturnValue(true);
    isDesktop.mockReturnValue(false);
    
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current).toEqual({
      width: 768,
      height: 1024,
      isMobile: false,
      isTablet: true,
      isDesktop: false
    });
  });

  it('should handle desktop breakpoint', () => {
    // Configurar para desktop
    Object.defineProperty(window, 'innerWidth', { value: 1920, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1080, configurable: true });
    
    isMobile.mockReturnValue(false);
    isTablet.mockReturnValue(false);
    isDesktop.mockReturnValue(true);
    
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current).toEqual({
      width: 1920,
      height: 1080,
      isMobile: false,
      isTablet: false,
      isDesktop: true
    });
  });

  it('should call helper functions to determine device type', () => {
    renderHook(() => useWindowSize());
    
    expect(isMobile).toHaveBeenCalled();
    expect(isTablet).toHaveBeenCalled();
    expect(isDesktop).toHaveBeenCalled();
  });

  it('should handle server-side rendering (window undefined)', () => {
    const originalWindow = global.window;
    delete (global as any).window;
    
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current).toEqual({
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false
    });
    
    global.window = originalWindow;
  });

  it('should only add resize listener once per hook instance', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    
    const { rerender } = renderHook(() => useWindowSize());
    
    // Re-renderizar el hook
    rerender();
    rerender();
    
    // Debería solo haber una llamada a addEventListener
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
  });

  it('should call helpers on every resize', () => {
    renderHook(() => useWindowSize());
    
    // Limpiar mocks después del setup inicial
    jest.clearAllMocks();
    
    // Simular resize
    const resizeCallback = (window.addEventListener as jest.Mock).mock.calls.find(
      call => call[0] === 'resize'
    )?.[1];
    
    if (resizeCallback) {
      resizeCallback();
    }
    
    expect(isMobile).toHaveBeenCalledTimes(1);
    expect(isTablet).toHaveBeenCalledTimes(1);
    expect(isDesktop).toHaveBeenCalledTimes(1);
  });
});