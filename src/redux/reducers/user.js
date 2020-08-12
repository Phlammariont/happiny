import { USER_ACTIONS } from '../actions'
import { getType } from './utils'

const initialState = {}
const userReducer = (state = initialState, action) => {
  switch (getType(action)) {
    case USER_ACTIONS.load:
      return { ...state, user: action.user }
    default:
      return state
  }
}

export default userReducer