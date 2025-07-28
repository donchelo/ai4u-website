import { useState, useMemo } from 'react';
import { Service, ServiceCategory, ServiceStatus } from '../types/service';
import { services, ServiceUtils, defaultServiceConfig } from '../data/servicesNew';

interface UseServicesProps {
  initialCategory?: ServiceCategory;
  featuredOnly?: boolean;
  activeOnly?: boolean;
}

interface ServiceFilters {
  category?: ServiceCategory;
  status?: ServiceStatus;
  featured?: boolean;
  searchTerm?: string;
  tags?: string[];
}

export const useServices = ({ 
  initialCategory, 
  featuredOnly = false,
  activeOnly = true 
}: UseServicesProps = {}) => {
  const [filters, setFilters] = useState<ServiceFilters>({
    category: initialCategory,
    featured: featuredOnly,
    status: activeOnly ? ServiceStatus.ACTIVE : undefined
  });

  const [config] = useState(defaultServiceConfig);

  // Servicios filtrados
  const filteredServices = useMemo(() => {
    let result = [...services];

    // Filtrar por estado
    if (filters.status) {
      result = result.filter(service => service.status === filters.status);
    }

    // Filtrar por categoría
    if (filters.category) {
      result = result.filter(service => service.category === filters.category);
    }

    // Filtrar por destacados
    if (filters.featured) {
      result = result.filter(service => service.featured);
    }

    // Filtrar por término de búsqueda
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(service => 
        service.title.toLowerCase().includes(term) ||
        service.subtitle.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term) ||
        service.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filtrar por tags
    if (filters.tags && filters.tags.length > 0) {
      result = result.filter(service =>
        filters.tags!.some(tag => service.tags.includes(tag))
      );
    }

    // Ordenar por prioridad
    return ServiceUtils.sortByPriority(result);
  }, [filters]);

  // Servicios destacados
  const featuredServices = useMemo(() => 
    ServiceUtils.getFeatured().filter(service => 
      activeOnly ? service.status === ServiceStatus.ACTIVE : true
    ), [activeOnly]);

  // Categorías disponibles
  const availableCategories = useMemo(() => 
    ServiceUtils.getCategories(), []);

  // Tags disponibles
  const availableTags = useMemo(() => 
    ServiceUtils.getTags(), []);

  // Funciones para actualizar filtros
  const updateFilters = (newFilters: Partial<ServiceFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      status: activeOnly ? ServiceStatus.ACTIVE : undefined,
      featured: featuredOnly
    });
  };

  const setCategory = (category?: ServiceCategory) => {
    updateFilters({ category });
  };

  const setSearchTerm = (searchTerm?: string) => {
    updateFilters({ searchTerm });
  };

  const setFeaturedOnly = (featured?: boolean) => {
    updateFilters({ featured });
  };

  // Estadísticas
  const stats = useMemo(() => ({
    total: services.length,
    active: services.filter(s => s.status === ServiceStatus.ACTIVE).length,
    featured: services.filter(s => s.featured).length,
    byCategory: availableCategories.reduce((acc, category) => ({
      ...acc,
      [category]: services.filter(s => s.category === category).length
    }), {} as Record<ServiceCategory, number>)
  }), [availableCategories]);

  return {
    // Datos
    services: filteredServices,
    featuredServices,
    allServices: services,
    
    // Filtros y configuración
    filters,
    config,
    
    // Metadatos
    availableCategories,
    availableTags,
    stats,
    
    // Acciones
    updateFilters,
    resetFilters,
    setCategory,
    setSearchTerm,
    setFeaturedOnly,
    
    // Utilidades
    utils: ServiceUtils
  };
};