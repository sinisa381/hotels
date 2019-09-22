import React from "react"
import styled from "@emotion/styled"
import { motion, useInvertedScale } from "framer-motion"

const closeSpring = { type: "spring", stiffness: 300, damping: 20 }

const Container = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	height: 420px;
	overflow: hidden;
	width: 100vw;
	transform: translateZ(0);
`

const Heading = ({ isSelected }) => {
	const inverted = useInvertedScale()
	return (
		<Container
			style={{ ...inverted, backgroundColor: "tomato", originX: 0, originY: 0 }}
		>
			<motion.div
				initial={false}
				// animate={isSelected ? { x: 40, y: 100 } : { x: 0, y: 0 }}
				animate={isSelected ? { x: -20, y: -20 } : { x: -180, y: 0 }}
				transition={closeSpring}
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, est.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, est.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, est.
			</motion.div>
		</Container>
	)
}

export default Heading
