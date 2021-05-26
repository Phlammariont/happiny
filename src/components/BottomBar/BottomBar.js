import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EXPLORE = 'Principal'
export const CALENDAR = 'Calendario'

const BottomBarContainer = styled.div`
  position: fixed;
  top: 90vh;
  max-height: 10vh;
  width: 100%;
`

const BottomTabs = styled.div`
  background-color: #5fb8cf1f;
  border-radius: 2rem;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 3px 3px 2px 0 rgba(0, 0, 0, 0.5);
`

const BottomBar = ({ user, isLoading }) => {
  return (
    <BottomBarContainer>
      <LoadingBar isLoading={isLoading} />
      <BottomTabs>
        <Explore />
        <Calendar />
        <Profile user={user} />
      </BottomTabs>
    </BottomBarContainer>
  )
}

const LoadingBar = ({ isLoading }) => {
  return isLoading ? <div>...loading...</div> : null
}

const Explore = () => {
  return <BottomBarTab to="/dashboard">{EXPLORE}</BottomBarTab>
}

const Calendar = () => {
  return <BottomBarTab to="/calendar">{CALENDAR}</BottomBarTab>
}

const Profile = ({ user }) => {
  return <BottomBarTab to="/profile">{user.name || 'Perfil'}</BottomBarTab>
}

const BottomBarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const BottomBarTab = ({ children, to }) => {
  return (
    <BottomBarLink to={to}>
      <span>{children}</span>
    </BottomBarLink>
  )
}

export default BottomBar
