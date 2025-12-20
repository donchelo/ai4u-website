/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAKE_WEBHOOK_URL?: string;
  readonly VITE_MAKE_API_TOKEN?: string;
  readonly NODE_ENV: 'development' | 'production' | 'test';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

