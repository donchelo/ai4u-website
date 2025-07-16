# Sitio Web Corporativo AI4U

Sitio web corporativo para AI4U, empresa especializada en soluciones de inteligencia artificial y automatización de procesos.

## Tecnologías Utilizadas

- React + TypeScript
- Tailwind CSS (personalizado)
- Material UI (MUI)
- React Router DOM
- Context API para gestión de tema (claro/oscuro)

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

La aplicación estará disponible en [http://localhost:3002](http://localhost:3002).

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo en el puerto 3002
- `npm run build`: Genera la versión de producción
- `npm test`: Ejecuta las pruebas
- `npm run deploy`: Despliega a GitHub Pages
- `npm eject`: Expone la configuración de Create React App

## Estructura del Proyecto

```
ai4u-website/
├── public/
│   ├── assets/
│   │   └── images/ (logos, imágenes de héroe, casos de éxito)
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── DiagnosticCTA.tsx
│   │       ├── ServicesButton.tsx
│   │       ├── Typography.tsx
│   │       └── TypographyWrapper.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── services.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── SuccessCases.tsx
│   │   ├── ThemeDemo.tsx
│   │   └── WhyAI4U.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Páginas y Rutas

- `/` — Inicio
- `/servicios` — Servicios de IA4U
- `/por-que-ai4u` — ¿Por qué AI4U?
- `/casos-de-exito` — Casos de éxito
- `/tienda-ai` — (Redirige a inicio)

## Componentes Principales

- **Navbar**: Barra de navegación con enlaces y cambio de tema (claro/oscuro).
- **Footer**: Pie de página con enlaces rápidos y redes sociales.
- **HeroSection**: Sección principal con imágenes y llamado a la acción.
- **ServiceCard**: Tarjeta para mostrar servicios o características.
- **ScrollToTop**: Lleva la vista al inicio al cambiar de ruta.
- **Layout**: Estructura general de la aplicación.

### Componentes UI Personalizados

- **Button**: Botón reutilizable con variantes (`primary`, `secondary`, `outline`) y tamaños.
- **Card**: Tarjeta estilizada para contenido.
- **DiagnosticCTA**: Botón para agendar diagnóstico gratuito vía Calendly.
- **ServicesButton**: Botón para navegar a la página de servicios.
- **Typography**: Componentes de tipografía personalizados (`H1`, `H2`, `H3`, `BodyText`, etc.).

#### Ejemplo de uso de DiagnosticCTA

```jsx
import { DiagnosticCTA } from './components/ui/DiagnosticCTA';

<DiagnosticCTA />
<DiagnosticCTA 
  variant="outline" 
  size="large" 
  text="Agenda tu diagnóstico ahora" 
  showIcon={true} 
/>
```

**Props:**

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Estilo visual del botón |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Tamaño del botón |
| showIcon | boolean | false | Muestra u oculta el ícono de calendario |
| text | string | 'Diagnóstico gratis' | Texto a mostrar en el botón |
| className | string | - | Clase CSS adicional |

## Gestión de Temas (Claro/Oscuro)

El proyecto utiliza un contexto personalizado (`ThemeContext`) para alternar entre modo claro y oscuro, aplicando una paleta de colores y tipografía corporativa.

## Servicios Ofrecidos (Ejemplos)

Los servicios están definidos en `src/data/services.ts` e incluyen:
- Estratega Ejecutivo (Asistente IA 24/7)
- Chatbot Inteligente (Atención automatizada)
- Cazador de Leads (Generación automática de clientes)
- Cotizador Automático
- Gestor de Pedidos
- Investigador Digital
- Analista de Comentarios
- The Builder (Tienda Shopify)

Cada servicio tiene título, descripción, beneficios, precio y tiempo de entrega.

## Personalización de Estilos

- **Tailwind CSS**: Configuración extendida en `tailwind.config.js` con colores y tipografías corporativas.
- **Material UI**: Temas y componentes personalizados para coherencia visual.

## Licencia

Actualmente este proyecto **no incluye** un archivo de licencia en la raíz. Si deseas contribuir o reutilizar el código, consulta con los administradores del repositorio.

## Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaFuncionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a tu rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request 