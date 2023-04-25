import React from 'react'
import styles from '../Like/Like.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
const NotBuy = () => {
	return (
		<div className={styles.ntlWrapper}>
      <div className={styles.ntlContent}>
        <img src="public/servicesImg/smail/image 10.png" alt="" />
        <h2>У вас нет заказов</h2>
        <p>Вы нищеброд? <br/> Оформите хотя бы один заказ.</p>
        <Link to='/' style={{textDecoration: "none"}}>
          <Button>
            <img src="public/Group.png" alt="" /> 
						Вернуться назад
          </Button>
        </Link>
      </div>
    </div>
	)
}

export default NotBuy
