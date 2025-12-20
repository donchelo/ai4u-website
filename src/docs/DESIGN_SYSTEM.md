# AI4U Design System

## Filosofía de Diseño

### Time is Gold
Nuestro sistema de diseño se basa en la filosofía de que **el tiempo es el recurso más valioso**. Cada componente está diseñado para maximizar la eficiencia y reducir la fricción en las experiencias de usuario.

### Principios Fundamentales
1. **Automatización Cálida**: Tecnología que libera tiempo sin perder humanidad
2. **Futurismo Accesible**: Elementos futuristas pero comprensibles
3. **Glassmorfismo Funcional**: Transparencias que mejoran la usabilidad
4. **Consistencia Visual**: Paleta de colores y tipografía coherentes

## Paleta de Colores

### Colores Principales
```css
/* Neon Blaze - Color principal */
--neon-blaze: #FF5C00;
/* Digital Coral - Color secundario */
--digital-coral: #FF7477;
/* Frost Signal - Color de fondo */
--frost-signal: #DFF7EB;
/* Graphene Black - Color oscuro */
--graphene-black: #0A0A0A;
```

### Colores Secundarios
```css
/* Quantum Blue - Azul tecnológico */
--quantum-blue: #1FA9F6;
/* Tech Slate - Gris técnico */
--tech-slate: #7D848B;
/* Cyber Olive - Verde lima */
--cyber-olive: #B6CA40;
/* Deep Neural Teal - Verde azulado */
--deep-neural-teal: #2B7A78;
```

### Uso de Colores
- **Neon Blaze**: Llamados a la acción, elementos activos
- **Digital Coral**: Elementos secundarios, wellness
- **Frost Signal**: Fondos futuristas, elementos fríos
- **Graphene Black**: Interfaces oscuras, elementos cyber
- **Quantum Blue**: Datos, conectividad, información
- **Tech Slate**: Bordes, sliders, elementos técnicos
- **Cyber Olive**: Naturaleza en tecnología verde
- **Deep Neural Teal**: Sistemas autónomos, IA

## Tipografía

### Fuentes
- **Red Hat Display**: Fuente principal (sans-serif)
- **Necto Mono**: Fuente secundaria (monospace)

### Jerarquía
```css
/* Display Large */
font-size: clamp(48px, 5vw, 64px);
font-weight: 900;

/* Display Medium */
font-size: clamp(36px, 4vw, 48px);
font-weight: 700;

/* Heading Large */
font-size: clamp(24px, 3vw, 36px);
font-weight: 600;

/* Body Large */
font-size: clamp(16px, 1.1vw, 18px);
font-weight: 400;

/* Body Regular */
font-size: 16px;
font-weight: 400;

/* Caption */
font-size: 14px;
font-weight: 400;
font-family: monospace;
```

## Componentes

### Botones
Componente rediseñado con efectos glassmorphism inspirados en interfaces modernas. Cada variante implementa transparencias, blur effects y transiciones suaves.

```tsx
// Botón primario - Glassmorphism con gradiente Neon Blaze
<Button variant="primary" size="large">
  Recupera tu tiempo
</Button>

// Botón secundario - Glassmorphism suave
<Button variant="secondary" size="medium">
  Conoce más
</Button>

// Botón outline - Borde glassmorphism
<Button variant="outline" size="small">
  Ver casos
</Button>

// Botón glass - Glassmorphism puro (nueva variante)
<Button variant="glass" size="medium">
  Transparente
</Button>
```

**Características:**
- Efectos glassmorphism con `backdrop-filter: blur()`
- Transiciones suaves con `cubic-bezier(0.4, 0, 0.2, 1)`
- Gradientes y transparencias siguiendo la paleta AI4U
- Bordes redondeados adaptativos por tamaño
- Efectos hover con elevación y transformaciones
- Estados activos y deshabilitados consistentes

### Tarjetas
Sistema de tarjetas completamente rediseñado con glassmorphism, números prominentes e iconos geométricos minimalistas.

```tsx
// Tarjeta básica con glassmorphism
<Card variant="glass">
  <H3>SuperAI Empresarial</H3>
  <BodyText>Arquitecturas de IA que transforman operaciones.</BodyText>
</Card>

// Tarjeta oscura estilo dashboard
<Card variant="dark">
  <H3 sx={{ color: '#FFFFFF' }}>Métricas Avanzadas</H3>
  <BodyText sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
    Panel de control en tiempo real
  </BodyText>
</Card>

// Tarjeta con color primario AI4U
<Card variant="primary">
  <H3>Transformación Digital</H3>
  <BodyText>Soluciones integrales de automatización</BodyText>
</Card>

// Tarjeta de métricas con números grandes
<MetricCard
  title="Tiempo Ahorrado"
  value="22,900"
  subtitle="Horas recuperadas este mes"
  iconType="arrow-up"
  variant="dark"
  trend="up"
  size="large"
/>
```

**Variantes disponibles:**
- `glass` - Glassmorphism translúcido
- `dark` - Fondo oscuro con gradiente
- `light` - Fondo claro con transparencia
- `primary` - Colores AI4U primarios
- `accent` - Colores AI4U secundarios

**Componente MetricCard:**
- Números prominentes con tipografía escalable
- Iconos geométricos minimalistas
- Indicadores de tendencia automáticos
- Tamaños: `compact`, `normal`, `large`

### Iconos Geométricos
Sistema de iconos minimalistas basado en formas geométricas básicas, eliminando completamente el uso de emojis.

```tsx
// Iconos básicos
<GeometricIcon type="circle" size="medium" color="#FF5C00" variant="filled" />
<GeometricIcon type="square" size="small" color="#B6CA40" variant="outline" />
<GeometricIcon type="triangle" size="large" color="#1FA9F6" variant="minimal" />

// Iconos direccionales
<GeometricIcon type="arrow-up" size="medium" color="#FFFFFF" variant="filled" />
<GeometricIcon type="arrow-right" size="small" color="#000000" variant="minimal" />

// Iconos de acción
<GeometricIcon type="plus" size="medium" color="#FF5C00" variant="filled" />
<GeometricIcon type="cross" size="small" color="#FF7477" variant="outline" />
```

**Tipos disponibles:**
`arrow-up`, `arrow-down`, `arrow-right`, `arrow-left`, `plus`, `minus`, `circle`, `square`, `triangle`, `cross`, `line`, `dot`

**Variantes:**
- `filled` - Fondo sólido con color
- `outline` - Solo borde con fondo transparente  
- `minimal` - Solo el símbolo sin contenedor

**Tamaños:**
- `small` - 32px
- `medium` - 48px  
- `large` - 64px

### Navegación
```tsx
// Navegación horizontal
<Navigation 
  items={navigationItems}
  variant="horizontal"
/>

// Navegación tipo tabs
<Navigation 
  items={navigationItems}
  variant="tabs"
  activeItem="colors"
/>
```

### Layout
```tsx
// Layout con glassmorfismo
<Layout variant="glassmorphism" title="Mi Página">
  <Container>
    <Section title="Sección Principal">
      <Grid cols={3}>
        {/* Contenido */}
      </Grid>
    </Section>
  </Container>
</Layout>
```

## Glassmorfismo

### Principios
1. **Transparencia Funcional**: No solo decorativa, mejora la usabilidad
2. **Blur Contextual**: Aplicar blur según el contexto
3. **Bordes Sutiles**: Bordes que definen sin ser intrusivos
4. **Sombras Suaves**: Profundidad sin peso visual

### Implementación
```css
/* Elemento glassmorfismo básico */
.glass-element {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Botón primario con glassmorphism */
.glass-button-primary {
  background: linear-gradient(135deg, 
    rgba(255, 92, 0, 0.9), 
    rgba(255, 116, 119, 0.8)
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(255, 92, 0, 0.25), 
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 92, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Elemento glass puro */
.glass-pure {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

## Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Grid System
```tsx
// Grid responsivo
<Grid cols={3} gap="lg">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</Grid>
```

## Accesibilidad

### WCAG 2.1 AA Compliance
- **Contraste**: Mínimo 4.5:1 para texto normal
- **Navegación por teclado**: Todos los elementos interactivos
- **Screen readers**: Etiquetas y roles apropiados
- **Focus visible**: Indicadores de foco claros

### Implementación
```tsx
// Botón accesible
<Button 
  aria-label="Recuperar tiempo"
  onClick={handleClick}
>
  Recupera tu tiempo
</Button>

// Navegación accesible
<nav role="navigation" aria-label="Navegación principal">
  <Navigation items={items} />
</nav>
```

## Performance

### Optimizaciones
1. **Lazy Loading**: Componentes que se cargan bajo demanda
2. **Memoización**: React.memo para componentes pesados
3. **Bundle Splitting**: Código dividido por rutas
4. **Image Optimization**: WebP y lazy loading de imágenes

### Best Practices
```tsx
// Componente optimizado
const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Lazy loading
const LazyComponent = lazy(() => import('./HeavyComponent'));
```

## Testing

### Testing Strategy
1. **Unit Tests**: Componentes individuales
2. **Integration Tests**: Flujos de usuario
3. **Visual Regression**: Cambios visuales
4. **Accessibility Tests**: Cumplimiento WCAG

### Ejemplo de Test
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/Button';

test('Button renders with correct text', () => {
  render(<Button>Test Button</Button>);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});
```

## Documentación

### Storybook
- **Stories**: Ejemplos de uso de cada componente
- **Controls**: Interactividad con props
- **Docs**: Documentación automática
- **Accessibility**: Tests de accesibilidad

### Ejemplo de Story
```tsx
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Botón del sistema de diseño AI4U'
      }
    }
  }
};

export const Primary = () => (
  <Button variant="primary">Botón Primario</Button>
);
```

## Configuración

### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'neon-blaze': '#FF5C00',
        'digital-coral': '#FF7477',
        // ... otros colores
      },
      fontFamily: {
        'redhat': ['Red Hat Display', 'sans-serif'],
        'necto': ['Fira Mono', 'monospace'],
      }
    }
  }
};
```

### Material UI Theme
```tsx
const createAI4UTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: getPalette(mode),
    typography,
    components: getComponentsOverrides(mode),
    shape: { borderRadius: 8 },
    shadows: getCustomShadows(),
  });
};
```

## Guías de Uso

### Do's
- Usar la paleta de colores consistente
- Aplicar glassmorfismo funcionalmente
- Mantener jerarquía tipográfica
- Considerar accesibilidad primero
- Optimizar para performance

### Don'ts
- No usar colores fuera de la paleta
- No aplicar glassmorfismo sin propósito
- No ignorar responsive design
- No olvidar testing
- No comprometer accesibilidad

## Mantenimiento

### Versionado
- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Changelog**: Documentar cambios
- **Breaking Changes**: Comunicar claramente
- **Migration Guide**: Guías de migración

### Contribución
1. **Fork** del repositorio
2. **Feature branch** descriptivo
3. **Tests** para nuevos componentes
4. **Documentation** actualizada
5. **Pull Request** con descripción clara

---

*Este sistema de diseño está en constante evolución. Mantente actualizado con las últimas versiones y contribuye al crecimiento del ecosistema AI4U.* 