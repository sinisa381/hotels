import React, { Component } from 'react'
const RoomContext = React.createContext()

export default class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		//
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		breakfast: false,
		pets: false
	}

	setRooms = ({ rooms, featuredRooms, sortedRooms, price, maxPrice }) => {
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms,
			price,
			maxPrice
		})
	}

	formatData(items) {
		return items.map(({ node }) => {
			const room = {
				...node,
				images: node.images.map(({ fluid }) => fluid)
			}
			return room
		})
	}

	handleRange = (e, value) => {
		this.setState({ price: Math.floor(value) }, this.filterRooms)
	}

	handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState(
			{
				[name]: value
			},
			this.filterRooms
		)
	}
	filterRooms = () => {
		let { rooms, type, capacity, price, breakfast, pets } = this.state

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
		this.setState({
			sortedRooms: tempRooms
		})
	}
	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					handleChange: this.handleChange,
					resetData: this.resetData,
					formatData: this.formatData,
					setRooms: this.setRooms,
					handleRange: this.handleRange
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}
const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }

export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return <RoomConsumer>{value => <Component {...props} context={value} />}</RoomConsumer>
	}
}
