/** @type {import('tailwindcss').Config} */
export default {
	content: [`./src/${import.meta.env.TARGET}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`],
	theme: {
		extend: {},
	},
	plugins: [],
}
