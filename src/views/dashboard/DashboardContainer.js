import React from 'react'
import Dashboard from './Dashboard'
import { withBottomBar } from '../enhancers'

const Container = () => {
  return <Dashboard user={{}} calendars={[]} services={[]} teams={[]}/>
}

export default withBottomBar(Container)
