import React from 'react'
import List from './List'
import { useSelector } from 'react-redux'
import { withBottomBar } from '../enhancers'
import { getTeamsCollection } from '../../redux/selectors'


const ListContainer = () => {
  const teams = useSelector(getTeamsCollection)

  return <List teams={teams}/>
}

export default withBottomBar(ListContainer)
