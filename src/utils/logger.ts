// Logger utility que respeta NODE_ENV para performance en producción
class Logger {
  private isDev = process.env.NODE_ENV === 'development';

  log = (...args: any[]) => {
    if (this.isDev) {
      console.log(...args);
    }
  };

  error = (...args: any[]) => {
    if (this.isDev) {
      console.error(...args);
    }
  };

  warn = (...args: any[]) => {
    if (this.isDev) {
      console.warn(...args);
    }
  };

  info = (...args: any[]) => {
    if (this.isDev) {
      console.info(...args);
    }
  };

  debug = (...args: any[]) => {
    if (this.isDev) {
      console.debug(...args);
    }
  };
}

export const logger = new Logger();
export default logger;