import styled from 'styled-components'
import { NothingHereIcon } from './icons'
import React from 'react'

const NothingHereContainer = styled.div`
    padding: 25%;
    text-align: center;
`
const NothingHere = () => (
  <NothingHereContainer>
    <NothingHereIcon/>
    <p>Nada Por Aquí</p>
  </NothingHereContainer>
)

export default NothingHere
