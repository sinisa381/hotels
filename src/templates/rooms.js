import React, { useState } from 'react'
import Layout from '../components/layout'
import Modal from '@material-ui/core/Modal'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Gallery } from '../components/shared'
import { colors } from '../globals/colors'
import { mq } from '../globals'
import Img from 'gatsby-image'
import { MdFreeBreakfast } from 'react-icons/md'
import { IoIosResize } from 'react-icons/io'
import { FaDog } from 'react-icons/fa'
import { Card, Box, Flex, Text, Heading } from '@rebass/emotion'
import { FaDollarSign } from 'react-icons/fa'

export default props => {
	const [ open, setOpen ] = useState(false)
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

	const handleModalOpen = () => {
		setOpen(true)
	}
	const handleModalClose = () => {
		setOpen(false)
	}

	return (
		<Layout>
			<Flex flexDirection='column' justifyContent='space-between' alignItems='space-between'>
				<MaxHeight>
					<Image fluid={defaultImg} />
				</MaxHeight>
				<Container width='70%' mx='auto' mt='3'>
					<Heading fontFamily='sans' fontSize={[ 4, 5, 6 ]} lineHeight='title'>
						About
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
						<Box my={[ 2, 4, 5 ]}>
							{images.length > 1 && (
								<Heading mb={[ 3, 4 ]} fontFamily='sans' fontSize={[ 3, 3, 4 ]}>
									Aditional photos
								</Heading>
							)}
							{images.length > 1 && (
								<Gallery>
									{rest.map((image, i) => (
										<React.Fragment>
											<Modal open={open} onClose={handleModalClose}>
												<ModalContent>
													<Image fluid={image} key={i} />
												</ModalContent>
											</Modal>
											<ImgContainer onClick={handleModalOpen}>
												<Image fluid={image} key={i} />
											</ImgContainer>
										</React.Fragment>
									))}
								</Gallery>
							)}
						</Box>
						<Info>
							<FormDataDesc mt='auto'>
								<Box mb={[ 3, 2, 1 ]}>
									<Flex alignItems='center'>
										<Heading fontFamily='sans' mr='2' lineHeight='title'>
											Type {type}
										</Heading>
										<Flex alignItems='center' />
									</Flex>
								</Box>
								<Box mb={[ 3, 2, 1 ]}>
									<Flex alignItems='center'>
										<Heading fontFamily='sans' mr='2' lineHeight='title'>
											Capacity: {capacity}
										</Heading>
										<Flex alignItems='center' />
									</Flex>
								</Box>
								<Box mb={[ 3, 2, 1 ]}>
									<Flex alignItems='center'>
										<Heading fontFamily='sans' mr='2' lineHeight='title'>
											Only
										</Heading>
										<Flex alignItems='center'>
											<FaDollarSign size='20px' color={colors.green} />
											<Text lineHeight='solid' fontFamily='sans' color={colors.green}>
												{price}
											</Text>
										</Flex>
									</Flex>
								</Box>
								<Box mb={[ 3, 2, 1 ]}>
									<Heading fontFamily='sans' lineHeight='title'>
										Room size
									</Heading>
									<Flex alignItems='center'>
										<IoIosResize size='25px' color='black' />
										<Text ml='2' lineHeight='solid'>
											{size}
										</Text>
									</Flex>
								</Box>
							</FormDataDesc>
							<SmallCard borderRadius={8} boxShadow='normal'>
								<Heading px='4' py='2' fontFamily='sans' fontSize='4' bg='light-blue' width={1}>
									Extras:
								</Heading>
								<Box px='2'>
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
								<Box>
									<hr />
								</Box>
								<Box pb='3'>
									{pets && (
										<Flex alignItems='center' ml='3' mt='2' px='3' mb='3'>
											<FaDog size='25px' color={colors.blacks[8]} />
											<Text ml='2' fontFamily='sans' lineHeight='copy'>
												pets allowed
											</Text>
										</Flex>
									)}
									{breakfast && (
										<Flex alignItems='center' ml='3' mt='2' px='3'>
											<MdFreeBreakfast size='25px' color={colors.blacks[8]} />
											<Text ml='2' fontFamily='sans' lineHeight='copy'>
												Free breakfast
											</Text>
										</Flex>
									)}
								</Box>
							</SmallCard>
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
	height: 100%;
	width: auto;
	cursor: pointer;
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
const SmallCard = styled(Card)`
max-width:362px;
@media only screen and (max-width:767px){
margin:0 auto ;
}
`

const ModalContent = styled.div`
	width: 30rem;
	height: 20rem;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
`

const FormDataDesc = styled(Box)`
margin:0 auto;
margin-bottom:2rem;
${mq[1]}{
  margin:0;
  margin-top:auto;
  display:block;
}
`
