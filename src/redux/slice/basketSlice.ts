import { createSlice } from '@reduxjs/toolkit'
import { ISnecBlock } from '../../Types/data'

interface IBasket {
	openValue: boolean
	items: ISnecBlock[]
	totalPrice: number
	totalCount: number
	shopCount: number
	buyItems: ISnecBlock[]
}

const initialState: IBasket = {
	openValue: false,
	items: [],
	totalPrice: 0,
	totalCount: 0,
	shopCount: 0,
	buyItems: []
}

const updateTotal = (state: any) => {
	state.totalPrice = state.items.reduce((sum: number, obj: ISnecBlock) => {
		return Number(obj.price) + sum
	}, 0)
	state.totalCount = state.items.reduce((sum: number, obj: ISnecBlock) => {
		return Math.ceil(Number(obj.price) * 0.05 + sum)
	}, 0)
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setIsOpen: (state, { payload }) => {
			state.openValue = payload
		},
		buyOnClick: (state, { payload }) => {
			state.items.push(payload)
			updateTotal(state)
		},
		removeOnClick: (state, { payload }) => {
			const findItem: ISnecBlock | undefined = state.items.find(
				obj => obj.id === payload.id
			)
			if (findItem) {
				const findIndex: number = state.items.indexOf(findItem)
				state.items.splice(findIndex, findIndex + 1)
				updateTotal(state)
			}
		},
		buyToAll: state => {
			state.shopCount = state.shopCount + 1
			state.items.forEach(item => {
				state.buyItems.push(item)
			})
			state.items = []
			updateTotal(state)
		}
	}
})

export const {setIsOpen, buyOnClick, removeOnClick , buyToAll } = basketSlice.actions;

export default basketSlice.reducer;