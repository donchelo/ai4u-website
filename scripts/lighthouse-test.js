const lighthouse = require('lighthouse').default || require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const URL = 'http://localhost:3002';
const OUTPUT_DIR = 'lighthouse-reports';

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runLighthouse() {
  console.log('🔍 Iniciando Lighthouse Performance Test...');
  
  try {
    // Lanzar Chrome
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
    });

    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port
    };

    console.log(`📊 Analizando: ${URL}`);
    
    // Ejecutar Lighthouse
    const runnerResult = await lighthouse(URL, options, null);
    const reportJson = runnerResult.lhr;

    // Guardar reporte completo
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(OUTPUT_DIR, `lighthouse-report-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(reportJson, null, 2));

    // Extraer métricas principales
    const metrics = {
      performance: reportJson.categories.performance.score * 100,
      accessibility: reportJson.categories.accessibility.score * 100,
      bestPractices: reportJson.categories['best-practices'].score * 100,
      seo: reportJson.categories.seo.score * 100,
      firstContentfulPaint: reportJson.audits['first-contentful-paint'].numericValue,
      largestContentfulPaint: reportJson.audits['largest-contentful-paint'].numericValue,
      totalBlockingTime: reportJson.audits['total-blocking-time'].numericValue,
      cumulativeLayoutShift: reportJson.audits['cumulative-layout-shift'].numericValue
    };

    // Mostrar resultados
    console.log('\n📈 RESULTADOS LIGHTHOUSE:');
    console.log('========================');
    console.log(`Performance: ${metrics.performance.toFixed(1)}/100`);
    console.log(`Accessibility: ${metrics.accessibility.toFixed(1)}/100`);
    console.log(`Best Practices: ${metrics.bestPractices.toFixed(1)}/100`);
    console.log(`SEO: ${metrics.seo.toFixed(1)}/100`);
    console.log('\n🚀 Core Web Vitals:');
    console.log(`First Contentful Paint: ${(metrics.firstContentfulPaint / 1000).toFixed(2)}s`);
    console.log(`Largest Contentful Paint: ${(metrics.largestContentfulPaint / 1000).toFixed(2)}s`);
    console.log(`Total Blocking Time: ${metrics.totalBlockingTime}ms`);
    console.log(`Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(3)}`);

    // Evaluar resultados
    const performanceScore = metrics.performance;
    const accessibilityScore = metrics.accessibility;
    const bestPracticesScore = metrics.bestPractices;
    const seoScore = metrics.seo;

    console.log('\n🎯 EVALUACIÓN:');
    console.log('==============');
    
    if (performanceScore >= 90) {
      console.log('✅ Performance: EXCELENTE');
    } else if (performanceScore >= 70) {
      console.log('⚠️  Performance: BUENO (necesita mejora)');
    } else {
      console.log('❌ Performance: CRÍTICO (requiere optimización)');
    }

    if (accessibilityScore >= 90) {
      console.log('✅ Accessibility: EXCELENTE');
    } else if (accessibilityScore >= 70) {
      console.log('⚠️  Accessibility: BUENO (necesita mejora)');
    } else {
      console.log('❌ Accessibility: CRÍTICO (requiere optimización)');
    }

    if (bestPracticesScore >= 90) {
      console.log('✅ Best Practices: EXCELENTE');
    } else if (bestPracticesScore >= 70) {
      console.log('⚠️  Best Practices: BUENO (necesita mejora)');
    } else {
      console.log('❌ Best Practices: CRÍTICO (requiere optimización)');
    }

    if (seoScore >= 90) {
      console.log('✅ SEO: EXCELENTE');
    } else if (seoScore >= 70) {
      console.log('⚠️  SEO: BUENO (necesita mejora)');
    } else {
      console.log('❌ SEO: CRÍTICO (requiere optimización)');
    }

    console.log(`\n📄 Reporte completo guardado en: ${reportPath}`);
    
    await chrome.kill();
    
    return metrics;
    
  } catch (error) {
    console.error('❌ Error ejecutando Lighthouse:', error);
    throw error;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  runLighthouse().catch(console.error);
}

module.exports = { runLighthouse }; 