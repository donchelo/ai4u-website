import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Divider, 
  Paper,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { H1, H2, BodyText } from '../components/ui/Typography';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ui/ProcessStep';
import { useServicesContext } from '../context/ServicesContext';
import { ServiceCategory } from '../types/service';
import { SERVICE_CONFIG } from '../utils/constants';





const Services: React.FC = () => {
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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H1 sx={{ mb: 2 }}>Servicios AI4U</H1>
          <H2 sx={{ mb: 3, fontWeight: 500 }}>Construimos tu infraestructura de IA personalizada</H2>
        </Box>
        <BodyText sx={{ fontSize: '1.1rem', maxWidth: 800, textAlign: 'left' }}>
          En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. 
          Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.
        </BodyText>
      </Box>

      {/* Stats Section */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <H2 sx={{ color: 'primary.main', mb: 0 }}>{stats.total}</H2>
              <BodyText variant="caption">Servicios Totales</BodyText>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <H2 sx={{ color: 'success.main', mb: 0 }}>{stats.active}</H2>
              <BodyText variant="caption">Disponibles</BodyText>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <H2 sx={{ color: 'warning.main', mb: 0 }}>{stats.featured}</H2>
              <BodyText variant="caption">Destacados</BodyText>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <H2 sx={{ color: 'info.main', mb: 0 }}>{getCategories().length}</H2>
              <BodyText variant="caption">Categorías</BodyText>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4, textAlign: 'center' }}>Nuestro proceso</H2>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
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
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <DiagnosticCTA 
                variant="primary" 
                size="medium" 
                text="Iniciar con diagnóstico gratuito" 
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Services Filter Section */}
      <Box sx={{ mb: 4 }}>
        <H2 sx={{ mb: 4, textAlign: 'center' }}>Nuestros servicios</H2>
        
        {/* Search and Filters */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Buscar servicios..."
                value={searchValue}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showFeaturedOnly}
                      onChange={handleFeaturedToggle}
                      color="primary"
                    />
                  }
                  label="Solo destacados"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack spacing={1} direction="row">
                <Chip
                  label="Limpiar filtros"
                  onClick={clearFilters}
                  variant="outlined"
                  size="small"
                  clickable
                />
                <Chip
                  label={`${filteredServices.length} servicios`}
                  color="primary"
                  size="small"
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-scrollButtons': {
                '&.Mui-disabled': { opacity: 0.3 }
              }
            }}
          >
            {categoryTabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box sx={{ mb: 8 }}>
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
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <BodyText sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
              No se encontraron servicios que coincidan con los filtros seleccionados.
            </BodyText>
            <Box sx={{ mt: 2 }}>
              <Chip
                label="Limpiar filtros"
                onClick={clearFilters}
                color="primary"
                clickable
              />
            </Box>
          </Box>
        )}
      </Box>


      {/* CTA Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H2 sx={{ mb: 2 }}>¿Listo para liberar tu tiempo estratégico?</H2>
        </Box>
        <BodyText sx={{ mb: 4, maxWidth: 800, textAlign: 'left' }}>
          Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
        </BodyText>
        
        <Box sx={{ textAlign: 'center' }}>
          <DiagnosticCTA variant="primary" size="large" text="AGENDAR DIAGNÓSTICO GRATUITO" />
          
          <BodyText sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
            Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
          </BodyText>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;