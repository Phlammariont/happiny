import React, { useEffect, useState } from 'react'
import {
  ActionsContainer,
  DateInput,
  Input,
  MainActionButton,
  MainFormContainer,
  SecondActionButton,
  Select,
  TitleContainer,
  ViewContainer,
} from '../../components'
import { Link } from 'react-router-dom'
import { isEmpty, map } from 'ramda'
import { ROUTES } from '../../constants'

const toOption = ({ id, name }) => ({ id, label: name })

const CreateNewCalendarButton = ({ ready }) => {
  const ButtonComponent = ready ? MainActionButton : SecondActionButton
  return <ButtonComponent>Empezar Calendario</ButtonComponent>
}

const AddTeamButton = () => {
  return (
    <Link to={ROUTES.TEAMS.NEW}>
      <SecondActionButton onClick>Crear Equipo</SecondActionButton>
    </Link>
  )
}

const AddServiceButton = () => {
  return (
    <Link to={ROUTES.SERVICE.NEW}>
      <SecondActionButton>Crear Servicio</SecondActionButton>
    </Link>
  )
}

const NewCalendarView = ({ teams = [], services = [] }) => {
  const [ready, setReady] = useState(false)

  const onChangeForm = (model) => {
    setReady(false)
    if (
      model.team &&
      model.service &&
      model.name &&
      model.startDate &&
      model.endDate
    )
      setReady(true)
  }

  return (
    <ViewContainer>
      <TitleContainer>
        <h1>Agrega un Planeador</h1>
        <p>
          Planeadores son generados con base en la difinicion de los servicios y
          deben integrar un equipo para que sus integrantes sean asignados.
        </p>
      </TitleContainer>
      <NewCalendarForm
        teams={map(toOption, teams)}
        services={map(toOption, services)}
        onChange={onChangeForm}
      />
      <ActionsContainer>
        {ready && <CreateNewCalendarButton ready={ready} />}
        {isEmpty(teams) && <AddTeamButton />}
        {isEmpty(services) && <AddServiceButton />}
      </ActionsContainer>
    </ViewContainer>
  )
}

const NewCalendarForm = ({ onChange, teams, services }) => {
  const [name, setName] = useState('')
  const [service, setService] = useState()
  const [team, setTeam] = useState()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const onFormChange = () => {
    onChange({ name, service, team, startDate, endDate })
  }

  const updateState = (field) => async (evt) => {
    if (field === 'name') await setName(evt.target.value)
    if (field === 'service') await setService(evt.selected)
    if (field === 'team') await setTeam(evt.selected)
    if (field === 'startDate') await setStartDate(evt)
    if (field === 'endDate') await setEndDate(evt)
  }

  useEffect(onFormChange, [name, service, team, startDate, endDate])

  return (
    <MainFormContainer>
      <form>
        <Input label="Nombre" value={name} onChange={updateState('name')} />
        {!isEmpty(services) && (
          <Select
            label="Servicio"
            options={services}
            onChange={updateState('service')}
          />
        )}
        {!isEmpty(teams) && (
          <Select
            label="Equipo"
            options={teams}
            onChange={updateState('team')}
          />
        )}
        <DateInput
          label="Fecha de inicio"
          value={startDate}
          setValue={setStartDate}
        />
        <DateInput
          label="Fecha final"
          value={endDate}
          setValue={updateState('endDate')}
        />
      </form>
    </MainFormContainer>
  )
}

export default NewCalendarView
