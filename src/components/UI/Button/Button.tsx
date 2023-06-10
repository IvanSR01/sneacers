import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
type TypeButton = {
	children: ReactNode,
	onClick?: () => void
}
const Button: FC<TypeButton> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={styles.myButton}>
			{children}
		</button>
	)
}

export default Button
