import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
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
import { isEmpty, pathOr } from 'ramda'
import logo from '../../images/nurse-transparente.png'
import { authenticateUser } from '../../service/auth'

const PASSWORD_ERROR = 'Olvidaste ingresar tu contraseña?'
const EMAIL_ERROR = 'Recuerda iniciar sesión con tu email'

const emailHasError = pathOr(false, ['email', 'hasError'])
const passwordHasError = pathOr(false, ['password', 'hasError'])
const getEmailError = pathOr(EMAIL_ERROR, ['email', 'message'])
const getPasswordError = pathOr(EMAIL_ERROR, ['password', 'message'])

const SignInButton = ({ onClick, setErrors }) => {
  const history = useHistory()
  const signIn = async () => {
    try {
      await onClick()
      history.push('/dashboard')
    } catch (error) {
      if (error.code === '') setErrors({ email: { hasError: true, message: error.message } })
    }
  }
  return (
    <MainActionButton onClick={signIn}>
      Sign In
    </MainActionButton>
  )
}

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleChange = field => event => {
    setErrors({ ...errors, [field]: {} })
    if (field === 'email') return setEmail(event.target.value)
    if (field === 'password') return setPassword(event.target.value)
  }

  const signInFormIsNotComplete = () => {
    return isEmpty(email) || isEmpty(password)
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
  })

  const signIn = async () => {
    if (signInFormIsNotComplete()) {
      setErrors(validateForm())
      throw new Error('signInFormIsNotComplete')
    }
    await authenticateUser({ email, password })
  }

  return (
    <ViewContainer>
      <LogoContainer>
        <Logo src={logo} alt="Nurse Planner"/>
      </LogoContainer>
      <SignInForm
        email={email}
        password={password}
        errors={errors}
        handleChange={handleChange}/>
      <ActionsContainer>
        <SignInButton onClick={signIn} setError={setErrors}/>
        <LogInText/>
      </ActionsContainer>
    </ViewContainer>
  )
}

const SignInForm = ({ email, password, errors, handleChange }) => {
  return (
    <MainFormContainer>
      <form>
        <Input label="E-Mail" autoComplete="username" value={email} onChange={handleChange('email')}
               error={emailHasError(errors)} errorMessage={getEmailError(errors)}/>
        <Input label="Contraseña" type="password" autoComplete="new-password" value={password}
               onChange={handleChange('password')} error={passwordHasError(errors)}
               errorMessage={getPasswordError(errors)}/>
      </form>
    </MainFormContainer>
  )
}


const LogInText = () => {
  return (
    <BottomTextLinkContainer>
      <Link to="/sign-up">
        <span>Si no tienes una cuenta con nosotros?</span><br/><span>Crea una cuenta aquí</span>
      </Link>
    </BottomTextLinkContainer>
  )
}

export default SignIn