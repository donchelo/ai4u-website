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
  };

  // Para imágenes de la carpeta gallery, generar título automáticamente
  if (filename.startsWith('gallery/')) {
    const name = filename.replace('gallery/', '').replace(/\.[^/.]+$/, '');
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

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
  };

  // Para imágenes de la carpeta gallery, generar descripción automáticamente
  if (filename.startsWith('gallery/')) {
    const name = filename.replace('gallery/', '').replace(/\.[^/.]+$/, '');
    return `Imagen de la galería AI4U: ${name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
  }

  return descriptions[filename] || 'Imagen de la galería AI4U';
};

// Función para detectar automáticamente imágenes en la carpeta gallery
const getGalleryImages = (): string[] => {
  // Lista actualizada con el contenido real de la carpeta gallery
  const knownGalleryImages: string[] = [
    'gallery/AI4U 4rt (1).png',
    'gallery/AI4U 4rt (2).png',
    'gallery/AI4U 4rt (5).png',
    'gallery/AI4U 4rt (6).png',
    'gallery/AI4U 4rt (7).png',
    'gallery/AI4U 4rt (8).png',
    'gallery/AI4U 4rt (9).png',
    'gallery/AI4U 4rt (10).png',
    'gallery/AI4U 4rt (11).png',
    'gallery/AI4U 4rt (12).png',
    'gallery/AI4U 4rt (13).png',
    'gallery/AI4U 4rt (14).png',
    'gallery/AI4U 4rt (15).png',
    'gallery/AI4U 4rt (16).png',
    'gallery/AI4U 4rt (17).png',
    'gallery/AI4U 4rt (18).png',
    'gallery/AI4U 4rt (19).png',
    'gallery/AI4U 4rt (20).png',
    'gallery/AI4U 4rt (21).png',
    'gallery/AI4U 4rt (22).png',
    'gallery/AI4U 4rt (23).png',
    'gallery/AI4U 4rt (24).png',
    'gallery/AI4U 4rt (25).png',
    'gallery/AI4U 4rt (26).png',
    'gallery/AI4U 4rt (27).png',
    'gallery/AI4U 4rt (28).png',
    'gallery/AI4U 4rt (29).png',
    'gallery/AI4U 4rt (30).png',
    'gallery/AI4U 4rt (31).png',
    'gallery/AI4U 4rt (32).png',
    'gallery/AI4U 4rt (33).png',
    'gallery/AI4U 4rt (34).png',
    'gallery/AI4U 4rt (35).png',
    'gallery/AI4U 4rt (36).png',
    'gallery/AI4U 4rt (37).png',
    'gallery/AI4U 4rt (38).png',
    'gallery/AI4U 4rt (39).png',
  ];

  return knownGalleryImages;
};

// Función para cargar imágenes dinámicamente
const loadGalleryImages = (): GalleryImage[] => {
  // Cargar todas las imágenes de gallery
  const galleryImages = getGalleryImages();
  
  return galleryImages.map((filename, index) => {
    const basePath = '/assets/images/';
    const fullPath = `${basePath}${filename}`;
    
    return {
      id: `gallery-${index}`,
      src: fullPath,
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
        
        // Cargar imágenes directamente
        const galleryImages = loadGalleryImages();
        setImages(galleryImages);
      } catch (err) {
        setError('Error al cargar las imágenes de la galería');
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