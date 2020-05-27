import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import React from 'react'

const TopContainer = styled.div`
  display: flex;
`

const BackButton = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>back</button>
    </div>
  )
}

const BackButtonContainer = withRouter(BackButton)

const TopBar = () => {
  return (
    <TopContainer>
      <BackButtonContainer />
    </TopContainer>
  )
}

export default TopBar
