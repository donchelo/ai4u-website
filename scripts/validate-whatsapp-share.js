const fs = require('fs');
const path = require('path');

// Función para validar meta tags en el HTML
function validateMetaTags() {
  const htmlPath = path.resolve(__dirname, '../public/index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  console.log('🔍 Validando meta tags para WhatsApp...\n');
  
  // Verificar meta tags Open Graph
  const ogTags = {
    'og:type': /<meta property="og:type" content="([^"]+)"/,
    'og:url': /<meta property="og:url" content="([^"]+)"/,
    'og:title': /<meta property="og:title" content="([^"]+)"/,
    'og:description': /<meta property="og:description" content="([^"]+)"/,
    'og:image': /<meta property="og:image" content="([^"]+)"/,
    'og:image:width': /<meta property="og:image:width" content="([^"]+)"/,
    'og:image:height': /<meta property="og:image:height" content="([^"]+)"/,
    'og:image:alt': /<meta property="og:image:alt" content="([^"]+)"/,
    'og:site_name': /<meta property="og:site_name" content="([^"]+)"/,
    'og:locale': /<meta property="og:locale" content="([^"]+)"/,
  };
  
  let allValid = true;
  
  for (const [tagName, regex] of Object.entries(ogTags)) {
    const match = htmlContent.match(regex);
    if (match) {
      console.log(`✅ ${tagName}: ${match[1]}`);
    } else {
      console.log(`❌ ${tagName}: NO ENCONTRADO`);
      allValid = false;
    }
  }
  
  // Verificar Twitter Cards
  console.log('\n🐦 Validando Twitter Cards...\n');
  
  const twitterTags = {
    'twitter:card': /<meta property="twitter:card" content="([^"]+)"/,
    'twitter:title': /<meta property="twitter:title" content="([^"]+)"/,
    'twitter:description': /<meta property="twitter:description" content="([^"]+)"/,
    'twitter:image': /<meta property="twitter:image" content="([^"]+)"/,
  };
  
  for (const [tagName, regex] of Object.entries(twitterTags)) {
    const match = htmlContent.match(regex);
    if (match) {
      console.log(`✅ ${tagName}: ${match[1]}`);
    } else {
      console.log(`❌ ${tagName}: NO ENCONTRADO`);
      allValid = false;
    }
  }
  
  // Verificar que las imágenes existan
  console.log('\n🖼️ Validando imágenes...\n');
  
  const imageMatches = htmlContent.match(/<meta property="og:image" content="([^"]+)"/);
  if (imageMatches) {
    const imageUrl = imageMatches[1];
    const imagePath = imageUrl.replace('https://ai4u.com.co', '../public');
    const fullImagePath = path.resolve(__dirname, imagePath);
    
    if (fs.existsSync(fullImagePath)) {
      console.log(`✅ Imagen encontrada: ${imagePath}`);
      
      // Obtener información de la imagen
      const stats = fs.statSync(fullImagePath);
      const fileSizeKB = Math.round(stats.size / 1024);
      console.log(`   Tamaño: ${fileSizeKB} KB`);
      
      if (fileSizeKB > 1000) {
        console.log(`⚠️  Advertencia: La imagen es muy grande (${fileSizeKB} KB). Recomendado: < 1MB`);
      }
    } else {
      console.log(`❌ Imagen no encontrada: ${imagePath}`);
      allValid = false;
    }
  }
  
  // Resumen
  console.log('\n📊 RESUMEN:');
  if (allValid) {
    console.log('✅ Todos los meta tags están configurados correctamente');
    console.log('🚀 Tu sitio está listo para compartir en WhatsApp');
  } else {
    console.log('❌ Hay problemas con algunos meta tags');
    console.log('🔧 Revisa los errores arriba y corrígelos');
  }
  
  // Enlaces útiles
  console.log('\n🔗 Enlaces útiles para probar:');
  console.log('• Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
  console.log('• Twitter Card Validator: https://cards-dev.twitter.com/validator');
  console.log('• LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/');
  
  return allValid;
}

// Ejecutar validación
if (require.main === module) {
  validateMetaTags();
}

module.exports = { validateMetaTags };
