import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { loadTheme } from "shiki-themes";
import unocss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://johnbakhmat.tech",
	output: "server",
	adapter: node({ mode: "standalone" }),
	integrations: [unocss(), mdx(), sitemap(), react(), prefetch()],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [rehypeAutolinkHeadings],
		shikiConfig: {
			theme: loadTheme("./vesper-theme.json"),
		},
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	experimental: {
		clientPrerender: true,
	},
});
