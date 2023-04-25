import { createSlice } from "@reduxjs/toolkit";

const initialState = {
		openValue:false,
		items:[],
		totalPrice:0,
		totalCount:0,
		checkValue:false,
		shopCount:0,
		buyItems:[]
}

const updatedTotal = (state) => {
	state.totalPrice = state.items.reduce((sum, obj) => {return Number(obj.price) + sum}, 0)
	state.totalCount =  state.items.reduce((sum, obj) => {return Math.ceil((Number(obj.price) * 0.05) + sum)}, 0)
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers:{
		setIsOpen: (state, value) => {
			state.openValue = value.payload;
		},
		buyOnClick: (state,value) => {
			state.items.push(value.payload)
			updatedTotal(state)
		},
		removeOnClick: (state,value) => {
			const findItem = state.items.find(obj => obj.id === value.payload.id)
			const findIndex = state.items.indexOf(findItem)
			state.items.splice(findIndex, findIndex + 1)
			updatedTotal(state)
		},
		buyToAll: (state) => {
			state.shopCount = state.shopCount + 1;
			state.items.forEach((item) => {
				state.buyItems.push(item)
			})
			state.items = []
			updatedTotal(state)
		},
		updateAllCheck: (state, value) => {
			state.checkValue = value.payload
		}
	}
})
export const {setIsOpen, buyOnClick, removeOnClick , buyToAll , updateAllCheck} = basketSlice.actions;

export default basketSlice.reducer;