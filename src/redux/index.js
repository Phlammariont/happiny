import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import rootEpic from './epics'
import { createEpicMiddleware } from 'redux-observable'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

epicMiddleware.run(rootEpic)

export * from "./actions";
export default appStore;
