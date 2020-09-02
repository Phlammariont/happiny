import { compose, find, pathOr, propEq } from 'ramda'

export const getTeamsCollection = pathOr([], ['team', 'collection'])
export const findTeamById = id => compose(find(propEq('id', id)), getTeamsCollection)
