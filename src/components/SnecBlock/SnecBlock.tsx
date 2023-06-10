import { useState, FC } from 'react'
import styles from './SnecBlock.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ISnecBlock } from '../../Types/data'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { buyOnClick, removeOnClick } from '../../redux/slice/basketSlice'
import { likeOnClick, removeLikeOnClick } from '../../redux/slice/likeSlice'
const SnecBlock: FC<ISnecBlock> = ({ id, title, price, imgUrl }) => {
	const pVariants = {
		hidden: {
			y: '120px',
			opacity: 0
		},
		visible: {
			y: '0px',
			opacity: 1
		}
	}
	const [isBuy, setIsbuy] = useState(false)
	const [isLike, setIsLike] = useState(false)
	const { items } = useAppSelector(state => state.basket)
	const itemsLike = useAppSelector(state => state.like.itemsLike)
		const item: ISnecBlock = {
			id,
			title,
			price,
			imgUrl
		}
			const dispatch = useAppDispatch()
		useEffect(() => {
			const findItem = items.find(el => el.id === item.id)
			if (findItem) {
				setIsbuy(true)
			} else {
				setIsbuy(false)
			}
			const findItemLike = itemsLike.find(el => el.id === item.id)
			if (findItemLike) {
				setIsLike(true)
			} else {
				setIsLike(false)
			}
		}, [items, itemsLike])
		const onClickLike = () => {
			if (isLike) {
				dispatch(removeLikeOnClick(item))
			} else {
				dispatch(likeOnClick(item))
			}
		}
		const onClickBuyOrRemove = () => {
			if (isBuy) {
				dispatch(removeOnClick(item))
			} else {
				dispatch(buyOnClick(item))
			}
		}
	return (
		<motion.div
			variants={pVariants}
			initial={'hidden'}
			animate={'visible'}
			transition={{
				duration: 1
			}}
			className={styles.wrapper}
		>
				<button
					onClick={() => onClickLike()}
					className={`${styles.likes} ${isLike ? styles.isLike : ''}`}
				>
					<AiOutlineHeart className={styles.svg} />
				</button>
				<div className={styles.main}>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={imgUrl} alt='' />
					</div>
					<div className={styles.desc}>
						<p>{title}</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<div className={styles.price}>
							<span>Цена:</span>
							<p>{price}руб.</p>
						</div>
						<div className={`${styles.buy} ${isBuy ? styles.isBuy : ''} `}>
							<button onClick={() => onClickBuyOrRemove()}>
								{isBuy ? <img src='/public/bi_check-lg.svg' /> : <BsPlusLg className={styles.svg} />}
							</button>
						</div>
					</div>
				</div>
		</motion.div>
	)
}

export default SnecBlock
