import React from 'react'
import { RoomProvider } from './src/context'
import { ThemeProvider } from 'emotion-theming'
import theme from './src/globals/theme'
export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (typeof window.IntersectionObserver === `undefined`) {
		import(`intersection-observer`)
		console.log(`# IntersectionObserver is polyfilled!`)
	}
}
export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>
		<RoomProvider>{element}</RoomProvider>
	</ThemeProvider>
)
