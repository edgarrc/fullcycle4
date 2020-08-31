import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Users from "./Pages/Users";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
