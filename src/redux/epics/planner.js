import { equals, find, propEq } from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators'
import { AppActionCreator, PLANNER_ACTIONS, PlannerActionCreator } from '../actions'
import plannerService from '../../service/planner'
import { concat, of } from 'rxjs'
import { getPlannerCollection } from '../selectors/planner'

const fetchAll = (action$, state$) =>
  action$.pipe(
    ofType(PLANNER_ACTIONS.fetchAll),
    mergeMap(() =>
      concat(
        of(AppActionCreator.setLoading()),
        plannerService.fetchAll().pipe(
          withLatestFrom(state$),
          filter(isMissingPlanner),
          map(addItemToStore)
        ),
        of(AppActionCreator.setLoading(false))
      )
    )
  )

const isMissingPlanner = ([planner, state]) => {
  const planners = getPlannerCollection(state)
  const serviceInStore = find(propEq('id', planner.id), planners)
  return !equals(planner, serviceInStore)
}

const addItemToStore = ([item]) => PlannerActionCreator.addItem(item)

export default combineEpics(fetchAll)
