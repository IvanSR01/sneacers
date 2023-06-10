import { FC } from 'react'
import styles from './Modal.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { setIsOpen } from '../../redux/slice/basketSlice'
import Button from '../UI/Button/Button'

interface ISuccess {
	setIsSuccess: () => void
}

const IsSuccess: FC<ISuccess> = ({ setIsSuccess }) => {
	const dispatch = useAppDispatch()
	const shopValue = useAppSelector(state => state.basket.shopCount)
	const onClick = () => {
		dispatch(setIsOpen(!openValue))
		setIsSuccess()
	}
	const openValue = useAppSelector(state => state.basket.openValue)
	return (
		<div className={styles.successOrEmpty}>
			<div className={styles.contentSuccessOrEmpty}>
				<img
					className={styles.servicesImg}
					src='public/servicesImg/image 8.jpg'
					alt=''
				/>
				<h2>Заказ оформлен</h2>
				<span>
					Ваш заказ #{shopValue} скоро будет передан курьерской доставке
				</span>
				<Button onClick={() => onClick()}>
					<img src='public/Group.png' alt='' />
					Вернуться назад
				</Button>
			</div>
		</div>
	)
}

export default IsSuccess
//  className={styles.Button}