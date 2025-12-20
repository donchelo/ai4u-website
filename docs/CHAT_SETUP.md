# Configuración del Chat con Make.com

## Descripción

El botón de chat flotante se conecta con Make.com para procesar las consultas de los usuarios. Cuando Make.com no está configurado, el sistema usa respuestas predefinidas como fallback.

## Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# URL del webhook de Make.com
REACT_APP_MAKE_WEBHOOK_URL=https://hook.us2.make.com/m34n93axb1wl43r5egbsb67mluml2elr

# Token de autenticación para Make.com (opcional)
REACT_APP_MAKE_API_TOKEN=
```

### 2. Configuración en Make.com

1. Crea un nuevo escenario en Make.com
2. Agrega un trigger de tipo "Webhook"
3. Copia la URL del webhook y agrégala a la variable `REACT_APP_MAKE_WEBHOOK_URL`
4. Configura el procesamiento de mensajes según tus necesidades

### 3. Estructura del Payload

El sistema envía el siguiente payload a Make.com:

```json
{
  "message": "Mensaje del usuario",
  "sessionId": "session_1234567890_abc123",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://tu-sitio.com/pagina-actual"
}
```

### 4. Respuesta Esperada

Make.com debe responder con:

```json
{
  "success": true,
  "message": "Respuesta del asistente",
  "data": {
    // Datos adicionales opcionales
  }
}
```

## Fallback

Si Make.com no está configurado o falla, el sistema usa respuestas predefinidas basadas en palabras clave:

- **Saludos**: "¡Hola! Soy el asistente virtual de AI4U..."
- **Servicios**: Información sobre servicios de IA
- **Precios**: Información sobre diagnóstico gratuito
- **Contacto**: Información de contacto
- **Diagnóstico**: Información sobre el diagnóstico gratuito

## Personalización

### Modificar Respuestas de Fallback

Edita la función `getFallbackResponse` en `src/utils/api.ts` para personalizar las respuestas.

### Cambiar el Isotipo

El chat usa la imagen `/assets/images/robot-assistant.png`. Puedes reemplazarla con tu propio isotipo.

### Estilos

Los estilos del chat están en `src/components/ui/ChatButton.tsx` y siguen el tema de AI4U.

## Funcionalidades

- Botón flotante con isotipo de AI4U
- Chat responsivo (pantalla completa en móvil)
- Conexión con Make.com
- Respuestas de fallback
- Scroll automático
- Indicador de "escribiendo..."
- Soporte para Enter para enviar
- Manejo de errores
- Sesiones únicas por usuario

## Notas Técnicas

- El chat genera un `sessionId` único por sesión
- Los mensajes se almacenan temporalmente en el estado del componente
- El sistema maneja errores de red gracefully
- El diseño es completamente responsivo
- Sigue el sistema de temas de AI4U 