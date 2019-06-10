const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve(`src/templates/rooms.js`)
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(
				`
          {
            allContentfulHotelrooms{
              edges{
                node{
                  slug
                }
              }
            }
          }
        `
			).then(result => {
				if (result.errors) {
					reject(result.errors)
				}

				result.data.allContentfulHotelrooms.edges.forEach(({ node }) => {
					const path = `rooms/${node.slug}/`
					createPage({
						path,
						component: blogPostTemplate,
						// In your blog post template's graphql query, you can use path
						// as a GraphQL variable to query for data from the markdown file.
						context: {
							slug: node.slug
						}
					})
				})
				return
			})
		)
	})
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
// 	const { createNodeField } = actions
// 	if (node.internal.type === 'MarkdownRemark') {
// 		const slug = createFilePath({ node, getNode, basePath: 'posts' })
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		})
// 	}
// }
