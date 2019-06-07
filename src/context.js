import React, { useState } from 'react'

const initialstate = {
	rooms: [],
	sortedRooms: [],
	featuredRooms: [],
	formData: {
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 10,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	}
}
const RoomContext = React.createContext(initialstate)

const RoomProvider = ({ children }) => {
	const [ rooms, setRooms ] = useState([])
	const [ sortedRooms, setSortedRooms ] = useState([])
	const [ featuredRooms, setFeaturedRooms ] = useState([])
	const [ formdata, setFormdata ] = useState({ ...initialstate.formData })

	const handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		setFormdata({ ...formdata, [name]: value })
		filterRooms()
	}
	const filterRooms = () => {
		let { type, capacity, price, minSize, maxSize, breakfast, pets } = formdata

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
		tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
		if (breakfast) {
			tempRooms = tempRooms.filter(room => room.breakfast === true)
		}
		if (pets) {
			tempRooms = tempRooms.filter(room => room.pets === true)
		}
		setSortedRooms(tempRooms)
	}
	return (
		<RoomContext.Provider
			value={{
				rooms,
				setRooms,
				featuredRooms,
				setFeaturedRooms,
				sortedRooms,
				setSortedRooms,
				formdata,
				setFormdata,
				handleChange
			}}
		>
			{children}
		</RoomContext.Provider>
	)
}

export { RoomProvider, RoomContext }
