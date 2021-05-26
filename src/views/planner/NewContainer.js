import React, { useEffect } from 'react'
import NewPlanner from './New'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamsCollection } from '../../redux/selectors'
import { getServiceCollection } from '../../redux/selectors/service'
import { PlannerActionCreator, ServiceActionCreator, TeamActionCreator } from '../../redux'

const NewPlannerContainer = () => {
  const services = useSelector(getServiceCollection)
  const teams = useSelector(getTeamsCollection)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ServiceActionCreator.fetchAll())
    dispatch(TeamActionCreator.fetchAll())
    dispatch(PlannerActionCreator.fetchAll())
  }, [dispatch])

  return <NewPlanner services={services} teams={teams} />
}

export default NewPlannerContainer