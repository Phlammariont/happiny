import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { withBottomBar } from '../enhancers'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceCollection } from '../../redux/selectors/service'
import { getTeamsCollection, getUser } from '../../redux/selectors'
import { getPlannerCollection } from '../../redux/selectors/planner'
import { PlannerActionCreator, ServiceActionCreator, TeamActionCreator } from '../../redux'

const Container = () => {
  const services = useSelector(getServiceCollection)
  const teams = useSelector(getTeamsCollection)
  const planners = useSelector(getPlannerCollection)
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ServiceActionCreator.fetchAll())
    dispatch(TeamActionCreator.fetchAll())
    dispatch(PlannerActionCreator.fetchAll())
  }, [dispatch])

  return <Dashboard user={user} planners={planners} services={services} teams={teams}/>
}

export default withBottomBar(Container)
