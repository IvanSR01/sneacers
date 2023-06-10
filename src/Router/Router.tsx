import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Like from '../pages/Like/Like'
import OrderHistory from '../pages/OrderHistory/OrderHistory'
const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/like' element={<Like/>}/>
			<Route path='/orders' element={<OrderHistory/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Routes>
	)
}

export default Router
