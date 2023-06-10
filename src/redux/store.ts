import { configureStore } from "@reduxjs/toolkit";
import SnecGetSlice from "./slice/SnecGetSlice";
import filterSlice from "./slice/filterSlice";
import basketSlice from "./slice/basketSlice";
import likeSlice from "./slice/likeSlice";

const store = configureStore({
	reducer:{
		snec: SnecGetSlice,
		filter: filterSlice,
		basket: basketSlice,
		like: likeSlice
	}
})

export default store 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch