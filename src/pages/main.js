import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";

const Main = React.memo(() => {
  return (
    <Switch>
      {routes.map((r, i) => (
        <Route
          key={i}
          path={r.path}
          exact={r.exact}
          render={props => <r.main {...props} />}
        />
      ))}
    </Switch>
  );
});

export default Main;
