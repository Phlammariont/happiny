import { APP_ACTIONS, TEAM_ACTIONS, USER_ACTIONS } from './action-types'

export const UserActionCreator = {
  load: (user) => ({
    type: USER_ACTIONS.load,
    user,
  }),
  unLoad: () => ({
    type: USER_ACTIONS.unLoad,
  })
}

export const TeamActionCreator = {
  fetchAll: () => ({
    type: TEAM_ACTIONS.fetchAll,
  }),
  addItem: team => ({
    type: TEAM_ACTIONS.addItem,
    team,
  }),
  remove: teamId => ({
    type: TEAM_ACTIONS.removeItem,
    teamId,
  })
}

export const AppActionCreator = {
  setLoading: (loading = true) => ({
    type: loading ? APP_ACTIONS.loading : APP_ACTIONS.loadingFinish,
  })
}
