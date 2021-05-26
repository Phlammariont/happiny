import React from 'react'
import List from './List'
import { useSelector } from 'react-redux'
import { withBottomBar } from '../enhancers'
import { getPlannerCollection } from '../../redux/selectors/planner'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'

const ListContainer = () => {
  const history = useHistory()

  const navigateToNewService = () => {
    history.push(ROUTES.PLANNER.NEW)
  }
  const planners = useSelector(getPlannerCollection)

  return <List planners={planners} navigateToNewService={navigateToNewService} />
}

export default withBottomBar(ListContainer)
