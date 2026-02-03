/**
 * Script para crear imagen optimizada para compartir en WhatsApp
 * Genera una imagen 1200x630px con el logo AI4U centrado sobre fondo apropiado
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function createWhatsAppShareImage() {
  console.log('🎨 Creando imagen para WhatsApp Share...\n');

  // Usar logo claro (para fondos oscuros) - mejor contraste
  const inputLogoPath = path.join(rootDir, 'public', 'assets', 'images', 'ai4u-logo-dark.png');
  const inputIsotipoPath = path.join(rootDir, 'public', 'assets', 'images', 'robot-assistant.png');
  const outputPath = path.join(rootDir, 'public', 'assets', 'images', 'whatsapp-share.png');

  try {
    // Verificar si existe el logo
    if (!fs.existsSync(inputLogoPath)) {
      console.error('❌ No se encuentra el archivo:', inputLogoPath);
      return;
    }

    // Dimensiones recomendadas por WhatsApp para Open Graph
    const WIDTH = 1200;
    const HEIGHT = 630;

    // Crear fondo con gradiente oscuro (similar a tu imagen de muestra)
    const background = await sharp({
      create: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4,
        background: { r: 20, g: 20, b: 20, alpha: 1 } // Fondo oscuro #141414
      }
    })
    .png()
    .toBuffer();

    // Leer y redimensionar el logo completo
    const logoBuffer = await sharp(inputLogoPath)
      .resize(800, null, { // Ancho de 800px, altura proporcional
        fit: 'inside',
        withoutEnlargement: true
      })
      .toBuffer();

    const logoMetadata = await sharp(logoBuffer).metadata();

    // Calcular posición centrada
    const logoX = Math.round((WIDTH - logoMetadata.width) / 2);
    const logoY = Math.round((HEIGHT - logoMetadata.height) / 2);

    // Componer imagen final
    await sharp(background)
      .composite([
        {
          input: logoBuffer,
          top: logoY,
          left: logoX
        }
      ])
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);

    console.log('✅ Imagen para WhatsApp creada exitosamente:');
    console.log(`   📁 Ruta: ${outputPath}`);
    console.log(`   📐 Dimensiones: ${WIDTH}x${HEIGHT}px`);
    console.log(`   📦 Tamaño: ${fileSizeKB} KB`);
    console.log(`   🔗 URL: /assets/images/whatsapp-share.png\n`);

    // También crear versión alternativa con el isotipo solo (más minimalista)
    const outputIsotipoPath = path.join(rootDir, 'public', 'assets', 'images', 'whatsapp-share-isotipo.png');
    
    if (fs.existsSync(inputIsotipoPath)) {
      const isotipoBuffer = await sharp(inputIsotipoPath)
        .resize(400, 400, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .toBuffer();

      const isotipoMetadata = await sharp(isotipoBuffer).metadata();
      const isotipoX = Math.round((WIDTH - isotipoMetadata.width) / 2);
      const isotipoY = Math.round((HEIGHT - isotipoMetadata.height) / 2);

      await sharp(background)
        .composite([
          {
            input: isotipoBuffer,
            top: isotipoY,
            left: isotipoX
          }
        ])
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputIsotipoPath);

      const statsIsotipo = fs.statSync(outputIsotipoPath);
      const fileSizeIsotipoKB = (statsIsotipo.size / 1024).toFixed(2);

      console.log('✅ Imagen alternativa (isotipo solo) creada:');
      console.log(`   📁 Ruta: ${outputIsotipoPath}`);
      console.log(`   📦 Tamaño: ${fileSizeIsotipoKB} KB\n`);
    }

    console.log('✨ Proceso completado. Ahora actualiza el index.html para usar:');
    console.log('   og:image → https://www.ai4u.com.co/assets/images/whatsapp-share.png');

  } catch (error) {
    console.error('❌ Error al crear imagen:', error.message);
    process.exit(1);
  }
}

createWhatsAppShareImage();
