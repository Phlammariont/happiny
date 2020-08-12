import { USER_ACTIONS, APP_ACTIONS } from './action-types'

export const UserActionCreator = {
  load: (user) => {
    return {
      type: USER_ACTIONS.load,
      user
    }
  }
}

export const setLoading = (loading = true) => {
  return {
    type: loading ? APP_ACTIONS.loading : APP_ACTIONS.loadingFinish,
  }
}