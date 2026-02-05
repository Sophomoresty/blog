import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sophomores.github.io/blog',
  base: '/blog',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
  },
});
