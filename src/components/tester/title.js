import React from "react"
import styled from "@emotion/styled"
import { motion, useInvertedScale } from "framer-motion"

const Container = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 300px;
	background-color: blue;
`

const openSpring = { type: "spring", stiffness: 400, damping: 40 }
const closeSpring = { type: "spring", stiffness: 300, damping: 20 }
const Category = styled.span`
	color: #fff;
	font-size: 14px;
	text-transform: uppercase;
	background-color: green;
`

const Title = ({ title, category, isSelected }) => {
	const inverted = useInvertedScale()
	const x = isSelected ? 30 : 15
	const y = x
	return (
		<Container
			className="title-container"
			initial={false}
			animate={{ x, y }}
			transition={isSelected ? openSpring : closeSpring}
			transformTemplate={scaleTranslate}
			style={{ ...inverted, originX: 0, originY: 0 }}
		>
			<Category>{category}</Category>
			<h2>{title}</h2>
		</Container>
	)
}
const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
	`scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`
export default Title
