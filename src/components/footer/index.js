import React from 'react'
// import styled from '@emotion/styled'
import { Box, Flex, Text } from '@rebass/emotion'
const Footer = () => {
	const now = new Date()
	return (
		<Box bg='#242424' py='2' color='whites.7' mt='4'>
			<Flex mx='auto' justifyContent='center'>
				<Text textAlign='center' fontSize={[ 1, 2, 2 ]}>
					All content &copy; {now.getFullYear()} sinisa820@gmail.com
				</Text>
			</Flex>
		</Box>
	)
}

export default Footer
