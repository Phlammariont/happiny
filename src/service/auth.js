import { auth } from './firebase'
import appStore, { UserActionCreator, setLoading } from '../redux'
import { applySpec, path } from 'ramda'

const getUserName = path(['user', 'displayName'])
const getUser = applySpec({
  name: getUserName,
})

export const createUser = async ({ email, password }) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}

export const authenticateUser = async ({ email, password }) => {
  await appStore.dispatch(setLoading())
  const result = await auth.signInWithEmailAndPassword(email, password)
  appStore.dispatch(UserActionCreator.load(getUser(result)))
  appStore.dispatch(setLoading(false))
  return true
}