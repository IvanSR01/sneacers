import { FC } from 'react'
import { useAppSelector } from '../../redux/hook'
import NotLike from './NotLike'
import SnecBlock from '../../components/SnecBlock/SnecBlock'
import styles from './Like.module.scss'

const Like: FC = () => {
	const itemsLike = useAppSelector(state => state.like.itemsLike)
	return (
		<>
			{itemsLike.length === 0 ? (
				<></>
			) : (
				<div className={styles.header}>Мои закладки</div>
			)}
			{itemsLike.length === 0 ? (
				<NotLike />
			) : (
				<div className={styles.wrapper}>
					{itemsLike.map((item, i) => (
						<SnecBlock {...item} key={i} />
					))}
				</div>
			)}
		</>
	)
}

export default Like
