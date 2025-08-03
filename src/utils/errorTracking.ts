// Error tracking básico para AI4U - Sin dependencias externas
import { analytics } from './analytics';
import { logger } from './logger';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: boolean;
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
}

class ErrorTracker {
  private sessionId: string;
  
  constructor() {
    this.sessionId = this.generateSessionId();
    this.setupGlobalErrorHandlers();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupGlobalErrorHandlers() {
    // Manejar errores JavaScript no capturados
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        timestamp: new Date().toISOString(),
        errorBoundary: false
      });
    });

    // Manejar promesas rechazadas no capturadas
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        errorBoundary: false
      });
    });

    logger.log('🛡️ Error tracking initialized');
  }

  captureError(errorInfo: Partial<ErrorInfo>) {
    const fullErrorInfo: ErrorInfo = {
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary || false,
      url: errorInfo.url || window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: errorInfo.timestamp || new Date().toISOString(),
      sessionId: this.sessionId,
      ...errorInfo
    };

    // Log error locally
    logger.error('🚨 Error captured:', fullErrorInfo);

    // Send to analytics
    analytics.trackErrorBoundary(fullErrorInfo, fullErrorInfo.componentStack);

    // Para futuro: aquí se podría enviar a un servicio externo
    this.sendToRemoteService(fullErrorInfo);
  }

  captureException(error: Error, context?: string) {
    this.captureError({
      message: error.message,
      stack: error.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      errorBoundary: false,
      // Agregar contexto adicional
      ...(context && { context })
    });
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
    const errorInfo: ErrorInfo = {
      message,
      url: window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId
    };

    if (level === 'error') {
      this.captureError(errorInfo);
    } else {
      logger.log(`📢 Message captured (${level}):`, message);
      // Para mensajes no críticos, solo log local
    }
  }

  private async sendToRemoteService(errorInfo: ErrorInfo) {
    // Implementación básica - enviar errores a un webhook simple
    // En producción, esto se podría reemplazar con Sentry, LogRocket, etc.
    
    try {
      // Solo enviar errores críticos para no saturar
      if (this.shouldSendError(errorInfo)) {
        const payload = {
          error: errorInfo,
          meta: {
            project: 'ai4u-website',
            environment: process.env.NODE_ENV,
            version: '1.0.0',
            timestamp: new Date().toISOString()
          }
        };

        // Por ahora, solo log - en futuro podría ser un webhook
        logger.log('📤 Error would be sent to remote service:', payload);
        
        // Ejemplo de envío a webhook (comentado para evitar errores)
        /*
        await fetch('/api/errors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        */
      }
    } catch (sendError) {
      logger.error('Failed to send error to remote service:', sendError);
    }
  }

  private shouldSendError(errorInfo: ErrorInfo): boolean {
    // Filtrar errores que no queremos reportar
    const ignoredMessages = [
      'Script error',
      'Network request failed',
      'Loading chunk', 
      'ChunkLoadError'
    ];

    return !ignoredMessages.some(ignored => 
      errorInfo.message.toLowerCase().includes(ignored.toLowerCase())
    );
  }

  // Método para agregar contexto a los errores
  addContext(key: string, value: any) {
    // En una implementación más avanzada, esto se guardaría
    logger.log(`🏷️ Error context added: ${key}=`, value);
  }

  // Método para identificar al usuario (GDPR compliant)
  setUser(userId: string) {
    logger.log(`👤 User identified: ${userId.substring(0, 8)}...`);
    // Guardar de forma segura para contexto de errores
  }
}

// Singleton instance
export const errorTracker = new ErrorTracker();

// Hook para usar en componentes React
export const useErrorTracking = () => {
  const captureComponentError = (error: Error, errorInfo?: any) => {
    errorTracker.captureError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      errorBoundary: true,
      timestamp: new Date().toISOString()
    });
  };

  return {
    captureError: errorTracker.captureError.bind(errorTracker),
    captureException: errorTracker.captureException.bind(errorTracker),
    captureMessage: errorTracker.captureMessage.bind(errorTracker),
    captureComponentError,
    addContext: errorTracker.addContext.bind(errorTracker)
  };
};

export default errorTracker;