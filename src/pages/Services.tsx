import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Divider, 
  useTheme,
  alpha
} from '@mui/material';
import { H1, H2, H3, BodyText, Button, GeometricIcon } from '../components/shared/ui/atoms';
import { DiagnosticCTA, ServiceCard, Card, MetricCard } from '../components/shared/ui/molecules';
import { ProcessStep } from '../components/shared/ui/molecules';
import { ServicesFilter } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context/ServicesContext';
import { useColorMode } from '../context/ThemeContext';
import { ServiceCategory, ServiceSuperCategory } from '../types/service';
import { SERVICE_CONFIG } from '../utils/constants';

const Services: React.FC = () => {
  const theme = useTheme();
  const { mode } = useColorMode();
  const { 
    services: allServices,
    config,
    stats,
    filters,
    setCategoryFilter,
    setSuperCategoryFilter,
    setSearchTerm,
    resetFilters,
    getCategories,
    getFilteredServices
  } = useServicesContext();

  // Obtener servicios filtrados
  const filteredServices = getFilteredServices();

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedSuperTab, setSelectedSuperTab] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  // Mapeo de supracategorías
  const superCategoryTabs = [
    { label: 'Todos', value: undefined },
    { label: 'Estrategia', value: ServiceSuperCategory.STRATEGY },
    { label: 'Operación', value: ServiceSuperCategory.OPERATION }
  ];

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

  const handleSuperTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedSuperTab(newValue);
    setSuperCategoryFilter(superCategoryTabs[newValue].value);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setCategoryFilter(categoryTabs[newValue].value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchTerm(value || undefined);
  };

  const clearFilters = () => {
    setSelectedTab(0);
    setSelectedSuperTab(0);
    setSearchValue('');
    resetFilters();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: 'background.default',
      position: 'relative'
    }}>
      {/* Hero Section minimalista */}
      <Box sx={{ 
        position: 'relative',
        py: { xs: 6, md: 10 },
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <H1 sx={{ 
              mb: 3,
              color: 'text.primary',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 300,
              letterSpacing: '-0.01em'
            }}>
              Servicios AI4U
            </H1>
            <H2 sx={{ 
              mb: 4, 
              fontWeight: 400,
              color: 'text.primary',
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}>
              Construimos tu infraestructura de IA personalizada
            </H2>
            <BodyText sx={{ 
              fontSize: '1.1rem', 
              maxWidth: 700, 
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. 
              Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.
            </BodyText>
          </Box>

          {/* Stats con MetricCards glassmorphism - NÚMEROS GIGANTES */}
          <Box sx={{ mb: 6 }}>
            <H2 sx={{ 
              mb: 4, 
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 400,
              opacity: 0.8
            }}>
              Nuestros números hablan por sí solos
            </H2>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Servicios"
                  value={stats.total}
                  subtitle="Soluciones disponibles"
                  iconType="square"
                  variant="glass"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Estrategia"
                  value={stats.bySuperCategory[ServiceSuperCategory.STRATEGY]}
                  subtitle="Servicios estratégicos"
                  iconType="triangle"
                  variant="primary"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Operación"
                  value={stats.bySuperCategory[ServiceSuperCategory.OPERATION]}
                  subtitle="Servicios operativos"
                  iconType="circle"
                  variant="accent"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="ROI promedio"
                  value="300%"
                  subtitle="Retorno en 3 meses"
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                  trend="up"
                />
              </Box>
            </Grid>
          </Grid>
          
          {/* Métricas adicionales con números gigantes */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="Tiempo ahorrado"
                    value="85%"
                    subtitle="Reducción de tareas manuales"
                    iconType="arrow-up"
                    variant="glass"
                    size="large"
                    trend="up"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="Clientes satisfechos"
                    value="100%"
                    subtitle="Tasa de retención"
                    iconType="circle"
                    variant="primary"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="Implementación"
                    value="30"
                    subtitle="Días promedio"
                    iconType="triangle"
                    variant="accent"
                    size="large"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ py: 8, position: 'relative', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            Nuestro proceso
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Card variant="glass" sx={{ p: 0, bgcolor: 'background.default', border: `1px solid ${theme.palette.divider}` }}>
                <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    {[
                      {
                        number: 1,
                        title: `Diagnóstico gratuito (${SERVICE_CONFIG.DIAGNOSTIC_DURATION} minutos)`,
                        description: "Identificamos todas las oportunidades de automatización en tu negocio",
                        color: "#B6CA40"
                      },
                      {
                        number: 2,
                        title: "Definición de prioridades",
                        description: "Establecemos qué procesos automatizar primero según tu ROI",
                        color: theme.palette.secondary.main
                      },
                      {
                        number: 3,
                        title: "Presupuesto personalizado",
                        description: "Adaptamos las soluciones a tu capacidad de inversión",
                        color: "#FF6B35"
                      },
                      {
                        number: 4,
                        title: "Implementación",
                        description: "Desarrollamos e integramos las soluciones en tu negocio",
                        color: "#1a1a1a"
                      }
                    ].map((step, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <ProcessStep
                          number={step.number}
                          title={step.title}
                          description={step.description}
                          color={step.color}
                          size="large"
                        />
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ 
                    textAlign: 'center', 
                    mt: 6, 
                    pt: 4, 
                    borderTop: `1px solid ${theme.palette.divider}` 
                  }}>
                    <DiagnosticCTA />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            height: '1px', 
            background: `linear-gradient(90deg, transparent, ${theme.palette.divider}, transparent)`,
            mx: 'auto',
            width: '60%'
          }} />
        </Container>
      </Box>

      {/* Services Filter Section */}
      <Box sx={{ py: 8, position: 'relative', bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            Nuestros servicios
          </H2>
          
          {/* Super Category Tabs */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 3 
            }}>
              {superCategoryTabs.map((tab, index) => (
                <Button
                  key={index}
                  variant={selectedSuperTab === index ? "primary" : "outline"}
                  size="medium"
                  onClick={() => handleSuperTabChange({} as React.SyntheticEvent, index)}
                  sx={{
                    mx: 1,
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: selectedSuperTab === index ? 600 : 500,
                    background: selectedSuperTab === index 
                      ? (index === 1 ? theme.palette.secondary.main : index === 2 ? '#B6CA40' : theme.palette.background.paper)
                      : 'transparent',
                    color: selectedSuperTab === index 
                      ? '#FFFFFF' 
                      : index === 1 ? theme.palette.secondary.main : index === 2 ? '#B6CA40' : theme.palette.text.secondary,
                    border: `2px solid ${
                      selectedSuperTab === index 
                        ? (index === 1 ? theme.palette.secondary.main : index === 2 ? '#B6CA40' : theme.palette.divider)
                        : index === 1 ? theme.palette.secondary.main : index === 2 ? '#B6CA40' : theme.palette.divider
                    }`,
                    '&:hover': {
                      background: selectedSuperTab === index 
                        ? (index === 1 ? theme.palette.secondary.dark : index === 2 ? '#A5B839' : theme.palette.action.hover)
                        : index === 1 ? alpha(theme.palette.secondary.main, 0.1) : index === 2 ? alpha('#B6CA40', 0.1) : theme.palette.action.hover
                    }
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          </Box>
          
          {/* Services Filter Component */}
          <Box sx={{ mb: 6 }}>
            <ServicesFilter
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              onClearFilters={clearFilters}
              filteredCount={filteredServices.length}
              categoryTabs={categoryTabs}
            />
          </Box>
        </Container>

        {/* Services Grid - Horizontal Scroll with Navigation */}
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative' }}>
            {/* Navigation Buttons */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: -20,
              transform: 'translateY(-50%)',
              zIndex: 10,
              display: { xs: 'none', md: 'block' }
            }}>
              <Button
                variant="outline"
                size="small"
                onClick={() => {
                  const container = document.getElementById('services-scroll-container');
                  if (container) {
                    container.scrollBy({ left: -400, behavior: 'smooth' });
                  }
                }}
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[2],
                  '&:hover': {
                    background: theme.palette.background.default,
                    boxShadow: theme.shadows[4],
                  }
                }}
                aria-label="Desplazar servicios hacia la izquierda"
              >
                <GeometricIcon
                  type="arrow-left"
                  size="small"
                  color={theme.palette.text.secondary}
                  variant="filled"
                />
              </Button>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '50%',
              right: -20,
              transform: 'translateY(-50%)',
              zIndex: 10,
              display: { xs: 'none', md: 'block' }
            }}>
              <Button
                variant="outline"
                size="small"
                onClick={() => {
                  const container = document.getElementById('services-scroll-container');
                  if (container) {
                    container.scrollBy({ left: 400, behavior: 'smooth' });
                  }
                }}
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[2],
                  '&:hover': {
                    background: theme.palette.background.default,
                    boxShadow: theme.shadows[4],
                  }
                }}
                aria-label="Desplazar servicios hacia la derecha"
              >
                <GeometricIcon
                  type="arrow-right"
                  size="small"
                  color={theme.palette.text.secondary}
                  variant="filled"
                />
              </Button>
            </Box>

            {/* Scroll Container */}
            <Box 
              id="services-scroll-container"
              sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
                pb: 2,
                px: 1,
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': {
                  height: 8,
                },
                '&::-webkit-scrollbar-track': {
                  background: theme.palette.action.hover,
                  borderRadius: 4,
                },
                '&::-webkit-scrollbar-thumb': {
                  background: theme.palette.divider,
                  borderRadius: 4,
                  '&:hover': {
                    background: theme.palette.text.secondary,
                  },
                },
              }}
            >
              {filteredServices.map((service) => (
                <Box
                  key={service.id}
                  sx={{
                    minWidth: { xs: 280, sm: 320, md: 350 },
                    flexShrink: 0,
                  }}
                >
                  <ServiceCard 
                    service={service}
                    showPrice={config.displaySettings.showPrices}
                    showDeliveryTime={config.displaySettings.showDeliveryTime}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {filteredServices.length === 0 && (
            <Card variant="glass" sx={{ 
              textAlign: 'center', 
              py: 6,
              bgcolor: 'background.paper',
              border: `1px solid ${theme.palette.divider}`
            }}>
              <GeometricIcon
                type="cross"
                size="large"
                color={theme.palette.text.disabled}
                variant="minimal"
              />
              <BodyText sx={{ 
                fontSize: '1.1rem', 
                color: 'text.secondary',
                mb: 3,
                mt: 2
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
            </Card>
          )}
        </Container>
      </Box>

      {/* Estadísticas adicionales con números gigantes */}
      <Box sx={{ 
        py: 8, 
        position: 'relative', 
        bgcolor: 'background.paper',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            Impacto real en nuestros clientes
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Horas ahorradas"
                  value="1200+"
                  subtitle="Por cliente al mes"
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                  trend="up"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Procesos automatizados"
                  value="95%"
                  subtitle="De tareas repetitivas"
                  iconType="circle"
                  variant="primary"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Tiempo de respuesta"
                  value="24h"
                  subtitle="Soporte garantizado"
                  iconType="triangle"
                  variant="accent"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Escalabilidad"
                  value="∞"
                  subtitle="Crecimiento sin límites"
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        py: 8,
        position: 'relative',
        bgcolor: mode === 'dark' ? 'background.default' : '#1a1a1a'
      }}>
        <Container maxWidth="lg">
          <Card variant="dark" sx={{ 
            textAlign: 'center', 
            p: 6,
            bgcolor: mode === 'dark' ? 'background.paper' : '#2a2a2a',
            border: `1px solid ${mode === 'dark' ? theme.palette.divider : 'rgba(255, 255, 255, 0.1)'}`
          }}>
            <Box sx={{ mb: 3 }}>
              <GeometricIcon
                type="arrow-up"
                size="large"
                color="#B6CA40"
                variant="filled"
              />
            </Box>
            <H2 sx={{ 
              mb: 3,
              color: mode === 'dark' ? 'text.primary' : '#FFFFFF',
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 400
            }}>
              ¿Listo para liberar tu tiempo estratégico?
            </H2>
            <BodyText sx={{ 
              mb: 6, 
              maxWidth: 600, 
              mx: 'auto',
              fontSize: '1rem',
              color: mode === 'dark' ? 'text.secondary' : 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6
            }}>
              Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
            </BodyText>
            
            <Box sx={{ mb: 4 }}>
              <DiagnosticCTA />
            </Box>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: mode === 'dark' ? 'text.disabled' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
            </BodyText>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;