import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Box, Flex } from '@rebass/emotion'

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

	return (
		<Layout>
			<Flex flexDirection='column' justifyContent='space-between' alignItems='space-between'>
				<Img fluid={defaultImg} width={300} height={300} />
				<Box>item1</Box>
				<Box>item2</Box>
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
