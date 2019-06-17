import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
export default ({ image }) => {
	//
	const [ open, setOpen ] = useState(false)
	const handleModalOpen = () => {
		setOpen(true)
	}
	const handleModalClose = () => {
		setOpen(false)
	}
	return (
		<div>
			<Modal open={open} onClose={handleModalClose}>
				<ModalContent>
					<Image fluid={image} />
				</ModalContent>
			</Modal>
			<ImgContainer onClick={handleModalOpen}>
				<Image fluid={image} />
			</ImgContainer>
		</div>
	)
}

const ModalContent = styled.div`
	width: 50vw;
	height: 65vh;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
`

const ImgContainer = styled.div`
	height: 100%;
	max-height: 13rem;
	width: auto;
	cursor: pointer;
`

const Image = styled(Img)`
width:100%;
height:100%;
`
