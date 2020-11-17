import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Signin } from './pages'
import  * as ROUTES from './constants/routes'



export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>browse page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
