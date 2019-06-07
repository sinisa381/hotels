import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default props => {
	const [ result ] = props.data.room.edges.map(({ node }) => node.slug)
	console.log(result)
	console.log(props)

	return <Layout>hello from {result}</Layout>
}

export const query = graphql`
	query($slug: String!) {
		room: allContentfulHotelrooms(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					slug
				}
			}
		}
	}
`
