import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home  from './pages/home'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
        <p>Sign In</p>
        </Route>
        <Route path="/signup">
        <p>sign up page</p>
        </Route>
        <Route path="/browse">
        <p>browse page</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
