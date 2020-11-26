import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  * as ROUTES from './constants/routes'
import { 
  Home, 
  Signin, 
  Signup, 
  Browse,
  AddSpace,
  UserProfile,
  Help,
  Space
} from './pages'



export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.ADD_SPACE}>
          <AddSpace />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <UserProfile />
        </Route>
        <Route path={ROUTES.HELP}>
          <Help />
        </Route>
        <Route path={ROUTES.SPACE}>
          <Space />
        </Route>
      </Switch>
    </Router>
  );
}
