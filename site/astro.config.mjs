// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tidewaystyle.com',
	// Keep author whitespace so spaces around inline links/code in prose survive.
	compressHTML: false,
	devToolbar: { enabled: false },
});
