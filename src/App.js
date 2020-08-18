import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, SignIn, SignUp, Dashboard, NewCalendar, Profile } from './views'
import appStore from './redux'
import './App.css';

function App() {
  return (
    <Provider store={appStore}>
      <AppRouter />
    </Provider>
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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/calendar/new">
            <NewCalendar />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
