const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Iniciando Smoke Test E2E con Puppeteer...');
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Capturar errores de consola
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
    console.error('❌ Error de página detectado:', error.message);
  });

  try {
    console.log('🌐 Navegando a http://localhost:3002...');
    await page.goto('http://localhost:3002', { waitUntil: 'networkidle0', timeout: 30000 });

    const title = await page.title();
    console.log('✅ Título de la página:', title);

    // Verificar que el root no esté vacío (indicador de página en blanco)
    const content = await page.$eval('#root', el => el.innerHTML);
    if (content.trim() === '') {
      throw new Error('La aplicación cargó una página en blanco (#root está vacío)');
    }
    console.log('✅ El contenido de #root no está vacío.');

    // Probar navegación básica si existe el menú
    const servicesLink = await page.$('a[href="/services"]');
    if (servicesLink) {
      console.log('🖱️  Probando navegación a /services...');
      await servicesLink.click();
      await page.waitForTimeout(1000);
      console.log('✅ Navegación a /services exitosa.');
    }

    if (errors.length > 0) {
      console.error(`\n❌ Se encontraron ${errors.length} errores de JavaScript durante la prueba.`);
      process.exit(1);
    } else {
      console.log('\n✨ Prueba E2E finalizada con éxito. No se detectaron errores críticos.');
    }

  } catch (error) {
    console.error('❌ Falló la prueba E2E:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
