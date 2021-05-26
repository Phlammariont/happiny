import { combineReducers } from 'redux'
import user from './user'
import team from './team'
import service from './service'
import planner from './planner'
import app from './general-app-state'

const rootReducer = combineReducers({ app, team, user, service, planner })

export default rootReducer
