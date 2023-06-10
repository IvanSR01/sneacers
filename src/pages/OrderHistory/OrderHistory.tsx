import { FC } from 'react'
import styles from '../Like/Like.module.scss'
import { useAppSelector } from '../../redux/hook';
import NotOrder from './NotOrder';
import SnecBlock from '../../components/SnecBlock/SnecBlock';
const OrderHistory: FC = () => {
	const buyItems = useAppSelector(state => state.basket.buyItems)
	return (
		<>
		{buyItems.length === 0 ? <></>: <div className={styles.header}>Мои покупки</div>}
		<div className={styles.wrapper}>
			{buyItems.length === 0 ? (
				<NotOrder />
			) : (
				<>
					{buyItems.map((item, i) => (
						<SnecBlock {...item} key={i}  />
					))}
				</>
			)}
		</div>
	</>
	)
}

export default OrderHistory
