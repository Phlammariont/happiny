import { TEAM_ACTIONS } from '../actions'
import { getType } from './utils'
import { propEq, reject } from 'ramda'

const initialState = { collection: [] }
const teamReducer = (state = initialState, action) => {
  switch (getType(action)) {
    case TEAM_ACTIONS.fetchAll:
      return { ...state, collection: [] }
    case TEAM_ACTIONS.setCollection:
      return { ...state, collection: action.teams }
    case TEAM_ACTIONS.addItem:
      return { ...state, collection: [...state.collection, action.team] }
    case TEAM_ACTIONS.removeItem:
      return { ...state, collection: reject(propEq('id', action.teamId), state.collection)}
    default:
      return state
  }
}

export default teamReducer
