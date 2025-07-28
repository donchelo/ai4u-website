export interface Client {
  id: string;
  name: string;
  website: string;
  logo: string;
  description: string;
}

export const clients: Client[] = [
  {
    id: 'la-magdalena',
    name: 'La Magdalena',
    website: 'https://www.lamagdalena.com.co',
    logo: '/assets/images/cases/logo-magdalena.png',
    description: 'Transformación digital, creación de reportes y automatizaciones operativas básicas para mejorar la eficiencia y la presencia digital.'
  },
  {
    id: 'true',
    name: 'TRUE',
    website: 'https://www.trueshop.co',
    logo: '/assets/images/cases/logo-true.png',
    description: 'Desarrollamos un sistema completo de generación visual con IA para catálogos de moda y lookbooks. Integramos modelos de Virtual Try-On para visualización realista de prendas en modelos digitales.'
  },
  {
    id: 'hua-naturals',
    name: 'HUA Naturals',
    website: 'https://www.huanaturals.com',
    logo: '/assets/images/cases/logo-hua-naturals.png',
    description: 'Creamos un asistente de ventas con IA para múltiples canales. Diseñamos una Super Junta Directiva AI para la toma de decisiones estratégicas, y desarrollamos un programa de capacitación en inteligencia artificial.'
  },
  {
    id: 'EAFIT',
    name: 'EAFIT',
    website: 'https://www.eafit.edu.co',
    logo: '/assets/images/cases/logo-eafit.png',
    description: 'Capacitamos a docentes en el uso práctico y estratégico de modelos de lenguaje e IA generativa. Facilitamos su integración en procesos educativos de primaria y secundaria.'
  }
];