import React from 'react'
import { isEmpty, map } from 'ramda'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../constants'
import {
  ActionsContainer,
  ListFab,
  MainActionButton,
  MainContainer,
  NothingHere,
  TitleContainer,
  ViewContainerTop,
} from '../../components'
import { PlusOutlined } from '@ant-design/icons'

const ListPlanners = ({ planners = [], navigateToNewService }) => {
  return (
    <ViewContainerTop>
      <TitleContainer>
        <h1>Planeadores</h1>
        <p>Estos son los Planeadores que has configurado.</p>
      </TitleContainer>
      <MainContainer>
        {map(PlannerCard, planners)}
        {isEmpty(planners) ? <NothingHere /> : <NewPlannerFAB />}
      </MainContainer>
      {isEmpty(planners) ? <ActionsContainer><AddPlannerButton onClick={navigateToNewService} /></ActionsContainer> : null}
    </ViewContainerTop>
  )
}

const NewPlannerFAB = () => {
  return (
    <Link to={ROUTES.PLANNER.NEW}>
      <ListFab weight={3} icon={<PlusOutlined />} />
    </Link>
  )
}

const PlannerCard = (planner) => {
  const history = useHistory()

  const goToService = () => {
    history.push(`${ROUTES.PLANNER.EDIT}/${planner.id}` )
  }
  return (
    <PlannerCardContainer key={planner.id} onClick={goToService}>
      {planner.name} - Servicio: {planner.service.name} - Equipo: {planner.team.name}
    </PlannerCardContainer>
  )
}

const PlannerCardContainer = styled.div`
  padding: 0.5rem 0;
`

const AddPlannerButton = ({onClick}) => {
  return (
    <MainActionButton onClick={onClick} className="casa">
      Agrega Un Planeador
    </MainActionButton>
  )
}

export default ListPlanners
