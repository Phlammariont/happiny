import React from 'react'
import { isEmpty, map } from 'ramda'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../constants'
import {
  ViewContainer,
  TitleContainer,
  MainContainer,
  MainActionButton,
  ActionsContainer,
  ListFab,
  NothingHere,
} from '../../components'

const ListTeams = ({ teams = [] }) => {
  const history = useHistory()

  const navigateToNewTeam = () => {
    history.push(ROUTES.TEAMS.NEW)
  }

  return (
    <ViewContainer top>
      <TitleContainer>
        <h1>Equipos</h1>
        <p>Estos son los equipos que has configurado</p>
      </TitleContainer>
      <MainContainer>
        {map(TeamCard(history), teams)}
        {isEmpty(teams) ? <NothingHere /> : <NewTeamFAB />}
      </MainContainer>
      {isEmpty(teams) ? <ActionsContainer><AddTeamButton onClick={navigateToNewTeam}/></ActionsContainer> : null}
    </ViewContainer>
  )
}

const NewTeamFAB = () => {
  return <Link to={ROUTES.TEAMS.NEW}><ListFab>+</ListFab></Link>
}

const TeamCard = (history) => (team) => {
  const goToTeam = () => {
    history.push(`${ROUTES.TEAMS.EDIT}/${team.id}` )
  }
  return (
    <TeamCardContainer key={team.id} onClick={goToTeam}>
      {team.name} - {team.users.length} Usuarios
    </TeamCardContainer>
  )
}

const TeamCardContainer = styled.div`
  padding: 0.5rem 0;
`

const AddTeamButton = ({onClick}) => {
  return (
    <MainActionButton onClick={onClick} className="casa">
      Agrega Un Equipo
    </MainActionButton>
  )
}

export default ListTeams
