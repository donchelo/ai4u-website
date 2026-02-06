import React, { createContext, useContext, useReducer, ReactNode, useMemo } from 'react';
import { Service, ServiceCategory, ServiceStatus, ServiceSuperCategory } from '../types/service';
import { services, ServiceUtils } from '../data/services';

// Tipos para el contexto
interface ServicesState {
  services: Service[];
  featuredServices: Service[];
  filters: {
    category?: ServiceCategory;
    superCategory?: ServiceSuperCategory;
    status?: ServiceStatus;
    featured?: boolean;
    searchTerm?: string;
    tags?: string[];
  };
  config: {
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
  };
  stats: {
    total: number;
    active: number;
    featured: number;
    byCategory: Record<ServiceCategory, number>;
    bySuperCategory: Record<ServiceSuperCategory, number>;
  };
}

// Acciones del reducer
type ServicesAction =
  | { type: 'SET_CATEGORY_FILTER'; payload: ServiceCategory | undefined }
  | { type: 'SET_SUPER_CATEGORY_FILTER'; payload: ServiceSuperCategory | undefined }
  | { type: 'SET_STATUS_FILTER'; payload: ServiceStatus | undefined }
  | { type: 'SET_FEATURED_FILTER'; payload: boolean | undefined }
  | { type: 'SET_SEARCH_TERM'; payload: string | undefined }
  | { type: 'SET_TAGS_FILTER'; payload: string[] | undefined }
  | { type: 'RESET_FILTERS' }
  | { type: 'UPDATE_CONFIG'; payload: Partial<ServicesState['config']> }
  | { type: 'SET_SERVICES'; payload: Service[] };

// Estado inicial
const initialState: ServicesState = {
  services: services,
  featuredServices: ServiceUtils.getFeatured(),
  filters: {
    status: ServiceStatus.ACTIVE,
    featured: undefined,
    category: undefined,
    superCategory: undefined,
    searchTerm: undefined,
    tags: undefined,
  },
  config: {
    displaySettings: {
      showPrices: false,
      showDeliveryTime: true,
      cardsPerRow: 3,
      showCategories: true,
    },
    filterSettings: {
      enableCategoryFilter: true,
      enablePriceFilter: false,
      enableTagFilter: false,
    },
  },
  stats: {
    total: services.length,
    active: services.filter(s => s.status === ServiceStatus.ACTIVE).length,
    featured: services.filter(s => s.featured).length,
    byCategory: ServiceUtils.getCategories().reduce((acc, category) => ({
      ...acc,
      [category]: services.filter(s => s.category === category).length
    }), {} as Record<ServiceCategory, number>),
    bySuperCategory: {
      [ServiceSuperCategory.STRATEGY]: services.filter(s => s.tags.includes('eje:strategy')).length,
      [ServiceSuperCategory.OPERATION]: services.filter(s => s.tags.includes('eje:operation')).length,
      [ServiceSuperCategory.EDUCATION]: services.filter(s => s.tags.includes('eje:education')).length,
      [ServiceSuperCategory.TRANSFORMATION]: services.filter(s => s.tags.includes('eje:transformation')).length,
    }
  },
};

// Reducer para manejar el estado
function servicesReducer(state: ServicesState, action: ServicesAction): ServicesState {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload,
        },
      };
    
    case 'SET_SUPER_CATEGORY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          superCategory: action.payload,
        },
      };
    
    case 'SET_STATUS_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    
    case 'SET_FEATURED_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          featured: action.payload,
        },
      };
    
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        filters: {
          ...state.filters,
          searchTerm: action.payload,
        },
      };
    
    case 'SET_TAGS_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          tags: action.payload,
        },
      };
    
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: {
          status: ServiceStatus.ACTIVE,
          featured: undefined,
          category: undefined,
          superCategory: undefined,
          searchTerm: undefined,
          tags: undefined,
        },
      };
    
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    
    case 'SET_SERVICES':
      return {
        ...state,
        services: action.payload,
      };
    
    default:
      return state;
  }
}

// Contexto
export interface ServicesContextType extends ServicesState {
  // Acciones
  setCategoryFilter: (category?: ServiceCategory) => void;
  setSuperCategoryFilter: (superCategory?: ServiceSuperCategory) => void;
  setStatusFilter: (status?: ServiceStatus) => void;
  setFeaturedFilter: (featured?: boolean) => void;
  setSearchTerm: (searchTerm?: string) => void;
  setTagsFilter: (tags?: string[]) => void;
  resetFilters: () => void;
  updateConfig: (config: Partial<ServicesState['config']>) => void;
  
  // Utilidades
  getFilteredServices: () => Service[];
  getServicesByCategory: (category: ServiceCategory) => Service[];
  getServicesBySuperCategory: (superCategory: ServiceSuperCategory) => Service[];
  getFeaturedServices: () => Service[];
  getActiveServices: () => Service[];
  getCategories: () => ServiceCategory[];
  getSuperCategories: () => ServiceSuperCategory[];
  getTags: () => string[];
}

export const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useServicesContext = () => {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error('useServicesContext must be used within a ServicesProvider');
  }
  return context;
};

// Proveedor del contexto
interface ServicesProviderProps {
  children?: ReactNode;
  initialFilters?: Partial<ServicesState['filters']>;
  initialConfig?: Partial<ServicesState['config']>;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({ 
  children, 
  initialFilters,
  initialConfig 
}) => {
  const [state, dispatch] = useReducer(servicesReducer, {
    ...initialState,
    filters: {
      ...initialState.filters,
      ...initialFilters,
    },
    config: {
      ...initialState.config,
      ...initialConfig,
    },
  });

  // Funciones para actualizar filtros
  const setCategoryFilter = (category?: ServiceCategory) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: category });
  };

  const setSuperCategoryFilter = (superCategory?: ServiceSuperCategory) => {
    dispatch({ type: 'SET_SUPER_CATEGORY_FILTER', payload: superCategory });
  };

  const setStatusFilter = (status?: ServiceStatus) => {
    dispatch({ type: 'SET_STATUS_FILTER', payload: status });
  };

  const setFeaturedFilter = (featured?: boolean) => {
    dispatch({ type: 'SET_FEATURED_FILTER', payload: featured });
  };

  const setSearchTerm = (searchTerm?: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm });
  };

  const setTagsFilter = (tags?: string[]) => {
    dispatch({ type: 'SET_TAGS_FILTER', payload: tags });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const updateConfig = (config: Partial<ServicesState['config']>) => {
    dispatch({ type: 'UPDATE_CONFIG', payload: config });
  };

  // Funciones utilitarias
  const getFilteredServices = (): Service[] => {
    let result = [...state.services];

    // Filtrar por estado
    if (state.filters.status) {
      result = result.filter(service => service.status === state.filters.status);
    }

    // Filtrar por categoría
    if (state.filters.category) {
      result = result.filter(service => service.category === state.filters.category);
    }

    // Filtrar por supracategoría
    if (state.filters.superCategory) {
      const tag = `eje:${state.filters.superCategory.toLowerCase()}`;
      result = result.filter(service => service.tags.includes(tag));
    }

    // Filtrar por destacados
    if (state.filters.featured) {
      result = result.filter(service => service.featured);
    }

    // Filtrar por término de búsqueda
    if (state.filters.searchTerm) {
      const term = state.filters.searchTerm.toLowerCase();
      result = result.filter(service => 
        service.title.toLowerCase().includes(term) ||
        service.subtitle.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term) ||
        service.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filtrar por tags
    if (state.filters.tags && state.filters.tags.length > 0) {
      result = result.filter(service =>
        state.filters.tags!.some(tag => service.tags.includes(tag))
      );
    }

    // Ordenar por prioridad
    return ServiceUtils.sortByPriority(result);
  };

  const getServicesByCategory = (category: ServiceCategory): Service[] => {
    return state.services.filter(service => service.category === category);
  };

  const getServicesBySuperCategory = (superCategory: ServiceSuperCategory): Service[] => {
    const tag = `eje:${superCategory.toLowerCase()}`;
    return state.services.filter(service => service.tags.includes(tag));
  };

  const getFeaturedServices = (): Service[] => {
    return ServiceUtils.getFeatured();
  };

  const getActiveServices = (): Service[] => {
    return state.services.filter(service => service.status === ServiceStatus.ACTIVE);
  };

  const getCategories = (): ServiceCategory[] => {
    return ServiceUtils.getCategories();
  };

  const getSuperCategories = (): ServiceSuperCategory[] => {
    return [
      ServiceSuperCategory.OPERATION,
      ServiceSuperCategory.STRATEGY,
      ServiceSuperCategory.EDUCATION,
      ServiceSuperCategory.TRANSFORMATION
    ];
  };

  const getTags = (): string[] => {
    return ServiceUtils.getTags();
  };

  // Memoizar el valor del contexto para evitar re-renders innecesarios
  const contextValue = useMemo(() => ({
    ...state,
    setCategoryFilter,
    setSuperCategoryFilter,
    setStatusFilter,
    setFeaturedFilter,
    setSearchTerm,
    setTagsFilter,
    resetFilters,
    updateConfig,
    getFilteredServices,
    getServicesByCategory,
    getServicesBySuperCategory,
    getFeaturedServices,
    getActiveServices,
    getCategories,
    getSuperCategories,
    getTags,
  }), [state]);

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
};
