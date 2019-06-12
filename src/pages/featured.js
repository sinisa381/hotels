import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { mq } from '../globals'
import { Gallery, Container } from '../components/shared'
import { Card, Box, Flex, Text, Heading } from '@rebass/emotion'
import { RoomContext } from '../context'
import Room from '../components/Room'

export default ({ data }) => {
	let context, formatData
	context = useContext(RoomContext)
	if (context) {
		formatData = context.formatData
	}
	const rooms = formatData(data.allContentfulHotelrooms.edges)
	return (
		<React.Fragment>
			<Layout>
				<Container>
					<Box my='4'>
						<Heading fontFamily='sans' lineHeight='title'>
							Featured rooms
						</Heading>
						<Text mt='3' fontFamily='sans' lineHeight='copy' letterSpacing='copy'>
							From various customers, and from other experts from instagram who stay here for free we
							suggest these rooms as our featured rooms. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Nulla, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Unde labore veritatis fuga ullam nihil culpa deleniti voluptatum. Dolorem odio tenetur culpa
							nihil cumque deleniti quas.
						</Text>
					</Box>
					<Gallery>{rooms.map(room => <Room room={room} />)}</Gallery>
				</Container>
			</Layout>
		</React.Fragment>
	)
}

export const query = graphql`
	query {
		allContentfulHotelrooms(filter: { featured: { eq: true } }) {
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
					featured
					name
					price
					slug
				}
			}
		}
	}
`
