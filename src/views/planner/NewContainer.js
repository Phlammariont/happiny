import React from 'react'
import NewPlanner from './New'
import { mockServices, mockTeams } from '../../test-resources'

const NewPlannerContainer = () => {
  return <NewPlanner services={mockServices} teams={mockTeams} />
}

export default NewPlannerContainer