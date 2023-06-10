import { FC } from 'react'
import './assets/global.scss'
import Header from './components/Header/Header'
import Router from './Router/Router'
const App: FC = () => {
	return (
		<div className='body'>
			<Header />
			<div id='body'>
				<Router />
			</div>
		</div>
	)
}

export default App
