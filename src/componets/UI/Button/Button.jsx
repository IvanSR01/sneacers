import React from 'react'
import styles from './button.module.scss'
const Button = ({children, onClick}) => {
	return (
		<button onClick={onClick} className={styles.myButton}>
				{children}
		</button>
	)
}

export default Button
