import React from "react"
import { Text, Container, Heading } from "../components/shared"
import { Box } from "@rebass/emotion"

const MotivacionoPismo = () => {
	return (
		<Container>
			<Heading fontSize="2rem">Motivational letter</Heading>
			<Box mb="3" />
			<Text>
				Three years ago I have decided to become a Web Developer. The road was
				not easy. I had to look for a good roadmap on the Internet since I was
				absolute beginner. So it began with HTML and very soon i started adding
				CSS. There (in order) I learned Floats, FlexBox, CSS Grid. Then I
				started reading about Javascript and the DOM. It took me some time
				before i peaked into Jquery. I didn't like it much so I just kept going
				forward.
			</Text>
			<br />
			<Text>
				I was wrinting a lot of ES6 at this point. When I went back into CSS I
				tried to implement BEM metodology. It was kinda cool for me. But not
				much later I found about some nice CSS frameworks and I learned some of
				them. Bootstrap, Tachyons, Material UI. I also learned SASS/SCSS. But
				wasn't really impressed after I found out about Styled-Components. So
				when I got comfortable with HTML, CSS and JS I finally started writing
				some React.
			</Text>
			<br />
			<Text>
				I have spend around 2 years in React. Learned Redux, Context Api, React
				Lifecycles, Hooks and Gatsby.js, the framework for React. My portfolio
				is built with Gatsby. As for the backend I didn't spend as much time as
				in frontend because I had to learn frontend first. But I have good
				understanding of backend. I started learning Firebase first then the
				Node. Now I try to learn more about Node. I can setup a server with
				Express and connect it with MongoDB. Get some data via RESTful API's. I
				am building my next Project with this technologies. I can be a valuable
				member of your team. And can be productive from the start. I didn't want
				to write about every piece of technology I tried, learned.
			</Text>
			<Text>
				<ul>
					<li>
						<a
							href="https://github.com/sinisa381/portfolio"
							rel="noopener noreferrer"
							target="_blank"
						>
							https://github.com/sinisa381/portfolio
						</a>
					</li>
					<li>
						<a
							href="https://github.com/sinisa381/hotels"
							rel="noopener noreferrer"
							target="_blank"
						>
							https://github.com/sinisa381/hotels
						</a>
					</li>
					<li>
						<a
							href="https://github.com/sinisa381/PortfolioBooks"
							rel="noopener noreferrer"
							target="_blank"
						>
							https://github.com/sinisa381/PortfolioBooks
						</a>
					</li>
				</ul>
			</Text>
			<Text>I want to work with and learn from proffesionals.</Text>
		</Container>
	)
}

export default MotivacionoPismo
