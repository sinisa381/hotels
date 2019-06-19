import React, { useState, useEffect } from 'react'
const RoomContext = React.createContext()

const RoomProviderHook = props => {
	let [ rooms, setRooms ] = useState([])
	let [ sortedRooms, setSortedRooms ] = useState([])
	let [ featuredRooms, setFeaturedRooms ] = useState([])
	let [ formData, setFormdata ] = useState({
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		breakfast: false,
		pets: false
	})

	const initRooms = ({ rooms, featuredRooms, sortedRooms, price, maxPrice }) => {
		setRooms([ ...rooms ])
		setSortedRooms([ ...sortedRooms ])
		setFeaturedRooms([ ...featuredRooms ])
		setFormdata({ ...formData, price, maxPrice })
	}

	const formatData = items => {
		return items.map(({ node }) => {
			const room = {
				...node,
				images: node.images.map(({ fluid }) => fluid)
			}
			return room
		})
	}

	useEffect(
		() => {
			filterRooms()
		},
		[ formData ]
	)

	const handleRange = (e, value) => {
		setFormdata({ ...formData, price: Math.floor(value) })
	}

	const handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		setFormdata({ ...formData, [name]: value })
	}
	const filterRooms = () => {
		let { type, capacity, price, breakfast, pets } = formData
		let tempRooms = [ ...rooms ]
		capacity = parseInt(capacity)
		price = parseInt(price)
		if (type !== 'all') {
			tempRooms = tempRooms.filter(room => room.type === type)
		}
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity)
		}
		tempRooms = tempRooms.filter(room => room.price <= price)
		if (breakfast) {
			tempRooms = tempRooms.filter(room => room.breakfast === true)
		}
		if (pets) {
			tempRooms = tempRooms.filter(room => room.pets === true)
		}
		setSortedRooms([ ...tempRooms ])
	}
	return (
		<RoomContext.Provider
			value={{
				rooms,
				initRooms,
				sortedRooms,
				featuredRooms,
				formData,
				handleChange,
				formatData,
				setRooms,
				handleRange
			}}
		>
			{props.children}
		</RoomContext.Provider>
	)
}
const RoomConsumer = RoomContext.Consumer

export { RoomProviderHook, RoomConsumer, RoomContext }

export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return <RoomConsumer>{value => <Component {...props} context={value} />}</RoomConsumer>
	}
}
