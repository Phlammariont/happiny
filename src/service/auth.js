import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import appStore, { AppActionCreator, UserActionCreator } from '../redux'

onAuthStateChanged(getAuth(), user => {
  if (user) {
    appStore.dispatch(UserActionCreator.load(user))
  } else {
    appStore.dispatch(UserActionCreator.unLoad(user))
  }
});

export const createUser = async ({ email, password }) => {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password)
}


export const authenticateUser = async ({ email, password }) => {
  const auth = getAuth();
  await appStore.dispatch(AppActionCreator.setLoading())
  await signInWithEmailAndPassword(auth, email, password)
  appStore.dispatch(AppActionCreator.setLoading(false))
  return true
}

export const signOut = () => getAuth().signOut()
