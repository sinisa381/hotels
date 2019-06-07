import React from 'react'
import { Box, Text as Txt } from '@rebass/emotion'
import { mq } from '../globals'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from '../globals/colors'

export default ({ room }) => {
	return (
		<Container linkTo={'sinisa'}>
			<Image fixed={room.images[0]} alt={room.name} />
			<Text color='green' bg='blacks.8' p='2'>
				$ {room.price}
			</Text>
			<LinkTo className='thelink' to={`/rooms/${room.slug}`}>
				{room.slug}
			</LinkTo>
		</Container>
	)
}

const Image = styled(Img)`
width:100%;
height:100%;
border-radius:4px;
`
const Container = styled(Box)`
width:100%;
height:100%;
min-height:15rem;
position:relative;
&:hover{
  .thelink{
    opacity:1;
    transition:all .3s;
  }
}
`
const Text = styled(Txt)`
position:absolute;
top:0;
right:0;
border-radius:3px;
`

const LinkTo = styled(Link)`
box-sizing:border-box;
opacity:0;
text-decoration:none;
font-weight:400;
font-size:1.4rem;
color:${colors.gold};
text-shadow:0 0 4px rgba(0, 0, 0, .125);
position:absolute;
top:45%;
left:50%;
transform:translate(-50%);
background-color:${colors.blacks[4]};
padding:.3rem .9rem;

`
