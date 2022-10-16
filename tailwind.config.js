/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				'2xl': '1536px',
				xl: '1280px',
				lg: '1024px',
				md: '768px',
				sm: '640px',
				vsm: '360px',
			},
		},
	},
	plugins: [],
};
