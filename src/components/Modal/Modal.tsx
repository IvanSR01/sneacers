import styles from './Modal.module.scss'
import { FC, forwardRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import FilledBasket from './filledBasket/FilledBasket'
import { setIsOpen } from '../../redux/slice/basketSlice'
import IsEmpty from './isEmpty'
import IsSuccess from './isSuccess'

interface I {
	ref?: any
}

const Modal: FC<I> = forwardRef<HTMLDivElement>((props, ref) => {
	const dispatch = useAppDispatch()
	const { openValue, items } = useAppSelector(state => state.basket)
	const [isSuccess, setIsSuccess] = useState(false)
	return (
		<div
			id='wrapper'
			className={`${styles.wrapper} ${openValue ? '' : styles.hidden}`}
		>
			<div
				ref={ref}
				className={`${styles.content} ${openValue ? '' : styles.hiddenContent}`}
			>
				<div className={styles.header}>
					Корзина
					<img
						src='public/img_229857.png'
						alt=''
						onClick={() => dispatch(setIsOpen(false))}
					/>
				</div>
				{items.length === 0 ? (
					<>
						{isSuccess ? (
							<IsSuccess setIsSuccess={() => setIsSuccess(!isSuccess)} />
						) : (
							<IsEmpty />
						)}
					</>
				) : (
					<FilledBasket setIsSuccess={() => setIsSuccess(true)} />
				)}
			</div>
		</div>
	)
})

export default Modal
