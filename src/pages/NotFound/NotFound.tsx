import { FC } from 'react'
import styles from './NotFound.module.scss'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'
const NotFound: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<p> Ничего не найдено</p>
				<Link style={{textDecoration:'none'}} to='/'>
					<Button>На главную</Button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
