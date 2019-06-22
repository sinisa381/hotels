/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()
module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-material-ui`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		}
	]
}
