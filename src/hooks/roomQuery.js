import { useStaticQuery, graphql } from 'gatsby'

export default () => {
	const { data } = useStaticQuery(graphql`
		{
			data: allContentfulHotelrooms {
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
	`)
	// const tempData = data.edges.map(({ node }) => {
	// 	return {
	// 		rooms: node,
	// 		images: node.images.map(({ fluid }) => fluid.src),
	// 		id: node.id
	// 	}
	// })
	return data.edges
}
