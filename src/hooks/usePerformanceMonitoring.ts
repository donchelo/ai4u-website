// Hook para monitoreo automático de performance - AI4U
import { useEffect, useRef } from 'react';
import { analytics } from '../utils/analytics';
import { logger } from '../utils/logger';

interface PerformanceThresholds {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint  
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

// Thresholds basados en Core Web Vitals
const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  fcp: 1800, // 1.8s
  lcp: 2500, // 2.5s
  fid: 100,  // 100ms
  cls: 0.1,  // 0.1
  ttfb: 600  // 600ms
};

export const usePerformanceMonitoring = (
  pageName: string,
  thresholds: Partial<PerformanceThresholds> = {}
) => {
  const startTimeRef = useRef<number>(Date.now());
  const finalThresholds = { ...DEFAULT_THRESHOLDS, ...thresholds };

  useEffect(() => {
    let perfObserver: PerformanceObserver;
    
    // Función para medir Core Web Vitals
    const measureCoreWebVitals = () => {
      try {
        // Medir FCP (First Contentful Paint)
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
        if (fcpEntry) {
          const fcpValue = fcpEntry.startTime;
          logger.log(`🎯 FCP: ${fcpValue.toFixed(2)}ms`);
          
          if (fcpValue > finalThresholds.fcp) {
            analytics.trackPerformanceIssue('fcp', fcpValue, finalThresholds.fcp);
          }
        }

        // Medir LCP usando PerformanceObserver
        if ('PerformanceObserver' in window) {
          perfObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            
            if (lastEntry) {
              const lcpValue = lastEntry.startTime;
              logger.log(`🎯 LCP: ${lcpValue.toFixed(2)}ms`);
              
              if (lcpValue > finalThresholds.lcp) {
                analytics.trackPerformanceIssue('lcp', lcpValue, finalThresholds.lcp);
              }
            }
          });
          
          try {
            perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            logger.warn('LCP observation not supported');
          }
        }

        // Medir TTFB (Time to First Byte)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfbValue = navigationEntry.responseStart - navigationEntry.fetchStart;
          logger.log(`🎯 TTFB: ${ttfbValue.toFixed(2)}ms`);
          
          if (ttfbValue > finalThresholds.ttfb) {
            analytics.trackPerformanceIssue('ttfb', ttfbValue, finalThresholds.ttfb);
          }
        }

        // Medir FID usando PerformanceObserver
        if ('PerformanceObserver' in window) {
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              const fidValue = entry.processingStart - entry.startTime;
              logger.log(`🎯 FID: ${fidValue.toFixed(2)}ms`);
              
              if (fidValue > finalThresholds.fid) {
                analytics.trackPerformanceIssue('fid', fidValue, finalThresholds.fid);
              }
            });
          });
          
          try {
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (e) {
            logger.warn('FID observation not supported');
          }
        }

      } catch (error) {
        logger.error('Error measuring performance:', error);
      }
    };

    // Función para medir tiempo de carga de la página
    const measurePageLoadTime = () => {
      const loadTime = Date.now() - startTimeRef.current;
      logger.log(`📊 Page load time: ${loadTime}ms`);
      
      // Track si la página tarda mucho en cargar
      if (loadTime > 3000) {
        analytics.trackPerformanceIssue('page_load_slow', loadTime, 3000);
      }
      
      // Track tiempo en analytics
      analytics.trackEvent({
        action: 'page_load_time',
        category: 'performance',
        label: pageName,
        value: Math.round(loadTime),
        custom_parameters: {
          page_name: pageName,
          load_time_ms: loadTime,
          performance_classification: loadTime < 1000 ? 'fast' : loadTime < 3000 ? 'moderate' : 'slow'
        }
      });
    };

    // Medir cuando la página está completamente cargada
    if (document.readyState === 'complete') {
      measureCoreWebVitals();
      measurePageLoadTime();
    } else {
      window.addEventListener('load', () => {
        // Esperar un poco para que todas las métricas estén disponibles
        setTimeout(() => {
          measureCoreWebVitals();
          measurePageLoadTime();
        }, 100);
      });
    }

    // Medir tiempo en página al desmontar componente
    return () => {
      const timeOnPage = Date.now() - startTimeRef.current;
      analytics.trackTimeOnPage(pageName, timeOnPage);
      
      // Cleanup PerformanceObserver
      if (perfObserver) {
        perfObserver.disconnect();
      }
    };
  }, [pageName, finalThresholds]);

  // Función para reportar errores de performance manualmente
  const reportPerformanceIssue = (metric: string, value: number, context?: string) => {
    analytics.trackPerformanceIssue(metric, value, finalThresholds[metric as keyof PerformanceThresholds] || 0);
    logger.warn(`Performance issue reported: ${metric} = ${value}`, context);
  };

  return {
    reportPerformanceIssue
  };
};