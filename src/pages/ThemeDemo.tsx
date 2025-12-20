import React from 'react';
import { Container, Grid, Box, Paper, Divider, Stack, useTheme, IconButton, Chip, AppBar, Toolbar } from '@mui/material';
import { H1, H2, H3, H4, H5, H6, BodyText, SmallText, CodeText } from '../components/shared/ui/atoms';
import { Card } from '../components/shared/ui/molecules';
import { Button } from '../components/shared/ui/atoms';
import { useColorMode } from '../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';

const ThemeDemo = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();

  // Convertir color HEX a texto
  const getColorInfo = (colorValue: string) => {
    return colorValue;
  };

  // Extraer colores de la paleta AI4U
  const paletteColors = {
    cream: getColorInfo(theme.palette.background.default),
    black: mode === 'dark' ? getColorInfo(theme.palette.background.default) : '#121212',
    orange: getColorInfo(theme.palette.primary.main),
    blue: getColorInfo(theme.palette.secondary.main),
    gray: getColorInfo(theme.palette.text.secondary),
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <H1 sx={{ mb: 2 }}>AI4U Theme Demo</H1>
          <BodyText>Esta página muestra todos los elementos del tema refactorizado de AI4U.</BodyText>
          <Box sx={{ mt: 3 }}>
            <Button 
              variant="primary" 
              onClick={toggleColorMode} 
              startIcon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            >
              Cambiar a modo {mode === 'light' ? 'oscuro' : 'claro'}
            </Button>
          </Box>
        </Box>

        {/* Colores del Tema */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 3 }}>Paleta de Colores</H2>
          <Grid container spacing={3}>
            {/* Colores en orden: cream, black, orange, blue, gray */}
            {/* 1. Cream - Fondo claro */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, bgcolor: 'background.default', border: 1, borderColor: 'divider', height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Cream ({mode === 'light' ? 'Activo' : 'Inactivo'})</H4>
                <BodyText sx={{ mb: 1 }}>Fondo principal en modo claro</BodyText>
                <SmallText>{paletteColors.cream}</SmallText>
              </Paper>
            </Grid>
            
            {/* 2. Black - Fondo oscuro */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, bgcolor: mode === 'dark' ? 'background.default' : '#121212', color: 'white', height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Black ({mode === 'dark' ? 'Activo' : 'Inactivo'})</H4>
                <BodyText sx={{ mb: 1 }}>Fondo principal en modo oscuro</BodyText>
                <SmallText>{paletteColors.black}</SmallText>
              </Paper>
            </Grid>
            
            {/* 3. Orange - Acción principal */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white', height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Orange (Primario)</H4>
                <BodyText sx={{ mb: 1 }}>Llamados a la acción</BodyText>
                <SmallText>{paletteColors.orange}</SmallText>
              </Paper>
            </Grid>
            
            {/* 4. Blue - Acento */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, bgcolor: 'secondary.main', color: 'white', height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Blue (Secundario)</H4>
                <BodyText sx={{ mb: 1 }}>Detalles y contraste</BodyText>
                <SmallText>{paletteColors.blue}</SmallText>
              </Paper>
            </Grid>
            
            {/* 5. Gray - Detalles */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, bgcolor: 'text.secondary', color: 'white', height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Gray (Terciario)</H4>
                <BodyText sx={{ mb: 1 }}>Detalles y contraste secundario</BodyText>
                <SmallText>{paletteColors.gray}</SmallText>
              </Paper>
            </Grid>

            {/* Textos */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Texto Principal</H4>
                <BodyText sx={{ mb: 1 }}>Usado para el contenido principal</BodyText>
                <SmallText>{getColorInfo(theme.palette.text.primary)}</SmallText>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <H4 sx={{ mb: 1 }}>Texto Secundario</H4>
                <BodyText sx={{ mb: 1, color: 'text.secondary' }}>Usado para contenido menos importante</BodyText>
                <SmallText>{getColorInfo(theme.palette.text.secondary)}</SmallText>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Tipografía */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 3 }}>Tipografía</H2>
          <Paper sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <H1 sx={{ mb: 1 }}>Heading 1</H1>
                  <BodyText sx={{ color: 'text.secondary' }}>Títulos principales (Red Hat Display Black)</BodyText>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <H2 sx={{ mb: 1 }}>Heading 2</H2>
                  <BodyText sx={{ color: 'text.secondary' }}>Subtítulos importantes (Red Hat Display Bold)</BodyText>
                </Box>
                
                <Box>
                  <H3 sx={{ mb: 1 }}>Heading 3</H3>
                  <BodyText sx={{ color: 'text.secondary' }}>Títulos de secciones (Red Hat Display Semibold)</BodyText>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <H4 sx={{ mb: 1 }}>Heading 4</H4>
                  <BodyText sx={{ color: 'text.secondary' }}>Subtítulos de contenido (Red Hat Display Semibold)</BodyText>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <H5 sx={{ mb: 1 }}>Heading 5</H5>
                  <BodyText sx={{ color: 'text.secondary' }}>Títulos de elementos (Red Hat Display Regular)</BodyText>
                </Box>
                
                <Box>
                  <H6 sx={{ mb: 1 }}>Heading 6</H6>
                  <BodyText sx={{ color: 'text.secondary' }}>Etiquetas pequeñas (Red Hat Display Regular)</BodyText>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <BodyText sx={{ mb: 1 }}>Texto Principal (body1)</BodyText>
                  <BodyText sx={{ color: 'text.secondary' }}>
                    Usado para el contenido principal del sitio. Red Hat Display Regular. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Fusce ut nisl eget magna ultrices tincidunt.
                  </BodyText>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box>
                  <SmallText sx={{ mb: 1 }}>Texto Pequeño (body2)</SmallText>
                  <SmallText sx={{ color: 'text.secondary' }}>
                    Usado para información secundaria, pies de página, descripciones, etc.
                    Red Hat Display Regular en tamaño más pequeño para indicar menor importancia.
                  </SmallText>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <CodeText>
                    // Texto para código (Necto Mono)<br />
                    const theme = createAI4UTheme(mode);<br />
                    console.log('AI4U Theme loaded!');
                  </CodeText>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Botones */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 3 }}>Botones</H2>
          <Paper sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <H3 sx={{ mb: 3 }}>Botones Primarios (Orange - llamados a la acción)</H3>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                  <Button variant="primary" size="small">Pequeño</Button>
                  <Button variant="primary">Mediano</Button>
                  <Button variant="primary" size="large">Grande</Button>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="primary" startIcon={<InfoIcon />}>Con Icono</Button>
                  <Button variant="primary" disabled>Deshabilitado</Button>
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
                <H3 sx={{ mb: 3 }}>Botones Secundarios (Blue - acciones importantes)</H3>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                  <Button variant="secondary" size="small">Pequeño</Button>
                  <Button variant="secondary">Mediano</Button>
                  <Button variant="secondary" size="large">Grande</Button>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="secondary" startIcon={<ShareIcon />}>Con Icono</Button>
                  <Button variant="secondary" disabled>Deshabilitado</Button>
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
                <H3 sx={{ mb: 3 }}>Botones Outline (Gray - acciones terciarias)</H3>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                  <Button variant="outline" size="small">Pequeño</Button>
                  <Button variant="outline">Mediano</Button>
                  <Button variant="outline" size="large">Grande</Button>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="outline" startIcon={<FavoriteIcon />}>Con Icono</Button>
                  <Button variant="outline" disabled>Deshabilitado</Button>
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
                <H3 sx={{ mb: 3 }}>Botones Simples (acciones sutiles)</H3>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="outline">Texto Básico</Button>
                  <Button variant="primary">Texto Primario</Button>
                  <Button variant="secondary">Texto Secundario</Button>
                  <Button variant="outline" disabled>Deshabilitado</Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Componentes */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 3 }}>Componentes</H2>
          
          {/* Tarjetas */}
          <H3 sx={{ mb: 3 }}>Tarjetas</H3>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={4}>
              <Card>
                <H4 sx={{ mb: 2 }}>Tarjeta básica</H4>
                <BodyText>
                  Esta es una tarjeta básica que muestra el estilo visual de AI4U,
                  con esquinas redondeadas y sombras suaves.
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <H4 sx={{ mb: 2 }}>Tarjeta con acciones</H4>
                <BodyText sx={{ mb: 3 }}>Esta tarjeta contiene un botón de llamada a la acción.</BodyText>
                <Stack direction="row" spacing={1}>
                  <Button variant="primary">Acción</Button>
                  <Button variant="outline">Cancelar</Button>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <H4 sx={{ mb: 2 }}>Tarjeta completa</H4>
                <BodyText sx={{ mb: 2 }}>Incluye varios elementos y estilos.</BodyText>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <SmallText sx={{ color: 'text.secondary' }}>Última actualización: hoy</SmallText>
                  <Chip label="Activo" color="primary" size="small" />
                </Stack>
              </Card>
            </Grid>
          </Grid>
          
          {/* Chips */}
          <H3 sx={{ mb: 3 }}>Chips</H3>
          <Paper sx={{ p: 4, mb: 5 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              <Chip label="Chip básico" />
              <Chip label="Primario" color="primary" />
              <Chip label="Secundario" color="secondary" />
              <Chip label="Con icono" icon={<InfoIcon />} />
              <Chip label="Clickable" onClick={() => alert('Clicked')} />
              <Chip label="Eliminable" onDelete={() => {}} />
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Pequeño" size="small" />
              <Chip label="Primario pequeño" color="primary" size="small" />
              <Chip label="Secundario pequeño" color="secondary" size="small" />
              <Chip label="Con icono" icon={<InfoIcon />} size="small" />
            </Stack>
          </Paper>
          
          {/* Dividers */}
          <H3 sx={{ mb: 3 }}>Divisores</H3>
          <Paper sx={{ p: 4, mb: 5 }}>
            <BodyText sx={{ mb: 2 }}>Divisor horizontal</BodyText>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <BodyText sx={{ mb: 2 }}>Texto 1</BodyText>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <BodyText sx={{ mb: 2 }}>Texto 2</BodyText>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <BodyText sx={{ mb: 2 }}>Texto 3</BodyText>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }}>
              <Chip label="Con contenido" />
            </Divider>
            
            <BodyText>Texto después del divisor</BodyText>
          </Paper>
          
          {/* Iconos */}
          <H3 sx={{ mb: 3 }}>Iconos</H3>
          <Paper sx={{ p: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <IconButton color="default" aria-label="Información">
                <InfoIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Favorito">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Compartir">
                <ShareIcon />
              </IconButton>
              <IconButton disabled aria-label="Información (deshabilitado)">
                <InfoIcon />
              </IconButton>
              {mode === 'light' ? 
                <IconButton 
                  onClick={toggleColorMode}
                  aria-label="Cambiar a modo oscuro"
                >
                  <DarkModeIcon />
                </IconButton> : 
                <IconButton 
                  onClick={toggleColorMode}
                  aria-label="Cambiar a modo claro"
                >
                  <LightModeIcon />
                </IconButton>
              }
            </Stack>
          </Paper>
        </Box>
        
        {/* Modo de tema */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Paper sx={{ p: 4 }}>
            <H3 sx={{ mb: 2 }}>Modo actual: {mode === 'light' ? 'Claro' : 'Oscuro'}</H3>
            <BodyText sx={{ mb: 3 }}>
              El tema de AI4U se adapta automáticamente entre modos claro y oscuro, 
              respetando las preferencias del usuario y manteniendo la consistencia visual.
            </BodyText>
            <Button 
              variant="primary" 
              onClick={toggleColorMode} 
              startIcon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            >
              Cambiar a modo {mode === 'light' ? 'oscuro' : 'claro'}
            </Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ThemeDemo; 