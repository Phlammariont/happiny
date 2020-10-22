import React from 'react'
import { ActionsContainer, MainActionButton, ViewContainer } from '../../components'
import { signOut } from '../../service/auth'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'

const SignOutButton = () => {
  const history = useHistory()
  const onSignOut = async () => {
    await signOut()
    history.push(ROUTES.APP.SIGN_IN)
  }
  return (
    <MainActionButton onClick={onSignOut}>
      Cerrar Sesión
    </MainActionButton>
  )
}

const Profile = (props) => {
  console.log('my current props: ', props)

  return (
    <ViewContainer>
      oi mundo
      <ActionsContainer>
        <SignOutButton />
      </ActionsContainer>
    </ViewContainer>
  )
}

export default Profile
