import React, { useEffect } from 'react'
import List from './List'
import { useDispatch, useSelector } from 'react-redux'
import { TeamActionCreator } from '../../redux/actions'
import { withBottomBar } from '../enhancers'
import { getTeamsCollection } from '../../redux/selectors'



const ListContainer = () => {
  const dispatch = useDispatch()
  const teams = useSelector(getTeamsCollection)
  useEffect(() => {
    dispatch(TeamActionCreator.fetchAll())
  }, [dispatch])

  return <List teams={teams}/>
}

export default withBottomBar(ListContainer)
