import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Montagu Slab', ...defaultTheme.fontFamily.serif],
			},
			aspectRatio: {
				'3/2': '3 / 2',
				'4/5': '4 / 5',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
