import { combineReducers } from 'redux'
import user from './user'
import app from './general-app-state'

const rootReducer = combineReducers({ user, app })

export default rootReducer