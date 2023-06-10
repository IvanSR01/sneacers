import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Headet.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { setIsOpen } from '../../redux/slice/basketSlice'
import { AiOutlineHeart } from 'react-icons/ai'
const Header: FC = () => {
	const dispatch = useAppDispatch()
	const totalPrice = useAppSelector(state => state.basket.totalPrice)
	const itemsLike = useAppSelector(state => state.like.itemsLike)
	return (
		<div className={styles.header}>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<div className={styles.logo}>
					<div>
						<img src='public/image 4.png' alt='' />
					</div>
					<div>
						<h2>REACT SNEAKERS</h2>
						<span>Магазин лучших кроссовок</span>
					</div>
				</div>
			</Link>
			<div className={styles.options}>
				<div className={styles.link}>
					<div
						onClick={() => dispatch(setIsOpen(true))}
						className={styles.basket}
					>
						<img src='public/basket.svg' alt='' />
						<span>{totalPrice} руб</span>
					</div>
					<Link style={{ textDecoration: 'none' }} to='/like'>
						<AiOutlineHeart
							className={`${styles.svg} ${
								itemsLike.length > 0 ? styles.svgActive : ''
							}`}
						/>
					</Link>
					<Link to='/orders'>
						<img src='public/Union.svg' alt='' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
