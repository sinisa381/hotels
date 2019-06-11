import React from 'react'
import { graphql } from 'gatsby'
import Room from '../components/Room'
import Layout from '../components/layout'
import '../components/styled.css'
import { colors } from '../globals/colors'
import { Card, Flex, Heading, Box, Text, Button } from '@rebass/emotion'
import { RoomContext } from '../context'
import { mq } from '../globals'
import styled from '@emotion/styled'
import Checkbox from '@material-ui/core/Checkbox'
import Slider from '@material-ui/lab/Slider'
import MuiSelect from '@material-ui/core/Select'
import { FaBed } from 'react-icons/fa'
import { IoMdPersonAdd, IoMdPricetag } from 'react-icons/io'

export default class Rooms extends React.Component {
	static contextType = RoomContext
	componentDidMount() {
		let setRooms, formatData
		if (this.context) {
			setRooms = this.context.setRooms
			formatData = this.context.formatData
		}
		let roomsdata
		if (this.props.data) {
			if (this.props.data.allContentfulHotelrooms) {
				if (this.props.data.allContentfulHotelrooms.edges) {
					roomsdata = this.props.data.allContentfulHotelrooms.edges
				}
			}
		}
		let rooms = formatData(roomsdata)
		let featuredRooms = rooms.filter(room => room.featured === true)
		//
		let maxPrice = Math.max(...rooms.map(item => item.price))
		let maxSize = Math.max(...rooms.map(item => item.size))
		setRooms({ rooms, featuredRooms, sortedRooms: rooms, price: maxPrice, maxPrice })
	}
	render() {
		let sortedRooms,
			rooms,
			resetData,
			handleChange,
			handleRange,
			capacity,
			price,
			minPrice,
			maxPrice,
			breakfast,
			pets,
			type,
			formatData,
			setRooms
		if (this.context) {
			sortedRooms = this.context.sortedRooms
			rooms = this.context.rooms
			resetData = this.context.resetData
			handleChange = this.context.handleChange
			handleRange = this.context.handleRange
			capacity = this.context.capacity
			price = this.context.price
			minPrice = this.context.minPrice
			maxPrice = this.context.maxPrice
			breakfast = this.context.breakfast
			pets = this.context.pets
			type = this.context.type
			formatData = this.context.formatData
			setRooms = this.context.setRooms
		}
		function getUnique(items, value) {
			return new Set(items.map(item => item[value]))
		}
		console.log(rooms)
		let types, people
		if (rooms) {
			types = getUnique(rooms, 'type')
			types = Array.from(types)
			types = [ 'all', ...types ]
			types = types.map((item, index) => (
				<option key={index} value={item}>
					{item}
				</option>
			))
			people = getUnique(rooms, 'capacity')
			people = Array.from(people)
			people = people.sort().map((item, index) => (
				<option key={index} value={item}>
					{item}
				</option>
			))
		}

		return (
			<React.Fragment>
				<Layout>
					<Box mx='auto' mt='2' width={300} justifyContent='center'>
						<Heading m='3' color='blue' fontFamily='sans' textAlign='center'>
							Find your place
						</Heading>
						<Flex>
							<Button
								textAlign='center'
								mb={[ 2, 2, 2 ]}
								mx='auto'
								display='inline-block'
								variant='outline'
								onClick={() => resetData()}
							>
								Refresh data
							</Button>
						</Flex>
					</Box>

					<section>
						<form>
							<FormContainer bg='transparent' mx='auto' my='3' px={[ 5, 5, 6 ]} py='3'>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-between' px={[ 1, 2, 3 ]}>
										<Flex>
											<label htmlFor='type'>
												<Text mr='3' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
													Room type
												</Text>
											</label>
											<FaBed size='30' color={colors.blacks[9]} />
										</Flex>
										<MuiSelect
											native
											value={type}
											onChange={handleChange}
											inputProps={{
												name: 'type',
												id: 'type'
											}}
										>
											{types}
										</MuiSelect>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-between' px={[ 1, 2, 3 ]}>
										<Flex alignItems='center'>
											<label htmlFor='capacity'>
												<Text mr='3' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
													Guests
												</Text>
											</label>
											<IoMdPersonAdd size='27' color={colors.blacks[9]} />
										</Flex>
										<MuiSelect
											native
											value={capacity}
											onChange={handleChange}
											inputProps={{
												name: 'capacity',
												id: 'capacity'
											}}
										>
											{people}
										</MuiSelect>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-between' px={[ 1, 2, 3 ]}>
										<Flex alignItems='center'>
											<label htmlFor='price'>
												<Text mr='3' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
													Price ${price}
												</Text>
											</label>
											<IoMdPricetag size='26' color={colors.blacks[9]} />
										</Flex>
										<Box width={100}>
											<Slider
												type='range'
												name='price'
												min={minPrice}
												max={maxPrice}
												id='price'
												value={price}
												onChange={handleRange}
											/>
										</Box>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]} />
								<Card>
									<Flex justifyContent='center'>
										<Box mr={[ 2, 3, 3 ]}>
											<Flex alignItems='center'>
												<label htmlFor='breakfast' />
												<Checkbox
													checked={breakfast}
													onChange={handleChange}
													color='primary'
													name='breakfast'
													type='checkbox'
													id='breakfast'
												/>
												<Text mx='1'>Breakfast</Text>
											</Flex>
										</Box>
										<Box mr={[ 2, 3, 3 ]}>
											<Flex alignItems='center' justifyContent='center'>
												<Checkbox
													checked={pets}
													color='primary'
													onChange={handleChange}
													name='pets'
													type='checkbox'
													id='pets'
												/>
												<label htmlFor='pets'>
													<Text mx='1'>Pets</Text>{' '}
												</label>
											</Flex>
										</Box>
									</Flex>
								</Card>
							</FormContainer>
						</form>
					</section>
					{sortedRooms && <Gallery>{sortedRooms.map(room => <Room key={room.id} room={room} />)}</Gallery>}
					<Text color='white' bg='green'>
						<Button variant='primary'>the button</Button>
						<Button>the button</Button>
					</Text>
				</Layout>
			</React.Fragment>
		)
	}
}

const Gallery = styled.div`
	min-height: 70vh;
	/* width: 100%; */
	display: grid;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	grid-template-columns: repeat(auto-fill, minMax(5rem, 20rem));
	grid-gap: 5px;
	${mq[1]} {
		width: 90%;
		grid-gap: 10px;
	}
`
const FormContainer = styled(Box)`
width:100%;
${mq[1]}{
 width: 35rem;
}
 border-radius: 5px;
`
export const query = graphql`
	query {
		allContentfulHotelrooms {
			edges {
				node {
					id
					images {
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
							src
							srcSet
						}
					}
					name
					pets
					price
					size
					slug
					capacity
					id
					type
					featured
					extras {
						content
					}
					description {
						description
					}
					breakfast
				}
			}
		}
	}
`
const Select = styled.select`margin-top: 5px;`
const Input = styled.input`width: 60px;`
const Checkboxstyled = styled(Checkbox)`
background-color:red;
color:${colors.black}!important;
`
const Sliderstyled = styled(Slider)`
width:8rem !important;
background-color:${colors.black}!important;
.MuiSlider-track{

background-color:${colors.black}!important;
}
button {
  background-color:${colors.black}!important;
}
.MuiSlider-thumb.Mui-focused, .MuiSlider-thumb:hover,.MuiSlider-thumb:active, .MuiSlider-thumb.selected  {
    box-shadow: 0px 0px 0px 9px rgba(0, 0, 0, 0.16)!important;
}
`
