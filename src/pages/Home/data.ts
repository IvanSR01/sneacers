export const data: IDataSorted[] = [{name:'популярности', sorteding: 'rating'}, {name:'цене' , sorteding:"price",} , {name:'алфавиту', sorteding: 'title',}]
export interface IDataSorted {
	name: string,
	sorteding: string
}