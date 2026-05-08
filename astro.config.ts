import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://juliorahman.dev",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  vite: {
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "baseLocale"],
      }),
    ],
  },
});
