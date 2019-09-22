import React, { Fragment } from "react"
import image1 from "../components/img/redsss.jpg"
import { Heading as Head, Text as Para, Box, Flex } from "@rebass/emotion"
import styled from "@emotion/styled"
import { colors } from "../globals/colors"
import { Global, css } from "@emotion/core"

const Checked = () => <span style={{ marginRight: ".5rem" }}>&#10004;</span>

// const skillsfront = [
// 	"Javascript",
// 	"React",
// 	"Redux",
// 	"Graphql",
// 	"Github",
// 	"HTML5",
// ]
// const skillsback = [
// 	"CSS3",
// 	"SASS",
// 	"Material-UI",
// 	"Rebass",
// 	"Styled Components",
// 	"Firebase",
// 	"Node.js",
// 	"MongoDB",
// ]
// const courses = [
// 	"The complete Vue JS by Coding Revolution",
// 	"The React practice course, learn by building projects by Coding Revolution",
// 	"React The Complete Guide (including incl Hooks, React Router, Redux) by Academind",
// ]

const WebIng = () => (
	<Fragment>
		Working knowledge of English language Strong analytical skills and attention
		to detail Desired, but not required University degree in computer science
		Angular, ReactJS and React Native skills are highly welcome Familiar with 1+
		years of work experience with any modern JS framework (Vue/React/Angular)
		Working knowledge of ES6 You are a
	</Fragment>
)

const Seavus = () => (
	<React.Fragment>
		<SubHeading color={colors.blue}>Qualification</SubHeading>

		<Text>
			<Checked />
			Solid engineering experience with OOP
		</Text>

		<Text>
			<Checked />
			Advanced knowledge in JavaScript (ES6)
		</Text>
		<Text>
			<Checked />
			Functional coding principles (in JavaScript)
		</Text>
		<Text>
			<Checked />
			Advanced knowledge in RESTful API’s
		</Text>
		<Text>
			<Checked />
			Excellent knowledge of HTML, CSS
		</Text>
		<Text>
			<Checked />
			Good understanding of UI/UX design principles and best practices
			Experience (SASS, Styled-Components)
		</Text>
		<Text>
			<Checked />
			Understanding of common design/architectural patterns and engineering
			practices
		</Text>

		<Text>
			<Checked />
			Strong experience and competences within React.js
		</Text>
		<Text>
			<Checked />
			Developing single page applications using React.js
		</Text>
		<Text>
			<Checked />
			Good engineering and clean code practices
		</Text>
		<Text>
			<Checked />
			Flux application architecture (Redux)
		</Text>
		<Text>
			<Checked />
			Experience with version control system (Git)
		</Text>
		<Text>
			<Checked />
			Team player with strong work ethic
		</Text>
	</React.Fragment>
)

const AboutMe = () => (
	<Fragment>
		<Header>
			<Heading as="h1" py="3">
				Curriculum Vitae
			</Heading>
		</Header>
		<Flex justifyContent="space-between">
			<Box>
				<SubHeading as="h2" fontSize={"2rem"}>
					Sinisa Colic
				</SubHeading>
				<SubHeading fontSize={"1.5rem"}>16.11.1989.</SubHeading>
				<Text>Jurija Gagarina 164b/75, Belgrade, Serbia</Text>
				<Text color={colors.blacks[6]}>+381691955883</Text>
				<Text color={colors.blacks[6]}>programsrbica@gmail.com</Text>
				<Text color={colors.blacks[6]}>
					<Link href="https://sinisacolic.netlify.com/">
						https://sinisacolic.netlify.com/
					</Link>
				</Text>
			</Box>
			<Background>
				<img src={image1} alt="sinisa colic" />
			</Background>
		</Flex>
	</Fragment>
)

const Cv = props => {
	return (
		<Fragment>
			<Global
				styles={css`
					html {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}
					body {
						margin: 0;
						padding: 0;
					}
				`}
			/>
			<Container>
				<AboutMe />
				<Seavus />
				<Box>
					<SubHeading color={colors.blue}>Languages</SubHeading>
					<ul>
						<li>
							<Text>
								<strong>English -</strong> <Light>Advanced</Light>
							</Text>
						</li>
						<li>
							<Text>
								<strong>Serbian -</strong> <Light>Native</Light>
							</Text>
						</li>
					</ul>
				</Box>
			</Container>
		</Fragment>
	)
}

export default Cv

const margin = css`
	margin: 0.5rem 0;
`

const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`

const Background = styled.div`
	width: 12rem;
	height: 13rem;
	border-radius: 5px;
	overflow: hidden;
	margin-top: 1rem;
	display: block;
	img {
		display: block;
		width: 100%;
		height: auto;
		display: block;
	}
`

const SubHeading = styled(Head)`
	font-family: Open Sans Condensed, sans-serif;
	margin: 1rem 0;
`

const Heading = styled(Head)`
	font-family: Open Sans Condensed, sans-serif;
	font-size: 2rem;
	color: ${colors.whites[11]};
`
const Link = styled.a`
	font-family: Roboto;
	${margin};
	color: ${colors.blacks[6]};
`

const Text = styled(Para)`
	font-family: Roboto;
	${margin};
	line-height: 1.4em;
`
const Header = styled.div`
	background-color: ${colors.green};
	text-align: center;
`
const Light = styled.span`
	color: ${colors.blacks[7]};
`
