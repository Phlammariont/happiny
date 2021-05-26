import { auth } from './firebase'
import appStore, { AppActionCreator, UserActionCreator } from '../redux'

auth.onAuthStateChanged(function(user) {
  if (user) {
    appStore.dispatch(UserActionCreator.load(user))
  } else {
    appStore.dispatch(UserActionCreator.unLoad(user))
  }
});

export const createUser = async ({ email, password }) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}


export const authenticateUser = async ({ email, password }) => {
  await appStore.dispatch(AppActionCreator.setLoading())
  await auth.signInWithEmailAndPassword(email, password)
  appStore.dispatch(AppActionCreator.setLoading(false))
  return true
}

export const signOut = () => auth.signOut()
