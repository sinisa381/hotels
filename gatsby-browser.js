import React from 'react'
import { RoomProvider } from './src/context'
import { ThemeProvider } from 'emotion-theming'
import theme from './src/globals/theme'
import { colors } from './src/globals/colors'
import { createMuiTheme, fade } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
const muitheme = createMuiTheme({
	status: {
		// My business variables
		danger: colors.red
	},
	pallete: {
		primary: colors.yellow
	},
	slider: {
		trackColor: 'yellow',
		selectionColor: 'green'
	},
	overrides: {
		MuiSlider: {
			thumb: {
				height: 24,
				width: 24,
				backgroundColor: '#fff',
				border: `2px solid ${colors.green}`,
				'&$focused, &:hover': {
					boxShadow: `0px 0px 0px ${8}px ${fade(colors.green, 0.16)}`
				},
				'&$activated': {
					boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade(colors.green, 0.16)}`
				},
				'&$jumped': {
					boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade(colors.green, 0.16)}`
				}
			},

			track: {
				backgroundColor: colors.green,
				height: 8
			},
			trackAfter: {
				backgroundColor: '#d0d7dc'
			},
			focused: {},
			activated: {},
			jumped: {}
		}
	}
})

export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (typeof window.IntersectionObserver === `undefined`) {
		import(`intersection-observer`)
		console.log(`# IntersectionObserver is polyfilled!`)
	}
}
export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>
		<MuiThemeProvider theme={muitheme}>
			<RoomProvider>{element}</RoomProvider>
		</MuiThemeProvider>
	</ThemeProvider>
)
