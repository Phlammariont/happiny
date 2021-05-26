import { equals, find, propEq } from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators'
import { AppActionCreator, SERVICE_ACTIONS, ServiceActionCreator } from '../actions'
import serviceService from '../../service/service'
import { concat, of } from 'rxjs'
import { getServiceCollection } from '../selectors/service'

const fetchAll = (action$, state$) =>
  action$.pipe(
    ofType(SERVICE_ACTIONS.fetchAll),
    mergeMap(() =>
      concat(
        of(AppActionCreator.setLoading()),
        serviceService.fetchAll().pipe(
          withLatestFrom(state$),
          filter(isMissingService),
          map(addItemToStore)
        ),
        of(AppActionCreator.setLoading(false))
      )
    )
  )

const isMissingService = ([service, state]) => {
  const services = getServiceCollection(state)
  const serviceInStore = find(propEq('id', service.id), services)
  return !equals(service, serviceInStore)
}

const addItemToStore = ([item]) => ServiceActionCreator.addItem(item)

export default combineEpics(fetchAll)
