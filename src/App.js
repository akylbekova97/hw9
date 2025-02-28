import React, { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	// App'тын тукущее состояниясы,  функция которая обновляет состояние = начальное состояния(false)

	useEffect(() => {
		const userIsLoggidInfo = localStorage.getItem('isLoggedIn')

		if (userIsLoggidInfo === 'hello') {
      // если значение  userIsLoggidInfo  равно  'hello'
			setIsLoggedIn(true) 
       // setIsLoggedIn  true болот
		}
	}, [])

	const loginHandler = (email, password) => {
		localStorage.setItem('isLoggedIn', 'hello')
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
    // logoutHandler иштегенде
		setIsLoggedIn(false)
    // setIsLoggedIn  false болот 
		localStorage.removeItem('isLoggedIn')
    // удаления данных из localStorage
	}

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {/* пропс катары isLoggedIn(состояние) onLogout(поднятие кылыш учун) */}
			<main>
        {/*  условный рендеринг: */}
				{!isLoggedIn && <Login onLogin={loginHandler} />}
        {/* эгер isLoggedIn true болсо Login иштейт */}
				{isLoggedIn && <Home />}
        {/*  эгер isLoggedIn false  болсо Home иштейт  */}
			</main>
		</React.Fragment>
	)
}

export default App
