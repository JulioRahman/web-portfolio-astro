import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				serif: ['Montagu Slab Variable', ...defaultTheme.fontFamily.serif],
			},
			aspectRatio: {
				'3/2': '3 / 2',
				'4/5': '4 / 5',
			},
			borderRadius: {
				'img': '32px',
			},
		},
	},
} satisfies Config
