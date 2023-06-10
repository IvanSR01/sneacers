import { createSlice } from '@reduxjs/toolkit'

interface IFilter {
	sortValue: number,
	orderValue: boolean
}
const initialState: IFilter = {
	sortValue: 0,
	orderValue: false
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers:{
		onSortedValue: (state, {payload}) => {
			state.sortValue = payload
		},
		onOrderValue: (state, {payload}) => {
			state.orderValue = payload
		}
	}
})
export const { onSortedValue, onOrderValue } = filterSlice.actions

export default filterSlice.reducer