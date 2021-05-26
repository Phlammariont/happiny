import React, { useState } from 'react'
import {
  ActionsContainer,
  BackButton,
  Input,
  ListInput,
  MainActionButton,
  MainFormContainer,
  TitleContainer,
  ViewContainer,
  WarningActionButton,
} from 'components'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'
import teamService from '../../service/team'
import { useDispatch } from 'react-redux'
import { TeamActionCreator } from '../../redux'
import { isNil } from 'ramda'

const nameHasError = (errors) => errors.name
const getEmailError = (errors) => errors.name?.errors

const NewTeam = ({ team }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(team.name)
  const [users, setUsers] = useState(team.users)
  const [errors] = useState({})

  const changeName = evt => setName(evt.target.value)

  const save = () => {
    if (isNil(team.id)) return teamService.save({
      name,
      users,
    })

    return teamService.update(team.id, {
      name,
      users,
    })
  }

  const deleteTeam = async () => {
    await teamService.remove(team.id)
    dispatch(TeamActionCreator.remove(team.id))
  }

  return (
    <ViewContainer>
      <TitleContainer>
        <h1>Agrega un Equipo</h1>
        <p>
          Equipos pueden ser conformados por otros usuarios o simplemente puedes
          usar el nombre de las enfermeras para reconocerlas en los
          calendarios
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
            errorMessage={getEmailError(errors)}
          />
          <ListInput
            label="Integrantes"
            Card={UserCard}
            list={users}
            onChangeList={setUsers}
            error={errors.users}
            errorMessage={errors.users?.message}
          />
        </form>
      </MainFormContainer>
      <ActionsContainer>
        <SaveButton onClick={save}/>
        { team?.id && <DeleteButton onClick={deleteTeam} /> }
        <BackButton />
      </ActionsContainer>
    </ViewContainer>
  )
}

const UserCard = (user) => <div key={user.email}>{user.name}</div>

const SaveButton = ({ onClick, setErrors }) => {
  const history = useHistory()
  const save = async () => {
    try {
      await onClick()
      history.push(ROUTES.TEAMS.LIST)
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
