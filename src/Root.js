import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "redux/store";

import App from "./App";


class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact={false} path="/" component={App} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
