import { createSlice } from "@reduxjs/toolkit";

const initialState ={
	itemsLike: []
}


const likeSlice = createSlice({
	name:'like',
	initialState,
	reducers:{
		likeOnClick: (state, value) => {
			state.itemsLike.push(value.payload)
		},
		removeLikeOnClick: (state,value) =>{
			const findItem = state.itemsLike.find(obj => obj.id === value.payload.id)
			const findIndex = state.itemsLike.indexOf(findItem)
			state.itemsLike.splice(findIndex, findIndex + 1)
		},
		removeAllOnClick: (state) => {
			state.itemsLike = []
		}
	}
})
export const {likeOnClick , removeAllOnClick,removeLikeOnClick} = likeSlice.actions;

export default likeSlice.reducer;