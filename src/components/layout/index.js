import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Helmet from 'react-helmet'

import { Box } from '@rebass/emotion'

export default ({ children }) => {
	return (
		<React.Fragment>
			<Helmet>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css' />
			</Helmet>
			<Header />

			<Box pt='5'>{children}</Box>
			<Footer />
		</React.Fragment>
	)
}
