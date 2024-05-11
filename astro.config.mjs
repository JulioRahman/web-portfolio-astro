import { defineConfig } from 'astro/config';
import paraglide from '@inlang/paraglide-astro';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    tailwind(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
});