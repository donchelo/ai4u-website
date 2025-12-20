# Optimización para Compartir en WhatsApp

## ¿Qué se muestra cuando compartes tu URL en WhatsApp?

Cuando compartes la URL de AI4U en WhatsApp, se precarga automáticamente:

- **Título**: "AI4U - Inteligencia Artificial para tu Negocio"
- **Descripción**: "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial. Recupera tu tiempo con IA."
- **Imagen**: Logo de AI4U optimizado para fondos claros
- **URL**: https://ai4u.com.co

## Meta Tags Implementados

### Open Graph (Facebook/WhatsApp)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ai4u.com.co" />
<meta property="og:title" content="AI4U - Inteligencia Artificial para tu Negocio" />
<meta property="og:description" content="Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial. Recupera tu tiempo con IA." />
<meta property="og:image" content="https://ai4u.com.co/assets/images/ai4u-logo-for-light-background.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="AI4U - Logo de la empresa de Inteligencia Artificial" />
<meta property="og:site_name" content="AI4U" />
<meta property="og:locale" content="es_CO" />
```

### Twitter Cards
```html
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="AI4U - Inteligencia Artificial para tu Negocio" />
<meta property="twitter:description" content="Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial." />
<meta property="twitter:image" content="https://ai4u.com.co/assets/images/ai4u-logo-for-light-background.png" />
```

## Optimizaciones Específicas para WhatsApp

1. **URLs absolutas**: Todas las imágenes usan URLs absolutas (https://ai4u.com.co/...)
2. **Imagen optimizada**: Se usa `ai4u-logo-for-light-background.png` que funciona mejor en fondos claros
3. **Dimensiones correctas**: 1200x630px para máxima compatibilidad
4. **Alt text**: Descripción accesible de la imagen
5. **Tipo de imagen**: Especificado como PNG
6. **URL segura**: Versión HTTPS de la imagen

## Cómo Probar

1. **WhatsApp Web**: Comparte la URL en una conversación
2. **WhatsApp móvil**: Envía el enlace a un contacto
3. **Herramientas de prueba**:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Crear Imagen Personalizada

Para crear una imagen específica para compartir:

1. **Dimensiones**: 1200x630px
2. **Formato**: PNG o JPG
3. **Contenido sugerido**:
   - Logo de AI4U centrado
   - Título: "AI4U"
   - Subtítulo: "Inteligencia Artificial para tu Negocio"
   - Fondo: Blanco o muy claro
   - Texto: Negro para máximo contraste

4. **Herramientas recomendadas**:
   - Canva (plantilla "Social Media Post")
   - Figma
   - Photoshop
   - GIMP

## Archivos de Configuración

- `public/assets/images/social-share-config.json`: Configuración para generar imágenes
- `scripts/create-social-share-image.js`: Script para crear configuración

## Troubleshooting

### Si no se muestra la imagen:
1. Verifica que la URL de la imagen sea accesible públicamente
2. Asegúrate de que la imagen tenga las dimensiones correctas
3. Usa el Facebook Sharing Debugger para forzar la actualización del caché

### Si no se actualiza la información:
1. WhatsApp cachea las URLs por 24-48 horas
2. Usa el Facebook Sharing Debugger para limpiar el caché
3. Agrega parámetros temporales a la URL para forzar actualización

## Próximos Pasos

1. Crear imagen personalizada de 1200x630px
2. Reemplazar `ai4u-logo-for-light-background.png` con la nueva imagen
3. Probar en diferentes dispositivos y aplicaciones
4. Monitorear métricas de engagement en redes sociales
