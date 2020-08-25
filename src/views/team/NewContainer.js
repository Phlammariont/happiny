import React from 'react'
import NewTeam from './New'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { findTeamById } from '../../redux/selectors'

const createNewTeam = (name = '', users = []) => ({
  name,
  users,
})

const NewTeamContainer = () => {
  const { teamId } = useParams()
  const team = useSelector(findTeamById(teamId))

  return <NewTeam team={team || createNewTeam()} />
}

export default NewTeamContainer
