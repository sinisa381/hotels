import React, { useContext, useEffect } from 'react'
import Room from '../components/Room'
import Layout from '../components/layout'
import '../components/styled.css'
import { Box, Text, Button } from '@rebass/emotion'
import roomData from '../hooks/roomQuery'
import { RoomContext } from '../context'
import styled from '@emotion/styled'

export default () => {
	const {
		setRooms,
		rooms,
		featuredRooms,
		setFeaturedRooms,
		sortedRooms,
		setSortedRooms,
		formdata,
		setFormdata,
		handleChange
	} = useContext(RoomContext)
	const { capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, type } = formdata
	const tempResponse = roomData()
	const response = tempResponse.map(({ node }) => {
		console.log(node)
		const room = {
			...node,
			images: node.images.map(({ fluid }) => fluid)
		}
		return room
	})
	const getUnique = (items, value) => {
		return new Set(items.map(item => item[value]))
	}
	let types = getUnique(response, 'type')
	types = Array.from(types)
	types = [ 'all', ...types ]
	types = types.map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	))
	let people = getUnique(response, 'capacity')
	people = Array.from(people)
	people = people.sort().map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	))
	const featured = rooms.filter(room => room.featured === true)
	useEffect(() => {
		setRooms(response)
		let maxPrice = Math.max(...response.map(item => item.price))
		let maxSize = Math.max(...response.map(item => item.size))
		setFormdata({ ...formdata, price: maxPrice, maxPrice, maxSize })
		setFeaturedRooms(featured)
		setSortedRooms(response)
	}, [])

	return (
		<React.Fragment>
			<Layout>
				<Box mt='2' />
				<p>hello from rooms</p>
				<section>
					<section className='filter-container'>
						{/* <Title title='search rooms' /> */}
						<form className='filter-form'>
							{/* select type */}
							<div className='form-group'>
								<label htmlFor='type'>room type</label>
								<select
									name='type'
									id='type'
									onChange={handleChange}
									className='form-control'
									value={type}
								>
									{types}
								</select>
							</div>
							{/* end of select type */}
							{/* guests  */}
							<div className='form-group'>
								<label htmlFor='capacity'>Guests</label>
								<select
									name='capacity'
									id='capacity'
									onChange={handleChange}
									className='form-control'
									value={capacity}
								>
									{people}
								</select>
							</div>
							{/* end of guests */}
							{/* room price */}
							<div className='form-group'>
								<label htmlFor='price'>room price ${price}</label>
								<input
									type='range'
									name='price'
									min={minPrice}
									max={maxPrice}
									id='price'
									value={price}
									onChange={handleChange}
									className='form-control'
								/>
							</div>
							{/* end of room price*/}
							{/* size */}
							<div className='form-group'>
								<label htmlFor='price'>room size </label>
								<div className='size-inputs'>
									<input
										type='number'
										name='minSize'
										value={minSize}
										onChange={handleChange}
										className='size-input'
									/>
									<input
										type='number'
										name='maxSize'
										value={maxSize}
										onChange={handleChange}
										className='size-input'
									/>
								</div>
							</div>
							{/* end of select type */}
							{/* extras */}
							<div className='form-group'>
								<div className='single-extra'>
									<input
										type='checkbox'
										name='breakfast'
										id='breakfast'
										checked={breakfast}
										onChange={handleChange}
									/>
									<label htmlFor='breakfast'>breakfast</label>
								</div>
								<div className='single-extra'>
									<input type='checkbox' name='pets' checked={pets} onChange={handleChange} />
									<label htmlFor='breakfast'>pets</label>
								</div>
							</div>
							{/* end of extras type */}
						</form>
					</section>
				</section>
				<Gallery>{sortedRooms.map(room => <Room key={room.id} room={room} />)}</Gallery>
				<Text color='white' bg='green'>
					<Button variant='primary'>the button</Button>
					<Button>the button</Button>
				</Text>
			</Layout>
		</React.Fragment>
	)
}

const Gallery = styled(Box)`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:10px;
`
