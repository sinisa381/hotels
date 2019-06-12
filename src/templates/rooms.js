import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../globals/colors'
import { mq } from '../globals'
import Img from 'gatsby-image'
import { MdFreeBreakfast } from 'react-icons/md'
import { IoIosResize } from 'react-icons/io'
import { FaDog } from 'react-icons/fa'
import { Card, Box, Flex, Text, Heading } from '@rebass/emotion'

export default props => {
	let result, room, capacity, price, breakfast, pets, type, name, size, images, description, extras, defaultImg, rest
	if (props.data) {
		room = props.data.room.edges[0].node
		capacity = room.capacity
		price = room.price
		breakfast = room.breakfast
		pets = room.pets
		type = room.type
		name = room.name
		size = room.size
		images = room.images.map(image => image.fluid)
		description = room.description.description
		extras = room.extras.map(item => item.content)
		;[ defaultImg, ...rest ] = images
		;[ result ] = props.data.room.edges.map(({ node }) => node.slug)
	}
	console.log(rest)

	return (
		<Layout>
			<Flex flexDirection='column' justifyContent='space-between' alignItems='space-between'>
				<MaxHeight>
					<Image fluid={defaultImg} />
				</MaxHeight>
				<Container width='70%' mx='auto' mt='3'>
					<Heading fontFamily='sans' fontSize={[ 4, 5, 6 ]} lineHeight='title'>
						About us
					</Heading>
					<Text
						fontSize={[ 2, 3, 4 ]}
						fontFamily='sans'
						mb='4'
						mt='3'
						letterSpacing='tracked'
						lineHeight='copy'
					>
						{description}
					</Text>
					<Box>
						<Box my={[ 4, 5 ]}>
							{images.length > 1 && (
								<Heading mb={[ 3, 4 ]} fontFamily='sans' fontSize={[ 3, 3, 4 ]}>
									Aditional photoes
								</Heading>
							)}
							<Flex flexWrap='wrap'>
								{images.length > 1 &&
									rest.map((image, i) => (
										<ImgContainer>
											<Image fluid={image} key={i} />
										</ImgContainer>
									))}
							</Flex>
						</Box>
						<Info>
							<Circle bg='light-red' mt='auto'>
								<Flex alignItems='center' flexDirection='column'>
									<Text fontFamily='sans' lineHeight='copy' color='blacks.6' fontWeight='bold'>
										room size:
									</Text>
									<Flex alignItems='center'>
										<IoIosResize size='25px' color={colors.whites[8]} />
										<Text fontFamily='sans' ml='2' color='whites.8'>
											{size}
										</Text>
									</Flex>
								</Flex>
							</Circle>
							<Card bg='light-blue' px='5' py='3' borderRadius={8} boxShadow='normal'>
								<Box>
									<Heading fontFamily='sans' fontSize={[ 3, 4, 4 ]}>
										Extras:
									</Heading>
									{extras.map((item, i) => (
										<ul>
											<li>
												<Text fontFamily='sans' key={i}>
													{item}
												</Text>
											</li>
										</ul>
									))}
								</Box>
								{pets && (
									<Flex alignItems='center' ml='3'>
										<FaDog size='25px' color={colors.blacks[8]} />
										<Text ml='2' fontFamily='sans' lineHeight='copy'>
											pets allowed
										</Text>
									</Flex>
								)}
								{breakfast && (
									<Flex alignItems='center' ml='3' mt='3'>
										<MdFreeBreakfast size='25px' color={colors.blacks[8]} />
										<Text ml='2' fontFamily='sans' lineHeight='copy'>
											Free breakfast
										</Text>
									</Flex>
								)}
							</Card>
						</Info>
					</Box>
				</Container>
			</Flex>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		room: allContentfulHotelrooms(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					id
					images {
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
							src
							srcSet
						}
					}
					name
					pets
					price
					size
					slug
					capacity
					id
					type
					featured
					extras {
						content
					}
					description {
						description
					}
					breakfast
				}
			}
		}
	}
`
const MaxHeight = styled.div`height: 80vh;`
const Image = styled(Img)`
width:100%;
height:100%;
`
const ImgContainer = styled.div`
	height: 10rem;
	width: 18rem;
	margin-right: .4rem;
`
const Circle = styled(Card)`
border-radius:100%;
width:9rem;
height:9rem;
display:flex;
justify-content:center;
align-items:center;
box-shadow:0 0 16px rgba(0, 0, 0, .25);
border:2px solid ${colors.red};
`
const Container = styled(Box)`
width:90%;
${mq[1]}{
width:80%;
}
${mq[2]}{
width:70%;
}
`
const Info = styled.div`
	display: block;
	${mq[1]} {
		display: flex;
		justify-content: space-between;
	}
`
