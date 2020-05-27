import React, {useState} from 'react'
import styled from 'styled-components'

const Label = styled.label`
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
  border-bottom: 1px solid gray;
  font-size: 1rem;
  
  &:focus {
    border-bottom: 1px solid #5fb8cf;
    outline: none;
  }
`

const InputContainer = styled.div`
  margin: 5px;
`

const Input = ({label, type}) => {
  const [focus, setFocus] = useState(false)

  return (
    <InputContainer>
      <Label className={focus?'active':''} htmlFor={`txt-${label}`}>{label}</Label>
      <StyledInput
        id={`txt-${label}`} type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        />
    </InputContainer>
  )
}

export default Input
