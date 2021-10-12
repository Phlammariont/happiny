import { isEmpty } from 'ramda'

export const isValid = (user: any): boolean => {
  return user && !isEmpty(user)
}