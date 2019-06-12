import styled from '@emotion/styled'
import { mq } from '../globals'

export const Abbr = styled.abbr`
	border-bottom: none !important;
	cursor: default !important;
	text-decoration: none !important;
	padding: 0 !important;
	margin: 0 !important;
`

export const Gallery = styled.div`
	min-height: 70vh;
	display: grid;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	grid-template-columns: repeat(auto-fill, minMax(15rem, 1fr));
	grid-gap: 5px;
	/* ${mq[1]} {
		width: 90%;
		grid-gap: 10px;
	} */
`

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	${mq[1]} {
		width: 80%;
	}
	${mq[2]} {
		width: 70%;
	}
`
