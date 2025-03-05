import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'

function App() {
	const ctxData = useContext(AuthContext)

	return (
		<>
			<MainHeader />
			<main>
				{!ctxData.isLoggedIn && <Login />}
				{ctxData.isLoggedIn && <Home />}
			</main>
		</>
	)
}

export default App
