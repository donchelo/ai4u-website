# Thumbnails de Servicios AI4U

Este directorio contiene los thumbnails personalizados para cada servicio de AI4U.

## Especificaciones

- **Formato**: JPG o PNG
- **Tamaño**: 240x240 píxeles (1:1 ratio)
- **Calidad**: Alta resolución, optimizada para web
- **Estilo**: Cuadrados con bordes redondeados, siguiendo la paleta de colores AI4U

## Convención de Nomenclatura

Los archivos deben seguir esta convención:
```
{service-id}.jpg
```

Ejemplos:
- `data-entry-automatico.jpg`
- `fashion-agent.jpg`
- `estratega-ejecutivo.jpg`
- `chatbot-inteligente.jpg`

## Cómo Agregar un Thumbnail

1. **Crear la imagen**: Diseña un thumbnail de 240x240 píxeles
2. **Guardar**: Guarda como JPG con el nombre del service-id
3. **Subir**: Coloca el archivo en este directorio
4. **Actualizar datos**: Agrega la ruta en `src/data/services.ts`:

```typescript
{
  id: 'tu-servicio',
  // ... otros campos
  thumbnail: '/assets/images/services-thumbnails/tu-servicio.jpg',
  // ... resto de campos
}
```

## Fallback Automático

Si un servicio no tiene thumbnail personalizado, el sistema mostrará automáticamente un thumbnail generativo basado en:
- El color del servicio
- El ID del servicio (para generar patrones únicos)
- Patrones geométricos minimalistas

## Servicios Actuales

### Con Thumbnails Personalizados
- `data-entry-automatico` - Data Entry Automático
- `fashion-agent` - Fashion Agent

### Con Thumbnails Generativos
- Todos los demás servicios (se generan automáticamente)

## Paleta de Colores AI4U

Usar estos colores como referencia para los thumbnails:
- **Verde**: #22c55e (Data Entry)
- **Azul**: #0ea5e9 (Fashion Agent)
- **Púrpura**: #6366f1 (Estratega Ejecutivo)
- **Naranja**: #f59e0b (Cazador de Leads)
- **Gris**: #64748b (Consultoría)
