import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://juliorahman.dev",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  integrations: [tailwind()],
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "baseLocale"],
      }),
    ],
  },
});
