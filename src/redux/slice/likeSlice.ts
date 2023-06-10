import { createSlice } from '@reduxjs/toolkit'
import { ISnecBlock } from '../../Types/data'

interface ILike {
	itemsLike: ISnecBlock[]
}
const initialState: ILike = {
	itemsLike: []
}
const likeSlice = createSlice({
	name: 'like',
	initialState,
	reducers: {
		likeOnClick: (state, { payload }) => {
			state.itemsLike.push(payload)
		},
		removeLikeOnClick: (state, { payload }) => {
			const findItem: ISnecBlock | undefined = state.itemsLike.find(
				obj => obj.id === payload.id
			)
			if (findItem) {
				const findIndex = state.itemsLike.indexOf(findItem)
				state.itemsLike.splice(findIndex, findIndex + 1)
			}
		}
	}
})
export const { likeOnClick, removeLikeOnClick } = likeSlice.actions

export default likeSlice.reducer
