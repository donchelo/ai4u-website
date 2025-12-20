// Utilidades para SEO y Structured Data
import { Service } from '../types/service';

// Structured Data para página de inicio
export const getHomeStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI4U",
  "url": "https://ai4u.com.co",
  "description": "Soluciones de Inteligencia Artificial personalizadas para tu negocio",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ai4u.com.co/servicios?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

// Structured Data para página de servicios
export const getServicesStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Servicios de Inteligencia Artificial",
  "description": "Catálogo completo de servicios de IA personalizados",
  "url": "https://ai4u.com.co/servicios",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "SuperAI Empresarial",
      "description": "Solución integral de IA para empresas",
      "url": "https://ai4u.com.co/servicios#superai-empresarial"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "GPT Personalizado",
      "description": "Chatbots inteligentes personalizados",
      "url": "https://ai4u.com.co/servicios#gpt-personalizado"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Automatización Inteligente",
      "description": "Automatización de procesos con IA",
      "url": "https://ai4u.com.co/servicios#automatizacion"
    }
  ]
});

// Structured Data para servicio individual
export const getServiceStructuredData = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "AI4U",
    "url": "https://ai4u.com.co"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "serviceType": service.category,
  "offers": {
    "@type": "Offer",
    "price": service.price || "Consultar",
    "priceCurrency": "COP",
    "availability": "https://schema.org/InStock"
  }
});

// Structured Data para página de casos de uso
export const getUseCasesStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Casos de Uso de IA",
  "description": "Casos de éxito y aplicaciones de inteligencia artificial",
  "url": "https://ai4u.com.co/casos-de-uso",
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "position": 1,
      "name": "Automatización de Atención al Cliente",
      "description": "Chatbots inteligentes para atención 24/7"
    },
    {
      "@type": "CreativeWork",
      "position": 2,
      "name": "Análisis de Datos Empresariales",
      "description": "Machine Learning para insights de negocio"
    },
    {
      "@type": "CreativeWork",
      "position": 3,
      "name": "Optimización de Procesos",
      "description": "IA para mejorar eficiencia operacional"
    }
  ]
});

// Structured Data para FAQ
export const getFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Structured Data para breadcrumbs
export const getBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// Meta tags optimizados por página
export const getPageMetaTags = (page: string) => {
  const metaTags = {
    home: {
      title: "AI4U - Inteligencia Artificial para tu Negocio",
      description: "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
      keywords: "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia"
    },
    services: {
      title: "Servicios de Inteligencia Artificial | AI4U",
      description: "Descubre nuestros servicios de IA: SuperAI empresarial, GPT personalizado, automatización inteligente. Soluciones a medida para tu negocio.",
      keywords: "servicios IA, SuperAI, GPT personalizado, automatización, chatbot, machine learning"
    },
    why: {
      title: "¿Por qué AI4U? | Ventajas de Nuestras Soluciones de IA",
      description: "Conoce por qué AI4U es la mejor opción para tu negocio. Experiencia, tecnología avanzada y resultados comprobados en inteligencia artificial.",
      keywords: "por qué AI4U, ventajas IA, experiencia inteligencia artificial, resultados IA"
    },
    cases: {
      title: "Casos de Uso de Inteligencia Artificial | AI4U",
      description: "Casos de éxito y aplicaciones reales de inteligencia artificial. Descubre cómo la IA transforma negocios en Colombia.",
      keywords: "casos de uso IA, éxito inteligencia artificial, aplicaciones IA, transformación digital"
    }
  };

  return metaTags[page as keyof typeof metaTags] || metaTags.home;
};

// Generar URL canónica
export const getCanonicalUrl = (path: string = '') => {
  const baseUrl = 'https://ai4u.com.co';
  return `${baseUrl}${path}`;
};

// Validar y limpiar meta description
export const cleanMetaDescription = (description: string, maxLength: number = 160) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

// Generar keywords optimizados
export const generateKeywords = (baseKeywords: string[], additionalKeywords: string[] = []) => {
  const allKeywords = [...baseKeywords, ...additionalKeywords];
  return allKeywords.join(', ');
}; 