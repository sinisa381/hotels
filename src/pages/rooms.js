import React from 'react'
import { graphql } from 'gatsby'
import Room from '../components/Room'
import Layout from '../components/layout'
import '../components/styled.css'
import { Card, Flex, Heading, Box, Text, Button } from '@rebass/emotion'
import { RoomContext } from '../context'
import { mq } from '../globals'
import styled from '@emotion/styled'

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
		setRooms({ rooms, featuredRooms, sortedRooms: rooms, price: maxPrice, maxPrice, maxSize })
	}
	render() {
		let sortedRooms,
			rooms,
			resetData,
			handleChange,
			capacity,
			price,
			minPrice,
			maxPrice,
			minSize,
			maxSize,
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
			capacity = this.context.capacity
			price = this.context.price
			minPrice = this.context.minPrice
			maxPrice = this.context.maxPrice
			minSize = this.context.minSize
			maxSize = this.context.maxSize
			breakfast = this.context.breakfast
			pets = this.context.pets
			type = this.context.type
			formatData = this.context.formatData
			setRooms = this.context.setRooms
		}
		function getUnique(items, value) {
			return new Set(items.map(item => item[value]))
		}

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
					<Box mx='auto' mt='2' width={400}>
						<Heading m='3' color='blue' fontFamily='sans' textAlign='center'>
							Find your place
						</Heading>
						<Button
							mx='auto'
							textAlign='center'
							mb={[ 2, 2, 3 ]}
							variant='outline'
							style={{ cursor: 'pointer', outline: 'none' }}
							onClick={() => resetData()}
						>
							Refresh data
						</Button>
					</Box>

					<section>
						<form>
							<FormContainer bg='green' mx='auto' my='3' px='6' py='3'>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-around'>
										<label htmlFor='type'>
											<Text mr='2' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
												Room type
											</Text>
										</label>
										<select
											className='select-css'
											name='type'
											id='type'
											onChange={handleChange}
											value={type}
											style={{ marginTop: 5 }}
										>
											{types}
										</select>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-around'>
										<label htmlFor='capacity'>
											<Text mr='2' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
												Guests
											</Text>
										</label>
										<select name='capacity' id='capacity' onChange={handleChange} value={capacity}>
											{people}
										</select>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-around'>
										<label htmlFor='price'>
											<Text mr='2' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
												Price ${price}
											</Text>
										</label>
										<input
											type='range'
											name='price'
											min={minPrice}
											max={maxPrice}
											id='price'
											value={price}
											onChange={handleChange}
										/>
									</Flex>
								</Card>
								<Card mb={[ 2, 2, 3 ]}>
									<Flex alignItems='center' justifyContent='space-around'>
										<label htmlFor='price'>
											<Text mr='2' fontFamily='sans' fontSize={[ 2, 2, 3 ]}>
												Room size
											</Text>
										</label>
										<div className='size-inputs'>
											<input
												type='number'
												name='minSize'
												value={minSize}
												onChange={handleChange}
												style={{ width: 60 }}
											/>
											<input
												type='number'
												name='maxSize'
												value={maxSize}
												onChange={handleChange}
												style={{ width: 60 }}
											/>
										</div>
									</Flex>
								</Card>
								<Card>
									<Flex justifyContent='center'>
										<Box mr={[ 2, 3, 3 ]}>
											<input
												type='checkbox'
												name='breakfast'
												id='breakfast'
												checked={breakfast}
												onChange={handleChange}
											/>
											<label htmlFor='breakfast'>
												<Text style={{ display: 'inline-block' }} mx='2'>
													Breakfast
												</Text>
											</label>
										</Box>
										<Box mr={[ 2, 3, 3 ]}>
											<input type='checkbox' name='pets' checked={pets} onChange={handleChange} />
											<label htmlFor='breakfast'>
												<Text style={{ display: 'inline-block' }} mx='2'>
													Pets
												</Text>{' '}
											</label>
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

const Gallery = styled(Box)`
height:80vh;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:10px;
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
