import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Stack,
  Divider
} from '@mui/material';
import { useColors, useColorMode } from '../hooks';
import { H1, H2, H3, H4, BodyText, SmallText } from '../components/shared/ui/atoms';
import { Button, Card } from '../components/shared/ui/molecules';
import { ServiceCard } from '../components/shared/ui/molecules';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Service, ServiceCategory, ServiceSuperCategory, ServiceStatus } from '../types/service';

// Datos de ejemplo para ServiceCard
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

const MigrationDemo = () => {
  const { mode, toggleColorMode } = useColorMode();
  const colors = useColors();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <H1 sx={{ mb: 2 }}>Fase 2: Componentes Migrados</H1>
        <BodyText sx={{ mb: 3 }}>
          Demostración de componentes actualizados al nuevo sistema de colores con contraste automático
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

      {/* Información del Sistema */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Sistema de Colores Actual</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <H4 sx={{ mb: 2 }}>Colores del Sistema</H4>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Fondo:</SmallText>
                  <SmallText>{colors.contrast.background}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Superficie:</SmallText>
                  <SmallText>{colors.contrast.surface}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Texto Principal:</SmallText>
                  <SmallText>{colors.contrast.text.primary}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Texto Secundario:</SmallText>
                  <SmallText>{colors.contrast.text.secondary}</SmallText>
                </Box>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <H4 sx={{ mb: 2 }}>Paleta de Marca</H4>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Naranja:</SmallText>
                  <SmallText>{colors.palette.accent}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Verde:</SmallText>
                  <SmallText>{colors.palette.success}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Blanco:</SmallText>
                  <SmallText>{colors.palette.white}</SmallText>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SmallText>Negro:</SmallText>
                  <SmallText>{colors.palette.black}</SmallText>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Componentes Migrados */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Componentes Migrados</H2>
        
        {/* Botones */}
        <Box sx={{ mb: 6 }}>
          <H3 sx={{ mb: 3 }}>Botones</H3>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <H4 sx={{ mb: 2 }}>Variantes de Botones</H4>
                <Stack spacing={2}>
                  <Button variant="primary">Botón Primario</Button>
                  <Button variant="secondary">Botón Secundario</Button>
                  <Button variant="outline">Botón Outline</Button>
                  <Button variant="secondary">Botón Secondary</Button>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <H4 sx={{ mb: 2 }}>Estados de Botones</H4>
                <Stack spacing={2}>
                  <Button variant="primary" disabled>
                    Botón Deshabilitado
                  </Button>
                  <Button variant="secondary" size="small">
                    Botón Pequeño
                  </Button>
                  <Button variant="primary" size="large">
                    Botón Grande
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Cards */}
        <Box sx={{ mb: 6 }}>
          <H3 sx={{ mb: 3 }}>Cards</H3>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="elevated">
                <H4 sx={{ mb: 2 }}>Card Light</H4>
                <BodyText>
                  Card con fondo claro y texto oscuro. Contraste automático garantizado.
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="elevated">
                <>
                  <H4 sx={{ mb: 2 }}>Card Primary</H4>
                  <BodyText>
                    Card con acento naranja y contraste optimizado para legibilidad.
                  </BodyText>
                </>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="elevated">
                <H4 sx={{ mb: 2 }}>Card Accent</H4>
                <BodyText>
                  Card con acento verde y diseño minimalista con glassmorphism.
                </BodyText>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* ServiceCard */}
        <Box sx={{ mb: 6 }}>
          <H3 sx={{ mb: 3 }}>ServiceCard</H3>
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
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Comparación Antes/Después */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 4 }}>Beneficios de la Migración</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <>
                <H4 sx={{ mb: 2 }}>✅ Antes</H4>
                <Stack spacing={2}>
                  <BodyText>• Colores hardcodeados</BodyText>
                  <BodyText>• Contraste manual</BodyText>
                  <BodyText>• Duplicación de paletas</BodyText>
                  <BodyText>• Inconsistencias visuales</BodyText>
                  <BodyText>• Difícil mantenimiento</BodyText>
                </Stack>
              </>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="elevated">
              <H4 sx={{ mb: 2 }}>✅ Después</H4>
              <Stack spacing={2}>
                <BodyText>• Sistema unificado</BodyText>
                <BodyText>• Contraste automático</BodyText>
                <BodyText>• Una sola fuente de verdad</BodyText>
                <BodyText>• Consistencia garantizada</BodyText>
                <BodyText>• Fácil mantenimiento</BodyText>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Código de Uso */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 4 }}>Código de Uso Migrado</H2>
        <Card>
          <H4 sx={{ mb: 2 }}>Ejemplo de Componente Migrado</H4>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: colors.contrast.text.secondary }}>
            {`// Antes
<Box sx={{ 
  background: '#FFFFFF',
  color: '#000000',
  border: '1px solid #E5E5E5'
}}>
  Contenido
</Box>

// Después
const colors = useColors();
<Box sx={{ 
  background: colors.contrast.surface,
  color: colors.contrast.text.primary,
  border: \`1px solid \${colors.contrast.border}\`
}}>
  Contenido
</Box>`}
          </Typography>
        </Card>
      </Box>
    </Container>
  );
};

export default MigrationDemo; 