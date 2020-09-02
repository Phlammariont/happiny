import React, { useEffect, useState } from 'react'
import {
  ViewContainer,
  ActionsContainer,
  MainActionButton,
  MainFormContainer,
  Input,
  InputNumber,
  SecondActionButton,
} from '../../components'
import { isEmpty } from 'ramda'

const CreateNewCalendarButton = ({ ready }) => {
  const ButtonComponent = ready ? MainActionButton : SecondActionButton
  return (
    <ButtonComponent>
      Empezar Calendario
    </ButtonComponent>
  )
}

const AddTeamButton = ({ ready }) => {
  const ButtonComponent = ready ? MainActionButton : SecondActionButton
  return (
    <ButtonComponent>
      Agregar Equipo
    </ButtonComponent>
  )
}

const AddServiceButton = ({ ready }) => {
  const ButtonComponent = ready ? MainActionButton : SecondActionButton
  return (
    <ButtonComponent>
      Agregar Servicio
    </ButtonComponent>
  )
}

const NewCalendarView = ({ teams = [], services = [] }) => {
  const [ready, setReady] = useState(false)
  const [shouldAddTeam] = useState(!isEmpty(teams))
  const [shouldAddService, setShouldAddService] = useState(!isEmpty(services))

  const validateNewCalendarModel = ({ name, dayNurses, nightNurses, auxByNurse }) => {
    try {
      return (
        name.length > 3 && Number(dayNurses) > 0 && Number(nightNurses) > 0 && Number(auxByNurse) > 0
      )
    } catch (e) {
      return false
    }
  }

  const onChangeForm = (calendarModel) => {
    const {
      dayNurses,
      nightNurses,
      auxByNurse,
    } = calendarModel
    setReady(validateNewCalendarModel(calendarModel))
    setShouldAddService(!isEmpty(services) && dayNurses === '' && nightNurses === '' && auxByNurse === '')
  }

  return (
    <ViewContainer>
      <NewCalendarForm teams={teams} onChange={onChangeForm}/>
      <ActionsContainer>
        <CreateNewCalendarButton ready={ready}/>
        {shouldAddTeam && <AddTeamButton/>}
        {shouldAddService && <AddServiceButton/>}
      </ActionsContainer>
    </ViewContainer>
  )
}

const NewCalendarForm = ({ onChange }) => {
  const [name, setName] = useState('')
  const [dayNurses, setDayNurses] = useState('')
  const [nightNurses, setNightNurses] = useState('')
  const [auxByNurse, setAuxByNurse] = useState('')

  const updateState = setState => async evt => setState(evt.target.value)
  useEffect(() => onChange({
    name,
    dayNurses,
    nightNurses,
    auxByNurse,
  }))


  return (
    <MainFormContainer>
      <form>
        agregar datos del formulario (fechas)
        <Input label="Nombre" value={name} onChange={updateState(setName)}/>
        <InputNumber label="Numero de Enfermeras en el día" value={dayNurses} onChange={updateState(setDayNurses)}/>
        <InputNumber
          label="Numero de Enfermeras en la noche"
          value={nightNurses}
          onChange={updateState(setNightNurses)}/>
        <InputNumber
          label="Numero de Auxiliares por cada Enfermera"
          value={auxByNurse}
          onChange={updateState(setAuxByNurse)}
        />
      </form>
    </MainFormContainer>
  )
}

export default NewCalendarView