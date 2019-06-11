import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Box, Flex, Text } from '@rebass/emotion'

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
				<Box>
					<Text
						fontSize={[ 2, 3, 4 ]}
						fontFamily='sans'
						width='80%'
						mx='auto'
						mb='4'
						mt='2'
						lineHeight='copy'
					>
						{description}
					</Text>
				</Box>
				<Box>
					{images.length > 1 &&
						rest.map((image, i) => (
							<ImgContainer>
								<Image fluid={image} key={i} />
							</ImgContainer>
						))}
					<Flex>
						<Box>
							<Text ml='3'>We also have:</Text>
							{extras.map((item, i) => (
								<ul>
									<li>
										<Text key={i}>{item}</Text>
									</li>
								</ul>
							))}
						</Box>
						<ul>
							{pets && <li>pets are allowed</li>}
							{breakfast && <li>breakfast is included</li>}
							<li>room size is: {size}</li>
						</ul>
					</Flex>
				</Box>
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
`
