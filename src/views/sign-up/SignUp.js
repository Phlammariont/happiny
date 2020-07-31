import React, { useState } from 'react'
import {
  ActionsContainer,
  Input,
  LogoContainer,
  MainActionButton,
  MainFormContainer,
  ViewContainer,
} from '../../components'
import { Link } from 'react-router-dom'
import logo from '../../images/nurse-transparente.png'
import styled from 'styled-components'
import { createUser } from '../../service/auth'
import { useHistory } from 'react-router-dom'

const PASSWORD_ERROR = 'Las contraseñas deben ser iguales'

const SignUpButton = ({ onClick }) => {
  const history = useHistory()
  const signUp = async () => {
    await onClick()
    history.push('/dashboard')
  }

  return (
    <MainActionButton onClick={signUp}>
      Registrarme
    </MainActionButton>
  )
}

const LoginTextContainer = styled.div`
  text-align: center;
`

const LogInText = () => {
  return (
    <LoginTextContainer>
      <Link to="/sign-in">
        <span>Tienes una cuenta con nosotros?</span><br/><span>Inicia Sesión aquí</span>
      </Link>
    </LoginTextContainer>
  )
}

const Logo = styled.img`
  display: block;
  margin: 5vh auto;
`

const SignUpView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [error, setError] = useState('')


  const signUp = async () => {
    if (password !== passwordRepeat) setError(PASSWORD_ERROR)
    await createUser({ email, password })
  }

  return (
    <ViewContainer>
      <LogoContainer>
        <Logo src={logo} alt="Nurse Planner"/>
      </LogoContainer>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordRepeat={passwordRepeat}
        setPasswordRepeat={setPasswordRepeat}
        error={error}/>
      <ActionsContainer>
        <SignUpButton onClick={signUp}/>
        <LogInText/>
      </ActionsContainer>
    </ViewContainer>
  )
}

const SignUpForm = ({ email, password, passwordRepeat, setEmail, setPassword, setPasswordRepeat, error }) => {
  return (
    <MainFormContainer>
      <form>
        <Input label="E-Mail" autoComplete="username" value={email} onChange={event => setEmail(event.target.value)}/>
        <Input label="Contraseña" type="password" autoComplete="new-password" value={password}
               onChange={event => setPassword(event.target.value)} />
        <Input label="Confirma tu Contraseña" type="password" autoComplete="new-password" error={error}
               value={passwordRepeat} onChange={event => setPasswordRepeat(event.target.value)} />
      </form>
    </MainFormContainer>
  )
}

export default SignUpView
