import React from 'react'
import { ViewContainer, TopBar, ActionsContainer, MainActionButton } from '../../components'
import { isEmpty } from 'ramda'
import { Link } from 'react-router-dom'

const DashboardCardsContent = (props) => {
  return <div>{props.children}</div>
}

const CalendarsCard = ({calendars}) => {
  if (isEmpty(calendars)) return <div>No tienes calendarios aún</div>
  return <div>{calendars.length}</div>
}

const TeamsCard = ({ teams }) => {
  if (isEmpty(teams)) return null
  return <div>{teams.length}</div>
}

const ServicesCard = ({ services }) => {
  if (isEmpty(services)) return null
  return <div>{services.length}</div>
}

const NewCalendarButton = () => {
  return (
    <Link to='/calendar/new'>
      <MainActionButton>
        Nuevo Calendario
      </MainActionButton>
    </Link>
  )
}

const Dashboard = ({ user, teams, services, calendars }) => {
  return (
    <ViewContainer>
      <TopBar user={user}/>
      <DashboardCardsContent>
        <CalendarsCard calendars={calendars} />
        <TeamsCard teams={teams} />
        <ServicesCard services={services} />
      </DashboardCardsContent>
      <ActionsContainer>
        <NewCalendarButton />
      </ActionsContainer>
    </ViewContainer>
  )
}

export default Dashboard
