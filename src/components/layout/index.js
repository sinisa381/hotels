import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Box } from '@rebass/emotion'

export default ({ children }) => {
	return (
		<React.Fragment>
			<Helmet>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Helmet>
			<Global
				styles={css`
					html {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						position: relative;
						width: 100%;
						height: 100%;
					}

					body {
						margin: 0;
						padding: 0;
						width: 100%;
						height: 100%;
					}
					*,
					*:after,
					*:before {
						box-sizing: inherit;
					}
				`}
			/>
			<Header />
			<Box pt='5'>
				<Vh>{children}</Vh>
			</Box>
			<Footer />
		</React.Fragment>
	)
}

const Vh = styled.div`min-height: calc(100vh - 132px);`
