import React, { useState } from 'react'
import {
  ActionsContainer,
  Input,
  ListInput,
  MainActionButton,
  MainFormContainer,
  ViewContainer,
} from '../../components'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'
import teamService from '../../service/team'


const nameHasError = (errors) => errors.name
const getEmailError = (errors) => errors.name?.errors

const TitleContainer = styled.div`
  height: 25vh;
`

const NewTeam = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = fieldName => evt => setName(evt.target.value)

  const save = () => teamService.save({
    name,
    users,
  })

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
            onChange={handleChange("name")}
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

export default NewTeam
