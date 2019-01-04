const routerJs = `
import React from "react";
import {Route, Switch, Router} from 'react-router-dom';
import history from './history';
import SimpleComponent from "../pages/SimpleComponent";

const AppRouter = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={SimpleComponent}/>
      </Switch>
    </Router>
  )
};

export default AppRouter;
`;

module.exports = routerJs;