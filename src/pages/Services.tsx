import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Divider, 
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ui/ProcessStep';
import ServicesFilter from '../components/ui/ServicesFilter';
import ServicesStats from '../components/ui/ServicesStats';
import { useServicesContext } from '../context/ServicesContext';
import { ServiceCategory } from '../types/service';
import { SERVICE_CONFIG } from '../utils/constants';

const Services: React.FC = () => {
  const theme = useTheme();
  const { 
    services: filteredServices, 
    config,
    stats,
    filters,
    setCategoryFilter,
    setSearchTerm,
    setFeaturedFilter,
    resetFilters,
    getCategories
  } = useServicesContext();

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(false);

  // Mapeo de categorías para los tabs
  const categoryTabs = [
    { label: 'Todos', value: undefined },
    { label: 'Asistentes IA', value: ServiceCategory.AI_ASSISTANT },
    { label: 'Automatización', value: ServiceCategory.AUTOMATION },
    { label: 'Análisis', value: ServiceCategory.ANALYTICS },
    { label: 'E-commerce', value: ServiceCategory.ECOMMERCE },
    { label: 'Capacitación', value: ServiceCategory.TRAINING },
    { label: 'Consultoría', value: ServiceCategory.CONSULTING }
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setCategoryFilter(categoryTabs[newValue].value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchTerm(value || undefined);
  };

  const handleFeaturedToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const featured = event.target.checked;
    setShowFeaturedOnly(featured);
    setFeaturedFilter(featured || undefined);
  };

  const clearFilters = () => {
    setSelectedTab(0);
    setSearchValue('');
    setShowFeaturedOnly(false);
    resetFilters();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFF8E1 0%, #DFF7EB 50%, #E3F2FD 100%)',
      position: 'relative'
    }}>
      {/* Hero Section con Glassmorfismo */}
      <Box sx={{ 
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 92, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(31, 169, 246, 0.1) 0%, transparent 50%)',
          zIndex: 0
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <H1 sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #FF5C00 0%, #FF7477 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: 'clamp(2.5rem, 8vw, 4rem)', md: 'clamp(3rem, 6vw, 4.5rem)' },
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}>
              Servicios AI4U
            </H1>
            <H2 sx={{ 
              mb: 4, 
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}>
              Construimos tu infraestructura de IA personalizada
            </H2>
            <BodyText sx={{ 
              fontSize: '1.2rem', 
              maxWidth: 800, 
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.7
            }}>
              En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. 
              Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.
            </BodyText>
          </Box>

          {/* Services Stats Component */}
          <ServicesStats stats={stats} getCategories={getCategories} />
        </Container>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FF5C00 0%, #FF7477 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}>
            Nuestro proceso
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}>
                <ProcessStep 
                  number={1} 
                  title={`Diagnóstico gratuito (${SERVICE_CONFIG.DIAGNOSTIC_DURATION} minutos)`}
                  description="Identificamos todas las oportunidades de automatización en tu negocio"
                />
                <ProcessStep 
                  number={2} 
                  title="Definición de prioridades" 
                  description="Establecemos qué procesos automatizar primero según tu ROI"
                />
                <ProcessStep 
                  number={3} 
                  title="Presupuesto personalizado" 
                  description="Adaptamos las soluciones a tu capacidad de inversión"
                />
                <ProcessStep 
                  number={4} 
                  title="Implementación" 
                  description="Desarrollamos e integramos las soluciones en tu negocio"
                />
                
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                  <DiagnosticCTA 
                    variant="primary" 
                    size="large" 
                    text="Iniciar con diagnóstico gratuito" 
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: 8, borderColor: 'rgba(0,0,0,0.1)' }} />

      {/* Services Filter Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FF5C00 0%, #FF7477 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}>
            Nuestros servicios
          </H2>
          
          {/* Services Filter Component */}
          <Box sx={{ mb: 6 }}>
            <ServicesFilter
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              showFeaturedOnly={showFeaturedOnly}
              onFeaturedToggle={handleFeaturedToggle}
              onClearFilters={clearFilters}
              filteredCount={filteredServices.length}
              categoryTabs={categoryTabs}
            />
          </Box>
        </Container>

        {/* Services Grid */}
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {filteredServices.map((service) => (
              <Grid 
                item 
                xs={12} 
                md={config.displaySettings.cardsPerRow === 4 ? 3 : 4} 
                key={service.id}
              >
                <ServiceCard 
                  service={service}
                  showPrice={config.displaySettings.showPrices}
                  showDeliveryTime={config.displaySettings.showDeliveryTime}
                />
              </Grid>
            ))}
          </Grid>

          {filteredServices.length === 0 && (
            <Box sx={{ 
              textAlign: 'center', 
              py: 8,
              p: 4,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 4
            }}>
              <BodyText sx={{ 
                fontSize: '1.2rem', 
                color: 'text.secondary',
                mb: 3
              }}>
                No se encontraron servicios que coincidan con los filtros seleccionados.
              </BodyText>
              <Button
                variant="outline"
                onClick={clearFilters}
                size="medium"
              >
                Limpiar filtros
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* CTA Section con Glassmorfismo */}
      <Box sx={{ 
        py: 8,
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.05) 0%, rgba(255, 116, 119, 0.05) 100%)'
      }}>
        <Container maxWidth="lg">
          <Box sx={{
            p: 6,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <H2 sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #FF5C00 0%, #FF7477 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700
            }}>
              ¿Listo para liberar tu tiempo estratégico?
            </H2>
            <BodyText sx={{ 
              mb: 6, 
              maxWidth: 800, 
              mx: 'auto',
              fontSize: '1.1rem',
              color: 'text.secondary',
              lineHeight: 1.7
            }}>
              Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
            </BodyText>
            
            <DiagnosticCTA 
              variant="primary" 
              size="large" 
              text="AGENDAR DIAGNÓSTICO GRATUITO" 
            />
            
            <BodyText sx={{ 
              mt: 4, 
              fontStyle: 'italic', 
              color: 'text.secondary',
              fontSize: '0.9rem'
            }}>
              Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
            </BodyText>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;