import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import unocss from "unocss/astro";
import react from "@astrojs/react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { loadTheme } from "shiki-themes";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [unocss(), mdx(), sitemap(), react()],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [rehypeAutolinkHeadings],
		shikiConfig: {
			theme: loadTheme("./vesper-theme.json"),
		},
	},
});
