# Actualización de Imagen para Compartir en WhatsApp

## 📋 Resumen

Se ha actualizado la imagen que aparece cuando se comparte el sitio web de AI4U en WhatsApp, Twitter, Facebook y otras redes sociales.

## ✅ Cambios Realizados

### 1. Imagen Optimizada para Redes Sociales

Se creó una nueva imagen `whatsapp-share.png` con las siguientes características:

- **Dimensiones**: 1200x630px (formato recomendado por WhatsApp/Facebook)
- **Diseño**: Logo AI4U blanco sobre fondo negro
- **Tamaño**: ~11 KB (optimizado)
- **Ubicación**: `/public/assets/images/whatsapp-share.png`

### 2. Meta Tags Actualizados en `index.html`

Se actualizaron las siguientes meta tags:

#### Open Graph (WhatsApp, Facebook, LinkedIn)
```html
<meta property="og:image" content="https://www.ai4u.com.co/assets/images/whatsapp-share.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="AI4U - Inteligencia Artificial para tu Negocio" />
<meta property="og:image:secure_url" content="https://www.ai4u.com.co/assets/images/whatsapp-share.png" />
```

#### Twitter Cards
```html
<meta property="twitter:image" content="https://www.ai4u.com.co/assets/images/whatsapp-share.png" />
```

#### Schema.org JSON-LD
```json
"logo": "https://www.ai4u.com.co/assets/images/whatsapp-share.png"
```

### 3. Scripts Creados

#### `scripts/create-whatsapp-share-image.js`
Script para generar automáticamente la imagen optimizada para WhatsApp:
- Crea imagen de 1200x630px
- Centra el logo AI4U sobre fondo oscuro
- Genera versión alternativa con isotipo solo

**Uso:**
```bash
node scripts/create-whatsapp-share-image.js
```

#### `scripts/validate-whatsapp-share.js`
Script para validar que todas las meta tags estén correctamente configuradas:
- Verifica Open Graph tags
- Verifica Twitter Cards
- Confirma que las imágenes existan
- Proporciona enlaces a herramientas de validación

**Uso:**
```bash
node scripts/validate-whatsapp-share.js
```

## 🎨 Diseño de la Imagen

### Versión Principal: `whatsapp-share.png`
- Logo completo AI4U (isotipo + texto)
- Fondo: #141414 (negro oscuro)
- Logo: Blanco
- Centrado vertical y horizontalmente

### Versión Alternativa: `whatsapp-share-isotipo.png`
- Solo isotipo (robot)
- Mismo fondo y estilo
- Tamaño: 400x400px centrado

## 🧪 Cómo Probar

### 1. Validación Local
```bash
npm run validate:whatsapp
```

### 2. Herramientas Online

Después de desplegar los cambios, valida en:

- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
  - Ingresa: https://www.ai4u.com.co
  - Click en "Scrape Again" para actualizar caché
  
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
  - Ingresa: https://www.ai4u.com.co
  - Verifica que aparezca "summary_large_image"

- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
  - Ingresa: https://www.ai4u.com.co
  - Click en "Inspect"

### 3. Prueba en WhatsApp

1. Copia el enlace: https://www.ai4u.com.co
2. Pégalo en un chat de WhatsApp
3. Verifica que aparezca:
   - Logo AI4U
   - Título: "AI4U - Inteligencia Artificial para tu Negocio"
   - Descripción del sitio

**Nota**: WhatsApp cachea las previews. Si no ves los cambios inmediatamente:
- Espera unos minutos
- Usa el Facebook Sharing Debugger para limpiar caché
- Intenta con un enlace ligeramente diferente (ej: con `?v=1` al final)

## 📱 Vista Previa Esperada

Cuando compartas el enlace en WhatsApp, deberías ver:

```
┌─────────────────────────────┐
│                             │
│     [Logo AI4U blanco]      │
│                             │
├─────────────────────────────┤
│ AI4U - Inteligencia         │
│ Artificial para tu Negocio  │
│                             │
│ Soluciones de Inteligencia  │
│ Artificial personalizadas...│
│                             │
│ 🔗 www.ai4u.com.co          │
└─────────────────────────────┘
```

## 🔄 Regenerar Imagen

Si necesitas actualizar la imagen (por ejemplo, cambiar el diseño del logo):

1. Actualiza los archivos fuente en `/public/assets/images/`
2. Ejecuta el script:
   ```bash
   node scripts/create-whatsapp-share-image.js
   ```
3. Valida los cambios:
   ```bash
   node scripts/validate-whatsapp-share.js
   ```
4. Despliega y limpia caché en Facebook Sharing Debugger

## 📝 Notas Técnicas

### Requisitos de Open Graph para WhatsApp

- **Formato**: JPG, PNG (PNG recomendado para logos)
- **Tamaño mínimo**: 300x300px
- **Tamaño recomendado**: 1200x630px (ratio 1.91:1)
- **Tamaño máximo archivo**: 8 MB
- **Fondo**: Debe tener color (no puede ser transparente)

### Caché de Redes Sociales

Las redes sociales cachean las previews agresivamente:

- **WhatsApp**: Usa caché de Facebook (~24 horas)
- **Facebook**: Se puede limpiar con Sharing Debugger
- **Twitter**: Caché de ~7 días
- **LinkedIn**: Caché de ~7 días

Para forzar actualización:
1. Facebook Sharing Debugger → "Scrape Again"
2. Agregar parámetro query: `?v=2`, `?updated=true`, etc.

## 🚀 Deploy

Los cambios se desplegarán automáticamente con el siguiente commit/push.

Una vez desplegado:
1. Ejecuta validación en Facebook Sharing Debugger
2. Prueba compartir en WhatsApp
3. Confirma que la imagen se vea correctamente

## 📚 Referencias

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)
- [WhatsApp Business API - Link Previews](https://developers.facebook.com/docs/whatsapp/link-previews)

---

**Fecha de actualización**: 2026-02-03  
**Autor**: AI Assistant  
**Estado**: ✅ Completado y validado
