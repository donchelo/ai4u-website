const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = 'public/assets/images';
const outputDir = 'public/assets/images/optimized';

// Configuración de optimización
const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 85,
    method: 6
  },
  avif: {
    quality: 80
  },
  sizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 300 },
    medium: { width: 600, height: 600 },
    large: { width: 1200, height: 1200 }
  }
};

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Verificar si cwebp está disponible
function checkWebPSupport() {
  try {
    execSync('cwebp -version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Verificar si ImageMagick está disponible
function checkImageMagickSupport() {
  try {
    execSync('magick -version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Convertir imagen a WebP usando cwebp
function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    execSync(`cwebp -q ${quality} -m 6 "${inputPath}" -o "${outputPath}"`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.warn(`⚠️  Error convirtiendo a WebP: ${inputPath}`, error.message);
    return false;
  }
}

// Redimensionar imagen usando ImageMagick
function resizeImage(inputPath, outputPath, width, height) {
  try {
    execSync(`magick "${inputPath}" -resize ${width}x${height}^ -gravity center -extent ${width}x${height} "${outputPath}"`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.warn(`⚠️  Error redimensionando: ${inputPath}`, error.message);
    return false;
  }
}

// Obtener información de la imagen
function getImageInfo(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    return {
      size: stats.size,
      path: imagePath
    };
  } catch {
    return null;
  }
}

async function optimizeImages() {
  try {
    console.log('🖼️  Iniciando optimización de imágenes...');
    
    const hasWebPSupport = checkWebPSupport();
    const hasImageMagickSupport = checkImageMagickSupport();
    
    console.log(`📊 Herramientas disponibles:`);
    console.log(`   WebP: ${hasWebPSupport ? '✅' : '❌'}`);
    console.log(`   ImageMagick: ${hasImageMagickSupport ? '✅' : '❌'}`);
    
    const imageFiles = fs.readdirSync(inputDir).filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`📁 Encontradas ${imageFiles.length} imágenes en ${inputDir}`);
    
    const mapping = {};
    const optimizationStats = {
      total: imageFiles.length,
      webp: 0,
      resized: 0,
      errors: 0
    };
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const nameWithoutExt = path.basename(file, path.extname(file));
      
      console.log(`\n🔄 Procesando: ${file}`);
      
      // Información original
      const originalInfo = getImageInfo(inputPath);
      if (!originalInfo) {
        console.warn(`⚠️  No se pudo obtener información de: ${file}`);
        optimizationStats.errors++;
        continue;
      }
      
      const fileMapping = {
        original: file,
        sizes: {},
        formats: {}
      };
      
      // Convertir a WebP si está disponible
      if (hasWebPSupport) {
        const webpPath = path.join(outputDir, `${nameWithoutExt}.webp`);
        if (convertToWebP(inputPath, webpPath, OPTIMIZATION_CONFIG.webp.quality)) {
          const webpInfo = getImageInfo(webpPath);
          if (webpInfo) {
            fileMapping.formats.webp = {
              file: `${nameWithoutExt}.webp`,
              size: webpInfo.size,
              savings: Math.round(((originalInfo.size - webpInfo.size) / originalInfo.size) * 100)
            };
            optimizationStats.webp++;
            console.log(`   ✅ WebP: ${fileMapping.formats.webp.savings}% más pequeño`);
          }
        }
      }
      
      // Crear versiones redimensionadas si ImageMagick está disponible
      if (hasImageMagickSupport) {
        for (const [sizeName, dimensions] of Object.entries(OPTIMIZATION_CONFIG.sizes)) {
          const resizedPath = path.join(outputDir, `${nameWithoutExt}-${sizeName}.jpg`);
          if (resizeImage(inputPath, resizedPath, dimensions.width, dimensions.height)) {
            const resizedInfo = getImageInfo(resizedPath);
            if (resizedInfo) {
              fileMapping.sizes[sizeName] = {
                file: `${nameWithoutExt}-${sizeName}.jpg`,
                width: dimensions.width,
                height: dimensions.height,
                size: resizedInfo.size
              };
              optimizationStats.resized++;
            }
          }
        }
      }
      
      mapping[nameWithoutExt] = fileMapping;
    }
    
    // Guardar mapeo completo
    fs.writeFileSync(
      path.join(outputDir, 'image-mapping.json'), 
      JSON.stringify(mapping, null, 2)
    );
    
    // Guardar estadísticas
    fs.writeFileSync(
      path.join(outputDir, 'optimization-stats.json'), 
      JSON.stringify(optimizationStats, null, 2)
    );
    
    console.log('\n📊 Resumen de optimización:');
    console.log(`   Total de imágenes: ${optimizationStats.total}`);
    console.log(`   WebP generados: ${optimizationStats.webp}`);
    console.log(`   Versiones redimensionadas: ${optimizationStats.resized}`);
    console.log(`   Errores: ${optimizationStats.errors}`);
    
    if (!hasWebPSupport) {
      console.log('\n💡 Para conversión a WebP, instalar Google WebP tools:');
      console.log('   Windows: https://developers.google.com/speed/webp/download');
      console.log('   macOS: brew install webp');
      console.log('   Linux: sudo apt-get install webp');
    }
    
    if (!hasImageMagickSupport) {
      console.log('\n💡 Para redimensionamiento, instalar ImageMagick:');
      console.log('   Windows: https://imagemagick.org/script/download.php');
      console.log('   macOS: brew install imagemagick');
      console.log('   Linux: sudo apt-get install imagemagick');
    }
    
    console.log('\n✅ Optimización completada');
    
  } catch (error) {
    console.error('❌ Error durante la optimización:', error);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages }; 
optimizeImages(); 