import { FC } from 'react'
import styles from './Modal.module.scss'
import Button from '../UI/Button/Button'
import { setIsOpen } from '../../redux/slice/basketSlice'
import { useAppDispatch } from '../../redux/hook'
const IsEmpty: FC= () => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.successOrEmpty}>
			<div className={styles.contentSuccessOrEmpty}>
				<img src='public/image 8.png' alt='' />
				<h2 className={styles.success}>Корзина пустая</h2>
				<span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
				<div className={styles.Button}>
					<Button onClick={() => dispatch(setIsOpen(false))}>
						<img src='public/Group.png' alt='' />
						Вернуться назад
					</Button>
				</div>
			</div>
		</div>
	)
}

export default IsEmpty
