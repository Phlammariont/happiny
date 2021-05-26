import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Dashboard,
  Home,
  ListPlanner,
  ListService,
  ListTeams,
  NewPlanner,
  NewService,
  NewTeam,
  Profile,
  SignIn,
  SignUp,
} from './views'
import appStore from './redux'
import './App.css'
import { ROUTES } from './constants'
import { DevBar } from './dev-tools'

function App() {
  return (
    <Provider store={appStore}>
      <AppRouter />
    </Provider>
  )
}

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={ROUTES.APP.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path={ROUTES.APP.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path={ROUTES.TEAMS.NEW}>
          <NewTeam />
        </Route>
        <Route path={ROUTES.TEAMS.EDIT + '/:teamId'}>
          <NewTeam />
        </Route>
        <Route path={ROUTES.TEAMS.LIST}>
          <ListTeams />
        </Route>
        <Route path={ROUTES.PLANNER.NEW}>
          <NewPlanner />
        </Route>
        <Route path={ROUTES.PLANNER.LIST}>
          <ListPlanner />
        </Route>
        <Route path={ROUTES.SERVICE.NEW}>
          <NewService />
        </Route>
        <Route path={ROUTES.SERVICE.LIST}>
          <ListService />
        </Route>
      </Switch>
      <DevBar />
    </Router>
  )
}

export default App
