import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../style'
import { FormControlContainer } from '../layout/FormControlContainer'

export const Label = styled.label`
  color: gray;
  
  &.active {
    color: #5fb8cf;
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  text-align: center;
  border-bottom: 1px solid ${props => props.error ? COLORS.ERROR : COLORS.INACTIVE};
  font-size: 1rem;
  
  &:focus {
    border-bottom: 1px solid ${props => props.error ? COLORS.ERROR : COLORS.ACTIVE};
    outline: none;
  }
`
const ErrorContainer = styled.div`
  text-align: right;
`
const ErrorSpan = styled.span`
  font-style: italic;
  font-size: 0.9rem;
  color: red;
`

const Input = ({ error, errorMessage, label, type, ...rest }) => {
  const [focus, setFocus] = useState(false)

  return (
    <FormControlContainer>
      <Label className={focus ? 'active' : ''} htmlFor={`txt-${label}`}>{label}</Label>
      <StyledInput
        id={`txt-${label}`} type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        error={error}
        {...rest}
      />
      { error && errorMessage && <ErrorContainer><ErrorSpan>{errorMessage}</ErrorSpan></ErrorContainer>}
    </FormControlContainer>
  )
}

export default Input
