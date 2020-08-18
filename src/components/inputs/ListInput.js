import React, { useState } from 'react'
import { isEmpty, map } from 'ramda'
import { Input } from './index'

const createNewTemporalUser = user => user

const ListInput = ({label, list, onChangeList, Card, error, errorMessage}) => {
  const [ currentText, setCurrentText ] =  useState('')
  const [ selectedOption, setSelectedOption ] = useState(null)

  const [errors, setErrors] = useState(null)

  const onChangeText = evt => setCurrentText(evt.target.value)
  const handleCommand = evt => {
    try {
      if (evt.key === 'Enter') addToList()
    } catch (error) {
      setErrors({ message: 'Ocurrió un error!' })
    }
  }

  const addToList = () => {
    if ( !isEmpty(selectedOption) ) onChangeList([...list, selectedOption])
    if ( !isEmpty(currentText) ) onChangeList([...list, createNewTemporalUser({name: currentText})])
    setSelectedOption(null)
    setCurrentText('')
  }

  return (
    <>
      <Input
        label={label}
        value={currentText}
        onChange={onChangeText}
        onKeyPress={handleCommand}
        error={error || errors}
        errorMessage={errorMessage || errors?.message}
      />
      {map(Card , list)}
    </>
  )
}

export default ListInput
