import { FC, ReactNode, createContext, useState } from 'react'

interface ISearchContext {
	value: string;
	setValue?: (value: string) => void;
}
const defultValue = {
	value: '',
}
export const  SearchContext = createContext<ISearchContext>(defultValue)

interface ISeacrhProvider {
	children: ReactNode
}

const SearchProvider: FC<ISeacrhProvider> = ({children}) => {
	const [value, setValue] = useState<string>('')
	return (
		<SearchContext.Provider value={{value, setValue}}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
