# AI4U Website

Sitio web corporativo para AI4U, una empresa especializada en soluciones de inteligencia artificial.

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- React Router

## Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ai4u-website.git
cd ai4u-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Crea la versión de producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Expone la configuración de Create React App

## Estructura del Proyecto

```
ai4u-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Componentes UI

### DiagnosticCTA

Un botón CTA (Call to Action) para agendar diagnósticos gratuitos a través de Calendly.

**Uso:**

```jsx
import { DiagnosticCTA } from './components/ui/DiagnosticCTA';

// Uso básico
<DiagnosticCTA />

// Personalizado
<DiagnosticCTA 
  variant="outline" 
  size="large" 
  text="Agenda tu diagnóstico ahora" 
  showIcon={false} 
/>
```

**Props:**

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Estilo visual del botón |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Tamaño del botón |
| showIcon | boolean | true | Muestra u oculta el ícono de calendario |
| text | string | 'Diagnóstico Gratuito' | Texto a mostrar en el botón |
| className | string | - | Clase CSS adicional | 