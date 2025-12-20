import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Paper, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Divider,
  Chip,
  IconButton,
  Stack
} from '@mui/material';
import { useColors, useColorMode } from '../hooks';
import { H1, H2, H3, H4, BodyText, SmallText } from '../components/shared/ui/atoms';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ColorSystemDemo = () => {
  const { mode, toggleColorMode } = useColorMode();
  const colors = useColors();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <H1 sx={{ mb: 2 }}>Sistema de Colores AI4U</H1>
        <BodyText sx={{ mb: 3 }}>
          Sistema unificado con garantías de contraste automático y diseño minimalista
        </BodyText>
        <Button 
          variant="contained" 
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

      {/* Paleta Base */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Paleta Base</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <H4 sx={{ mb: 2 }}>Colores Principales</H4>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: colors.palette.white, border: '1px solid', borderColor: 'divider' }} />
                  <Typography>Blanco: {colors.palette.white}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: colors.palette.black }} />
                  <Typography sx={{ color: 'white' }}>Negro: {colors.palette.black}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: colors.palette.accent }} />
<Typography sx={{ color: 'white' }}>Accent: {colors.palette.accent}</Typography>
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
<Box sx={{ width: 40, height: 40, bgcolor: colors.palette.success }} />
<Typography>Success: {colors.palette.success}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <H4 sx={{ mb: 2 }}>Escala de Grises</H4>
              <Grid container spacing={1}>
                {Object.entries(colors.palette.gray).map(([key, value]) => (
                  <Grid item xs={6} key={key}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Box sx={{ width: 20, height: 20, bgcolor: value, border: '1px solid', borderColor: 'divider' }} />
                      <SmallText>{key}: {value}</SmallText>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Contraste Automático */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Sistema de Contraste</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <H4 sx={{ mb: 2 }}>Fondo Claro → Texto Oscuro</H4>
              <Box sx={{ p: 3, bgcolor: colors.contrast.background, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: colors.contrast.text.primary, mb: 1 }}>
                  Texto Principal
                </Typography>
                <Typography sx={{ color: colors.contrast.text.secondary, mb: 1 }}>
                  Texto Secundario
                </Typography>
                <Typography sx={{ color: colors.contrast.text.disabled }}>
                  Texto Deshabilitado
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <H4 sx={{ mb: 2 }}>Fondo Oscuro → Texto Claro</H4>
              <Box sx={{ p: 3, bgcolor: '#000000', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 1 }}>
                  Texto Principal
                </Typography>
                <Typography sx={{ color: '#E0E0E0', mb: 1 }}>
                  Texto Secundario
                </Typography>
                <Typography sx={{ color: '#9E9E9E' }}>
                  Texto Deshabilitado
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Variantes de Componentes */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Variantes de Componentes</H2>
        
        {/* Botones */}
        <Box sx={{ mb: 4 }}>
          <H3 sx={{ mb: 3 }}>Botones</H3>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained" color="primary">
              Primario
            </Button>
            <Button variant="contained" color="secondary">
              Secundario
            </Button>
            <Button variant="outlined">
              Outline
            </Button>
            <Button variant="text">
              Texto
            </Button>
          </Stack>
        </Box>

        {/* Cards */}
        <Box sx={{ mb: 4 }}>
          <H3 sx={{ mb: 3 }}>Cards</H3>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <H4 sx={{ mb: 1 }}>Card Estándar</H4>
                  <BodyText>
                    Fondo y texto con contraste automático según el modo.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
                <CardContent>
                  <H4 sx={{ mb: 1 }}>Card Acento</H4>
                  <BodyText>
                    Con color de marca y texto blanco garantizado.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <H4 sx={{ mb: 1 }}>Card Outline</H4>
                  <BodyText>
                    Con borde y fondo transparente.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Chips */}
        <Box sx={{ mb: 4 }}>
          <H3 sx={{ mb: 3 }}>Chips</H3>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Chip label="Estándar" />
            <Chip label="Primario" color="primary" />
            <Chip label="Secundario" color="secondary" />
            <Chip label="Outline" variant="outlined" />
          </Stack>
        </Box>
      </Box>

      {/* Helpers */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4 }}>Helpers de Colores</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <H4 sx={{ mb: 2 }}>Fondos</H4>
              <Stack spacing={2}>
                <Box sx={{ p: 2, bgcolor: colors.helpers.background.primary, borderRadius: 1 }}>
                  <Typography>Fondo Primario</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: colors.helpers.background.secondary, borderRadius: 1 }}>
                  <Typography>Fondo Secundario</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: colors.helpers.background.accent, borderRadius: 1 }}>
                  <Typography>Fondo Acento</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <H4 sx={{ mb: 2 }}>Estados</H4>
              <Stack spacing={2}>
                <Box sx={{ p: 2, bgcolor: colors.helpers.state.hover, borderRadius: 1 }}>
                  <Typography>Estado Hover</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: colors.helpers.state.selected, borderRadius: 1 }}>
                  <Typography>Estado Seleccionado</Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: colors.helpers.state.disabled, borderRadius: 1 }}>
                  <Typography sx={{ color: colors.helpers.text.disabled }}>
                    Estado Deshabilitado
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Código de Uso */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 4 }}>Código de Uso</H2>
        <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'monospace' }}>
            // Hook principal
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: 'text.secondary' }}>
            {`const colors = useColors();

// Uso directo
<Box sx={{ bgcolor: colors.contrast.background }}>
  <Typography sx={{ color: colors.contrast.text.primary }}>
    Texto con contraste automático
  </Typography>
</Box>

// Helpers
<Button sx={{ 
  bgcolor: colors.helpers.background.accent,
  color: colors.helpers.text.primary 
}}>
  Botón con helpers
</Button>`}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ColorSystemDemo; 