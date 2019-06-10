import React from 'react'
// import { graphql } from 'gatsby'
// import Room from '../components/Room'
import Layout from '../components/layout'
// import '../components/styled.css'
// import { Card, Flex, Heading, Box, Text, Button } from '@rebass/emotion'
// import { RoomContext } from '../context'
// import { mq } from '../globals'
// import styled from '@emotion/styled'

export default class Rooms extends React.Component {
	// static contextType = RoomContext
	componentDidMount() {
		// const { setRooms, formatData } = this.context
		// let roomsdata = this.props.data.data.edges
		// let rooms = formatData(roomsdata)
		// console.log(rooms)
		// let featuredRooms = rooms.filter(room => room.featured === true)
		// //
		// let maxPrice = Math.max(...rooms.map(item => item.price))
		// let maxSize = Math.max(...rooms.map(item => item.size))
		// setRooms({ rooms, featuredRooms, sortedRooms: rooms, price: maxPrice, maxPrice, maxSize })
	}
	render() {
		// const {
		// 	sortedRooms,
		// 	rooms,
		// 	resetData,
		// 	handleChange,
		// 	capacity,
		// 	price,
		// 	minPrice,
		// 	maxPrice,
		// 	minSize,
		// 	maxSize,
		// 	breakfast,
		// 	pets,
		// 	type,
		// 	formatData,
		// 	setRooms
		// } = this.context
		//start
		// const getData = () => {
		// 	let rooms = roomData()
		// 	rooms = formatData(rooms)
		// 	let featuredRooms = rooms.filter(room => room.featured === true)
		// 	//
		// 	let maxPrice = Math.max(...rooms.map(item => item.price))
		// 	let maxSize = Math.max(...rooms.map(item => item.size))
		// 	setRooms({
		// 		rooms,
		// 		featuredRooms,
		// 		sortedRooms: rooms,
		// 		price: maxPrice,
		// 		maxPrice,
		// 		maxSize
		// 	})
		// }
		// let capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, type
		// just because netlify cant recognize formdata
		// if (formdata) {
		// 	capacity = formdata.capacity
		// 	price = formdata.price
		// 	minPrice = formdata.minPrice
		// 	maxPrice = formdata.maxPrice
		// 	minSize = formdata.minSize
		// 	maxSize = formdata.maxSize
		// 	breakfast = formdata.breakfast
		// 	pets = formdata.pets
		// 	type = formdata.type
		// }
		//end
		// const getUnique = (items, value) => {
		// 	return new Set(items.map(item => item[value]))
		// }
		// let types = getUnique(rooms, 'type')
		// types = Array.from(types)
		// types = [ 'all', ...types ]
		// types = types.map((item, index) => (
		// 	<option key={index} value={item}>
		// 		{item}
		// 	</option>
		// ))
		// let people = getUnique(rooms, 'capacity')
		// people = Array.from(people)
		// people = people.sort().map((item, index) => (
		// 	<option key={index} value={item}>
		// 		{item}
		// 	</option>
		// ))

		return (
			<React.Fragment>
				<Layout>
					<div>hello world</div>
					{/* <Box mx='auto' mt='2' width={400}>
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
					<Gallery>{sortedRooms.map(room => <Room key={room.id} room={room} />)}</Gallery>
					<Text color='white' bg='green'>
						<Button variant='primary'>the button</Button>
						<Button>the button</Button>
					</Text> */}
				</Layout>
			</React.Fragment>
		)
	}
}

// const Gallery = styled(Box)`
// height:80vh;
// display:grid;
// grid-template-columns:repeat(3,1fr);
// grid-gap:10px;
// `
// const FormContainer = styled(Box)`
// width:100%;
// ${mq[1]}{
//  width: 35rem;
// }
//  border-radius: 5px;
// `
// export const query = graphql`
// 	{
// 		data: allContentfulHotelrooms {
// 			edges {
// 				node {
// 					id
// 					images {
// 						fluid(maxWidth: 1000) {
// 							...GatsbyContentfulFluid
// 							src
// 							srcSet
// 						}
// 					}
// 					name
// 					pets
// 					price
// 					size
// 					slug
// 					capacity
// 					id
// 					type
// 					featured
// 					extras {
// 						content
// 					}
// 					description {
// 						description
// 					}
// 					breakfast
// 				}
// 			}
// 		}
// 	}
// `
