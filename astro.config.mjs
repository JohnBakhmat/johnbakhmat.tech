import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import unocss from "unocss/astro";
import react from "@astrojs/react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import vercel from "@astrojs/vercel/serverless";
import { loadTheme } from "shiki-themes";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://johnbakhmat-dev.vercel.app",
  output: "server",
  adapter: vercel({
    webAnaytics: {
      enabled: true
    }
  }),
  integrations: [unocss(), mdx(), sitemap(), react(), prefetch()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    shikiConfig: {
      theme: loadTheme("./vesper-theme.json")
    }
  }
});