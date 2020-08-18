import { addItem } from './firebase'
import { isEmpty, isNil, where } from 'ramda'

const INVALID_TEAM_ERROR = 'you are trying to save an invalid team'
const TEAM_COLLECTION = 'teams'

const isValidName = name => !isNil(name) && name.length > 1
const isValidUserList = list => !isEmpty(list)

const isValid = where({
  name: isValidName,
  users: isValidUserList,
})

const save = team => {
  if (!isValid(team)) throw new Error(INVALID_TEAM_ERROR)

  return addItem(TEAM_COLLECTION, team).catch(error => console.log(error))
}

export default {
  save,
}
