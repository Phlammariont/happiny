import { useHistory } from 'react-router-dom'
import { SecondActionButton } from '../index'
import React from 'react'

const BackButton = () => {
  const history = useHistory()
  const back = () => history.goBack()
  return (
    <SecondActionButton onClick={back}>
      Cancelar
    </SecondActionButton>
  )
}

export default BackButton
