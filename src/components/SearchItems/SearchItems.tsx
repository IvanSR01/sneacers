import { FC, useContext } from 'react'
import SnecBlock from '../SnecBlock/SnecBlock'
import { SearchContext } from '../../Provider/SearchProvider'
import { IData } from '../../Types/data'

interface ISearchItems {
	items: IData[]
}

const SearchItems: FC<ISearchItems> = ({items}) => {
	const { value } = useContext(SearchContext)
	return (
		<>
			 {items
        .filter((item) => {
          return item.title.toLowerCase().includes(value.toLowerCase())
        })
        .map((item) => (
          <SnecBlock {...item} key={item.id} />
        ))}
		</>
	)
}

export default SearchItems
