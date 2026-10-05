import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan alamat website yang sebenarnya (dipakai untuk sitemap, canonical, dan gambar OG).
const SITE_URL = 'https://duniakreasidigital.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
