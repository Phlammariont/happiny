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

const ListServices = ({ services = [] }) => {
  const history = useHistory()

  const navigateToNewService = () => {
    history.push(ROUTES.SERVICE.NEW)
  }

  return (
    <ViewContainerTop>
      <TitleContainer>
        <h1>Servicios</h1>
        <p>Estos son los servicios que has configurado</p>
      </TitleContainer>
      <MainContainer>
        {map(ServiceCard(history), services)}
        {isEmpty(services) ? <NothingHere /> : <NewServiceFAB />}
      </MainContainer>
      {isEmpty(services) ? <ActionsContainer><AddServiceButton onClick={navigateToNewService}/></ActionsContainer> : null}
    </ViewContainerTop>
  )
}

const NewServiceFAB = () => {
  return (
    <Link to={ROUTES.TEAMS.NEW}>
      <ListFab weight={3} icon={<PlusOutlined />} />
    </Link>
  )
}

const ServiceCard = (history) => (service) => {
  const goToService = () => {
    history.push(`${ROUTES.SERVICE.EDIT}/${service.id}` )
  }
  return (
    <ServiceCardContainer key={service.id} onClick={goToService}>
      {service.name} - Jefes: {service.bossesNumber} - Auxiliares: {service.assistantsNumber}
    </ServiceCardContainer>
  )
}

const ServiceCardContainer = styled.div`
  padding: 0.5rem 0;
`

const AddServiceButton = ({onClick}) => {
  return (
    <MainActionButton onClick={onClick} className="casa">
      Agrega Un Servicio
    </MainActionButton>
  )
}

export default ListServices
