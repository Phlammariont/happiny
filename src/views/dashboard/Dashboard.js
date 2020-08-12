import React, { useState } from 'react'
import styled from 'styled-components'
import { ViewContainer, ActionsContainer, Fab } from '../../components'
import { ReactComponent as Calendar } from '../../components/icons/calendar.svg';
import { ReactComponent as Team } from '../../components/icons/team.svg';
import { ReactComponent as Services } from '../../components/icons/cardiovascular.svg';

const DashboardCardsContent = (props) => {
  return <div>{props.children}</div>
}

const PlannersContainer = styled.div`
  background-color: #084B83;
  width: 100%;
  height: 25vh;
  color: white;
  text-align: center; 
`

const TeamsContainer = styled.div`
  background-color: #FF66B3;
  width: 100%;
  height: 25vh;
  color: white;
  text-align: center; 
`

const ServicesContainer = styled.div`
  background-color: #BBE6E4;
  width: 100%;
  height: 25vh;
  color: white;
  text-align: center; 
`

const CalendarIcon = styled(Calendar)`
  width: 30%;
  margin: 5%;
  height: auto;
`

const TeamIcon = styled(Team)`
  width: 30%;
  margin: 5%;
  height: auto;
`

const ServicesIcon = styled(Services)`
  width: 30%;
  margin: 5%;
  height: auto;
`

const NewModelButtonsContainer = styled.div`
  margin: 1rem;
  align-self: flex-end;
  display: flex;
`

const DashboardPlannerCard = ({ planners }) => {
  return (
    <PlannersContainer>
      <CalendarIcon /><br/>
      <span>Planeadores: {planners.length && <span>({planners.length})</span>}</span>
    </PlannersContainer>
  )
}

const TeamsCard = ({ teams }) => {
  return (
    <TeamsContainer>
      <TeamIcon /><br/>
      <span>Equipos: {teams.length && <span>({teams.length})</span>}</span>
    </TeamsContainer>
  )
}

const ServicesCard = ({ services }) => {
  return (
    <ServicesContainer>
      <ServicesIcon/><br/>
      <span>Servicios: {services.length && <span>({services.length})</span>}</span>
    </ServicesContainer>
  )
}

const NewModelButton = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <NewModelButtonsContainer>
      {isOpen && <>
        <Fab weight={2} label={'Planeador'}>+</Fab>
        <Fab weight={2} label={'Equipo'}>+</Fab>
        <Fab weight={2} label={'Servicio'}>+</Fab></>
      }
      <Fab onClick={toggleOpen} weight={3}>+</Fab>
    </NewModelButtonsContainer>
  )
}

const Dashboard = ({ teams = [], services = [], planners = [] }) => {
  return (
    <>
      <ViewContainer>
        <DashboardCardsContent>
          <DashboardPlannerCard planners={planners} />
          <ServicesCard services={services} />
          <TeamsCard teams={teams} />
        </DashboardCardsContent>
        <ActionsContainer>
          <NewModelButton />
        </ActionsContainer>
      </ViewContainer>
      <div>
        Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </>
  )
}

export default Dashboard
