import React, { useEffect, useState } from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState('')
  // input(email) состояниясы
	const [emailIsValid, setEmailIsValid] = useState()
  // input(email) ошибка болгондо стилдери иштеш учун состояние 
	const [enteredPassword, setEnteredPassword] = useState('')
    // input(Password) состояниясы
	const [passwordIsValid, setPasswordIsValid] = useState()
  // input(Password) ошибка болгондо стилдери иштеш учун состояние 
	const [formIsValid, setFormIsValid] = useState(false)
  // бул состояние button иштеш учун колдонулат

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value)
    // функция которая обновляет состояние(значение инпута)
		setFormIsValid(
			event.target.value.includes('@') &&
				enteredPassword.trim().length > 6,
      // @'бар болсо  &&  значение инпута  пробелдерди алганда 6'дан коп болсо 
		)
    // оператор && биринчи false табат, эгерде условиялар true болсо setFormIsValid true болот

	}

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value)
    // функция которая обновляет состояние(значение инпута)

		setFormIsValid(
			event.target.value.trim().length > 6 && enteredEmail.includes('@'),
      // значение инпута  пробелдерди алганда 6'дан коп болсо &&  @'бар болсо
		)
    // оператор && биринчи false табат, эгерде условиялар true болсо setFormIsValid true болот
	}


	// useEffect(() => {
	//   console.log('rerender useEffect' );
	// }, [enteredEmail] )

	// console.log('rerender' );


	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes('@'))
    // setEmailIsValid = enteredEmail ичинде @'бар болсо true жок болсо false
	}

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6)
    // setPasswordIsValid = enteredPassword пробелдерди алганда 6'дан коп болсо true жок болсо false
	}

	const submitHandler = (event) => {
		event.preventDefault() 
    // отменяет стандартное поведение элемента в браузере
		props.onLogin(enteredEmail, enteredPassword)
    // форм иштегенде поднятие кылган функция
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailIsValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={enteredEmail}
						onChange={emailChangeHandler}
            // инпут басылганда функция иштейт
						onBlur={validateEmailHandler}
						// инпуттан фокус алынганда иштейт
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={enteredPassword}
						onChange={passwordChangeHandler}
            // инпут басылганда функция иштейт
						onBlur={validatePasswordHandler}
						// инпуттан фокус алынганда иштейт
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
