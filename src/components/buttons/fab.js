import Button from "./Base"
import styled from "styled-components"
import React from 'react'

const getWidth = ({weight = 3}) => `${weight + 1}rem`
const getFontSize = ({weight = 3}) => `${weight}rem`

const FabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.25rem;
`

const ListFabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.25rem;
  position: fixed;
  bottom: 5rem;
  right: 1rem;
`

const FabLabel = styled.label`
`


const Fab = ({label, ...rest}) => {
  return (
    <FabContainer>
      <FAB id={"btn-" + label} {...rest}/>
      <FabLabel htmlFor={"btn-" + label}>{label}</FabLabel>
    </FabContainer>
  )
}

export const ListFab = ({label, ...rest}) => {
  return (
    <ListFabContainer>
      <FAB id={"btn-" + label} {...rest}/>
      <FabLabel htmlFor={"btn-" + label}>{label}</FabLabel>
    </ListFabContainer>
  )
}


const FAB = styled(Button)`
  background-color: #5fb8cf;
  color: white;
  border: none;
  font-size: ${getFontSize};
  width: ${getWidth};
  height: ${getWidth};
  border-radius: 2rem;
  margin: 0.25rem
`

export default Fab
