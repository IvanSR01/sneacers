import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import snecGetSlice from './slices/snecGetSlice'
import basketSlice from './slices/basketSlice'
import likeSlice from './slices/likeSlice'

export const store = configureStore({
	reducer:{
		filter: filterSlice,
		get: snecGetSlice,
		basket:basketSlice,
		like: likeSlice
	}
})