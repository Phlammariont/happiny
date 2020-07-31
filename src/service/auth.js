import { auth } from './firebase'

export const createUser = async ({ email, password }) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}