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
			martian: "Martian Mono",
			mono: "Martian Mono",
		},
		colors: {
			themeText: "#FF00FF",
			vitesseGreen: "#4d9375",
			themeBlack: "#121212",
			themeAccent: "#00FF00",
		},
	},
});
