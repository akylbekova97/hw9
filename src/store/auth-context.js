import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
	isLoggedIn: false,
	isLogout: () => {},
	onLogin: () => {},
})

export const AuthContextProvoiderComponent = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const userIsLoggidInfo = localStorage.getItem('isLoggedIn')

		if (userIsLoggidInfo === 'hello') {
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = (email, password) => {
		localStorage.setItem('isLoggedIn', 'hello')
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
		localStorage.removeItem('isLoggedIn')
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				isLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
