import { combineReducers } from 'redux'
import user from './user'
import team from './team'
import app from './general-app-state'

const rootReducer = combineReducers({ app, team, user })

export default rootReducer
