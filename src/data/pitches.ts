import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';

export type SlideTheme = 'BANCOLOMBIA_PRIMARY' | 'BLACK_MODERN' | 'WHITE_MINIMAL' | 'ORANGE_PUNCH' | 'SUPER_AI_NEON' | 'GREEN_FRESH';

export interface Slide {
    title: string;
    subtitle?: string;
    content: string | string[];
    type: 'title' | 'content' | 'section' | 'product' | 'offer' | 'cta';
    theme: SlideTheme;
    category?: string;
    image?: string;
    video?: string;
    imageLayout?: 'background' | 'side' | 'floating';
}

export interface PitchData {
    id: string;
    clientName: string;
    slides: Slide[];
}

export const PITCHES: Record<string, PitchData> = {
    bancolombia: {
        id: 'bancolombia',
        clientName: 'Bancolombia',
        slides: [
            {
                title: '¿QUÉ PRECIO TIENE TU TIEMPO?',
                subtitle: 'EL TIEMPO ES ORO',
                content: '',
                type: 'title',
                theme: 'BLACK_MODERN',
                category: 'FILOSOFÍA',
                image: '/assets/images/bancolombia/bee-background.png',
                imageLayout: 'background'
            },
            {
                title: 'Ecosistemas que Evolucionan',
                subtitle: 'Estrategia • Automatización • Educación • Transformación',
                content: [
                    'Estrategia: Diagnóstico y planificación con IA para transformar tu negocio desde la raíz.',
                    'Automatización: Asistentes robóticos 24/7 que liberan el 70% de tu tiempo operativo.',
                    'Educación: Capacitación para que tu equipo evolucione junto a la tecnología.',
                    'Transformación Digital: Integración de soluciones para alcanzar el máximo nivel de eficiencia.'
                ],
                type: 'section',
                theme: 'BANCOLOMBIA_PRIMARY',
                category: 'NUESTRO ADN',
                image: '/assets/images/bancolombia/she_lookbook (12).jpg',
                imageLayout: 'background'
            },
            {
                title: 'Mariano',
                subtitle: 'Fundador de AI4U',
                content: [
                    'Líder en innovación y transformación digital.',
                    'Arquitecto de soluciones de IA con enfoque humano.',
                    'Dedicado a liberar el tiempo estratégico de las organizaciones.'
                ],
                type: 'content',
                theme: 'BLACK_MODERN',
                category: 'QUIÉN SOY',
                image: '/assets/images/mariano-pixel-art.png',
                imageLayout: 'side'
            },
            {
                title: 'Impulso Rural con EAFIT',
                subtitle: 'IA Generativa para Docentes',
                content: [
                    'Proyecto de impacto social formando a profesores de zonas rurales de Antioquia.',
                    'Llevando el poder de la IA a los rincones más alejados del departamento.',
                    'Capacitación en herramientas generativas para transformar la educación rural.'
                ],
                type: 'product',
                theme: 'WHITE_MINIMAL',
                category: 'EXPERIENCIA',
                image: '/assets/images/bancolombia/couturelab-1770084400455.jpg',
                imageLayout: 'side'
            },
            {
                title: '¿Por qué el contenido es un cuello de botella?',
                subtitle: 'Falta de escalabilidad y altos costos',
                content: [
                    'La creación manual no puede seguir el ritmo de la demanda digital personalizada.',
                    'Riesgo de inconsistencia de marca en una operación nacional.',
                    'Tiempos de entrega que frenan la agilidad comercial.'
                ],
                type: 'content',
                theme: 'ORANGE_PUNCH',
                category: 'EL PROBLEMA',
                image: '/assets/images/bancolombia/gemini-composite-1769733280428 (1).png',
                imageLayout: 'side'
            },
            {
                title: 'IA Generativa: El Futuro del Contenido Bancario',
                subtitle: 'AI4U + Bancolombia',
                content: 'Escalando la creatividad y la eficiencia mediante arquitecturas de IA personalizadas.',
                type: 'title',
                theme: 'BANCOLOMBIA_PRIMARY',
                image: '/assets/images/bancolombia/she_lookbook (12).jpg',
                imageLayout: 'side'
            },
            {
                title: 'Contenido Automático',
                subtitle: 'El fin de la página en blanco',
                content: [
                    'Sistemas RAG que conocen profundamente el ADN de Bancolombia.',
                    'Generación de textos e imágenes con coherencia visual absoluta.',
                    'Producción de activos a escala de una fracción del costo actual.'
                ],
                type: 'product',
                theme: 'BLACK_MODERN',
                category: 'SOLUCIÓN',
                video: '/assets/videos/data-entry-automatico.mp4',
                imageLayout: 'side'
            },
            {
                title: 'CoutureLab: Fashion AI Studio',
                subtitle: 'Arquitectura: Node_Alpha_Active // Core_Sync_01',
                content: [
                    'Infraestructura digital que unifica diseño, marketing y producción.',
                    'Casting Digital: Crea avatares, vístelos y escenifícalos sin límites.',
                    'Virtual Try-on & Editorial Lookbook: Calce real y consistencia visual 4K.',
                    'Eliminamos la fricción operativa: de la idea al activo final en horas.'
                ],
                type: 'product',
                theme: 'SUPER_AI_NEON',
                category: 'TECNOLOGÍA',
                image: '/assets/images/bancolombia/couturelab-1769631535174.jpg',
                imageLayout: 'side'
            },
            {
                title: 'De la Imaginación a la Realidad',
                subtitle: 'Expertos en Modelos de Imagen',
                content: [
                    'Dominio avanzado de Midjourney y metodología Nano Banana para resultados premium.',
                    'Implementación de flujos locales y cloud con Stable Diffusion.',
                    'Generación masiva de activos visuales hiperrealistas y alineados a marca.'
                ],
                type: 'product',
                theme: 'WHITE_MINIMAL',
                category: 'CASO DE USO',
                video: '/assets/videos/video_1768938346414.mp4',
                imageLayout: 'side'
            },
            {
                title: 'Transformemos Bancolombia',
                subtitle: 'Diagnóstico de Infraestructura de IA',
                content: [
                    'Evaluación profunda de flujos creativos y operativos.',
                    'Identificación de Quick Wins con IA para generación de contenido.',
                    'Hoja de ruta para autonomía digital.'
                ],
                type: 'offer',
                theme: 'BANCOLOMBIA_PRIMARY',
                category: 'PRÓXIMO PASO',
                image: '/assets/images/bancolombia/7ec3294e-6517-4049-b557-67dccbe989d1.jpg.jpeg',
                video: '/assets/videos/bancolombia-intro.mp4',
                imageLayout: 'side'
            },
            {
                title: 'Visual Showcase',
                subtitle: 'Impacto IA de alta fidelidad',
                content: '',
                type: 'section',
                theme: 'BLACK_MODERN',
                video: '/assets/videos/bancolombia-showcase.mp4',
                imageLayout: 'background'
            },
            {
                title: 'Agendemos Ahora',
                subtitle: 'El Futuro no Espera',
                content: 'Conversemos sobre cómo potenciar Bancolombia con Infraestructura de Inteligencia Artificial.',
                type: 'cta',
                theme: 'BLACK_MODERN',
                image: '/assets/images/bancolombia/bee-background.png',
                imageLayout: 'background'
            }
        ]
    },
    corona: {
        id: 'corona',
        clientName: 'Alimentos Corona',
        slides: [
            {
                title: 'Transformación Inteligente',
                subtitle: 'AI4U + Alimentos Corona',
                content: 'Elevando la distribución de proteínas al siguiente nivel con Infraestructura de IA.',
                type: 'title',
                theme: 'BLACK_MODERN'
            },
            {
                title: 'Investigación: Alimentos Corona',
                subtitle: 'Líder en Distribución de Proteínas',
                content: [
                    'Operación masiva de Pollo, Pescado y Cerdo en Antioquia.',
                    'Canales críticos: Minimercados, Tienda a Tienda (TAT) y HORECA.',
                    'Modelo de negocio basado en frescura y logística capilar.'
                ],
                type: 'content',
                theme: 'WHITE_MINIMAL'
            },
            {
                title: 'Dolores Operativos',
                subtitle: 'Identificando barreras de crecimiento',
                content: [
                    'Cuellos de botella por procesos manuales y digitación lenta.',
                    'Falta de visibilidad en tiempo real de la operación nacional.',
                    'Dependencia de personal para tareas repetitivas de bajo valor.'
                ],
                type: 'content',
                theme: 'ORANGE_PUNCH'
            },
            {
                title: 'Automatizaciones',
                subtitle: 'Lo Operativo: Eficiencia 24/7',
                content: 'Transformamos tareas repetitivas en procesos autónomos e infalibles.',
                type: 'section',
                theme: 'BLACK_MODERN',
                category: 'OPERATIVO'
            },
            {
                title: 'Chatbots Inteligentes',
                subtitle: 'Pedidos Omnicanal WhatsApp',
                content: [
                    'Gestión automática de órdenes de compra sin intervención humana.',
                    'Atención 24/7 para el canal TAT y Minimercados.',
                    'Sincronización instantánea con el inventario y CRM.'
                ],
                type: 'product',
                theme: 'WHITE_MINIMAL',
                category: 'OPERATIVO'
            },
            {
                title: 'Data Entry Automático',
                subtitle: 'Cero Errores de Digitación',
                content: [
                    'Extracción inteligente de datos de facturas y documentos (OCR).',
                    'Ingreso automático a ERP y sistemas contables.',
                    'Liberación de +20 horas semanales de carga administrativa.'
                ],
                type: 'product',
                theme: 'BLACK_MODERN',
                category: 'OPERATIVO'
            },
            {
                title: 'Auditorías Internas con IA',
                subtitle: 'Control y Calidad Garantizada',
                content: [
                    'Validación automática de procesos operativos y cumplimiento.',
                    'Detección de anomalías en facturación y logística.',
                    'Reportes de auditoría generados en segundos, no semanas.'
                ],
                type: 'product',
                theme: 'GREEN_FRESH',
                category: 'OPERATIVO'
            },
            {
                title: 'Visión por Computadora',
                subtitle: 'Cámaras Inteligentes en Bodegas',
                content: [
                    'Monitoreo automático de stock y movimiento de mercancía.',
                    'Control de calidad visual de proteínas y empaques.',
                    'Seguridad proactiva y detección de riesgos en tiempo real.'
                ],
                type: 'product',
                theme: 'WHITE_MINIMAL',
                category: 'OPERATIVO'
            },
            {
                title: 'Sitios Web con IA',
                subtitle: 'Optimización para Conversión',
                content: [
                    'Diseño de plataformas B2B inteligentes para pedidos web.',
                    'Experiencia de usuario personalizada según el perfil del cliente.',
                    'Arquitectura optimizada para máxima velocidad y fiabilidad.'
                ],
                type: 'product',
                theme: 'ORANGE_PUNCH',
                category: 'OPERATIVO'
            },
            {
                title: 'Data Analysis',
                subtitle: 'Lo Estratégico: El Poder de los Datos',
                content: 'Convierte la información de tu operación en tu mayor ventaja competitiva.',
                type: 'section',
                theme: 'BLACK_MODERN',
                category: 'ESTRATÉGICO'
            },
            {
                title: 'Dashboards Inteligentes',
                subtitle: 'Visibilidad Total del Negocio',
                content: [
                    'Análisis avanzado de ventas, mermas y rentabilidad por zona.',
                    'Visualización clara para la toma de decisiones ejecutivas.',
                    'Predicción sutil de tendencias basada en datos históricos.'
                ],
                type: 'product',
                theme: 'WHITE_MINIMAL',
                category: 'ESTRATÉGICO'
            },
            {
                title: 'Investigación HORECA',
                subtitle: 'Expansión Nacional Nacional',
                content: [
                    'Mapeo exhaustivo de Hoteles y Restaurantes en todo el país.',
                    'Identificación de zonas con mayor potencial de crecimiento.',
                    'Estrategia de penetración de mercado basada en datos geográficos.'
                ],
                type: 'product',
                theme: 'GREEN_FRESH',
                category: 'ESTRATÉGICO'
            },
            {
                title: 'El Siguiente Nivel',
                subtitle: 'Super AI Infrastructure',
                content: 'La cúspide de la autonomía: una IA que no solo sugiere, sino que ejecuta.',
                type: 'section',
                theme: 'SUPER_AI_NEON',
                category: 'SUPER AI'
            },
            {
                title: 'Super AI',
                subtitle: 'Tu Empleado Digital Autónomo',
                content: [
                    'IA conectada directamente a todos tus sistemas operativos.',
                    'Capacidad de actuar y decidir con base en objetivos de negocio.',
                    'Integración profunda que sustituye procesos complejos.'
                ],
                type: 'product',
                theme: 'SUPER_AI_NEON',
                category: 'SUPER AI'
            },
            {
                title: 'Autonomía Total',
                subtitle: 'Control de Sistemas y Objetivos',
                content: [
                    'La IA opera el computador y los sistemas como un humano experto.',
                    'Ejecución autónoma de tareas administrativas y logísticas.',
                    'Enfoque total en resultados y cumplimiento de KPIs.'
                ],
                type: 'product',
                theme: 'SUPER_AI_NEON',
                category: 'SUPER AI'
            },
            {
                title: 'Metodología AI-First',
                subtitle: 'Transformación Real desde el Núcleo',
                content: 'No adaptamos la IA a tu negocio; construimos tu infraestructura personalizada.',
                type: 'content',
                theme: 'BLACK_MODERN'
            },
            {
                title: 'Casos de Éxito',
                subtitle: 'Líderes que ya confían en AI4U',
                content: 'Empresas que han transformado su operación mediante nuestra infraestructura de IA.',
                type: 'content',
                theme: 'WHITE_MINIMAL'
            },
            {
                title: '¿Por qué AI4U?',
                subtitle: 'Tu Socio de Ingeniería Dedicado',
                content: 'No somos un proveedor de software; somos tu equipo de ingeniería de IA personalizado.',
                type: 'content',
                theme: 'ORANGE_PUNCH'
            },
            {
                title: 'Diagnóstico Gratuito',
                subtitle: 'Inicia tu Transformación',
                content: [
                    'Evaluación profunda de tu operación actual sin costo.',
                    'Identificación de Quick Wins con IA para Alimentos Corona.',
                    'Entrega de un Roadmap estratégico de implementación.'
                ],
                type: 'offer',
                theme: 'ORANGE_PUNCH'
            },
            {
                title: 'Agendemos Ahora',
                subtitle: 'El Futuro es Hoy',
                content: 'Conversemos sobre cómo potenciar Alimentos Corona con Inteligencia Artificial.',
                type: 'cta',
                theme: 'BLACK_MODERN'
            }
        ]
    }
};

export const getThemeStyles = (themeName: SlideTheme) => {
    switch (themeName) {
        case 'BANCOLOMBIA_PRIMARY':
            return {
                bg: '#FDDA24',
                text: '#000000',
                accent: '#000000',
                logoMode: 'light' as const
            };
        case 'ORANGE_PUNCH':
            return {
                bg: AI4U_PALETTE.accentColors.orange,
                text: AI4U_PALETTE.white,
                accent: AI4U_PALETTE.black,
                logoMode: 'dark' as const
            };
        case 'BLACK_MODERN':
            return {
                bg: AI4U_PALETTE.black,
                text: AI4U_PALETTE.white,
                accent: '#FDDA24',
                logoMode: 'dark' as const
            };
        case 'WHITE_MINIMAL':
            return {
                bg: AI4U_PALETTE.white,
                text: AI4U_PALETTE.black,
                accent: '#FDDA24',
                logoMode: 'light' as const
            };
        case 'GREEN_FRESH':
            return {
                bg: AI4U_PALETTE.accentColors.green,
                text: AI4U_PALETTE.black,
                accent: AI4U_PALETTE.black,
                logoMode: 'light' as const
            };
        case 'SUPER_AI_NEON':
            return {
                bg: AI4U_PALETTE.gray[900],
                text: AI4U_PALETTE.white,
                accent: '#00F0FF',
                logoMode: 'dark' as const,
                glow: true
            };
        default:
            return {
                bg: AI4U_PALETTE.white,
                text: AI4U_PALETTE.black,
                accent: AI4U_PALETTE.accentColors.orange,
                logoMode: 'light' as const
            };
    }
};
