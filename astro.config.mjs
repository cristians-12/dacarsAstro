// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: 'https://cristians-12.github.io/dacarsAstro',
    // base: 'dacarsAstro', // Ruta base correcta
});