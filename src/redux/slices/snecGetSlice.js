import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSneckersGet = createAsyncThunk("snec/fetchSnecStatus" , async ({sortedValue, descValue}) => {
		const res = await axios.get(`https://642ea9b02b883abc6413abe7.mockapi.io/piz/pizza?sortBy=${sortedValue}&order=${descValue ? 'desc' : 'asc'}`) 
		return res.data
})
const initialState = {
		items:[],
		status:'loading' // loading || success || error
}

export const snecGetSlice = createSlice({
	name: 'snecGet',
	initialState,
	reducers:{
		setItems: (state, value) =>{
			state.items = value.payload;
		}
	},
	extraReducers: {
		[fetchSneckersGet.pending]: (state, value) =>{
			state.status = 'loading';
			state.items = []
		},
		[fetchSneckersGet.fulfilled]: (state, value) =>{
			state.items = value.payload 
			state.status = 'success'
		},
		[fetchSneckersGet.rejected]: (state, value) =>{
			state.items = []
			state.status = 'error'
			alert('На сайте ошибка допилите за меня')
		}
	}
})
export const { setItems} = snecGetSlice.actions;

export default snecGetSlice.reducer;