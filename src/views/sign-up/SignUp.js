import React from 'react'
import { ViewContainer, ActionsContainer, MainActionButton, LogoContainer, Input } from '../../components'
import { Link } from 'react-router-dom'
import logo from '../../images/nurse-transparente.png'
import styled from 'styled-components'

const SignUpButton = () => {
  return (
    <Link to='/sign-in'>
      <MainActionButton onClick={() => console.log('sign in')}>
        Registrarme
      </MainActionButton>
    </Link>
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
  return (
    <ViewContainer>
      <LogoContainer >
        <Logo src={logo} alt="Nurse Planner"/>
      </LogoContainer>
      <SignUpForm />
      <ActionsContainer>
        <SignUpButton />
        <LogInText/>
      </ActionsContainer>
    </ViewContainer>
  )
}

const SignUpFormContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const SignUpForm = () => {
  return (
    <SignUpFormContainer>
      <form>
        <Input label="E-Mail" />
        <Input label="Contraseña" type="password" autocomplete="new-password"/>
        <Input label="Confirma tu Contraseña" type="password" autocomplete="new-password"/>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpView
