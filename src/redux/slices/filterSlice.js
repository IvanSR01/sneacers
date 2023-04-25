import { createSlice } from "@reduxjs/toolkit";

const initialState = {
		sortValue:0,
		descValue:true
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers:{
		sorted: (state, value) =>{
			state.sortValue = value.payload
		},
		descOnClick: (state, value) => {
			state.descValue = value.payload
		}
	}
})
export const { sorted , descOnClick} = filterSlice.actions;

export default filterSlice.reducer;