import React from "react"
import { Flex, Box, Text } from "@rebass/emotion"
import styled from "@emotion/styled"
const Movie = props => {
	return (
		<Wrapper>
			<Inner>
				<Container>ja prevodim asd</Container>
			</Inner>
		</Wrapper>
	)
}

export default Movie

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: tomato;
`

const Inner = styled.div`
	width: 500px;
	padding: 1rem 2rem;
	margin: 0 auto;
	background-color: #242424;
	border-radius: 10px;
`

const Container = styled.div`
	margin: 0 auto;
	width: 35ch;
	background-color: #242424;
	color: #eee;
	text-overflow: 35ch;
	/* padding: 1rem 2rem; */
`
