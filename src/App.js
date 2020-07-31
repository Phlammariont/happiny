import React from 'react';
import { Home, SignIn, SignUp, Dashboard, NewCalendar } from './views'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <AppRouter />
  );
}

const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in" exa>
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/calendar/new">
            <NewCalendar />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
