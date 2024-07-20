import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import paraglide from '@inlang/paraglide-astro';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://juliorahman.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  integrations: [
    alpinejs({ entrypoint: '/src/entrypoint' }),
    tailwind(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
});