import { addItem, fetchCollection, removeItem, updateItem } from './firebase'
import { isNil, where } from 'ramda'
import { Observable } from 'rxjs'

const INVALID_SERVICE_ERROR = 'you are trying to save an invalid service'
const SERVICE_COLLECTION = 'services'

const isValidName = (name) => !isNil(name) && name.length > 1
const isValidBossesNumber = (number) => !isNil(number) && Number(number) > 0
const isValidAssistantNumber = (number) => !isNil(number) && Number(number) > 0

const isValid = where({
  name: isValidName,
  bossesNumber: isValidBossesNumber,
  assistantsNumber: isValidAssistantNumber
})

const save = (service) => {
  if (!isValid(service)) throw new Error(INVALID_SERVICE_ERROR)

  return addItem(SERVICE_COLLECTION, service).catch((error) => console.log(error))
}

const update = (id, update) => {
  if (isNil(id)) throw new Error(INVALID_SERVICE_ERROR)

  return updateItem({ collection: SERVICE_COLLECTION, id, update }).catch((error) => console.log(error))
}

const remove = (serviceId) => {
  if (isNil(serviceId)) throw new Error(INVALID_SERVICE_ERROR)

  return removeItem(SERVICE_COLLECTION, serviceId).catch((error) => console.log(error))
}

const fetchAll = () =>
  new Observable((subscriber) => {
    fetchCollection(SERVICE_COLLECTION)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          subscriber.next({ id: doc.id, ...doc.data() })
        })
        subscriber.complete()
      })
      .catch((error) => subscriber.error(error))
  })

const serviceService = {
  save,
  fetchAll,
  remove,
  update,
}

export default serviceService
