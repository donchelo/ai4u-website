import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography,
  Stack,
  Divider
} from '@mui/material';
import { H2, BodyText, Button, SEOHead } from '../components/shared/ui/atoms';
import { ServiceCard, DiagnosticCTA, RelatedPages, SuperCategoryFilter, ExpandableSection } from '../components/shared/ui/molecules';
import { ProcessStep } from '../components/shared/ui/molecules';
import { ServicesFilter, ServicesPremiumHero } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context/ServicesContext';
import { useLanguage } from '../hooks';
import { useColors } from '../hooks';
import { ServiceCategory, ServiceSuperCategory } from '../types/service';
import { getServicesStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const Services: React.FC = () => {
  const { t } = useLanguage();
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
    { label: t('services.filter.superCategories.0.label'), value: undefined },
    { label: t('services.filter.superCategories.1.label'), value: ServiceSuperCategory.STRATEGY },
    { label: t('services.filter.superCategories.2.label'), value: ServiceSuperCategory.OPERATION }
  ];

  const categoryTabs = [
    { label: t('services.filter.categories.0.label'), value: undefined },
    { label: t('services.filter.categories.1.label'), value: ServiceCategory.AI_ASSISTANT },
    { label: t('services.filter.categories.2.label'), value: ServiceCategory.AUTOMATION },
    { label: t('services.filter.categories.3.label'), value: ServiceCategory.ANALYTICS },
    { label: t('services.filter.categories.4.label'), value: ServiceCategory.ECOMMERCE },
    { label: t('services.filter.categories.5.label'), value: ServiceCategory.TRAINING },
    { label: t('services.filter.categories.6.label'), value: ServiceCategory.CONSULTING }
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
        py: 4, 
        bgcolor: colors.contrast.surface, 
        mt: 4,
        position: 'relative',
        zIndex: 2
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {/* Filters Sidebar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ 
                position: 'sticky', 
                top: 20, 
                zIndex: 3,
                height: 'fit-content'
              }}>
                <Stack spacing={3}>
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
                  minHeight: '400px'
                }}>
                  {/* Mostrar primeros 6 servicios siempre */}
                  <Grid container spacing={2} sx={{ mb: 4 }}>
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
                      title={`Explorar ${filteredServices.length - 6} servicios más`}
                      variant="minimal"
                      defaultExpanded={false}
                    >
                      <Grid container spacing={2}>
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
                  py: 8,
                  color: colors.contrast.text.secondary
                }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    No se encontraron servicios
                  </Typography>
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    sx={{ mt: 2 }}
                  >
                    Limpiar filtros
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1, bgcolor: colors.contrast.surface }}>
        <Container maxWidth="xl">
          <Stack spacing={4} alignItems="center">
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <H2 sx={{ 
                fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                fontWeight: 600,
                letterSpacing: '-0.02em',
                mb: 2
              }}>
                {t('services.process.title')}
              </H2>
              <BodyText sx={{ 
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: colors.contrast.text.secondary,
                maxWidth: 600,
                mx: 'auto'
              }}>
                {t('services.process.subtitle')}
              </BodyText>
            </Box>
            
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 2 }}>
              {[
                {
                  number: 1,
                  title: t('services.process.steps.0.title'),
                  description: t('services.process.steps.0.description'),
                  color: colors.contrast.text.secondary
                },
                {
                  number: 2,
                  title: t('services.process.steps.1.title'),
                  description: t('services.process.steps.1.description'),
                  color: colors.contrast.text.secondary
                },
                {
                  number: 3,
                  title: t('services.process.steps.2.title'),
                  description: t('services.process.steps.2.description'),
                  color: colors.contrast.text.secondary
                },
                {
                  number: 4,
                  title: t('services.process.steps.3.title'),
                  description: t('services.process.steps.3.description'),
                  color: colors.contrast.text.secondary
                }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    color={step.color}
                    size="medium"
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.contrast.surface, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <H2 sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' } }}>
              {t('common.help.title')}
            </H2>
            <BodyText sx={{ maxWidth: 500 }}>
              {t('common.help.subtitle')}
            </BodyText>
            <DiagnosticCTA 
              variant="primary"
              size="medium"
              showIcon={true}
              text={t('common.schedule.title')}
            />
          </Stack>
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title={t('common.related.title')}
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default Services;