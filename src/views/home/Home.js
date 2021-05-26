import React from 'react'
import styled from 'styled-components'
import { ActionsContainer, LogoContainer, MainActionButton, SecondActionButton, ViewContainer } from '../../components'
import logo from '../../images/nurse-transparente.png'
import { Link, useHistory } from 'react-router-dom'
import { getUser } from '../../redux/selectors'
import { ROUTES } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'ramda'
import { AppActionCreator } from '../../redux'

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
      <MainActionButton>
        Iniciar Sesión
      </MainActionButton>
    </Link>
  )
}

const SignUpButton = () => {
  return (
    <Link to='/sign-up'>
      <SecondActionButton>
        Crear Cuenta
      </SecondActionButton>
    </Link>
  )
}

const HomeView = () => {
  const history = useHistory()
  const user = useSelector(getUser)
  const dispatch = useDispatch()
  if(!isEmpty(user)) {
    history.push(ROUTES.APP.DASHBOARD)
    dispatch(AppActionCreator.setLoading())
    return null
  }

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