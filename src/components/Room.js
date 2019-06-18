import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { FaHeart } from 'react-icons/fa'
import { Flex, Box, Text } from '@rebass/emotion'
import { mq } from '../globals'
import Img from 'gatsby-image'
import { Abbr } from './shared'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from '../globals/colors'

export default ({ room, price }) => {
	const [ isVisible, setIsVisible ] = useState(false)
	useEffect(() => {
		setIsVisible(false)
	}, [])
	const heart = useSpring({
		config: config.stiff,
		from: { fontSize: '1rem' },
		to: { fontSize: `(${isVisible ? '1.7rem' : '1rem'})` }
	})
	return (
		<Container onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}>
			<Abbr title={room.name}>
				<Image fixed={room.images[0]} alt={room.name} />
			</Abbr>
			{price && (
				<Overlay>
					<Flex justifyContent='space-between' px='4' py='2'>
						<Text color={colors.whites[9]} fontFamily='sans' fontSize={[ 2, 3, 3 ]}>
							{room.slug}
						</Text>
						<Text color='green' fontSize={[ 1, 2, 3 ]}>
							$ {room.price}
						</Text>
					</Flex>
				</Overlay>
			)}
			{room.featured && (
				<animated.div style={heart}>
					<Featured>
						<Abbr title='featured'>
							<FaHeart />
						</Abbr>
					</Featured>
				</animated.div>
			)}

			<LinkTo className='thelink' to={`/rooms/${room.slug}/`}>
				<Text fontSize={[ 2, 2, 3 ]} fontFamily='sans'>
					details
				</Text>
			</LinkTo>
			<Mobile to={`/rooms/${room.slug}`}>
				<Text fontSize={[ 3 ]} textAlign='center' fontFamily='sans'>
					details
				</Text>
			</Mobile>
		</Container>
	)
}

const Image = styled(Img)`
width:100%;
display:block;
height:100%;
border-radius:4px;
`
const Container = styled(Box)`
width:100%;
height:15rem;
position:relative;
&:hover{
  .thelink{
    opacity:1;
    transition:all .5s;
  }
}
`

const Mobile = styled(Link)`
opacity:1;
text-decoration:none;
font-weight:bold;
color:${colors.whites[9]};
border-bottom:2px solid ${colors.whites[9]};
position:absolute;
top:45%;
left:50%;
transform:translate(-50%);
${mq[1]}{
  display:none;
}
`

const LinkTo = styled(Link)`
opacity:0;
text-decoration:none;
font-weight:400;
color:${colors.whites[9]};
border-bottom:2px solid ${colors.whites[9]};
font-weight:bold;
text-shadow:0 0 4px rgba(0, 0, 0, .325);
position:absolute;
top:45%;
left:50%;
transform:translate(-50%);

`
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${colors.blacks[7]};
`

const Featured = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: inline-block;
	color: ${colors['light-red']};
	padding: .5rem 1rem;
`
