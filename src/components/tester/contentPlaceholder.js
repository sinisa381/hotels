import React from "react"
import styled from "@emotion/styled"
import { motion, useInvertedScale } from "framer-motion"

const Container = styled(motion.div)`
	padding: 460px 35px 35px 35px;
	max-width: 700px;
	width: 90vw;
	background-color: yellow;
`

const ContentPlaceholder = props => {
	const inverted = useInvertedScale()
	return (
		<Container
			className="content-container"
			style={{ ...inverted, originY: 0, originX: 0 }}
		>
			<div>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
				tempore laboriosam praesentium sit odit eveniet recusandae! Maxime,
				natus? Numquam, dolores in itaque natus praesentium rem tenetur maiores
				hic at explicabo autem exercitationem maxime aliquam necessitatibus
				velit iure aut accusamus consequuntur facilis voluptates pariatur
				doloremque. Quia magnam omnis vitae laboriosam rem! Lorem, ipsum dolor
				sit amet consectetur adipisicing elit. Placeat tempore laboriosam
				praesentium sit odit eveniet recusandae! Maxime, natus? Numquam, dolores
				in itaque natus praesentium rem tenetur maiores hic at explicabo autem
				exercitationem maxime aliquam necessitatibus velit iure aut accusamus
				consequuntur facilis voluptates pariatur doloremque. Quia magnam omnis
				vitae laboriosam rem!
			</div>
		</Container>
	)
}

export default ContentPlaceholder
