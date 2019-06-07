const theme = {
	colors: {
		black: '#000',
		'near-black': '#111',
		'dark-gray': '#333',
		'mid-gray': '#555',
		gray: ' #777',
		silver: '#999',
		'light-silver': '#aaa',
		'moon-gray': '#ccc',
		'light-gray': '#eee',
		'near-white': '#f4f4f4',
		white: '#fff',
		transparent: 'transparent',
		blacks: [
			'rgba(0,0,0,.0125)',
			'rgba(0,0,0,.025)',
			'rgba(0,0,0,.05)',
			'rgba(0,0,0,.1)',
			'rgba(0,0,0,.2)',
			'rgba(0,0,0,.3)',
			'rgba(0,0,0,.4)',
			'rgba(0,0,0,.5)',
			'rgba(0,0,0,.6)',
			'rgba(0,0,0,.7)',
			'rgba(0,0,0,.8)',
			'rgba(0,0,0,.9)'
		],
		whites: [
			'rgba(255,255,255,.0125)',
			'rgba(255,255,255,.025)',
			'rgba(255,255,255,.05)',
			'rgba(255,255,255,.1)',
			'rgba(255,255,255,.2)',
			'rgba(255,255,255,.3)',
			'rgba(255,255,255,.4)',
			'rgba(255,255,255,.5)',
			'rgba(255,255,255,.6)',
			'rgba(255,255,255,.7)',
			'rgba(255,255,255,.8)',
			'rgba(255,255,255,.9)'
		],
		'dark-red': '#e7040f',
		red: '#ff4136',
		'light-red': '#ff725c',
		orange: '#ff6300',
		gold: '#ffb700',
		yellow: '#ffd700',
		'light-yellow': '#fbf1a9',
		purple: '#5e2ca5',
		'light-purple': '#a463f2',
		'dark-pink': '#d5008f',
		'hot-pink': ' #ff41b4',
		pink: '#ff80cc',
		'light-pink': '#ffa3d7',
		'dark-green': '#137752',
		green: '#19a974',
		'light-green': '#9eebcf',
		navy: '#001b44',
		'dark-blue': '#00449e',
		blue: '#357edd',
		'light-blue': '#96ccff',
		'lightest-blue': '#cdecff',
		'washed-blue': '#f6fffe',
		'washed-green': '#e8fdf5',
		'washed-yellow': '#fffceb',
		'washed-red': '#ffdfdf'
	},
	breakpoints: [ '40em', '52em', '64em' ],
	fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64 ],
	fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
	space: [ 0, 4, 8, 16, 32, 64, 128, 256 ],
	lineHeights: {
		solid: 1,
		title: 1.25,
		copy: 1.5
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em'
	},

	fonts: {
		sans: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
		mont: 'Montserrat, sans-serif',
		roboto: 'Roboto, sans-serif',
		opensans: 'Open Sans Condensed, sans-serif'
	},
	borders: [ 0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid' ],
	radii: [ 0, 2, 4, 16, 9999, '100%' ],
	width: [ 16, 32, 64, 128, 256 ],
	heights: [ 16, 32, 64, 128, 256 ],
	maxWidths: [ 16, 32, 64, 128, 256, 512, 768, 1024, 1536 ],
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)',
		normal: '0 0 16px rgba(0, 0, 0, .25)',
		one: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
		two: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
		three: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
		four: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
		five: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
	},
	buttons: {
		primary: {
			color: '#fff',
			backgroundColor: '#07c'
		},
		outline: {
			color: '#07c',
			backgroundColor: 'transparent',
			boxShadow: 'inset 0 0 0 2px'
		}
	}
}

export default theme
