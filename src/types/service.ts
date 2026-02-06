export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  price?: string; // Opcional ahora
  deliveryTime: string;
  category: ServiceCategory;
  priority: number; // Para ordenar servicios
  featured: boolean; // Servicios destacados
  icon?: string; // Path al icono del servicio
  color?: string; // Color primario del servicio
  gradient?: string; // Gradiente del servicio
  media?: ServiceMedia; // Media opcional para destacar (gif/poster)
  thumbnail?: string; // Path al thumbnail personalizado del servicio
  tags: string[]; // Etiquetas para filtrado
  status: ServiceStatus;
  metadata: ServiceMetadata;
}

export interface ServiceMedia {
  video?: string; // Ruta a un mp4 corto destacando el servicio
  gif?: string; // Ruta a un gif corto destacando el servicio
  poster?: string; // Imagen estática de respaldo (fallback)
}

export interface ServiceMetadata {
  createdAt: string;
  updatedAt: string;
  version: string;
  author: string;
}

export enum ServiceSuperCategory {
  OPERATION = 'operation',
  STRATEGY = 'strategy',
  EDUCATION = 'education',
  TRANSFORMATION = 'transformation'
}

export enum ServiceCategory {
  AUTOMATION = 'automation',
  AI_ASSISTANT = 'ai_assistant',
  ANALYTICS = 'analytics',
  ECOMMERCE = 'ecommerce',
  TRAINING = 'training',
  CONSULTING = 'consulting'
}

export enum ServiceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  COMING_SOON = 'coming_soon',
  DEPRECATED = 'deprecated'
}

export interface ServiceConfig {
  displaySettings: {
    showPrices: boolean;
    showDeliveryTime: boolean;
    cardsPerRow: number;
    showCategories: boolean;
  };
  filterSettings: {
    enableCategoryFilter: boolean;
    enablePriceFilter: boolean;
    enableTagFilter: boolean;
  };
}