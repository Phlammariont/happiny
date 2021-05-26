import { compose, find, pathOr, propEq } from 'ramda'

export const getServiceCollection = pathOr([], ['service', 'collection'])
export const findServiceById = id => compose(find(propEq('id', id)), getServiceCollection)
