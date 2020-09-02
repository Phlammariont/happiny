import { combineEpics } from 'redux-observable'
import teamEpic from './team'

export default combineEpics(teamEpic)
