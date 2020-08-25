import { auth } from './firebase'
import appStore, { UserActionCreator, AppActionCreator } from '../redux'
import { applySpec, path } from 'ramda'

const getUserName = path(['user', 'displayName'])
const getUser = applySpec({
  name: getUserName,
})

export const createUser = async ({ email, password }) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}

export const authenticateUser = async ({ email, password }) => {
  await appStore.dispatch(AppActionCreator.setLoading())
  const result = await auth.signInWithEmailAndPassword(email, password)
  appStore.dispatch(UserActionCreator.load(getUser(result)))
  appStore.dispatch(AppActionCreator.setLoading(false))
  return true
}
