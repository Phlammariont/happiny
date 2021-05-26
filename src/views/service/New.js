import React, { useState } from 'react'
import {
  ActionsContainer,
  BackButton,
  Input,
  InputNumber,
  MainActionButton,
  MainFormContainer,
  TitleContainer,
  ViewContainer,
  WarningActionButton,
} from 'components'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'
import serviceService from 'service/service'
import { useDispatch } from 'react-redux'
import { ServiceActionCreator } from 'redux/actions'
import { isNil } from 'ramda'

const nameHasError = (errors) => errors.name
const bossesNumberHasError = (errors) => errors.bossesNumber
const assistantsNumberHasError = (errors) => errors.assistantsNumber
const getNameError = (errors) => errors.name?.errors
const getBossesError = (errors) => errors.bossesNumber?.errors
const getAssistantsError = (errors) => errors.assistantsNumber?.errors

const NewTeam = ({ service = {} }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(service.name)
  const [bossesNumber, setBossesNumber] = useState(service.bossesNumber)
  const [assistantsNumber, setAssistantsNumber] = useState(service.auxNumber)
  const [errors] = useState({})

  const changeName = evt => setName(evt.target.value)
  const changeBossesNumber = evt => setBossesNumber(evt.target.value)
  const changeAuxNumber = evt => setAssistantsNumber(evt.target.value)

  const save = () => {
    if (isNil(service.id)) return serviceService.save({
      name,
      bossesNumber,
      assistantsNumber,
    })

    return serviceService.update(service.id, {
      name,
      bossesNumber,
      assistantsNumber,
    })
  }

  const deleteTeam = async () => {
    await serviceService.remove(service.id)
    dispatch(ServiceActionCreator.remove(service.id))
  }

  return (
    <ViewContainer>
      <TitleContainer>
        <h1>Agrega un Servicio</h1>
        <p>
          Servicios pueden ser conformados por Jefes y Auxiliares o simplemente puedes
          usar uno de los dos roles.
        </p>
      </TitleContainer>
      <MainFormContainer>
        <form>
          <Input
            label="Nombre"
            autoComplete="service-name"
            value={name}
            onChange={changeName}
            error={nameHasError(errors)}
            errorMessage={getNameError(errors)}
          />
          <InputNumber
            label="Jefes"
            autoComplete="service-name"
            value={bossesNumber}
            onChange={changeBossesNumber}
            error={bossesNumberHasError(errors)}
            errorMessage={getBossesError(errors)}
          />
          <InputNumber
            label="Auxiliares"
            autoComplete="service-name"
            value={assistantsNumber}
            onChange={changeAuxNumber}
            error={assistantsNumberHasError(errors)}
            errorMessage={getAssistantsError(errors)}
          />
        </form>
      </MainFormContainer>
      <ActionsContainer>
        <SaveButton onClick={save}/>
        { service?.id && <DeleteButton onClick={deleteTeam} /> }
        <BackButton />
      </ActionsContainer>
    </ViewContainer>
  )
}

const SaveButton = ({ onClick, setErrors }) => {
  const history = useHistory()
  const save = async () => {
    try {
      await onClick()
      history.push(ROUTES.SERVICE.LIST)
    } catch (error) {
      console.log(error)
      if (error.code === '') setErrors({ email: { hasError: true, message: error.message } })
    }
  }
  return (
    <MainActionButton onClick={save}>
      Guardar
    </MainActionButton>
  )
}

const DeleteButton = ({ onClick }) => {
  const history = useHistory()
  const deleteTeam = async () => {
    try {
      await onClick()
    } catch (error) {
      console.log(error)
    }
    history.push(ROUTES.TEAMS.LIST)
  }
  return (
    <WarningActionButton onClick={deleteTeam}>
      Eliminar Equipo
    </WarningActionButton>
  )
}

export default NewTeam
