import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Heading from "./heading"
import Title from "./title"
import useDimensions from "react-use-dimensions"
import { useInvertedBorderRadius } from "./utils/use-inverted-border-radius"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { colors } from "../../globals/colors"
import ContentPlaceholder from "./contentPlaceholder"

const openSpring = {
	type: "spring",
	stiffness: 500,
	dumping: 55,
}

const Head = styled.div`
	cursor: pointer;
	/* background-color: rebeccapurple; */
	display: inline-flex;
	align-self: flex-start;
	position: relative;
	& .text {
		align-self: flex-start;
		margin: 0;
		padding: 0;
	}
`
const Body = styled(motion.div)`
	overflow: hidden;
	display: inline-block;
	max-width: 500px;
	/* color: #eee; */
	transform-origin: 0 0;
	/* background-color: #000; */
`

const Text = styled(motion.div)`
	font-size: 1rem;
	color: ${colors.black};
`

const bodyVariants = {
	inactive: y => ({
		width: 0,
		height: 0,
		y,
	}),
	active: y => ({
		width: "auto",
		height: "auto",
		y,
		transition: {
			staggerChildren: 0.5,
		},
	}),
}

const Btn = styled(motion.div)`
	background-color: ${colors.blue};
	border-radius: 15px;
	padding: 0.5rem 1rem;
	color: #eee;
	width: 100%;
	max-width: 100px;
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	margin-left: -6rem;
`

const Flex = styled(motion.div)`
	display: flex;
	flex-direction: column;
	/* background-color: yellow; */
	width: 100%;
`
const spring = {
	type: "spring",
	damping: 80,
	stiffness: 300,
}

const Bck = styled(motion.div)`
	border-radius: 20px;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	background-color: papayawhip;
	padding: 1rem;
	display: inline-block;
`

const bckVariants = {
	active: y => ({
		y: window.innerHeight - y,
	}),
	inactive: y => ({
		y: 0,
	}),
}

const textVariants = {
	active: {
		opacity: 1,
	},
	inactive: {
		opacity: 0,
	},
}
const Tester = props => {
	const [loading, isLoading] = useState(true)
	const [isOpen, setOpen] = useState(false)
	const [main, dimensions] = useDimensions()
	const [measure, setMeasure] = useState(null)
	const headRef = React.createRef()
	const bodyRef = React.createRef()
	const [myOffset, setOffset] = useState(0)
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	useEffect(() => {
		myFunction()
		setMeasure({
			head: {
				width: headRef.current.clientHeight,
				height: headRef.current.clientWidth,
			},
			body: {
				width: bodyRef.current.clientHeight,
				height: bodyRef.current.clientWidth,
			},
		})
	}, [myOffset.top, myOffset.left])
	// console.log(myOffset.top)
	// console.log(window.innerHeight)

	// bodyheight 625 + 25 + 32
	// console.log(dimensions)
	// console.log("window", window.innerHeight)
	function myFunction() {
		var testDiv = document.getElementById("test").getClientRects()[0]
		x.set(testDiv.left)
		y.set(testDiv.top)
		setOffset({ top: testDiv.top, left: testDiv.left })
	}
	console.log(x.get())
	console.log(y.get())
	return (
		<>
			<Btn
				id="test"
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setOpen(false)}
			>
				close
			</Btn>
			<Bck
				ref={main}
				top={isOpen ? Math.floor(myOffset.top) : 0}
				variants={bckVariants}
				animate={isOpen ? "active" : "inactive"}
				custom={y.get()}
				// variants={bckVariants}
				// initial="inactive"
				// custom={{
				// 	height: bodyDimensions.height,
				// 	width: bodyDimensions.width,
				// 	headWidth: headDimensions.width,
				// }}
				// animate={isOpen ? "active" : "inactive"}
			>
				<Flex
				// initial="inactive"
				// variants={flexVariants}
				// animate={isOpen ? "active" : "inactive"}
				// custom={{ measurements }}
				>
					<Head ref={headRef} onClick={() => setOpen(true)}>
						<Text className="text">lorem tralala</Text>
					</Head>
					<Body
						variants={bodyVariants}
						custom={measure}
						initial={"inactive"}
						animate={isOpen ? "active" : "inactive"}
						layoutTransition={openSpring}
					>
						<Text
							ref={bodyRef}
							variants={textVariants}
							initial={"inactive"}
							// layoutTransition={spring}
							// layoutTransition={spring}
							// initial="inactive"
							animate={isOpen ? "active" : "inactive"}
							// variants={textVariants}
							// custom={dimensions.height}
						>
							some tex some tex some tex some tex some tex some tex some tex
							some tex some tex some tex some tex some tex some tex some tex
							some tex some tex some tex some tex some tex some tex some tex
						</Text>
					</Body>
				</Flex>
			</Bck>
		</>
	)
}

export default Tester
