module.exports = {
	purge: [
		'./sites/**/*.html',
		'./meta/**/*.html',
		'./resources/js/**/*.vue'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'primary': '#A5D816',
				'secondary': '#212C30',
				'danger': '#e3342f'
			},
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem'
			},
			textColor: {
				'primary': '#A5D816',
				'secondary': '#212C30',
				'danger': '#e3342f'
			},
			backgroundColor: {
				'primary': '#A5D816',
				'secondary': '#212C30',
				'danger': '#e3342f'
			},
			minWidth: {
				'0': '0',
				'1/4': '25%',
				'1/3': '33.33%',
				'1/2': '50%',
				'3/4': '75%',
				'full': '100%',
			},
			height: {
				sm: '8px',
				md: '16px',
				lg: '24px',
				xl: '48px',
				'head': '75vh'
			},
			minHeight: {
				'0': '0',
				'1/4': '25%',
				'1/4v': '25vh',
				'1/2': '50%',
				'3/4': '75%',
				'3/4v': '75vh',
				'full': '100%',
				'head': '450px',
				'screen': '100vh',
			},
			maxHeight: {
				'0': '0',
				'1/4': '25%',
				'1/4v': '25vh',
				'1/2': '50%',
				'3/4': '75%',
				'3/4v': '75vh',
				'full': '100%',
				'head': '650px',
				'screen': '100vh',
			},
			backgroundOpacity: {
				'80': '0.8',
				'85': '0.85',
				'90': '0.90',
				'95': '0.95',
			},
			borderColor: {
				'primary': '#A5D816',
				'secondary': '#212C30',
				'danger': '#e3342f',
			}
		},
	},
	variants: {
		extend: {
			display: ['responsive', 'group-hover', 'group-focus']
		},
	},
	plugins: [],
}
