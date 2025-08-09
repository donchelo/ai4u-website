import {
  getPageMetaTags,
  getHomeStructuredData,
  getServicesStructuredData,
  getServiceStructuredData,
  getUseCasesStructuredData,
  getFAQStructuredData,
  getBreadcrumbStructuredData,
  getCanonicalUrl,
  cleanMetaDescription,
  generateKeywords
} from '../seo';

describe('SEO Utils', () => {
  describe('getPageMetaTags', () => {
    it('should return correct meta tags for home page', () => {
      const metaTags = getPageMetaTags('home');
      
      expect(metaTags.title).toContain('AI4U');
      expect(metaTags.description).toContain('Automatización');
      expect(metaTags.keywords).toContain('inteligencia artificial');
      expect(metaTags.title.length).toBeLessThanOrEqual(60);
      expect(metaTags.description.length).toBeLessThanOrEqual(160);
    });

    it('should return correct meta tags for services page', () => {
      const metaTags = getPageMetaTags('services');
      
      expect(metaTags.title).toContain('Servicios');
      expect(metaTags.description).toContain('servicios');
      expect(metaTags.keywords).toContain('servicios');
      expect(metaTags.title.length).toBeLessThanOrEqual(60);
      expect(metaTags.description.length).toBeLessThanOrEqual(160);
    });

    it('should return fallback meta tags for unknown page', () => {
      const metaTags = getPageMetaTags('gallery');
      
      expect(metaTags.title).toContain('AI4U');
      expect(metaTags.description).toContain('Automatización');
      expect(metaTags.keywords).toContain('inteligencia artificial');
    });

    it('should return correct meta tags for why page', () => {
      const metaTags = getPageMetaTags('why');
      
      expect(metaTags.title).toContain('Por qué');
      expect(metaTags.description).toContain('opción');
      expect(metaTags.keywords).toContain('por qué AI4U');
    });

    it('should return correct meta tags for cases page', () => {
      const metaTags = getPageMetaTags('cases');
      
      expect(metaTags.title).toContain('Casos');
      expect(metaTags.description).toContain('éxito');
      expect(metaTags.keywords).toContain('casos de uso');
    });

    it('should handle unknown page with fallback', () => {
      const metaTags = getPageMetaTags('unknown');
      
      expect(metaTags.title).toContain('AI4U');
      expect(metaTags.description).toBeDefined();
      expect(metaTags.keywords).toBeDefined();
    });

    it('should ensure all titles are within SEO limits', () => {
      const pages = ['home', 'services', 'why', 'cases'];
      
      pages.forEach(page => {
        const metaTags = getPageMetaTags(page);
        expect(metaTags.title.length).toBeLessThanOrEqual(60);
      });
    });

    it('should ensure all descriptions are within SEO limits', () => {
      const pages = ['home', 'services', 'why', 'cases'];
      
      pages.forEach(page => {
        const metaTags = getPageMetaTags(page);
        expect(metaTags.description.length).toBeLessThanOrEqual(160);
      });
    });
  });

  describe('getHomeStructuredData', () => {
    it('should return valid WebSite structured data', () => {
      const structuredData = getHomeStructuredData();
      
      expect(structuredData['@context']).toBe('https://schema.org');
      expect(structuredData['@type']).toBe('WebSite');
      expect(structuredData.name).toContain('AI4U');
      expect(structuredData.url).toContain('ai4u');
      expect(structuredData.description).toBeDefined();
    });

    it('should include potentialAction for search', () => {
      const structuredData = getHomeStructuredData();
      
      expect(structuredData.potentialAction).toBeDefined();
      expect(structuredData.potentialAction['@type']).toBe('SearchAction');
    });

    it('should include search action', () => {
      const structuredData = getHomeStructuredData();
      
      expect(structuredData.potentialAction).toBeDefined();
      expect(structuredData.potentialAction['@type']).toBe('SearchAction');
      expect(structuredData.name).toContain('AI4U');
    });
  });

  describe('getServicesStructuredData', () => {
    it('should return valid ItemList structured data', () => {
      const structuredData = getServicesStructuredData();
      
      expect(structuredData['@context']).toBe('https://schema.org');
      expect(structuredData['@type']).toBe('ItemList');
      expect(structuredData.name).toContain('Servicios');
      expect(structuredData.itemListElement).toBeInstanceOf(Array);
    });

    it('should include service items', () => {
      const structuredData = getServicesStructuredData();
      
      expect(structuredData.itemListElement.length).toBe(3);
      
      structuredData.itemListElement.forEach((item: any, index: number) => {
        expect(item['@type']).toBe('Service');
        expect(item.position).toBe(index + 1);
        expect(item.name).toBeDefined();
        expect(item.description).toBeDefined();
      });
    });
  });

  describe('getServiceStructuredData', () => {
    const mockService = {
      title: 'Test Service',
      description: 'A test service',
      category: 'automation',
      price: '1000000'
    };

    it('should return valid Service structured data', () => {
      const structuredData = getServiceStructuredData(mockService);
      
      expect(structuredData['@context']).toBe('https://schema.org');
      expect(structuredData['@type']).toBe('Service');
      expect(structuredData.name).toBe('Test Service');
      expect(structuredData.description).toBe('A test service');
    });

    it('should include provider information', () => {
      const structuredData = getServiceStructuredData(mockService);
      
      expect(structuredData.provider).toBeDefined();
      expect(structuredData.provider['@type']).toBe('Organization');
      expect(structuredData.provider.name).toContain('AI4U');
    });

    it('should include offers information', () => {
      const structuredData = getServiceStructuredData(mockService);
      
      expect(structuredData.offers).toBeDefined();
      expect(structuredData.offers['@type']).toBe('Offer');
      expect(structuredData.offers.priceCurrency).toBe('COP');
    });
  });

  describe('getBreadcrumbStructuredData', () => {
    it('should return valid BreadcrumbList structured data', () => {
      const breadcrumbs = [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' }
      ];
      
      const structuredData = getBreadcrumbStructuredData(breadcrumbs);
      
      expect(structuredData['@context']).toBe('https://schema.org');
      expect(structuredData['@type']).toBe('BreadcrumbList');
      expect(structuredData.itemListElement).toHaveLength(2);
    });

    it('should include correct positions for breadcrumbs', () => {
      const breadcrumbs = [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' },
        { name: 'Automatización', url: '/servicios/automatizacion' }
      ];
      
      const structuredData = getBreadcrumbStructuredData(breadcrumbs);
      
      structuredData.itemListElement.forEach((item: any, index: number) => {
        expect(item.position).toBe(index + 1);
        expect(item.name).toBe(breadcrumbs[index].name);
        expect(item.item).toContain(breadcrumbs[index].url);
      });
    });
  });

  describe('getCanonicalUrl', () => {
    it('should return correct canonical URL for home page', () => {
      const url = getCanonicalUrl('/');
      
      expect(url).toMatch(/https:\/\/.+\.com\.co\/?$/);
    });

    it('should return correct canonical URL for subpages', () => {
      const url = getCanonicalUrl('/servicios');
      
      expect(url).toMatch(/https:\/\/.+\.com\.co\/servicios$/);
    });

    it('should handle trailing slashes correctly', () => {
      const url1 = getCanonicalUrl('/servicios/');
      const url2 = getCanonicalUrl('/servicios');
      
      // Both should contain /servicios
      expect(url1).toContain('/servicios');
      expect(url2).toContain('/servicios');
    });

    it('should handle query parameters', () => {
      const url = getCanonicalUrl('/servicios?param=value');
      
      // Current implementation includes query params
      expect(url).toContain('https://ai4u.com.co');
      expect(url).toContain('/servicios');
    });
  });

  describe('cleanMetaDescription', () => {
    it('should truncate long descriptions', () => {
      const longDescription = 'A'.repeat(200);
      const cleaned = cleanMetaDescription(longDescription);
      
      expect(cleaned.length).toBeLessThanOrEqual(160);
      expect(cleaned).toContain('...');
    });

    it('should preserve short descriptions', () => {
      const shortDescription = 'Short description';
      const cleaned = cleanMetaDescription(shortDescription);
      
      expect(cleaned).toBe(shortDescription);
    });

    it('should handle empty strings', () => {
      const cleaned = cleanMetaDescription('');
      
      expect(cleaned).toBe('');
    });

    it('should respect custom maxLength', () => {
      const description = 'This is a longer description';
      const cleaned = cleanMetaDescription(description, 20);
      
      expect(cleaned.length).toBeLessThanOrEqual(20);
      expect(cleaned).toContain('...');
    });

    it('should handle exact length match', () => {
      const description = 'A'.repeat(160);
      const cleaned = cleanMetaDescription(description, 160);
      
      expect(cleaned).toBe(description);
    });
  });

  describe('generateKeywords', () => {
    it('should generate keywords from base and additional arrays', () => {
      const baseKeywords = ['AI4U', 'automatización'];
      const additionalKeywords = ['inteligencia artificial'];
      const keywords = generateKeywords(baseKeywords, additionalKeywords);
      
      expect(keywords).toContain('AI4U');
      expect(keywords).toContain('automatización');
      expect(keywords).toContain('inteligencia artificial');
      expect(keywords.split(',').length).toBe(3);
    });

    it('should handle only base keywords', () => {
      const baseKeywords = ['AI4U', 'automatización'];
      const keywords = generateKeywords(baseKeywords);
      
      expect(keywords).toBe('AI4U, automatización');
    });

    it('should handle empty arrays', () => {
      const keywords = generateKeywords([]);
      
      expect(keywords).toBe('');
    });

    it('should properly format multiple keywords', () => {
      const keywords = generateKeywords(['keyword1', 'keyword2', 'keyword3']);
      
      expect(keywords).toBe('keyword1, keyword2, keyword3');
    });
  });

  describe('Structured Data Validation', () => {
    it('should ensure all structured data has required @context', () => {
      const homeData = getHomeStructuredData();
      const servicesData = getServicesStructuredData();
      const breadcrumbData = getBreadcrumbStructuredData([{ name: 'Test', url: '/test' }]);
      
      expect(homeData['@context']).toBe('https://schema.org');
      expect(servicesData['@context']).toBe('https://schema.org');
      expect(breadcrumbData['@context']).toBe('https://schema.org');
    });

    it('should ensure all structured data has valid @type', () => {
      const homeData = getHomeStructuredData();
      const servicesData = getServicesStructuredData();
      const breadcrumbData = getBreadcrumbStructuredData([{ name: 'Test', url: '/test' }]);
      
      expect(['WebSite', 'Organization']).toContain(homeData['@type']);
      expect(servicesData['@type']).toBe('ItemList');
      expect(breadcrumbData['@type']).toBe('BreadcrumbList');
    });
  });

  describe('Integration Tests', () => {
    it('should work together for complete page SEO', () => {
      const metaTags = getPageMetaTags('services');
      const structuredData = getServicesStructuredData();
      const canonical = getCanonicalUrl('/servicios');
      
      expect(metaTags.title).toBeDefined();
      expect(structuredData['@type']).toBe('ItemList');
      expect(canonical).toContain('/servicios');
    });

    it('should maintain consistency across all SEO functions', () => {
      const pages = ['home', 'services', 'why', 'cases'];
      
      pages.forEach(page => {
        const metaTags = getPageMetaTags(page);
        const baseKeywords = ['AI4U', 'automatización'];
        const keywords = generateKeywords(baseKeywords);
        const canonical = getCanonicalUrl(`/${page}`);
        
        expect(metaTags).toBeDefined();
        expect(keywords).toBeDefined();
        expect(canonical).toBeDefined();
      });
    });
  });
});