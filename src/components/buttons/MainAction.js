import React from 'react'
import Button from './Base'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  width: 80%;
  margin: 1% 10%;
  background-color: #5fb8cf;
  color: white;
  border: none;
  height: 3rem;
  font-size: 1.5rem
`

export default (props) => <StyledButton {...props} />
