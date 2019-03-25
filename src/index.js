import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter  } from "react-router-dom";

import indexRoutes from "./routes/index.jsx";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={withRouter(prop.component)} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
