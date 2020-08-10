import React, { useState } from 'react'
import {
  ActionsContainer,
  BottomTextLinkContainer,
  Input,
  Logo,
  LogoContainer,
  MainActionButton,
  MainFormContainer,
  ViewContainer,
} from '../../components'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/nurse-transparente.png'
import { createUser } from '../../service/auth'
import { isEmpty, pathOr } from 'ramda'

const PASSWORD_ERROR = 'Las contraseñas deben tener mas de 5 caracteres y ser iguales'
const EMAIL_ERROR = 'Recuerda agregar un email válido'
const EMAIL_ALREADY_USE_ERROR = 'Este E-Mail ya se encuentra conectado a una cuenta'

const emailHasError = pathOr(false, ['email', 'hasError'])
const passwordHasError = pathOr(false, ['password', 'hasError'])
const passwordRepeatHasError = pathOr(false, ['passwordRepeat', 'hasError'])
const getEmailError = pathOr(EMAIL_ERROR, ['email', 'message'])
const getPasswordError = pathOr(EMAIL_ERROR, ['password', 'message'])
const getPasswordRepeatError = pathOr(EMAIL_ERROR, ['passwordRepeat', 'message'])

const SignUpButton = ({ onClick, setError }) => {
  const history = useHistory()
  const signUp = async () => {
    try {
      await onClick()
      history.push('/dashboard')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') setError({
        email: {
          hasError: true,
          message: EMAIL_ALREADY_USE_ERROR,
        },
      })
    }
  }

  return (
    <MainActionButton onClick={signUp}>
      Registrarme
    </MainActionButton>
  )
}

const LogInText = () => {
  return (
    <BottomTextLinkContainer>
      <Link to="/sign-in">
        <span>Tienes una cuenta con nosotros?</span><br/><span>Inicia Sesión aquí</span>
      </Link>
    </BottomTextLinkContainer>
  )
}

const SignUpView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [errors, setErrors] = useState({})

  const signUpFormIsNotComplete = () => {
    return isEmpty(email) || isEmpty(password) || isEmpty(passwordRepeat)
  }

  const validateForm = () => ({
    email: {
      hasError: isEmpty(email),
      message: EMAIL_ERROR,
    },
    password: {
      hasError: isEmpty(password) || password.length < 6,
      message: PASSWORD_ERROR,
    },
    passwordRepeat: {
      hasError: isEmpty(passwordRepeat) || password !== passwordRepeat,
      message: PASSWORD_ERROR,
    },
  })

  const signUp = async () => {
    if (signUpFormIsNotComplete()) {
      setErrors(validateForm())
      throw new Error('signUpFormIsNotComplete')
    }
    if (password !== passwordRepeat) {
      setErrors(validateForm())
      throw new Error('invalidPasswords')
    }
    await createUser({ email, password })
  }

  const handleChange = field => event => {
    setErrors({ ...errors, [field]: {} })
    if (field === 'email') return setEmail(event.target.value)
    if (field === 'password') return setPassword(event.target.value)
    if (field === 'passwordRepeat') return setPasswordRepeat(event.target.value)
  }

  return (
    <ViewContainer>
      <LogoContainer>
        <Logo src={logo} alt="Nurse Planner"/>
      </LogoContainer>
      <SignUpForm
        email={email}
        password={password}
        passwordRepeat={passwordRepeat}
        handleChange={handleChange}
        errors={errors}/>
      <ActionsContainer>
        <SignUpButton onClick={signUp} setError={setErrors}/>
        <LogInText/>
      </ActionsContainer>
    </ViewContainer>
  )
}

const SignUpForm = ({ email, password, passwordRepeat, handleChange, errors }) => {
  return (
    <MainFormContainer>
      <form>
        <Input label="E-Mail" autoComplete="username" value={email} onChange={handleChange('email')}
               error={emailHasError(errors)} errorMessage={getEmailError(errors)}/>
        <Input label="Contraseña" type="password" autoComplete="new-password" value={password}
               onChange={handleChange('password')} error={passwordHasError(errors)}
               errorMessage={getPasswordError(errors)}/>
        <Input label="Confirma tu Contraseña" type="password" autoComplete="new-password"
               value={passwordRepeat} onChange={handleChange('passwordRepeat')} error={passwordRepeatHasError(errors)}
               errorMessage={getPasswordRepeatError(errors)}/>
      </form>
    </MainFormContainer>
  )
}

export default SignUpView
