import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./common/services/ReduxService";
import Main from "./pages/main";
import "./assets/styles/global.scss";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>
);

export default App;
