import { addItem, fetchCollection, removeItem, updateItem } from './firebase'
import { isEmpty, isNil, where } from 'ramda'
import { Observable } from 'rxjs'

const INVALID_TEAM_ERROR = 'you are trying to save an invalid team'
const TEAM_COLLECTION = 'teams'

const isValidName = (name) => !isNil(name) && name.length > 1
const isValidUserList = (list) => !isEmpty(list)

const isValid = where({
  name: isValidName,
  users: isValidUserList,
})

const save = (team) => {
  if (!isValid(team)) throw new Error(INVALID_TEAM_ERROR)

  return addItem(TEAM_COLLECTION, team).catch((error) => console.log(error))
}

const update = (id, update) => {
  if (isNil(id)) throw new Error(INVALID_TEAM_ERROR)

  return updateItem({ collection: TEAM_COLLECTION, id, update }).catch((error) => console.log(error))
}

const remove = (teamId) => {
  if (isNil(teamId)) throw new Error(INVALID_TEAM_ERROR)

  return removeItem(TEAM_COLLECTION, teamId).catch((error) => console.log(error))
}

const fetchAll = () =>
  new Observable((subscriber) => {
    fetchCollection(TEAM_COLLECTION)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          subscriber.next({ id: doc.id, ...doc.data() })
        })
        subscriber.complete()
      })
      .catch((error) => subscriber.error(error))
  })

export default {
  save,
  fetchAll,
  remove,
  update,
}
