import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import paraglide from '@inlang/paraglide-astro';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
});