import React from 'react';
import { Container, Grid, Box, Paper, Divider, Stack, useTheme } from '@mui/material';
import { H1, H2, H3, BodyText, SmallText, CodeText } from '../components/ui/Typography';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useColorMode } from '../context/ThemeContext';

const ThemeDemo = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <H1 sx={{ mb: 2 }}>AI4U Theme Demo</H1>
        <BodyText>Esta página muestra todos los elementos del tema de AI4U.</BodyText>
      </Box>

      {/* Modo de Color */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 2 }}>Modo de Color</H2>
        <Paper sx={{ p: 3, mb: 3 }}>
          <BodyText sx={{ mb: 2 }}>Modo actual: <strong>{mode === 'light' ? 'Claro' : 'Oscuro'}</strong></BodyText>
          <Button onClick={toggleColorMode} variant="primary">
            Cambiar a modo {mode === 'light' ? 'oscuro' : 'claro'}
          </Button>
        </Paper>
      </Box>

      {/* Tipografía */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 2 }}>Tipografía</H2>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <H1 sx={{ mb: 1 }}>Heading 1</H1>
            <BodyText sx={{ color: 'text.secondary' }}>Font: {theme.typography.h1.fontFamily}</BodyText>
          </Box>

          <Box sx={{ mb: 4 }}>
            <H2 sx={{ mb: 1 }}>Heading 2</H2>
            <BodyText sx={{ color: 'text.secondary' }}>Font: {theme.typography.h2.fontFamily}</BodyText>
          </Box>

          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 1 }}>Heading 3</H3>
            <BodyText sx={{ color: 'text.secondary' }}>Font: {theme.typography.h3.fontFamily}</BodyText>
          </Box>

          <Box sx={{ mb: 4 }}>
            <BodyText sx={{ mb: 1 }}>Body Text</BodyText>
            <BodyText sx={{ color: 'text.secondary' }}>Font: {theme.typography.body1.fontFamily}</BodyText>
          </Box>

          <Box sx={{ mb: 4 }}>
            <SmallText sx={{ mb: 1 }}>Small Text</SmallText>
            <BodyText sx={{ color: 'text.secondary' }}>Font: {theme.typography.body2.fontFamily}</BodyText>
          </Box>

          <Box>
            <CodeText>const exampleCode = "Hello AI4U";</CodeText>
          </Box>
        </Paper>
      </Box>

      {/* Colores */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 2 }}>Colores</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
              <BodyText>Color Primario</BodyText>
              <SmallText>primary.main</SmallText>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'secondary.main', color: 'white' }}>
              <BodyText>Color Secundario</BodyText>
              <SmallText>secondary.main</SmallText>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'text.primary', color: 'white' }}>
              <BodyText>Texto Principal</BodyText>
              <SmallText>text.primary</SmallText>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'background.default', border: 1, borderColor: 'divider' }}>
              <BodyText>Fondo Por Defecto</BodyText>
              <SmallText>background.default</SmallText>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
              <BodyText>Fondo de Papel</BodyText>
              <SmallText>background.paper</SmallText>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'text.secondary', color: 'white' }}>
              <BodyText>Texto Secundario</BodyText>
              <SmallText>text.secondary</SmallText>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Botones */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 2 }}>Botones</H2>
        <Paper sx={{ p: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <Button variant="primary" size="small">Primario Pequeño</Button>
            <Button variant="primary">Primario Mediano</Button>
            <Button variant="primary" size="large">Primario Grande</Button>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <Button variant="secondary" size="small">Secundario Pequeño</Button>
            <Button variant="secondary">Secundario Mediano</Button>
            <Button variant="secondary" size="large">Secundario Grande</Button>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="outline" size="small">Outline Pequeño</Button>
            <Button variant="outline">Outline Mediano</Button>
            <Button variant="outline" size="large">Outline Grande</Button>
          </Stack>
        </Paper>
      </Box>

      {/* Tarjetas */}
      <Box sx={{ mb: 6 }}>
        <H2 sx={{ mb: 2 }}>Tarjetas</H2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <H3 sx={{ mb: 2 }}>Tarjeta de ejemplo</H3>
              <BodyText>Esta es una tarjeta básica que puedes usar para mostrar contenido.</BodyText>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <H3 sx={{ mb: 2 }}>Con botón</H3>
              <BodyText sx={{ mb: 2 }}>Esta tarjeta contiene un botón de llamada a la acción.</BodyText>
              <Button variant="primary">Acción</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <H3 sx={{ mb: 2 }}>Con elementos</H3>
              <BodyText sx={{ mb: 2 }}>Puedes agregar cualquier elemento dentro de una tarjeta.</BodyText>
              <Divider sx={{ my: 2 }} />
              <SmallText sx={{ color: 'text.secondary' }}>Información adicional</SmallText>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ThemeDemo; 