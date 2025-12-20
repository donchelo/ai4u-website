import { useState, useEffect, useMemo } from 'react';

interface ImageMapping {
  [key: string]: {
    original: string;
    sizes: {
      [size: string]: {
        file: string;
        width: number;
        height: number;
        size: number;
      };
    };
    formats: {
      [format: string]: {
        file: string;
        size: number;
        savings: number;
      };
    };
  };
}

interface UseImageOptimizationOptions {
  priority?: boolean;
  size?: 'thumbnail' | 'small' | 'medium' | 'large' | 'original';
  format?: 'webp' | 'original';
  fallback?: string;
  preload?: boolean;
}

interface ImageState {
  src: string;
  isLoaded: boolean;
  error: boolean;
  format: string;
  size: string;
}

export const useImageOptimization = (
  imageName: string,
  options: UseImageOptimizationOptions = {}
) => {
  const {
    priority = false,
    size = 'original',
    format = 'webp',
    fallback,
    preload = false
  } = options;

  const [state, setState] = useState<ImageState>({
    src: '',
    isLoaded: false,
    error: false,
    format: 'original',
    size: 'original'
  });

  // Cargar mapeo de imágenes
  const [imageMapping, setImageMapping] = useState<ImageMapping | null>(null);

  useEffect(() => {
    const loadImageMapping = async () => {
      try {
        const response = await fetch('/assets/images/optimized/image-mapping.json');
        if (response.ok) {
          const mapping = await response.json();
          setImageMapping(mapping);
        }
      } catch (error) {
        // console.warn('No se pudo cargar el mapeo de imágenes:', error);
      }
    };

    loadImageMapping();
  }, []);

  // Determinar la mejor fuente de imagen
  const bestImageSource = useMemo(() => {
    if (!imageMapping || !imageMapping[imageName]) {
      return {
        src: `/assets/images/${imageName}.jpg`,
        format: 'original',
        size: 'original'
      };
    }

    const mapping = imageMapping[imageName];
    let selectedSrc = '';
    let selectedFormat = 'original';
    let selectedSize = 'original';

    // Intentar usar el formato preferido
    if (format === 'webp' && mapping.formats?.webp) {
      selectedSrc = `/assets/images/optimized/${mapping.formats.webp.file}`;
      selectedFormat = 'webp';
    } else {
      selectedSrc = `/assets/images/${mapping.original}`;
      selectedFormat = 'original';
    }

    // Intentar usar el tamaño preferido
    if (size !== 'original' && mapping.sizes?.[size]) {
      const sizeMapping = mapping.sizes[size];
      selectedSrc = `/assets/images/optimized/${sizeMapping.file}`;
      selectedSize = size;
    }

    return {
      src: selectedSrc,
      format: selectedFormat,
      size: selectedSize
    };
  }, [imageName, imageMapping, format, size]);

  // Cargar imagen
  useEffect(() => {
    if (!bestImageSource.src) return;

    setState(prev => ({
      ...prev,
      src: bestImageSource.src,
      format: bestImageSource.format,
      size: bestImageSource.size,
      isLoaded: false,
      error: false
    }));

    const img = new Image();
    
    img.onload = () => {
      setState(prev => ({
        ...prev,
        isLoaded: true,
        error: false
      }));
    };

    img.onerror = () => {
      // Si falla WebP, intentar con original
      if (bestImageSource.format === 'webp' && !state.error) {
        setState(prev => ({
          ...prev,
          src: `/assets/images/${imageMapping?.[imageName]?.original || `${imageName}.jpg`}`,
          format: 'original',
          error: true
        }));
      } else if (fallback) {
        setState(prev => ({
          ...prev,
          src: fallback,
          format: 'fallback',
          error: true
        }));
      } else {
        setState(prev => ({
          ...prev,
          error: true
        }));
      }
    };

    if (priority || preload) {
      img.loading = 'eager';
    }

    img.src = bestImageSource.src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [bestImageSource.src, bestImageSource.format, fallback, priority, preload, state.error, imageMapping, imageName]);

  // Detectar soporte de WebP
  const supportsWebP = useMemo(() => {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }, []);

  // Obtener la URL final considerando el soporte del navegador
  const finalSrc = useMemo(() => {
    if (state.format === 'webp' && !supportsWebP) {
      // Si no soporta WebP, usar original
      return `/assets/images/${imageMapping?.[imageName]?.original || `${imageName}.jpg`}`;
    }
    return state.src;
  }, [state.src, state.format, supportsWebP, imageMapping, imageName]);

  return {
    src: finalSrc,
    isLoaded: state.isLoaded,
    error: state.error,
    format: state.format,
    size: state.size,
    supportsWebP,
    isLoading: !state.isLoaded && !state.error
  };
};

// Hook para precarga de imágenes críticas
export const useImagePreloader = (imageNames: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    setTotalImages(imageNames.length);
    
    const loadImage = (imageName: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set(Array.from(prev).concat(imageName)));
          resolve();
        };
        img.onerror = () => {
          setLoadedImages(prev => new Set(Array.from(prev).concat(imageName)));
          resolve();
        };
        img.src = `/assets/images/${imageName}.jpg`;
      });
    };

    const loadAllImages = async () => {
      await Promise.all(imageNames.map(loadImage));
    };

    loadAllImages();
  }, [imageNames]);

  return {
    loadedImages: Array.from(loadedImages),
    totalImages,
    progress: totalImages > 0 ? (loadedImages.size / totalImages) * 100 : 0,
    isComplete: loadedImages.size === totalImages
  };
};

// Hook para obtener información de optimización
export const useImageOptimizationInfo = (imageName: string) => {
  const [info, setInfo] = useState<{
    originalSize?: number;
    webpSize?: number;
    savings?: number;
    sizes?: { [key: string]: { width: number; height: number; size: number } };
  } | null>(null);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await fetch('/assets/images/optimized/image-mapping.json');
        if (response.ok) {
          const mapping = await response.json();
          const imageInfo = mapping[imageName];
          
          if (imageInfo) {
            setInfo({
              originalSize: imageInfo.original ? 
                parseInt((await fetch(`/assets/images/${imageInfo.original}`)).headers.get('content-length') || '0', 10) : undefined,
              webpSize: imageInfo.formats?.webp?.size,
              savings: imageInfo.formats?.webp?.savings,
              sizes: imageInfo.sizes
            });
          }
        }
      } catch (error) {
        // console.warn('No se pudo cargar información de optimización:', error);
      }
    };

    loadInfo();
  }, [imageName]);

  return info;
};
