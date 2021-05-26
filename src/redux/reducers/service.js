import { SERVICE_ACTIONS } from '../actions'
import { getType } from './utils'
import { propEq, reject } from 'ramda'

const initialState = { collection: [] }
const serviceReducer = (state = initialState, action) => {
  switch (getType(action)) {
    case SERVICE_ACTIONS.fetchAll:
      return { ...state, collection: [] }
    case SERVICE_ACTIONS.setCollection:
      return { ...state, collection: action.services }
    case SERVICE_ACTIONS.addItem:
      return { ...state, collection: [...state.collection, action.service] }
    case SERVICE_ACTIONS.removeItem:
      return { ...state, collection: reject(propEq('id', action.serviceId), state.collection)}
    default:
      return state
  }
}

export default serviceReducer
