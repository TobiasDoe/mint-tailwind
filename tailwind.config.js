const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: [
		'./sites/**/*.php',
		'./meta/**/*.php',
		'./resources/js/**/*.vue'
	],
	darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			colors: {
				'primary': '#006579',
				'primary-light': '#E5EFF1',
				'secondary': '#E4156A',
				'secondary-light': '#F7CDDF',
			},
			fontSize: {
				'7xl': '5rem',
			},
			fontFamily: {
				'sans': ['NotoSans', ...defaultTheme.fontFamily.sans],
				// 'serif': ['AbrilFatface', ...defaultTheme.fontFamily.serif],
			}
		},
  },
	plugins: [],
}
