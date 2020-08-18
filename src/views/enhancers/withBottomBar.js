import React from 'react'
import styled from 'styled-components'
import { BottomBar } from '../../components'

const withBottomBar = View => {
  return props => (
    <MainContainer>
      <View {...props} />
      <BottomBar />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
`

export default withBottomBar