#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patrones de texto hardcodeado en español que deberían estar traducidos
const HARDCODED_PATTERNS = [
  // Preguntas comunes
  /¿[^}]*\?/g,
  // Textos comunes que deberían estar traducidos
  /(?:title|label|text|alt|aria-label)\s*=\s*["']([^"']*[áéíóúñÁÉÍÓÚÑ][^"']*)["']/g,
  // Textos específicos que encontramos
  /"¿Necesitas ayuda\?"/g,
  /"Agenda una consulta"/g,
  /"También podrías estar interesado"/g,
  /"Continúa explorando"/g,
  /"Explora más sobre nuestro trabajo"/g,
  /"Cambiar a"/g,
  /"Diagnóstico gratis"/g,
  /"Agendar consulta"/g,
  // Textos en comentarios que podrían ser hardcodeados
  /\/\*\s*[^}]*[áéíóúñÁÉÍÓÚÑ][^}]*\*\//g,
  // Comentarios de una línea
  /\/\/\s*[^}]*[áéíóúñÁÉÍÓÚÑ][^}]*$/gm
];

// Excluir archivos que no necesitan traducción
const EXCLUDE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/*.test.tsx',
  '**/*.test.ts',
  '**/translations.ts',
  '**/INTERNATIONALIZATION.md',
  '**/package.json',
  '**/package-lock.json',
  '**/tsconfig.json',
  '**/README.md'
];

// Archivos específicos que pueden tener texto hardcodeado (componentes de demo)
const DEMO_FILES = [
  'src/pages/ColorSystemDemo.tsx',
  'src/pages/ThemeDemo.tsx',
  'src/pages/Fase3Demo.tsx',
  'src/pages/ComponentLibrary.tsx',
  'src/pages/MetricsDemo.tsx'
];

function findHardcodedText(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  HARDCODED_PATTERNS.forEach((pattern, index) => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const line = content.substring(0, match.index).split('\n').length;
      const lineContent = content.split('\n')[line - 1];
      
      issues.push({
        line,
        content: lineContent.trim(),
        match: match[0],
        pattern: index
      });
    }
  });
  
  return issues;
}

function validateTranslations() {
  console.log('🔍 Validando sistema de traducciones...\n');
  
  // Buscar archivos TypeScript/TSX
  const files = glob.sync('src/**/*.{ts,tsx}', {
    ignore: EXCLUDE_PATTERNS
  });
  
  let totalIssues = 0;
  let filesWithIssues = 0;
  
  files.forEach(file => {
    const issues = findHardcodedText(file);
    
    if (issues.length > 0) {
      const isDemoFile = DEMO_FILES.includes(file);
      const severity = isDemoFile ? '⚠️' : '❌';
      
      console.log(`${severity} ${file}`);
      console.log(`   ${issues.length} posibles textos hardcodeados encontrados:`);
      
      issues.forEach(issue => {
        console.log(`   Línea ${issue.line}: ${issue.content}`);
      });
      
      console.log('');
      
      totalIssues += issues.length;
      filesWithIssues++;
    }
  });
  
  // Resumen
  console.log('📊 Resumen de validación:');
  console.log(`   Archivos revisados: ${files.length}`);
  console.log(`   Archivos con problemas: ${filesWithIssues}`);
  console.log(`   Total de problemas: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log('\n✅ ¡Excelente! No se encontraron textos hardcodeados.');
  } else {
    console.log('\n⚠️  Se encontraron textos que podrían necesitar traducción.');
    console.log('   Los archivos de demo pueden tener texto hardcodeado intencionalmente.');
  }
  
  return totalIssues;
}

// Ejecutar validación
if (require.main === module) {
  const issues = validateTranslations();
  process.exit(issues > 0 ? 1 : 0);
}

module.exports = { validateTranslations };
