import React from 'react'
import Layout from '../components/layout'
import Swiper from '../components/slider'
import styled from '@emotion/styled'
import { colors } from '../globals/colors'
import { Container } from '../components/shared'
import { Flex, Box, Text, Card, Heading } from '@rebass/emotion'
import { FaStar, FaBitcoin, FaDollarSign, FaPaypal, FaStripe, FaPhone } from 'react-icons/fa'
// missing fontfamilies
export default () => {
	return (
		<React.Fragment>
			<Layout>
				<FontFamily>
					<Swiper />
					<Flex mt={[ 4, 5, 5 ]}>
						<Box mx='auto'>
							<Container>
								<Heading
									color={colors.blacks[9]}
									textAlign='center'
									mb='3'
									FontFamily='sans'
									fontSize={[ 3, 4, 5 ]}
								>
									Welcome to our hotel
								</Heading>
								<Line />
								<Text mt='4' lineHeight='copy' letterSpacing='tracked' FontFamily='sans'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit officiis
									obcaecati facere eius ad, in quis suscipit quos autem similique quibusdam cumque
									velit quam ratione porro incidunt. Reprehenderit repellendus dolore, amet id alias
									at et, aspernatur impedit aut totam officiis ipsam voluptates libero placeat.
								</Text>
							</Container>
						</Box>
					</Flex>
					<Flex justifyContent='space-around' flexWrap='wrap' mt={[ 4, 5, 6 ]} ml='2'>
						<Card
							bg={colors.green}
							width={[ 256, 320 ]}
							p='3'
							borderRadius='2'
							mb='3'
							mr='2'
							boxShadow='4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
						>
							<Heading textAlign='center' color={colors.blacks[8]}>
								Accept payments with:
							</Heading>
							<Box>
								<Text color={colors.whites[8]}>
									<Payment px='4' py='3'>
										<FaBitcoin />
										<FaDollarSign />
										<FaPaypal />
										<FaStripe />
									</Payment>
								</Text>
							</Box>
						</Card>
						<Card
							bg={colors.green}
							width={[ 256, 320 ]}
							p='3'
							borderRadius='2'
							mb='3'
							mr='2'
							boxShadow='4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
						>
							<Heading textAlign='center' color={colors.blacks[8]}>
								Free for John Wick
							</Heading>
							<Text color={colors.whites[8]} textAlign='center' mt='3' fontWeight='bold'>
								Continental rules apply if you have the coin
							</Text>
							<Box />
						</Card>
						<Card
							bg={colors.green}
							width={[ 256, 320 ]}
							p='3'
							borderRadius='2'
							mb='3'
							mr='2'
							boxShadow='4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
						>
							<Heading textAlign='center' color={colors.blacks[8]}>
								Since 1965
							</Heading>
							<Text color={colors.whites[8]} textAlign='center' mt='3' fontWeight='bold'>
								Awarded for hospitality, luxury, food and comfort
							</Text>
							<Box />
						</Card>
						<Card
							bg={colors.green}
							width={[ 256, 320 ]}
							p='3'
							borderRadius='2'
							mb='3'
							mr='2'
							boxShadow='4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
						>
							<Text textAlign='center' color={colors.blacks[8]}>
								<Stars color='yellow' px='2'>
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</Stars>
								<Text mb='2' fontWeight='bold'>
									We offer best services
								</Text>
								<Text color={colors.whites[8]}>
									<Flex justifyContent='center' alignItems='center'>
										<FaPhone />
										<Text ml='10px' fontWeight='bold'>
											000-000-000
										</Text>
									</Flex>
								</Text>
							</Text>
						</Card>
					</Flex>
				</FontFamily>
			</Layout>
		</React.Fragment>
	)
}

const Stars = styled(Text)`
svg{
  padding: 0 5px;
}
`
const Payment = styled(Flex)`
svg{
margin-right:1rem;
font-size:2rem;
}
`
const Line = styled.div`
	width: 6rem;
	height: .5rem;
	background-color: ${colors.blacks[8]};
	margin: 0 auto;
	margin-top: 1rem;
`
const FontFamily = styled.div`font-family: 'system-ui', sans-serif !important;`
