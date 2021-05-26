import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ActionsContainer, Fab, ViewContainer } from '../../components'
import { ROUTES } from '../../constants'
import { PlusOutlined } from '@ant-design/icons'
import {
  CalendarIcon,
  NewModelButtonsContainer,
  PlannersContainer,
  ServicesContainer,
  ServicesIcon,
  TeamIcon,
  TeamsContainer,
} from './style'

const DashboardCardsContent = (props) => {
  return <div>{props.children}</div>
}

const PlannerCard = ({ planners }) => {
  const history = useHistory()
  const navigateToPlanners = () => {
    history.push(ROUTES.PLANNER.LIST)
  }
  return (
    <PlannersContainer onClick={navigateToPlanners}>
      <CalendarIcon />
      <br />
      <span>
        Planeadores: {planners.length && <span>({planners.length})</span>}
      </span>
    </PlannersContainer>
  )
}

const TeamsCard = ({ teams }) => {
  const history = useHistory()
  const navigateToTeams = () => {
    history.push(ROUTES.TEAMS.LIST)
  }
  return (
    <TeamsContainer onClick={navigateToTeams}>
      <TeamIcon />
      <br />
      <span>Equipos: {teams.length && <span>({teams.length})</span>}</span>
    </TeamsContainer>
  )
}

const ServicesCard = ({ services }) => {
  const history = useHistory()
  const navigateToServices = () => {
    history.push(ROUTES.SERVICE.LIST)
  }
  return (
    <ServicesContainer onClick={navigateToServices}>
      <ServicesIcon />
      <br />
      <span>
        Servicios: {services.length && <span>({services.length})</span>}
      </span>
    </ServicesContainer>
  )
}

const NewModelButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <NewModelButtonsContainer>
      {isOpen && (
        <>
          <Fab weight={3} label={'Planeador'} onClick={() => history.push(ROUTES.PLANNER.NEW)} icon={<PlusOutlined />} />
          <Fab weight={3} label={'Equipo'} onClick={() => history.push(ROUTES.TEAMS.NEW)} icon={<PlusOutlined />} />
          <Fab weight={3} label={'Servicio'} icon={<PlusOutlined />} onClick={() => history.push(ROUTES.SERVICE.NEW)} />
        </>
      )}
      <Fab onClick={toggleOpen} weight={4} icon={<PlusOutlined />} />
    </NewModelButtonsContainer>
  )
}

const Dashboard = ({ teams = [], services = [], planners = [] }) => {
  return (
    <>
      <ViewContainer>
        <DashboardCardsContent>
          <PlannerCard planners={planners} />
          <ServicesCard services={services} />
          <TeamsCard teams={teams} />
        </DashboardCardsContent>
        <ActionsContainer>
          <NewModelButton />
        </ActionsContainer>
      </ViewContainer>
      <div>
        Icons made by{' '}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
      </div>
    </>
  )
}

export default Dashboard
