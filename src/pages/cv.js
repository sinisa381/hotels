import React, { Fragment } from 'react'
import image1 from '../components/img/redsss.jpg'
import { Heading as Head, Text as Para, Box, Flex } from '@rebass/emotion'
import styled from '@emotion/styled'
import { colors } from '../globals/colors'
import { Global, css } from '@emotion/core'

const skillsfront = [
	'Javascript',
	'React',
	'Vue',
	'Redux',
	'Context API',
	'Graphql',
	'Github',
	'Bootstrap',
	'HTML5'
]
const skillsback = [
	'CSS3',
	'SASS',
	'Material-UI',
	' Tachyons',
	' Rebass',
	' Emotion (Styled Components)',
	'Firebase',
	'Node.js',
	'MongoDB'
]
const courses = [
	'The complete Vue JS by Coding Revolution',
	'The React practice course, learn by building projects by Coding Revolution',
	'React The Complete Guide (including incl Hooks, React Router, Redux) by Academind'
]

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
			<Header>
				<Heading as='h1' py='3'>
					Curriculum Vitae
				</Heading>
			</Header>
			<Container>
				<Flex justifyContent='space-between'>
					<Box>
						<SubHeading as='h2' fontSize={'2rem'}>
							Sinisa Colic
						</SubHeading>
						<SubHeading fontSize={'1.5rem'}>16.11.1989.</SubHeading>
						<Text>Jurija Gagarina 164b/75, Belgrade, Serbia</Text>
						<Text color={colors.blacks[6]}>+381691955883</Text>
						<Text color={colors.blacks[6]}>
							programsrbica@gmail.com
						</Text>
						<Text color={colors.blacks[6]}>
							<Link href='https://sinisacolic.netlify.com/'>
								https://sinisacolic.netlify.com/
							</Link>
						</Text>
					</Box>
					<Background>
						<img src={image1} alt='sinisa colic' />
					</Background>
				</Flex>
				<Box>
					<SubHeading color={colors.blue}>Education</SubHeading>
					<Text>
						For the last three years I have been learning and
						practicing web development for full time lika a day job.
					</Text>
					<Text>
						I went through 15+ courses on Udemy and Frontendmasters
						that are 20-40 hours long so I'll only list a few that I
						find special.
					</Text>
					<Box ml='4'>
						<h4>Udemy</h4>
						{courses.map((course, i) => (
							<ul key={i}>
								<li>
									<Text>{course}</Text>
								</li>
							</ul>
						))}

						<h4>Youtube</h4>

						<Text>
							I follow 10+ channels on youtube. I really love
							Gatsby and how it combines technology for
							development. And the best gem on Youtube for Gatsby
							is Jason Lengstorf.
						</Text>
						<h4 style={{ marginTop: '3rem' }}>Books / Blogs</h4>
						<Text>
							I also read a lot. Many blogs and some books of
							course. I will name few: You Dont Know Js by Kyle
							Simposon, Javascript The Good Parts by Douglas
							Crockford
						</Text>
					</Box>
				</Box>
				<Box>
					<SubHeading color={colors.blue}>Skills</SubHeading>
					<Flex>
						<Box mr='5'>
							<ul>
								{skillsfront.map(skill => (
									<li key={skill}>
										<Text>{skill}</Text>
									</li>
								))}
							</ul>
						</Box>
						<Box>
							<ul>
								{skillsback.map(skill => (
									<li key={skill}>
										<Text>{skill}</Text>
									</li>
								))}
							</ul>
						</Box>
					</Flex>
				</Box>
				<Box>
					<SubHeading color={colors.blue}>Additional</SubHeading>
					<Text>
						I build customised websites to the highest
						specifications. I want to learn from other developers
						and share my knowledge. I also have experience in
						building single page applications and have understanding
						of full development life cycle. Have keen interest in
						technology, mobile applications and user experience.
						Continually evaluating and upgrading my skills so that I
						can stay at the cutting edge of web development
						technology.
					</Text>
					<SubHeading color={colors.blue}>Languages</SubHeading>
					<ul>
						<li>
							<Text>
								<strong>English -</strong>{' '}
								<Light>Advanced</Light>
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

const margin = css`margin: .5rem 0;`

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
margin:1rem 0;

`

const Heading = styled(Head)`
font-family: Open Sans Condensed, sans-serif;
font-size:2rem;
color:${colors.whites[11]}
`
const Link = styled.a`
font-family:Roboto;
${margin};
color:${colors.blacks[6]};
`

const Text = styled(Para)`
font-family:Roboto;
${margin};
line-height:1.4em;
`
const Header = styled.div`
	background-color: ${colors.green};
	text-align: center;
`
const Light = styled.span`color: ${colors.blacks[7]};`

