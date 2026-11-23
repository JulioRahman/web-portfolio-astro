import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { getLocalizedPathnames } from "./src/scripts/util";

const site = "https://juliorahman.dev";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "never",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
      serialize: (item) => {
        const paths = getLocalizedPathnames(new URL(item.url).pathname);
        if (!paths) return item;

        return {
          ...item,
          links: [
            ...Object.entries(paths).map(([lang, path]) => ({
              lang,
              url: new URL(path, site).href,
            })),
            { lang: "x-default", url: new URL(paths.en, site).href },
          ],
        };
      },
    }),
  ],
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
