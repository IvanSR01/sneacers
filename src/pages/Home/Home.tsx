import { FC, useEffect, useRef } from 'react'
import { data } from './data'
import styles from './Home.module.scss'
import Button from '../../components/UI/Button/Button'
import Search from '../../components/Search/Search'
import Sorted from '../../components/Sorted/Sorted'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import Loader from '../../components/Loader/Loader'
import SearchItems from '../../components/SearchItems/SearchItems'
import { fetchSneckersGet } from '../../redux/slice/SnecGetSlice'
import Modal from '../../components/Modal/Modal'
import { setIsOpen } from '../../redux/slice/basketSlice'
const Home: FC = () => {
	const { items, status } = useAppSelector(state => state.snec)
	const dispatch = useAppDispatch()
	const { sortValue, orderValue } = useAppSelector(state => state.filter)
	const buyItem = () => {
		window.scrollTo({
			top: 700,
			behavior: 'smooth'
		})
	}
	useEffect(() => {
		const fetch = async() => {
			const sortedValue = data[sortValue].sorteding
			dispatch(fetchSneckersGet({sortedValue, orderValue}))
		}
		fetch()
	}, [sortValue, orderValue])
	const modalRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (!path.includes(modalRef.current)) {
				dispatch(setIsOpen(false))
			}
		}
		(document.querySelector('#body') as HTMLInputElement).addEventListener('click', handleClick)

		return () => {
			(document.querySelector('#body') as HTMLInputElement).removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className={styles.Home} >
			<div className={styles.stocks}>
				<div className={styles.col__left}>
					<p>
						<span>Stan Smith</span>, Forever!
					</p>
					<Button onClick={() => buyItem()}>Купить</Button>
				</div>
				<div className={styles.col__right}>
					<img src='public/image 6.png' alt='' />
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.title}>
					<h2>Все кроссовки</h2>
					<Search />
					<Sorted data={data} />
				</div>
				<div className={styles.items}>
					{status === 'loading' ? <Loader /> : <SearchItems items={items} />}
				</div>
			</div>
			<Modal ref={modalRef}/>
		</div>
	)
}

export default Home
