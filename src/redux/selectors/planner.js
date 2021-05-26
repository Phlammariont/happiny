import { compose, find, pathOr, propEq } from 'ramda'

export const getPlannerCollection = pathOr([], ['planner', 'collection'])
export const findPlannerById = id => compose(find(propEq('id', id)), getPlannerCollection)
