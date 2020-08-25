import { find, propEq, equals } from 'ramda'
import { combineEpics, ofType } from "redux-observable"
import { filter, map, mapTo, mergeMap, withLatestFrom } from 'rxjs/operators'
import { AppActionCreator, TEAM_ACTIONS, TeamActionCreator } from '../actions'
import teamService from "../../service/team"
import { getTeamsCollection } from '../selectors'
import { of, concat } from 'rxjs'

const fetchAll = (action$, state$) =>
  action$.pipe(
    ofType(TEAM_ACTIONS.fetchAll),
    mergeMap(() =>
      concat(
        teamService.fetchAll().pipe(
          withLatestFrom(state$),
          filter(isMissingTeam),
          map(addItemToStore)
        ),
        of(AppActionCreator.setLoading(false))
      )
    )
  )

const loading = action$ => action$.pipe(
  ofType(TEAM_ACTIONS.fetchAll),
  mapTo(AppActionCreator.setLoading())
)

const isMissingTeam = ([team, state]) => {
  const teams = getTeamsCollection(state)
  const teamInStore = find(propEq('id', team.id), teams)
  return !equals(team, teamInStore)
}

const addItemToStore = ([team]) => TeamActionCreator.addItem(team)

export default combineEpics(loading, fetchAll)
