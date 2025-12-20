const fs = require('fs');
const path = require('path');

// Configuración para la imagen de compartir en redes sociales
const socialShareConfig = {
  width: 1200,
  height: 630,
  backgroundColor: '#FFFFFF',
  logoPath: '../public/assets/images/ai4u-logo-for-light-background.png',
  outputPath: '../public/assets/images/ai4u-social-share.png',
  title: 'AI4U',
  subtitle: 'Inteligencia Artificial para tu Negocio',
  description: 'Soluciones de IA personalizadas'
};

// Crear el archivo de configuración para la imagen
const configContent = `{
  "width": ${socialShareConfig.width},
  "height": ${socialShareConfig.height},
  "backgroundColor": "${socialShareConfig.backgroundColor}",
  "logoPath": "${socialShareConfig.logoPath}",
  "outputPath": "${socialShareConfig.outputPath}",
  "title": "${socialShareConfig.title}",
  "subtitle": "${socialShareConfig.subtitle}",
  "description": "${socialShareConfig.description}"
}`;

// Crear el directorio si no existe
const outputDir = path.dirname(path.resolve(__dirname, socialShareConfig.outputPath));
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Guardar la configuración
fs.writeFileSync(
  path.resolve(__dirname, '../public/assets/images/social-share-config.json'),
  configContent
);

console.log('✅ Configuración de imagen para redes sociales creada');
console.log('📋 Para generar la imagen, puedes usar herramientas como:');
console.log('   - Canva (1200x630px)');
console.log('   - Figma');
console.log('   - Photoshop');
console.log('   - GIMP');
console.log('');
console.log('📱 Dimensiones recomendadas: 1200x630px');
console.log('🎨 Colores sugeridos: Fondo blanco, logo AI4U, texto negro');
console.log('📝 Texto sugerido: "AI4U - Inteligencia Artificial para tu Negocio"');
