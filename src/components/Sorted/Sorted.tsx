import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'
import styles from './Sorted.module.scss'
import { IDataSorted } from '../../pages/Home/data'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { onOrderValue, onSortedValue } from '../../redux/slice/filterSlice'
interface ISorted {
	data: IDataSorted[]
}

const Sorted: FC<ISorted> = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useAppDispatch()
	const { sortValue, orderValue } = useAppSelector(state => state.filter)
	const onClick = (i: number) => {
		setIsOpen(false)
		dispatch(onSortedValue(i))
	}
	const sortRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(sortRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className={styles.sorted} ref={sortRef}>
			<div className={styles.sortLabel}>
				<svg
					style={{ cursor: 'pointer' }}
					className={`${styles.sortArr} ${
						orderValue ? styles.activeSort : ''
					} `}
					onClick={() => dispatch(onOrderValue(!orderValue))}
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<div onClick={() => setIsOpen(!isOpen)}>
					<b>Сортировка по:</b>
					<span className={styles.options}>{data[sortValue].name}</span>
				</div>
			</div>
			<div className={`${styles.popupWindow} ${isOpen ? '' : styles.none}`}>
				<ul>
					{data.map((val, i) => (
						<li
							key={i}
							onClick={() => onClick(i)}
							className={`${sortValue === i ? styles.active : ''}`}
						>
							{val.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Sorted
