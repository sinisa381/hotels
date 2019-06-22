import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import Headroom from 'react-headroom'
import { colors } from '../../globals/colors'
import { Text, Flex, Box } from '@rebass/emotion'
import { FaHotel } from 'react-icons/fa'

export default () => {
	return (
		<HeaderContainer wrapperStyle={{ marginBottom: '1rem', backgroundColor: colors.blue }}>
			<Header>
				<Flex justifyContent='space-between' alignItems='center'>
					<Link to='/'>
						<Flex justifyContent='space-between' alignItems='center'>
							<FaHotel size='1.2rem' /> <Box mr='2' />
							<LinkItem>Hotel</LinkItem>
						</Flex>
					</Link>
					<Flex>
						<Link to='/rooms/'>
							<LinkItem mr={[ 3, 5, 5 ]} fontSize={[ 2, 3 ]}>
								rooms
							</LinkItem>
						</Link>
						<Link to='/featured/'>
							<LinkItem fontSize={[ 2, 3 ]}>featured</LinkItem>
						</Link>
					</Flex>
				</Flex>
			</Header>
		</HeaderContainer>
	)
}

const LinkItem = styled(Text)`
text-transform:capitalize;
font-family:Roboto;
`

const Link = styled(GatsbyLink)`
text-decoration:none;
transition: all .2s;
color:${colors.whites[10]};
&:hover{
color:${colors.whites[8]};
}
`

const Header = styled.header`
	max-width: 1200px;
	padding: 1rem;
	margin: 0 auto;
`
const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${colors.blue};
  }
  box-shadow:0px 0px 4px 2px rgba( 0, 0, 0, 0.2 );
  position: absolute;
  width: 100%;
  z-index:1000;
`
