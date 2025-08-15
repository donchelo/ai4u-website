module.exports = function override(config, env) {
  // Agrega soporte para archivos .ts y .tsx en node_modules
  config.module.rules[1].oneOf.forEach(rule => {
    if (rule.test && rule.test.toString().includes('tsx')) {
      // Busca la regla que maneja archivos TypeScript
      rule.include = undefined; // Quita la restricción de carpetas
      rule.exclude = /node_modules\/(?!(@remix-run)\/).*/; // Excluye node_modules excepto @remix-run
    }
  });

  // Permite que los archivos JSX tengan prioridad sobre los tsx
  config.resolve.extensions = ['.jsx', '.js', '.tsx', '.ts', '.json', '.mjs'];
  
  // Configurar webpack para manejar archivos .mjs
  config.resolve.extensionAlias = {
    '.mjs': ['.mjs', '.js'],
    '.js': ['.js', '.mjs']
  };

  return config;
}; 