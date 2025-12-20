# AI4U Website & Framework de Agentes

Un sistema completo que combina la identidad de marca AI4U con elementos visuales modernos y futuristas, **plus** un framework revolucionario de 37 agentes especializados para desarrollo humanístico.

## 🤖 Framework de Agentes AI4U

**¡NUEVO!** Hemos implementado un framework completo de 37 agentes especializados que embodican la filosofía humanística de AI4U: **"No reemplazamos, potenciamos"**.

### **Agentes Personalizados AI4U** ⭐
- **rapid-prototyper**: Arquitecturas integrales en 3 días con stack AI4U
- **brand-guardian**: Protege identidad visual y messaging humanístico
- **content-creator**: Narrativas que humanizan la automatización

### **Acceso Rápido**
```bash
# Documentación completa
📖 agents/AI4U_AGENTS_USAGE_GUIDE.md

# Referencia de identidad
🎯 agents/AI4U_BRAND_IDENTITY.md

# Directorio completo
📁 agents/
├── engineering/     (6 agentes)
├── design/          (5 agentes)
├── marketing/       (7 agentes)
├── product/         (3 agentes)
├── studio-operations/ (5 agentes)
├── project-management/ (3 agentes)
├── testing/         (5 agentes)
└── bonus/           (2 agentes)
```

**Total: 37 agentes especializados, 3 personalizados para AI4U**

---

## 🎨 AI4U Design System

Un sistema de diseño completo y coherente que combina la identidad de marca AI4U con elementos visuales modernos y futuristas.

## Filosofía

**Time is Gold** - Nuestro sistema se basa en la filosofía de que el tiempo es el recurso más valioso. Cada componente está diseñado para maximizar la eficiencia y reducir la fricción en las experiencias de usuario.

## Características

- **Glassmorfismo Funcional**: Transparencias que mejoran la usabilidad
- **Paleta de Colores Coherente**: Sistema de colores AI4U bien definido
- **Tipografía Jerárquica**: Red Hat Display + Necto Mono
- **Componentes Reutilizables**: Biblioteca completa de componentes
- **Accesibilidad WCAG 2.1 AA**: Cumplimiento completo
- **Responsive Design**: Mobile-first approach
- **Performance Optimizada**: Lazy loading y memoización
- **Documentación Completa**: Storybook + guías de uso

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ai4u/design-system.git

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Ejecutar Storybook
npm run storybook

# Ejecutar tests
npm test
```

## Paleta de Colores

### Colores Principales
```css
--neon-blaze: #FF5C00;      /* Color principal */
--digital-coral: #FF7477;   /* Color secundario */
--frost-signal: #DFF7EB;    /* Color de fondo */
--graphene-black: #0A0A0A;  /* Color oscuro */
```

### Colores Secundarios
```css
--quantum-blue: #1FA9F6;    /* Azul tecnológico */
--tech-slate: #7D848B;      /* Gris técnico */
--cyber-olive: #B6CA40;     /* Verde lima */
--deep-neural-teal: #2B7A78; /* Verde azulado */
```

## Componentes

### Botones
Componente completamente rediseñado con efectos glassmorphism modernos.

```tsx
import { Button } from './components/ui/Button';

// Botón primario con glassmorphism
<Button variant="primary" size="large">
  Recupera tu tiempo
</Button>

// Botón secundario glassmorphism
<Button variant="secondary" size="medium">
  Conoce más
</Button>

// Botón outline glassmorphism
<Button variant="outline" size="small">
  Ver casos
</Button>

// Nueva variante glass pura
<Button variant="glass" size="medium">
  Transparente
</Button>
```

**Nuevas características:**
- Efectos glassmorphism con blur y transparencias
- Gradientes con paleta AI4U (Neon Blaze + Digital Coral)
- Transiciones suaves con cubic-bezier
- Bordes redondeados adaptativos
- Efectos hover con elevación y transformación

### Tarjetas
Sistema de tarjetas rediseñado con glassmorphism y números prominentes.

```tsx
import Card from './components/ui/Card';
import MetricCard from './components/ui/MetricCard';

// Tarjeta con glassmorphism
<Card variant="glass">
  Contenido con efecto de vidrio
</Card>

// Tarjeta de métricas con números grandes
<MetricCard
  title="Procesos Automatizados"
  value="22,900"
  subtitle="Sistemas activos"
  iconType="arrow-up"
  variant="dark"
  size="large"
/>
```

**Variantes de tarjetas:**
- `glass` - Efecto glassmorphism translúcido
- `dark` - Estilo dashboard oscuro
- `primary` - Colores AI4U primarios
- `accent` - Colores secundarios

### Iconos Geométricos
Sistema minimalista sin emojis, basado en formas geométricas.

```tsx
import GeometricIcon from './components/ui/GeometricIcon';

<GeometricIcon 
  type="circle" 
  size="medium" 
  color="#FF5C00" 
  variant="filled" 
/>
```

**Formas disponibles:**
Círculos, cuadrados, triángulos, flechas direccionales, símbolos de más/menos, cruces, líneas y puntos.

### Navegación
```tsx
import Navigation from './components/ui/Navigation';

<Navigation 
  items={navigationItems}
  variant="tabs"
  activeItem="colors"
/>
```

### Layout
```tsx
import { Layout, Container, Section, Grid } from './components/ui/Layout';

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

## Documentación

### Biblioteca de Componentes
Visita `/component-library` para ver todos los componentes en acción con ejemplos interactivos.

### Storybook
```bash
npm run storybook
```
Accede a la documentación interactiva de cada componente.

### Guías de Uso
- [Sistema de Diseño](./src/docs/DESIGN_SYSTEM.md)
- [Mejores Prácticas](./src/docs/BEST_PRACTICES.md)
- [Guía de Accesibilidad](./src/docs/ACCESSIBILITY.md)

## Accesibilidad

### WCAG 2.1 AA Compliance
- Contraste mínimo 4.5:1
- Navegación por teclado
- Screen readers
- Focus visible
- ARIA labels

### Implementación
```tsx
// Botón accesible
<Button 
  aria-label="Recuperar tiempo"
  onClick={handleClick}
>
  Recupera tu tiempo
</Button>
```

## Performance

### Optimizaciones
- **Lazy Loading**: Componentes bajo demanda
- **Memoización**: React.memo para componentes pesados
- **Bundle Splitting**: Código dividido por rutas
- **Image Optimization**: WebP y lazy loading

### Best Practices
```tsx
// Componente optimizado
const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
```

## Testing

### Estrategia de Testing
- **Unit Tests**: Componentes individuales
- **Integration Tests**: Flujos de usuario
- **Visual Regression**: Cambios visuales
- **Accessibility Tests**: Cumplimiento WCAG

### Ejemplo
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/Button';

test('Button renders with correct text', () => {
  render(<Button>Test Button</Button>);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});
```

## Glassmorfismo

### Principios
1. **Transparencia Funcional**: No solo decorativa
2. **Blur Contextual**: Aplicar según contexto
3. **Bordes Sutiles**: Definir sin ser intrusivos
4. **Sombras Suaves**: Profundidad sin peso

### Implementación
```css
.glass-element {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
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
```

### Grid System
```tsx
<Grid cols={3} gap="lg">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</Grid>
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

### Recomendaciones
- Usar la paleta de colores consistente
- Aplicar glassmorfismo funcionalmente
- Mantener jerarquía tipográfica
- Considerar accesibilidad primero
- Optimizar para performance

### Evitar
- Usar colores fuera de la paleta
- Aplicar glassmorfismo sin propósito
- Ignorar responsive design
- Olvidar testing
- Comprometer accesibilidad

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

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build

# Testing
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Cobertura de tests

# Storybook
npm run storybook    # Iniciar Storybook
npm run build-storybook # Construir Storybook

# Linting
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores automáticamente

# Type Checking
npm run type-check   # Verificar tipos TypeScript
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes base del sistema
│   ├── shared/       # Componentes compartidos
│   └── __tests__/    # Tests de componentes
├── context/          # Contextos de React
├── data/             # Datos y configuración
├── docs/             # Documentación
├── hooks/            # Custom hooks
├── pages/            # Páginas de la aplicación
├── types/            # Definiciones de TypeScript
└── utils/            # Utilidades y helpers
```

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crea una **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la branch (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## Agradecimientos

- **Red Hat Display**: Fuente principal
- **Fira Mono**: Fuente monospace
- **Material UI**: Base de componentes
- **Tailwind CSS**: Sistema de utilidades
- **Storybook**: Documentación interactiva

---

*Este sistema de diseño está en constante evolución. Mantente actualizado con las últimas versiones y contribuye al crecimiento del ecosistema AI4U.* 