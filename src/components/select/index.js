import React, { useState } from 'react'
import styled from 'styled-components'
import { find, map, propEq } from 'ramda'
import { COLORS } from '../style'
import { FormControlContainer } from '../layout/FormControlContainer'
import { Label } from '../inputs/RegularInput'

const findById = (id, collection) => {
  return find(propEq('id', id), collection)
}

const Select = ({options, name, label, onChange}) => {
  const [ selection, setSelection ] = useState(false)
  const [focus, setFocus] = useState(false)

  const select = evt => {
    setSelection(evt.target.value)
    onChange({ selected: findById(evt.target.value, options) })
  }
  return (
    <FormControlContainer>
      <Label className={focus ? 'active' : ''} htmlFor={'select' + name} hidden={!selection}>{label}</Label>
      <StyledSelect
        id={'select' + name}
        name={name}
        onChange={select}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} >
        <option value={undefined}>Selecciona un {label}</option>
        {map(Option, options)}
      </StyledSelect>
    </FormControlContainer>
  )
}

const Option = option => <option value={option.id} key={option.id}>{option.label}</option>

const StyledSelect = styled.select`
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

export default Select
