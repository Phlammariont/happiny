import { addItem, fetchCollection, removeItem, updateItem } from './firebase'
import { isNil, where } from 'ramda'
import { Observable } from 'rxjs'

const INVALID_PLANNER_ERROR = 'you are trying to save an invalid planner'
const PLANNER_COLLECTION = 'planners'

const isValidString = (name) => !isNil(name) && name.length > 1
const isValidName = isValidString
const isValidService = (service) => !isNil(service) && !isNil(service.id) && !isNil(service.name)
const isValidTeam = (team) => !isNil(team) && !isNil(team.id) && !isNil(team.name)

const isValid = where({
  name: isValidName,
  service: isValidService,
  team: isValidTeam,
  startDate: isValidString,
  endDate: isValidString,
})

const save = (planner) => {
  if (!isValid(planner)) throw new Error(INVALID_PLANNER_ERROR)

  return addItem(PLANNER_COLLECTION, planner).catch((error) => console.log(error))
}

const update = (id, update) => {
  if (isNil(id)) throw new Error(INVALID_PLANNER_ERROR)

  return updateItem({ collection: PLANNER_COLLECTION, id, update }).catch((error) => console.log(error))
}

const remove = (plannerId) => {
  if (isNil(plannerId)) throw new Error(INVALID_PLANNER_ERROR)

  return removeItem(PLANNER_COLLECTION, plannerId).catch((error) => console.log(error))
}

const fetchAll = () =>
  new Observable((subscriber) => {
    fetchCollection(PLANNER_COLLECTION)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          subscriber.next({ id: doc.id, ...doc.data() })
        })
        subscriber.complete()
      })
      .catch((error) => subscriber.error(error))
  })

const plannerService = {
  save,
  fetchAll,
  remove,
  update,
  isValid,
}

export default plannerService
