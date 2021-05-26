import React from 'react'
import List from './List'
import { useSelector } from 'react-redux'
import { withBottomBar } from '../enhancers'
import { getServiceCollection } from '../../redux/selectors/service'

const ListContainer = () => {
  const services = useSelector(getServiceCollection)

  return <List services={services}/>
}

export default withBottomBar(ListContainer)
