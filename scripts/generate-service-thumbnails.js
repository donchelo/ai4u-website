const fs = require('fs');
const path = require('path');

// Leer el archivo de servicios
const servicesPath = path.join(__dirname, '../src/data/services.ts');
const servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Extraer los IDs de servicios usando regex
const serviceIdRegex = /id:\s*['"`]([^'"`]+)['"`]/g;
const serviceIds = [];
let match;

while ((match = serviceIdRegex.exec(servicesContent)) !== null) {
  serviceIds.push(match[1]);
}

// Verificar qué servicios ya tienen thumbnails
const thumbnailsDir = path.join(__dirname, '../public/assets/images/services-thumbnails');
const existingThumbnails = fs.readdirSync(thumbnailsDir)
  .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
  .map(file => file.replace(/\.(jpg|png)$/, ''));

console.log('📊 Análisis de Thumbnails de Servicios');
console.log('=====================================');
console.log(`Total de servicios: ${serviceIds.length}`);
console.log(`Thumbnails existentes: ${existingThumbnails.length}`);
console.log('');

// Servicios que necesitan thumbnails
const missingThumbnails = serviceIds.filter(id => !existingThumbnails.includes(id));

console.log('✅ Servicios con thumbnails:');
existingThumbnails.forEach(id => {
  console.log(`  - ${id}`);
});

console.log('');
console.log('❌ Servicios que necesitan thumbnails:');
missingThumbnails.forEach(id => {
  console.log(`  - ${id}`);
});

console.log('');
console.log('📝 Instrucciones para agregar thumbnails:');
console.log('1. Crea imágenes de 240x240 píxeles para cada servicio');
console.log('2. Guarda como JPG en: public/assets/images/services-thumbnails/');
console.log('3. Usa el nombre del service-id como nombre de archivo');
console.log('4. Actualiza el campo thumbnail en src/data/services.ts');

// Generar archivo de configuración para facilitar el proceso
const configPath = path.join(__dirname, '../public/assets/images/services-thumbnails/thumbnails-needed.json');
const config = {
  totalServices: serviceIds.length,
  existingThumbnails: existingThumbnails,
  missingThumbnails: missingThumbnails,
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log('');
console.log(`📄 Configuración guardada en: ${configPath}`);
