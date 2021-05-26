import { PLANNER_ACTIONS } from '../actions'
import { getType } from './utils'
import { propEq, reject } from 'ramda'

const initialState = { collection: [] }
const plannerReducer = (state = initialState, action) => {
  switch (getType(action)) {
    case PLANNER_ACTIONS.fetchAll:
      return { ...state, collection: [] }
    case PLANNER_ACTIONS.setCollection:
      return { ...state, collection: action.planners }
    case PLANNER_ACTIONS.addItem:
      return { ...state, collection: [...state.collection, action.planner] }
    case PLANNER_ACTIONS.removeItem:
      return { ...state, collection: reject(propEq('id', action.plannerId), state.collection)}
    default:
      return state
  }
}

export default plannerReducer
