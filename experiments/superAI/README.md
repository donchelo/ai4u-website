# Documentación Central superAI

superAI es un ecosistema de micro-servicios y asistentes de IA para operar y supervisar empresas a nivel ejecutivo y operativo.

## Módulos Principales

*   **mission-control-main**: Panel de control principal (Classic y SuperAI Views). Centro neurálgico del sistema con RBAC, persistencia, SSO (`mc-sso`) y sistema de notificaciones/alertas (Pilar 1 a 4).
*   **sap-b1-backend**: Backend de integración con SAP Business One (MCP y APIs proxy) usado por los agentes para recolectar información en tiempo real.
*   **sap-b1-chat**: Asistente conversacional de operaciones capaz de interrogar a SAP B1 de forma interactiva y con persistencia de historial de conversaciones y estado (conectado a los pilares principales).
*   **orderloader**: Automatización (con visión artificial/LLMs) para la digitalización de pedidos, extrayendo datos de PDFs y comunicándolos vía integraciones.
*   **social-listening** y **share-of-voice**: Monitoreo y generación de reportes en redes sociales y medios usando Apify y modelos fundacionales para consolidar métricas de reputación.
*   **kpis**: Dashboard específico para visualización avanzada de indicadores clave de negocio (Pulse).
*   **creador-clientes**: Interfaz y asistentes de preparación/aprobación de datos maestros de clientes antes de insertarse en el ERP.
*   **changelog-service**: Microservicio de registro de cambios técnicos y operacionales.
*   **sistemaDiseno**: Biblioteca de componentes UI y tokens (Design System) compartidos en toda la plataforma.

## Pilares Implementados Recientemente
1. **Usuarios y RBAC:** Identity management con `email` y control de perfiles y roles distribuidos.
2. **Historial Persistente:** Conversaciones, llamadas a herramientas (MCP/Tools) y respuestas preservadas para análisis (en supabase).
3. **Logs de Actividad:** Función centralizada (`logActivity`) para trazabilidad, desde el inicio de sesión hasta operaciones clave.
4. **Motor de Alertas:** Campana inteligente en Mission Control vinculada al motor de notificaciones proactivas de SuperAI.

## Iniciar el Entorno
El entorno multi-servicio requiere correr los componentes en paralelo (idealmente usando un monorepo tool como Turborepo o ejecutando los scripts dev de cada servicio). La autenticación es dependiente de Supabase.
