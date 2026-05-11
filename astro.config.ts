import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = "https://juliorahman.dev";

const sitemapAlternates: Record<string, { lang: string; url: string }[]> = {
  "/": [
    { lang: "en", url: `${site}/` },
    { lang: "id", url: `${site}/id` },
    { lang: "x-default", url: `${site}/` },
  ],
  "/id": [
    { lang: "en", url: `${site}/` },
    { lang: "id", url: `${site}/id` },
    { lang: "x-default", url: `${site}/` },
  ],
  "/projects": [
    { lang: "en", url: `${site}/projects` },
    { lang: "id", url: `${site}/id/proyek` },
    { lang: "x-default", url: `${site}/projects` },
  ],
  "/id/proyek": [
    { lang: "en", url: `${site}/projects` },
    { lang: "id", url: `${site}/id/proyek` },
    { lang: "x-default", url: `${site}/projects` },
  ],
};

const excludedSitemapPathnames = new Set(["/about", "/id/tentang"]);

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
      filter: (page) =>
        !excludedSitemapPathnames.has(new URL(page).pathname),
      namespaces: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
      serialize: (item) => ({
        ...item,
        links: sitemapAlternates[new URL(item.url).pathname],
      }),
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
