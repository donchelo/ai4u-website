// Configuración de la API para Make.com
const MAKE_API_CONFIG = {
  // URL del webhook de Make.com
  webhookUrl: process.env.REACT_APP_MAKE_WEBHOOK_URL || '',
  // Token de autenticación (si es necesario)
  apiToken: process.env.REACT_APP_MAKE_API_TOKEN || '',
};

// Interfaz para los mensajes
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  sessionId?: string;
}

// Interfaz para la respuesta de Make.com
export interface MakeResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}

// Función para enviar mensaje a Make.com
export const sendMessageToMake = async (
  message: string, 
  sessionId?: string
): Promise<MakeResponse> => {
  try {
    if (!MAKE_API_CONFIG.webhookUrl) {
      throw new Error('Webhook URL no configurada');
    }

    const payload = {
      message,
      sessionId: sessionId || `session_${Date.now()}`,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    const response = await fetch(MAKE_API_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(MAKE_API_CONFIG.apiToken && {
          'Authorization': `Bearer ${MAKE_API_CONFIG.apiToken}`
        }),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error sending message to Make.com:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
};

// Función para generar un ID de sesión único
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Función para simular respuesta cuando Make.com no está configurado
export const getFallbackResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas')) {
    return '¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?';
  }
  
  if (lowerMessage.includes('servicios') || lowerMessage.includes('qué hacen') || lowerMessage.includes('qué ofrecen')) {
    return 'En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?';
  }
  
  if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('tarifa')) {
    return 'Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada.';
  }
  
  if (lowerMessage.includes('contacto') || lowerMessage.includes('teléfono') || lowerMessage.includes('email')) {
    return 'Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas.';
  }
  
  if (lowerMessage.includes('diagnóstico') || lowerMessage.includes('gratuito')) {
    return '¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?';
  }
  
  return 'Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.';
}; 