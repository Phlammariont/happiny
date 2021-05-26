import styled from 'styled-components'
import { ReactComponent as Calendar } from '../../components/icons/calendar.svg'
import { ReactComponent as Team } from '../../components/icons/team.svg'
import { ReactComponent as Services } from '../../components/icons/cardiovascular.svg'

export const PlannersContainer = styled.div`
  width: 100%;
  height: 25vh;
  text-align: center;
  border-bottom: 1px solid gray;
`
export const TeamsContainer = styled.div`
  width: 100%;
  height: 25vh;
  text-align: center;
  border-bottom: 1px solid gray;
`
export const ServicesContainer = styled.div`
  width: 100%;
  height: 25vh;
  text-align: center;
  border-bottom: 1px solid gray;
`
export const CalendarIcon = styled(Calendar)`
  width: 30%;
  margin: 5%;
  height: auto;
`
export const TeamIcon = styled(Team)`
  width: 30%;
  margin: 5%;
  height: auto;
`
export const ServicesIcon = styled(Services)`
  width: 30%;
  margin: 5%;
  height: auto;
`
export const NewModelButtonsContainer = styled.div`
  margin: 1rem;
  align-self: flex-end;
  display: flex;
`