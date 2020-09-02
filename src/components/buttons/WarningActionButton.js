import React from 'react'
import Button from './Base'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  width: 80%;
  margin: 1% 10%;
  background-color: white;
  color: #084B83;
  border: none;
  height: 3rem;
  font-size: 1.5rem;
  border: 2px solid #084B83;
`

export default (props) => <StyledButton {...props} />
