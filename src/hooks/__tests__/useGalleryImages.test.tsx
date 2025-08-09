import { renderHook, waitFor } from '@testing-library/react';
import { useGalleryImages } from '../useGalleryImages';

// Mock console.error para evitar logs en tests
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe('useGalleryImages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return initial loading state', () => {
    const { result } = renderHook(() => useGalleryImages());
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.images).toEqual([]);
    expect(result.current.error).toBe(null);
    expect(typeof result.current.reload).toBe('function');
  });

  it('should load gallery images successfully', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.error).toBe(null);
    expect(result.current.images).toHaveLength(39); // Número de imágenes conocidas
    expect(result.current.images[0]).toHaveProperty('id');
    expect(result.current.images[0]).toHaveProperty('src');
    expect(result.current.images[0]).toHaveProperty('alt');
    expect(result.current.images[0]).toHaveProperty('title');
    expect(result.current.images[0]).toHaveProperty('description');
  });

  it('should have correct image properties structure', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const firstImage = result.current.images[0];
    
    expect(firstImage.id).toBe('gallery-0');
    expect(firstImage.src).toMatch(/^\/assets\/images\/gallery\//);
    expect(firstImage.alt).toMatch(/Imagen \d+ de la galería AI4U/);
    expect(firstImage.title).toContain('AI4U 4rt');
    expect(firstImage.description).toContain('Imagen de la galería AI4U');
  });

  it('should reload images when reload function is called', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    // Esperar carga inicial
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const initialImages = result.current.images;
    
    // Llamar reload
    result.current.reload();
    
    // Verificar que las imágenes se recargaron
    expect(result.current.images).toEqual(initialImages);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should generate correct image paths', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const firstImage = result.current.images[0];
    const expectedPath = '/assets/images/gallery/AI4U 4rt (1).png';
    
    expect(firstImage.src).toBe(expectedPath);
  });

  it('should handle gallery image title generation', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const firstImage = result.current.images[0];
    
    // Verificar que el título se genera correctamente desde el nombre de archivo
    expect(firstImage.title).toBe('AI4U 4rt (1)');
  });

  it('should handle gallery image description generation', async () => {
    const { result } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const firstImage = result.current.images[0];
    
    // Verificar que la descripción se genera correctamente
    expect(firstImage.description).toBe('Imagen de la galería AI4U: AI4U 4rt (1)');
  });

  it('should maintain consistent image count', async () => {
    const { result: result1 } = renderHook(() => useGalleryImages());
    const { result: result2 } = renderHook(() => useGalleryImages());
    
    await waitFor(() => {
      expect(result1.current.isLoading).toBe(false);
      expect(result2.current.isLoading).toBe(false);
    });
    
    expect(result1.current.images).toHaveLength(result2.current.images.length);
  });
});