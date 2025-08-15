#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const inputDir = 'public/assets/images';
const outputDir = 'public/assets/images/optimized';

// Configuración de análisis
const ANALYSIS_CONFIG = {
  maxFileSize: {
    thumbnail: 50 * 1024, // 50KB
    small: 100 * 1024,    // 100KB
    medium: 300 * 1024,   // 300KB
    large: 800 * 1024     // 800KB
  },
  recommendedFormats: ['webp', 'avif'],
  compressionThreshold: 0.3 // 30% de compresión mínima
};

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeImagePerformance() {
  console.log('🔍 Analizando rendimiento de imágenes...\n');
  
  // Verificar si existe el mapeo de optimización
  const mappingPath = path.join(outputDir, 'image-mapping.json');
  const statsPath = path.join(outputDir, 'optimization-stats.json');
  
  if (!fs.existsSync(mappingPath)) {
    console.log('❌ No se encontró el mapeo de optimización.');
    console.log('   Ejecuta primero: npm run optimize-images');
    return;
  }
  
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
  const stats = fs.existsSync(statsPath) ? 
    JSON.parse(fs.readFileSync(statsPath, 'utf8')) : null;
  
  const analysis = {
    totalImages: Object.keys(mapping).length,
    optimizedImages: 0,
    webpImages: 0,
    oversizedImages: [],
    unoptimizedImages: [],
    recommendations: [],
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
    totalSavings: 0
  };
  
  console.log('📊 Análisis por imagen:\n');
  
  Object.entries(mapping).forEach(([imageName, imageData]) => {
    if (!imageData.original) {
      console.log(`⚠️  ${imageName}: Sin información de archivo original`);
      return;
    }
    
    const originalPath = path.join(inputDir, imageData.original);
    const originalSize = getFileSize(originalPath);
    const originalSizeFormatted = formatBytes(originalSize);
    
    analysis.totalOriginalSize += originalSize;
    
    console.log(`🖼️  ${imageName}:`);
    console.log(`   Original: ${originalSizeFormatted}`);
    
    let hasOptimization = false;
    let optimizedSize = originalSize;
    
    // Verificar optimizaciones WebP
    if (imageData.formats?.webp) {
      const webpPath = path.join(outputDir, imageData.formats.webp.file);
      const webpSize = getFileSize(webpPath);
      const savings = imageData.formats.webp.savings;
      
      console.log(`   WebP: ${formatBytes(webpSize)} (${savings}% más pequeño)`);
      
      if (webpSize < optimizedSize) {
        optimizedSize = webpSize;
        analysis.webpImages++;
      }
      
      hasOptimization = true;
      
      // Verificar si la compresión es suficiente
      if (savings < ANALYSIS_CONFIG.compressionThreshold * 100) {
        analysis.recommendations.push(
          `Considerar mayor compresión para ${imageName} (solo ${savings}% de ahorro)`
        );
      }
    }
    
    // Verificar tamaños redimensionados
    if (imageData.sizes) {
      Object.entries(imageData.sizes).forEach(([sizeName, sizeData]) => {
        const sizePath = path.join(outputDir, sizeData.file);
        const sizeFileSize = getFileSize(sizePath);
        
        console.log(`   ${sizeName}: ${formatBytes(sizeFileSize)} (${sizeData.width}x${sizeData.height})`);
        
        // Verificar si el tamaño es apropiado
        const maxSize = ANALYSIS_CONFIG.maxFileSize[sizeName];
        if (maxSize && sizeFileSize > maxSize) {
          analysis.oversizedImages.push({
            image: imageName,
            size: sizeName,
            current: sizeFileSize,
            recommended: maxSize
          });
        }
      });
    }
    
    if (hasOptimization) {
      analysis.optimizedImages++;
      analysis.totalOptimizedSize += optimizedSize;
    } else {
      analysis.unoptimizedImages.push(imageName);
    }
    
    console.log('');
  });
  
  // Calcular ahorros totales
  analysis.totalSavings = analysis.totalOriginalSize - analysis.totalOptimizedSize;
  const savingsPercentage = analysis.totalOriginalSize > 0 ? 
    (analysis.totalSavings / analysis.totalOriginalSize) * 100 : 0;
  
  // Generar reporte
  console.log('📈 Resumen de rendimiento:');
  console.log(`   Total de imágenes: ${analysis.totalImages}`);
  console.log(`   Imágenes optimizadas: ${analysis.optimizedImages}`);
  console.log(`   Imágenes WebP: ${analysis.webpImages}`);
  console.log(`   Tamaño original total: ${formatBytes(analysis.totalOriginalSize)}`);
  console.log(`   Tamaño optimizado total: ${formatBytes(analysis.totalOptimizedSize)}`);
  console.log(`   Ahorro total: ${formatBytes(analysis.totalSavings)} (${savingsPercentage.toFixed(1)}%)`);
  
  if (analysis.unoptimizedImages.length > 0) {
    console.log(`\n⚠️  Imágenes sin optimizar (${analysis.unoptimizedImages.length}):`);
    analysis.unoptimizedImages.forEach(img => console.log(`   - ${img}`));
  }
  
  if (analysis.oversizedImages.length > 0) {
    console.log(`\n⚠️  Imágenes demasiado grandes (${analysis.oversizedImages.length}):`);
    analysis.oversizedImages.forEach(item => {
      console.log(`   - ${item.image} (${item.size}): ${formatBytes(item.current)} > ${formatBytes(item.recommended)}`);
    });
  }
  
  if (analysis.recommendations.length > 0) {
    console.log(`\n💡 Recomendaciones (${analysis.recommendations.length}):`);
    analysis.recommendations.forEach(rec => console.log(`   - ${rec}`));
  }
  
  // Calcular puntuación de rendimiento
  const optimizationScore = analysis.totalImages > 0 ? 
    (analysis.optimizedImages / analysis.totalImages) * 100 : 0;
  const webpScore = analysis.totalImages > 0 ? 
    (analysis.webpImages / analysis.totalImages) * 100 : 0;
  const compressionScore = Math.min(savingsPercentage / 50 * 100, 100); // 50% = 100 puntos
  
  const overallScore = (optimizationScore + webpScore + compressionScore) / 3;
  
  console.log(`\n🏆 Puntuación de rendimiento:`);
  console.log(`   Optimización: ${optimizationScore.toFixed(1)}%`);
  console.log(`   WebP: ${webpScore.toFixed(1)}%`);
  console.log(`   Compresión: ${compressionScore.toFixed(1)}%`);
  console.log(`   Puntuación general: ${overallScore.toFixed(1)}%`);
  
  // Guardar análisis
  const analysisPath = path.join(outputDir, 'performance-analysis.json');
  fs.writeFileSync(analysisPath, JSON.stringify(analysis, null, 2));
  
  console.log(`\n📝 Análisis guardado en: ${analysisPath}`);
  
  // Mostrar estadísticas del script de optimización si están disponibles
  if (stats) {
    console.log(`\n📊 Estadísticas de optimización:`);
    console.log(`   WebP generados: ${stats.webp || 0}`);
    console.log(`   Versiones redimensionadas: ${stats.resized || 0}`);
    console.log(`   Errores: ${stats.errors || 0}`);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  analyzeImagePerformance();
}

module.exports = { analyzeImagePerformance };
