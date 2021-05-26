import { combineEpics } from 'redux-observable'
import teamEpic from './team'
import serviceEpic from './service'
import plannerEpic from './planner'

export default combineEpics(teamEpic, serviceEpic, plannerEpic)
