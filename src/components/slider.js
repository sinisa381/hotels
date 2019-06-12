import React from 'react'
import { mq } from '../globals'
import { colors } from '../globals/colors'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default props => {
	const data = useStaticQuery(graphql`
		{
			allContentfulHotelrooms {
				edges {
					node {
						images {
							fluid(maxHeight: 1000) {
								src
							}
						}
					}
				}
			}
		}
	`)
	let tempItems
	tempItems = data.allContentfulHotelrooms.edges.map(({ node }) => {
		return node
	})
	const items = tempItems.map(({ images }) => images[0])

	return (
		<React.Fragment>
			<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={5}>
				<Main>
					<Wrapper>
						{items.map((item, i) => (
							<Item key={i}>
								<Image fluid={item.fluid} />
							</Item>
						))}
					</Wrapper>
					<Back>
						<FaAngleLeft size='4rem' />
					</Back>
					<Next>
						<FaAngleRight size='4rem' />
					</Next>
					<Dot />
				</Main>
			</CarouselProvider>
		</React.Fragment>
	)
}
const Item = styled(Slide)`
position:relative;
height:auto;
width:100%;
`
const Image = styled(Img)`
width:100%;
height:100vh;
`
const Main = styled.div`
	margin-top: -5px;
	position: relative;
	z-index: 1;
`
const buttonstyle = css`
	display: none;
	${mq[1]} {
		display: block;
	}
	background-color: transparent;
	color: ${colors.whites[8]};
	position: absolute;
	z-index: 2;
	top: 45%;
	transform: translateY(-50%);
	outline: none;
	border: none;
	&:hover {
		color: ${colors.whites[11]};
	}
`
const Back = styled(ButtonBack)`
left:0;
${buttonstyle}
`
const Next = styled(ButtonNext)`
${buttonstyle}
right:0;
`
const Wrapper = styled(Slider)`
height: 70vh;
${mq[1]}{
  height:80vh;
}
;
`
const Dot = styled(DotGroup)`
display:flex;
justify-content:center;
margin:0 auto;
margin-top:1rem;
button {
  background-color:${colors['light-silver']};
  padding:5px;
  border-radius:100px;
  border:none;
  margin:10px;
  outline:none;
}

.carousel__dot--selected
 {
  background-color:${colors.blue};
}
`
