import { defineConfig } from 'astro/config';

// Set `site` to the real domain once deployed (Vercel or Netlify).
export default defineConfig({
  site: 'https://sonupatidar.example',
  output: 'static',
  trailingSlash: 'ignore',
});
