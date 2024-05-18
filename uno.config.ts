import {
	defineConfig,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
	presets: [presetUno(), presetScrollbar()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		fontFamily: {
			mono: "Martian Mono",
		},
		colors: {
			themeBlack: "#121212",
			themeAccent: "#71e795",
		},
	},
});
