import React from 'react'
import styled from 'styled-components'
import { MainActionButton, SecondActionButton, ViewContainer, ActionsContainer, LogoContainer } from '../../components'
import logo from '../../images/nurse-transparente.png'
import {Link} from 'react-router-dom'

const HomeContainer = styled(ViewContainer)`
  color: white;
`

const LegendContainer = styled.div`
  height: 25vh
`

const Logo = styled.img`
  display: block;
  margin: 10vh auto;
`

const SignInButton = () => {
  return (
    <Link to='/sign-in'>
      <MainActionButton onClick={() => console.log('sign in')}>
        Iniciar Sesión
      </MainActionButton>
    </Link>
  )
}

const SignUpButton = () => {
  return (
    <Link to='/sign-up'>
      <SecondActionButton onClick={() => console.log('sign up')}>
        Crear Cuenta
      </SecondActionButton>
    </Link>
  )
}

const HomeView = () => {
  return (
    <HomeContainer>
      <LogoContainer >
        <Logo src={logo} alt="Nurse Planner"/>
      </LogoContainer>
      <LegendContainer>
        <span >Nurse Chansey</span>
      </LegendContainer>
      <ActionsContainer>
        <SignInButton />
        <SignUpButton />
      </ActionsContainer>
    </HomeContainer>
  )
}

export default HomeView