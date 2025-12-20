import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Stack,
  Divider,
  Paper
} from '@mui/material';
import { useColors, useColorMode } from '../hooks';
import { H1, H2, H3, H4, BodyText, SmallText } from '../components/shared/ui/atoms';
import { Button, Card, ServiceCard, TransactionCard, MetricCard } from '../components/shared/ui/molecules';
import { Navigation, Navbar, HeroSection } from '../components/shared/ui/organisms';
import { GeometricIcon } from '../components/shared/ui/atoms';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Service, ServiceCategory, ServiceSuperCategory, ServiceStatus } from '../types/service';

// Datos de ejemplo
const mockService: Service = {
  id: '1',
  title: 'Consultoría en IA',
  subtitle: 'Estrategia y Implementación',
  description: 'Desarrollamos estrategias personalizadas de inteligencia artificial para optimizar tus procesos empresariales.',
  price: '$2,500 USD',
  deliveryTime: '4-6 semanas',
  status: ServiceStatus.ACTIVE,
  superCategory: ServiceSuperCategory.STRATEGY,
  category: ServiceCategory.CONSULTING,
  priority: 1,
  featured: true,
  color: '#FF5C00',
  gradient: 'linear-gradient(135deg, #FF5C00, #FF7477)',
  benefits: [
    'Análisis de procesos actuales',
    'Roadmap de implementación',
    'Capacitación del equipo',
    'Soporte post-implementación'
  ],
  tags: ['IA', 'Estrategia', 'Consultoría'],
  metadata: {
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    version: '1.0.0',
    author: 'AI4U Team'
  }
};

const mockTransactions = [
  {
    id: '1',
    merchant: 'Amazon',
    category: 'SHOPPING',
    amount: 89.99,
    time: '2 hours ago'
  },
  {
    id: '2',
    merchant: 'Gym Membership',
    category: 'FITNESS',
    amount: 49.99,
    time: '1 day ago'
  },
  {
    id: '3',
    merchant: 'Coursera',
    category: 'EDUCATION',
    amount: 29.99,
    time: '3 days ago'
  }
];

const navItems = [
  { id: 'home', label: 'Inicio', href: '/' },
  { id: 'services', label: 'Servicios', href: '/services' },
  { id: 'about', label: 'Nosotros', href: '/about' },
  { id: 'contact', label: 'Contacto', href: '/contact' }
];

const Fase3Demo = () => {
  const { mode, toggleColorMode } = useColorMode();
  const colors = useColors();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <H1 sx={{ mb: 2 }}>Fase 3: Componentes Restantes Migrados</H1>
        <BodyText sx={{ mb: 3 }}>
          Demostración de todos los componentes actualizados al nuevo sistema de colores unificado
        </BodyText>
        <Button 
          variant="primary" 
          onClick={toggleColorMode}
          startIcon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          sx={{ mb: 2 }}
        >
          Cambiar a modo {mode === 'light' ? 'oscuro' : 'claro'}
        </Button>
        <SmallText>
          Modo actual: {mode === 'light' ? 'Claro' : 'Oscuro'}
        </SmallText>
      </Box>

      {/* Navigation Component */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Navigation Component</H2>
        <Paper sx={{ p: 3, mb: 3 }}>
          <H4 sx={{ mb: 2 }}>Horizontal Navigation</H4>
          <Navigation 
            items={navItems}
            activeItem="home"
            variant="horizontal"
          />
        </Paper>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <H4 sx={{ mb: 2 }}>Vertical Navigation</H4>
          <Navigation 
            items={navItems}
            activeItem="services"
            variant="vertical"
          />
        </Paper>
        
        <Paper sx={{ p: 3 }}>
          <H4 sx={{ mb: 2 }}>Tabs Navigation</H4>
          <Navigation 
            items={navItems}
            activeItem="about"
            variant="tabs"
          />
        </Paper>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* GeometricIcon Component */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>GeometricIcon Component</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <H4 sx={{ mb: 2 }}>Icon Variants</H4>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <GeometricIcon type="circle" variant="filled" color={colors.palette.accent} />
<GeometricIcon type="square" variant="outline" color={colors.palette.success} />
<GeometricIcon type="triangle" variant="minimal" color={colors.contrast.text.primary} />
<GeometricIcon type="arrow-up" variant="filled" color={colors.palette.accent} />
<GeometricIcon type="plus" variant="outline" color={colors.palette.success} />
                <GeometricIcon type="cross" variant="minimal" color={colors.contrast.text.secondary} />
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <H4 sx={{ mb: 2 }}>Icon Sizes</H4>
              <Stack direction="row" spacing={2} alignItems="center">
                <GeometricIcon type="circle" size="small" color={colors.palette.accent} />
<GeometricIcon type="circle" size="medium" color={colors.palette.success} />
<GeometricIcon type="circle" size="large" color={colors.palette.accent} />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* TransactionCard Component */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>TransactionCard Component</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TransactionCard
              title="Transacciones Recientes"
              subtitle="Últimas 24 horas"
              transactions={mockTransactions}
              onShowMore={() => console.log('Show more transactions')}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <H4 sx={{ mb: 2 }}>Categorías de Transacciones</H4>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <SmallText>SHOPPING</SmallText>
                  <Box sx={{ width: 20, height: 20, bgcolor: '#DBEAFE', borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <SmallText>FITNESS</SmallText>
                  <Box sx={{ width: 20, height: 20, bgcolor: '#D1FAE5', borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <SmallText>EDUCATION</SmallText>
                  <Box sx={{ width: 20, height: 20, bgcolor: '#E9D5FF', borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <SmallText>INVESTMENTS</SmallText>
                  <Box sx={{ width: 20, height: 20, bgcolor: '#FEF3C7', borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <SmallText>HEALTH</SmallText>
                  <Box sx={{ width: 20, height: 20, bgcolor: '#FEE2E2', borderRadius: 1 }} />
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* MetricCard Component */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>MetricCard Component</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MetricCard
              title="Usuarios Activos"
              value={12543}
              subtitle="+12% desde el mes pasado"
              iconType="arrow-up"
              trend="up"
              variant="elevated"
              size="normal"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MetricCard
              title="Ingresos Mensuales"
              value={89420}
              subtitle="+8% desde el mes pasado"
              iconType="arrow-up"
              trend="up"
              variant="elevated"
              size="normal"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MetricCard
              title="Tasa de Conversión"
              value={3.2}
              subtitle="-2% desde el mes pasado"
              iconType="arrow-down"
              trend="down"
              variant="elevated"
              size="normal"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* ServiceCard Component */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>ServiceCard Component</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ServiceCard 
              service={mockService}
              showPrice={true}
              compact={false}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ServiceCard 
              service={mockService}
              showPrice={true}
              compact={true}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Resumen de Migración */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 4 }}>Resumen de la Fase 3</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <H4 sx={{ mb: 2 }}>✅ Componentes Migrados</H4>
              <Stack spacing={2}>
                <BodyText>• Navigation (horizontal, vertical, tabs)</BodyText>
                <BodyText>• HeroSection (con imágenes dinámicas)</BodyText>
                <BodyText>• Navbar (con menú móvil)</BodyText>
                <BodyText>• TransactionCard (con categorías)</BodyText>
                <BodyText>• MetricCard (con tendencias)</BodyText>
                <BodyText>• GeometricIcon (con variantes)</BodyText>
                <BodyText>• ServiceCard (completo)</BodyText>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <H4 sx={{ mb: 2 }}>🎯 Beneficios Logrados</H4>
              <Stack spacing={2}>
                <BodyText>• Sistema de colores completamente unificado</BodyText>
                <BodyText>• Contraste automático en todos los componentes</BodyText>
                <BodyText>• Consistencia visual garantizada</BodyText>
                <BodyText>• Fácil mantenimiento y escalabilidad</BodyText>
                <BodyText>• Cumplimiento de estándares de accesibilidad</BodyText>
                <BodyText>• Performance optimizado</BodyText>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Código de Uso */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 4 }}>Código de Uso - Fase 3</H2>
        <Card>
          <H4 sx={{ mb: 2 }}>Ejemplo de Componente Migrado</H4>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: colors.contrast.text.secondary }}>
            {`// Antes
<Navigation 
  items={navItems}
  sx={{ 
    backgroundColor: '#FFFFFF',
    color: '#000000',
    '& .Mui-selected': {
      background: '#FF5C00',
      color: '#FFFFFF'
    }
  }}
/>

// Después
const colors = useColors();
<Navigation 
  items={navItems}
  // Los colores se aplican automáticamente
  // según el modo actual (claro/oscuro)
/>`}
          </Typography>
        </Card>
      </Box>
    </Container>
  );
};

export default Fase3Demo; 