import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IData } from '../../Types/data'

interface IParams {
	sortedValue: string; 
	orderValue: boolean; 
}

export const fetchSneckersGet = createAsyncThunk(
	'snec/fetchSnecStatus',
	async (params: IParams) => {
		const { sortedValue, orderValue } = params
		const { data } = await axios.get(
			`https://642ea9b02b883abc6413abe7.mockapi.io/piz/pizza?sortBy=${sortedValue}&order=${
				orderValue ? 'desc' : 'asc'
			}`
		)
		return data
	}
)

interface IInitialState {
	items: IData[],
	status: string
}

const initialState: IInitialState = {
	items:[],
	status: 'loding' // loading || success || error
}
export const SnecGetSlice = createSlice({
	name:'snecGet',
	initialState,
	reducers:{},
	extraReducers: builder => {
		builder.addCase(fetchSneckersGet.pending, (state) => {
			state.status = 'loading'
			state.items = []
		})
		builder.addCase(fetchSneckersGet.fulfilled, (state, action) => {
			state.status = 'success'
			state.items = action.payload
		})
		builder.addCase(fetchSneckersGet.rejected, (state) => {
			state.status = 'error'
			state.items = []
		})
	}
})

export default SnecGetSlice.reducer