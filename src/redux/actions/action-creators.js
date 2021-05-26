import { APP_ACTIONS, PLANNER_ACTIONS, SERVICE_ACTIONS, TEAM_ACTIONS, USER_ACTIONS } from './action-types'

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

export const ServiceActionCreator = {
  fetchAll: () => ({
    type: SERVICE_ACTIONS.fetchAll,
  }),
  addItem: service => ({
    type: SERVICE_ACTIONS.addItem,
    service,
  }),
  remove: serviceId => ({
    type: SERVICE_ACTIONS.removeItem,
    serviceId,
  })
}

export const PlannerActionCreator = {
  fetchAll: () => ({
    type: PLANNER_ACTIONS.fetchAll,
  }),
  addItem: planner => ({
    type: PLANNER_ACTIONS.addItem,
    planner,
  }),
  remove: plannerId => ({
    type: PLANNER_ACTIONS.removeItem,
    plannerId,
  })
}

export const AppActionCreator = {
  setLoading: (loading = true) => ({
    type: loading ? APP_ACTIONS.loading : APP_ACTIONS.loadingFinish,
  })
}
