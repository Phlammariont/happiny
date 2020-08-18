import { APP_ACTIONS } from '../actions'
import { getType } from './utils'

const initialState = {}
const userReducer = (state = initialState, action) => {
  switch (getType(action)) {
    case APP_ACTIONS.loading:
      return { loading: true }
    case APP_ACTIONS.loadingFinish:
      return { loading: false }
    default:
      return state
  }
}

export default userReducer