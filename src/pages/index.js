import React from 'react'
import Layout from '../components/layout'
import '../components/styled.css'
import Swiper from '../components/slider'
import styled from '@emotion/styled'
import { colors } from '../globals/colors'
import { Flex, Box, Text, Card, Heading } from '@rebass/emotion'
import { FaStar, FaBitcoin, FaDollarSign, FaPaypal, FaStripe, FaPhone } from 'react-icons/fa'

export default () => {
	return (
		<React.Fragment>
			<Layout>
				<Swiper />
				<Flex justifyContent='space-around' flexWrap='wrap' mt={[ 4, 5, 6 ]}>
					<Card bg={colors.green} width={[ 256, 320 ]} p='3' borderRadius='2' mb='3' mr='2'>
						<Heading fontFamily='sans' textAlign='center' color='blacks.8'>
							Accept payments with:
						</Heading>
						<Box>
							<Text color='whites.8'>
								<Payment px='4' py='3'>
									<FaBitcoin />
									<FaDollarSign />
									<FaPaypal />
									<FaStripe />
								</Payment>
							</Text>
						</Box>
					</Card>
					<Card bg={colors.green} width={[ 256, 320 ]} p='3' borderRadius='2' mb='3' mr='2'>
						<Heading fontFamily='sans' textAlign='center' color='blacks.8'>
							Accept payments with:
						</Heading>
						<Box>
							<Text color='whites.8'>
								<Payment px='4' py='3'>
									<FaBitcoin />
									<FaDollarSign />
									<FaPaypal />
									<FaStripe />
								</Payment>
							</Text>
						</Box>
					</Card>
					<Card bg={colors.green} width={[ 256, 320 ]} p='3' borderRadius='2' mb='3' mr='2'>
						<Heading fontFamily='sans' textAlign='center' color='blacks.8'>
							Accept payments with:
						</Heading>
						<Box>
							<Text color='whites.8'>
								<Payment px='4' py='3'>
									<FaBitcoin />
									<FaDollarSign />
									<FaPaypal />
									<FaStripe />
								</Payment>
							</Text>
						</Box>
					</Card>
					<Card bg='green' width={[ 256, 320 ]} p='3' borderRadius='2' mb='3'>
						<Heading fontFamily='sans' textAlign='center' color='blacks.8'>
							<Stars color='yellow' px='2'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</Stars>
							<Text mb='2'>We offer best services</Text>
							<Text color='whites.8'>
								<Flex justifyContent='center' alignItems='center'>
									<FaPhone />
									<Text ml='10px'>000-000-000</Text>
								</Flex>
							</Text>
						</Heading>
					</Card>
				</Flex>
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
