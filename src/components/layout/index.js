import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Helmet from 'react-helmet'

import { Box, Flex } from '@rebass/emotion'

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
			<Flex alignItems='space-between' flexDirection='column'>
				<Header />
				<Box pt='5'>{children}</Box>
				<Footer />
			</Flex>
		</React.Fragment>
	)
}
