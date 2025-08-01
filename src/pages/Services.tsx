import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography
} from '@mui/material';
import { H1, H2, BodyText, Button, GeometricIcon } from '../components/shared/ui/atoms';
import { ServiceCard, Card } from '../components/shared/ui/molecules';
import { ProcessStep } from '../components/shared/ui/molecules';
import { ServicesFilter } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context/ServicesContext';
import { useLanguage } from '../hooks';
import { useColors } from '../hooks';
import { ServiceCategory, ServiceSuperCategory } from '../types/service';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const colors = useColors();
  const { 
    config,
    stats,
    setCategoryFilter,
    setSuperCategoryFilter,
    setSearchTerm,
    resetFilters,
    getFilteredServices
  } = useServicesContext();

  // Obtener servicios filtrados
  const filteredServices = getFilteredServices();

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedSuperTab, setSelectedSuperTab] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  // Mapeo de supracategorías con traducciones
  const superCategoryTabs = [
    { label: t('services.filter.superCategories.0.label'), value: undefined },
    { label: t('services.filter.superCategories.1.label'), value: ServiceSuperCategory.STRATEGY },
    { label: t('services.filter.superCategories.2.label'), value: ServiceSuperCategory.OPERATION }
  ];

  // Mapeo de categorías para los tabs con traducciones
  const categoryTabs = [
    { label: t('services.filter.categories.0.label'), value: undefined },
    { label: t('services.filter.categories.1.label'), value: ServiceCategory.AI_ASSISTANT },
    { label: t('services.filter.categories.2.label'), value: ServiceCategory.AUTOMATION },
    { label: t('services.filter.categories.3.label'), value: ServiceCategory.ANALYTICS },
    { label: t('services.filter.categories.4.label'), value: ServiceCategory.ECOMMERCE },
    { label: t('services.filter.categories.5.label'), value: ServiceCategory.TRAINING },
    { label: t('services.filter.categories.6.label'), value: ServiceCategory.CONSULTING }
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
      bgcolor: colors.contrast.background,
      position: 'relative'
    }}>
      {/* Hero Section con glassmorphism */}
      <Box sx={{ 
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.contrast.background}, ${colors.helpers.background.secondary})`
      }}>
        {/* Background Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          background: `radial-gradient(circle at 20% 80%, ${colors.palette.orange} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${colors.palette.green} 0%, transparent 50%)`
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <H1 sx={{ 
              mb: 3,
              color: colors.contrast.text.primary,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 300,
              letterSpacing: '-0.01em',
              background: `linear-gradient(135deg, ${colors.contrast.text.primary}, ${colors.palette.orange})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t('services.hero.title')}
            </H1>
            <H2 sx={{ 
              mb: 4, 
              fontWeight: 400,
              color: colors.contrast.text.secondary,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}>
              {t('services.hero.subtitle')}
            </H2>
            <BodyText sx={{ 
              fontSize: '1.1rem', 
              maxWidth: 700, 
              mx: 'auto',
              color: colors.contrast.text.secondary,
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              {t('services.hero.description')}
            </BodyText>
          </Box>

          {/* Stats Cards con números prominentes */}
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="glass" sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h2" sx={{ 
                  fontSize: '3rem', 
                  fontWeight: 700, 
                  color: colors.palette.orange,
                  mb: 1
                }}>
                  {stats.total}
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.secondary }}>
                  Servicios Disponibles
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="glass" sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h2" sx={{ 
                  fontSize: '3rem', 
                  fontWeight: 700, 
                  color: colors.palette.green,
                  mb: 1
                }}>
                  {stats.active}
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.secondary }}>
                  Servicios Activos
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="glass" sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h2" sx={{ 
                  fontSize: '3rem', 
                  fontWeight: 700, 
                  color: colors.palette.orange,
                  mb: 1
                }}>
                  {Object.keys(stats.byCategory).length}
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.secondary }}>
                  Categorías
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="glass" sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h2" sx={{ 
                  fontSize: '3rem', 
                  fontWeight: 700, 
                  color: colors.palette.green,
                  mb: 1
                }}>
                  {Object.keys(stats.bySuperCategory).length}
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.secondary }}>
                  Supracategorías
                </BodyText>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Filter Section con glassmorphism */}
      <Box sx={{ py: 8, position: 'relative', bgcolor: colors.helpers.background.secondary }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: colors.contrast.text.primary,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            {t('services.filter.title')}
          </H2>
          
          {/* Super Category Tabs con glassmorphism */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 3,
              gap: 2
            }}>
              {superCategoryTabs.map((tab, index) => (
                <Button
                  key={index}
                  variant={selectedSuperTab === index ? "primary" : "glass"}
                  size="medium"
                  onClick={() => handleSuperTabChange({} as React.SyntheticEvent, index)}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: selectedSuperTab === index ? 600 : 500,
                    minWidth: 140,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: selectedSuperTab === index 
                        ? `linear-gradient(135deg, ${colors.palette.orange}20, ${colors.palette.orange}10)`
                        : 'transparent',
                      borderRadius: 3,
                      zIndex: -1
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
            {/* Navigation Buttons con glassmorphism */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: -20,
              transform: 'translateY(-50%)',
              zIndex: 10,
              display: { xs: 'none', md: 'block' }
            }}>
              <Button
                variant="glass"
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
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.contrast.border}`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                  }
                }}
                aria-label={t('services.filter.navigation.left')}
              >
                <GeometricIcon
                  type="arrow-left"
                  size="small"
                  color={colors.contrast.text.secondary}
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
                variant="glass"
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
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.contrast.border}`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                  }
                }}
                aria-label={t('services.filter.navigation.right')}
              >
                <GeometricIcon
                  type="arrow-right"
                  size="small"
                  color={colors.contrast.text.secondary}
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
                  background: colors.helpers.state.hover,
                  borderRadius: 4,
                },
                '&::-webkit-scrollbar-thumb': {
                  background: colors.contrast.divider,
                  borderRadius: 4,
                  '&:hover': {
                    background: colors.contrast.text.secondary,
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
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {filteredServices.length === 0 && (
            <Card variant="glass" sx={{ 
              textAlign: 'center', 
              py: 6,
              mt: 4,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.contrast.border}`
            }}>
              <GeometricIcon
                type="cross"
                size="large"
                color={colors.contrast.text.disabled}
                variant="minimal"
              />
              <BodyText sx={{ 
                fontSize: '1.1rem', 
                color: colors.contrast.text.secondary,
                mb: 3,
                mt: 2
              }}>
                {t('services.filter.noResults.title')}
              </BodyText>
              <Button
                variant="outline"
                onClick={clearFilters}
                size="medium"
              >
                {t('services.filter.noResults.clearButton')}
              </Button>
            </Card>
          )}
        </Container>
      </Box>

      {/* Divider con glassmorphism */}
      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            height: '1px', 
            background: `linear-gradient(90deg, transparent, ${colors.contrast.divider}, transparent)`,
            mx: 'auto',
            width: '60%',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -1,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: colors.palette.orange,
              boxShadow: `0 0 8px ${colors.palette.orange}40`
            }
          }} />
        </Container>
      </Box>

      {/* Our Process Section con glassmorphism */}
      <Box sx={{ py: 8, position: 'relative', bgcolor: colors.contrast.background }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: colors.contrast.text.primary,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400
          }}>
            {t('services.process.title')}
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Card variant="glass" sx={{ 
                p: 0, 
                bgcolor: 'transparent',
                border: `1px solid ${colors.contrast.border}`,
                backdropFilter: 'blur(20px)'
              }}>
                <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    {[
                      {
                        number: 1,
                        title: t('services.process.steps.0.title'),
                        description: t('services.process.steps.0.description'),
                        color: colors.palette.green,
                        icon: "circle"
                      },
                      {
                        number: 2,
                        title: t('services.process.steps.1.title'),
                        description: t('services.process.steps.1.description'),
                        color: colors.palette.orange,
                        icon: "square"
                      },
                      {
                        number: 3,
                        title: t('services.process.steps.2.title'),
                        description: t('services.process.steps.2.description'),
                        color: colors.palette.orange,
                        icon: "triangle"
                      },
                      {
                        number: 4,
                        title: t('services.process.steps.3.title'),
                        description: t('services.process.steps.3.description'),
                        color: colors.palette.green,
                        icon: "arrow-right"
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
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;