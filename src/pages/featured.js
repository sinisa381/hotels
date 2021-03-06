import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Gallery, Text, Heading } from "../components/shared"
import Container from "@material-ui/core/Container"
import { Box } from "@rebass/emotion"
import Room from "../components/Room"

export default ({ data }) => {
  const formatData = items => {
    return items.map(({ node }) => {
      const room = {
        ...node,
        images: node.images.map(({ fluid }) => fluid),
      }
      return room
    })
  }
  const rooms = formatData(data.allContentfulHotelrooms.edges)
  return (
    <React.Fragment>
      <Layout>
        <Container>
          <Box my="4">
            <Heading fontFamily="sans" lineHeight="title" fontSize={[4, 5]}>
              Featured rooms
            </Heading>
            <Text
              mt="3"
              lineHeight="copy"
              letterSpacing="tracked"
              FontFamily="sans"
              fontSize={[2, 3]}
            >
              From various customers, and from other experts from instagram who
              stay here for free we suggest these rooms as our featured rooms.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Unde labore veritatis fuga ullam nihil culpa deleniti voluptatum.
              Dolorem odio tenetur culpa nihil cumque deleniti quas.
            </Text>
          </Box>
          <Gallery>
            {rooms.map(room => (
              <Room key={room.name} room={room} />
            ))}
          </Gallery>
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
