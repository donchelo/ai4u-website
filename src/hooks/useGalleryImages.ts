import { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// Función para obtener el título de la imagen basado en el nombre del archivo
const getImageTitle = (filename: string): string => {
  const titles: Record<string, string> = {
    'ai4u-logo.png': 'Logo AI4U',
    'ai4u-logo-dark.png': 'Logo AI4U - Versión Oscura',
    'ai4u-logo-for-dark-background.png': 'Logo AI4U - Fondo Oscuro',
    'ai4u-logo-for-light-background.png': 'Logo AI4U - Fondo Claro',
    'hero-image.png': 'Imagen Hero Principal',
    'hero-image2.png': 'Imagen Hero Secundaria',
    'hero-image3.png': 'Imagen Hero Terciaria',
    'robot-assistant.png': 'Asistente Robot',
    'robot.png': 'Robot AI4U',
    'mariano.jpeg': 'Mariano - Fundador',
    'Logo V3 - Crema.png': 'Logo V3 - Versión Crema',
    'Logo V3 - Negro.png': 'Logo V3 - Versión Negro',
    'cases/logo-eafit.png': 'Caso de Éxito - EAFIT',
    'cases/logo-hua-naturals.png': 'Caso de Éxito - HUA Naturals',
    'cases/logo-magdalena.png': 'Caso de Éxito - Magdalena',
    'cases/logo-true.png': 'Caso de Éxito - True',
    'gallery/ai4u-logo.png': 'Logo AI4U - Galería',
    'gallery/robot.png': 'Robot AI4U - Galería',
    'gallery/hero-image.png': 'Imagen Hero - Galería',
  };

  return titles[filename] || `Imagen ${filename}`;
};

// Función para obtener la descripción de la imagen
const getImageDescription = (filename: string): string => {
  const descriptions: Record<string, string> = {
    'ai4u-logo.png': 'Logo principal de AI4U, representando nuestra identidad de marca',
    'ai4u-logo-dark.png': 'Variante del logo optimizada para fondos oscuros',
    'ai4u-logo-for-dark-background.png': 'Logo adaptado para interfaces con tema oscuro',
    'ai4u-logo-for-light-background.png': 'Logo adaptado para interfaces con tema claro',
    'hero-image.png': 'Imagen principal que representa nuestra visión tecnológica',
    'hero-image2.png': 'Segunda variante de nuestra imagen hero',
    'hero-image3.png': 'Tercera variante de nuestra imagen hero',
    'robot-assistant.png': 'Nuestro asistente virtual inteligente',
    'robot.png': 'Representación visual de nuestra tecnología AI',
    'mariano.jpeg': 'Mariano, fundador y líder de AI4U',
    'Logo V3 - Crema.png': 'Nueva versión del logo en color crema',
    'Logo V3 - Negro.png': 'Nueva versión del logo en color negro',
    'cases/logo-eafit.png': 'Universidad EAFIT - Cliente destacado',
    'cases/logo-hua-naturals.png': 'HUA Naturals - Proyecto de éxito',
    'cases/logo-magdalena.png': 'Magdalena - Caso de estudio',
    'cases/logo-true.png': 'True - Cliente satisfecho',
    'gallery/ai4u-logo.png': 'Logo AI4U - Galería',
    'gallery/robot.png': 'Robot AI4U - Galería',
    'gallery/hero-image.png': 'Imagen Hero - Galería',
  };

  return descriptions[filename] || 'Imagen de la galería AI4U';
};

// Función para cargar imágenes dinámicamente
const loadGalleryImages = (): GalleryImage[] => {
  // Lista de imágenes disponibles en el proyecto
  const imageFiles = [
    'ai4u-logo.png',
    'ai4u-logo-dark.png',
    'ai4u-logo-for-dark-background.png',
    'ai4u-logo-for-light-background.png',
    'hero-image.png',
    'hero-image2.png',
    'hero-image3.png',
    'robot-assistant.png',
    'robot.png',
    'mariano.jpeg',
    'Logo V3 - Crema.png',
    'Logo V3 - Negro.png',
  ];

  // Imágenes de casos de éxito
  const caseImages = [
    'cases/logo-eafit.png',
    'cases/logo-hua-naturals.png',
    'cases/logo-magdalena.png',
    'cases/logo-true.png',
  ];

  // Imágenes de la galería específica
  const galleryImages = [
    'gallery/ai4u-logo.png',
    'gallery/robot.png',
    'gallery/hero-image.png',
  ];

  // Combinar todas las imágenes
  const allImages = [...imageFiles, ...caseImages, ...galleryImages];

  return allImages.map((filename, index) => {
    const basePath = '/assets/images/';
    
    return {
      id: `gallery-${index}`,
      src: `${basePath}${filename}`,
      alt: `Imagen ${index + 1} de la galería AI4U`,
      title: getImageTitle(filename),
      description: getImageDescription(filename),
    };
  });
};

export const useGalleryImages = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simular carga asíncrona
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const galleryImages = loadGalleryImages();
        setImages(galleryImages);
      } catch (err) {
        setError('Error al cargar las imágenes de la galería');
        console.error('Error loading gallery images:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  return {
    images,
    isLoading,
    error,
    reload: () => {
      setIsLoading(true);
      setError(null);
      const galleryImages = loadGalleryImages();
      setImages(galleryImages);
      setIsLoading(false);
    }
  };
}; 