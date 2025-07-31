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
import { DiagnosticCTA, ServiceCard, ProcessStep, Card, MetricCard } from '../components/shared/ui/molecules';
import { ServicesFilter } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context/ServicesContext';
import { ServiceCategory } from '../types/service';
import { SERVICE_CONFIG } from '../utils/constants';

const Services: React.FC = () => {
  const theme = useTheme();
  const { 
    services: allServices,
    config,
    stats,
    filters,
    setCategoryFilter,
    setSearchTerm,
    resetFilters,
    getCategories,
    getFilteredServices
  } = useServicesContext();

  // Obtener servicios filtrados
  const filteredServices = getFilteredServices();

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

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

  const clearFilters = () => {
    setSelectedTab(0);
    setSearchValue('');
    resetFilters();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
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
              color: '#000000',
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

          {/* Stats con MetricCards glassmorphism */}
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Servicios"
                value={stats.total}
                subtitle="Soluciones disponibles"
                iconType="square"
                variant="glass"
                size="compact"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Categorías"
                value={getCategories().length}
                subtitle="Áreas especializadas"
                iconType="triangle"
                variant="glass"
                size="compact"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="ROI promedio"
                value="300%"
                subtitle="Retorno en 3 meses"
                iconType="circle"
                variant="primary"
                size="compact"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Tiempo ahorrado"
                value="70%"
                subtitle="Reducción operativa"
                iconType="arrow-up"
                variant="glass"
                size="compact"
                trend="up"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: '#000000',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            Nuestro proceso
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Card variant="glass" sx={{ p: 0 }}>
                <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    {[
                      {
                        number: 1,
                        title: `Diagnóstico gratuito (${SERVICE_CONFIG.DIAGNOSTIC_DURATION} minutos)`,
                        description: "Identificamos todas las oportunidades de automatización en tu negocio",
                        icon: "circle"
                      },
                      {
                        number: 2,
                        title: "Definición de prioridades",
                        description: "Establecemos qué procesos automatizar primero según tu ROI",
                        icon: "triangle"
                      },
                      {
                        number: 3,
                        title: "Presupuesto personalizado",
                        description: "Adaptamos las soluciones a tu capacidad de inversión",
                        icon: "square"
                      },
                      {
                        number: 4,
                        title: "Implementación",
                        description: "Desarrollamos e integramos las soluciones en tu negocio",
                        icon: "arrow-right"
                      }
                    ].map((step, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: 3,
                          p: 2
                        }}>
                          <GeometricIcon
                            type={step.icon as any}
                            size="medium"
                            color={idx === 0 ? "#B6CA40" : "rgba(0, 0, 0, 0.3)"}
                            variant={idx === 0 ? "filled" : "minimal"}
                          />
                          <Box sx={{ flex: 1 }}>
                            <H3 sx={{ 
                              mb: 1, 
                              fontSize: '1.1rem', 
                              fontWeight: 500,
                              color: 'text.primary'
                            }}>
                              {step.title}
                            </H3>
                            <BodyText sx={{ 
                              color: 'text.secondary', 
                              fontSize: '0.95rem',
                              lineHeight: 1.5
                            }}>
                              {step.description}
                            </BodyText>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ textAlign: 'center', mt: 6, pt: 4, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
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
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
            mx: 'auto',
            width: '60%'
          }} />
        </Container>
      </Box>

      {/* Services Filter Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: '#000000',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
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
            <Card variant="glass" sx={{ textAlign: 'center', py: 6 }}>
              <GeometricIcon
                type="cross"
                size="large"
                color="rgba(0, 0, 0, 0.3)"
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

      {/* CTA Section */}
      <Box sx={{ 
        py: 8,
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Card variant="dark" sx={{ textAlign: 'center', p: 6 }}>
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
              color: '#FFFFFF',
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
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6
            }}>
              Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
            </BodyText>
            
            <Box sx={{ mb: 4 }}>
              <DiagnosticCTA />
            </Box>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: 'rgba(255, 255, 255, 0.6)',
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