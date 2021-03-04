import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import AppLayout from "../common/components/AppLayout";

const Main = React.memo(() => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
});

export default Main;
