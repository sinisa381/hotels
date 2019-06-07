import React from 'react'
import { RoomProvider } from './src/context'
import { ThemeProvider } from 'emotion-theming'
import theme from './src/globals/theme'
export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>
		<RoomProvider>{element}</RoomProvider>
	</ThemeProvider>
)
