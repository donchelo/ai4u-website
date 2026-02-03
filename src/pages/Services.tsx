import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography,
  Stack,
  Divider
} from '@mui/material';
import { Giant, H1, H2, BodyText, Button, SEOHead } from '../components/shared/ui/atoms';
import { ServiceCard, DiagnosticCTA, RelatedPages, SuperCategoryFilter, ExpandableSection } from '../components/shared/ui/molecules';
import { ProcessStep } from '../components/shared/ui/molecules';
import { ServicesFilter, ServicesPremiumHero } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context/ServicesContext';
import { useColors } from '../hooks';
import { ServiceCategory, ServiceSuperCategory } from '../types/service';
import { getServicesStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const Services: React.FC = () => {
  const colors = useColors();
  const { 
    config,
    setCategoryFilter,
    setSuperCategoryFilter,
    setSearchTerm,
    resetFilters,
    getFilteredServices
  } = useServicesContext();

  // Obtener meta tags optimizados para la página de servicios
  const metaTags = getPageMetaTags('services');
  const structuredData = getServicesStructuredData();
  
  // Obtener enlaces contextuales para la página Services
  const relatedLinks = getRelatedLinks('/servicios');

  const filteredServices = getFilteredServices();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedSuperTab, setSelectedSuperTab] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  const superCategoryTabs = [
    { label: 'Todos', value: undefined },
    { label: 'Estrategia', value: ServiceSuperCategory.STRATEGY },
    { label: 'Operación', value: ServiceSuperCategory.OPERATION }
  ];

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
    setSelectedSuperTab(0);
    setSearchValue('');
    resetFilters();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: colors.contrast.background,
      position: 'relative'
    }}>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/servicios"
        structuredData={structuredData}
      />

      {/* Hero Premium para Servicios */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <ServicesPremiumHero 
          title="Fashion Agent"
          maxItems={2}
        />
      </Box>

      {/* Services Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.contrast.background, 
        mt: 4,
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* Filters Sidebar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ 
                position: 'sticky', 
                top: 20, 
                zIndex: 3,
                height: 'fit-content'
              }}>
                <Stack spacing={4}>
                  {/* Super Categories Filter */}
                  <SuperCategoryFilter
                    selectedValue={superCategoryTabs[selectedSuperTab].value}
                    onValueChange={(value) => {
                      const index = superCategoryTabs.findIndex(tab => tab.value === value);
                      setSelectedSuperTab(index >= 0 ? index : 0);
                      setSuperCategoryFilter(value);
                    }}
                    options={superCategoryTabs}
                  />
                  
                  {/* Services Filter */}
                  <ServicesFilter
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    selectedTab={selectedTab}
                    onTabChange={handleTabChange}
                    onClearFilters={clearFilters}
                    filteredCount={filteredServices.length}
                    categoryTabs={categoryTabs}
                  />
                </Stack>
              </Box>
            </Grid>
            
            {/* Services Grid */}
            <Grid item xs={12} md={9}>
              {filteredServices.length > 0 ? (
                <Box sx={{ 
                  position: 'relative', 
                  zIndex: 2,
                  minHeight: (theme) => theme.spacing(50)
                }}>
                  {/* Mostrar primeros 6 servicios siempre */}
                  <Grid container spacing={4} sx={{ mb: 6 }}>
                    {filteredServices.slice(0, 6).map((service) => (
                      <Grid item xs={12} sm={6} lg={4} key={service.id} id={`service-${service.id}`} sx={{ scrollMarginTop: 96 }}>
                        <ServiceCard 
                          service={service}
                          showPrice={config.displaySettings.showPrices}
                        />
                      </Grid>
                    ))}
                  </Grid>

                  {/* Mostrar servicios adicionales si hay más de 6 */}
                  {filteredServices.length > 6 && (
                    <ExpandableSection
                      title={`EXPLORAR ${filteredServices.length - 6} SERVICIOS MÁS`}
                      variant="card"
                      defaultExpanded={false}
                    >
                      <Grid container spacing={4}>
                        {filteredServices.slice(6).map((service) => (
                          <Grid item xs={12} sm={6} lg={4} key={service.id} id={`service-${service.id}`} sx={{ scrollMarginTop: 96 }}>
                            <ServiceCard 
                              service={service}
                              showPrice={config.displaySettings.showPrices}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </ExpandableSection>
                  )}
                </Box>
              ) : (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 12,
                  color: colors.contrast.text.primary
                }}>
                  <H2 sx={{ mb: 4, fontWeight: 900 }}>
                    NO SE ENCONTRARON SERVICIOS
                  </H2>
                  <Button 
                    variant="primary" 
                    onClick={clearFilters}
                    sx={{ mt: 2 }}
                  >
                    LIMPIAR FILTROS
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderWidth: '2px', borderColor: colors.palette.black }} />

      {/* Process Section - Inspiración ORANGE_PUNCH */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, 
        px: { xs: 4, md: 8, lg: 12 },
        position: 'relative', 
        zIndex: 1, 
        bgcolor: colors.palette.accentColors.orange,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={10} alignItems="flex-start">
            <Box sx={{ textAlign: 'left', width: '100%' }}>
              <H1 sx={{ 
                fontWeight: 900,
                textTransform: 'uppercase',
                mb: 4,
                color: colors.palette.black,
                fontSize: { xs: '3rem', md: '6rem', lg: '8rem' },
                lineHeight: 0.9
              }}>
                NUESTRO <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>PROCESO</Box>
              </H1>
              <BodyText sx={{ 
                fontSize: '2rem',
                color: colors.palette.black,
                maxWidth: '800px',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase'
              }}>
                MÉTODO DIRECTO. RESULTADOS REALES. SIN COMPLICACIONES.
              </BodyText>
            </Box>
            
            <Grid container spacing={6}>
              {[
                {
                  number: 1,
                  title: 'DIAGNÓSTICO GRATUITO',
                  description: 'IDENTIFICAMOS TODAS LAS OPORTUNIDADES DE AUTOMATIZACIÓN EN TU NEGOCIO.',
                },
                {
                  number: 2,
                  title: 'DEFINICIÓN DE PRIORIDADES',
                  description: 'ESTABLECEMOS QUÉ PROCESOS AUTOMATIZAR PRIMERO SEGÚN TU ROI.',
                },
                {
                  number: 3,
                  title: 'PRESUPUESTO PERSONALIZADO',
                  description: 'ADAPTAMOS LAS SOLUCIONES A TU CAPACIDAD DE INVERSIÓN.',
                },
                {
                  number: 4,
                  title: 'IMPLEMENTACIÓN',
                  description: 'DESARROLLAMOS E INTEGRAMOS LAS SOLUCIONES EN TU NEGOCIO.',
                }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box sx={{ borderLeft: `8px solid ${colors.palette.black}`, pl: 4, mb: 4 }}>
                    <H2 sx={{ color: colors.palette.black, fontSize: '3rem', fontWeight: 900, mb: 2, lineHeight: 1 }}>
                      {String(step.number).padStart(2, '0')} // {step.title}
                    </H2>
                    <BodyText sx={{ color: colors.palette.black, fontSize: '1.5rem', fontWeight: 500, opacity: 0.9 }}>
                      {step.description}
                    </BodyText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.accentColors.green, 
        color: colors.palette.black, 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="lg">
          <Stack spacing={8} alignItems="center" textAlign="center">
            <Giant sx={{ color: colors.palette.black, fontSize: { xs: '3rem', md: '7rem', lg: '9rem' }, lineHeight: 0.85 }}>
              ¿NECESITAS AYUDA?
            </Giant>
            <BodyText sx={{ fontSize: '1.8rem', color: colors.palette.black, fontWeight: 600, maxWidth: '800px', textTransform: 'uppercase', lineHeight: 1.1 }}>
              AGENDA UNA CONSULTA GRATUITA DE 30 MINUTOS Y EMPIEZA A RECUPERAR TU TIEMPO.
            </BodyText>
            <DiagnosticCTA 
              variant="primary"
              size="large"
              text="AGENDAR CONSULTA"
              sx={{ 
                height: '100px', 
                px: 10, 
                fontSize: '1.8rem',
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                border: `4px solid ${colors.palette.black}`,
                '&:hover': {
                  bgcolor: colors.palette.white,
                  color: colors.palette.black
                }
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <RelatedPages 
          pages={relatedLinks}
          title="También podrías estar interesado en:"
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default Services;
